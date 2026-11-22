// LOGIKA INTERAKTIF CBT & RINGKASAN MATERI (UNIVERSAL SKI & B. INDONESIA)

class ExamApp {
  constructor(config) {
    this.subject = config.subject; // 'SKI' atau 'INDO'
    this.summaryData = config.summaryData;
    this.questionsData = config.questionsData;
    this.categories = config.categories; // array nama kategori

    this.currentIndex = 0;
    this.userAnswers = {}; // { [id]: 'A' | ['A', 'B'] }
    this.doubtStatus = {}; // { [id]: boolean }
    this.activeFilter = "Semua";
    this.activeTab = "soal"; // 'soal' | 'ringkasan'
    this.examMode = "latihan"; // 'latihan' (instant feedback) | 'ujian' (nilai di akhir)
    this.isSubmitted = false;

    this.init();
  }

  init() {
    this.renderFilterPills();
    this.renderQuestionNav();
    this.renderCurrentQuestion();
    this.renderSummary();
    this.updateCounters();
    this.setupEventListeners();

    // Cek apakah user ingin langsung buka tab ringkasan
    if (window.location.hash === '#ringkasan' || sessionStorage.getItem('openTab') === 'ringkasan') {
      sessionStorage.removeItem('openTab');
      const tabRingkasan = document.getElementById("tab-ringkasan-btn");
      if (tabRingkasan) {
        tabRingkasan.click();
      }
    }
  }

  getFilteredQuestions() {
    return this.questionsData.filter(q => this.isQuestionInFilter(q, this.activeFilter));
  }

  isQuestionInFilter(q, filter) {
    if (filter === "Semua") return true;
    if (filter === "Cerpen & Sejarah" || filter === "Cerpen") {
      return q.category.toLowerCase().includes("cerpen");
    }
    return q.category.toLowerCase().includes(filter.toLowerCase());
  }

  getCurrentQuestion() {
    const list = this.getFilteredQuestions();
    if (this.currentIndex >= list.length) this.currentIndex = 0;
    return list[this.currentIndex];
  }

  setupEventListeners() {
    // Mode toggle
    const pillLatihan = document.getElementById("mode-latihan");
    const pillUjian = document.getElementById("mode-ujian");
    if (pillLatihan && pillUjian) {
      pillLatihan.addEventListener("click", () => {
        this.examMode = "latihan";
        pillLatihan.classList.add("active");
        pillUjian.classList.remove("active");
        this.renderCurrentQuestion();
        this.renderQuestionNav();
      });
      pillUjian.addEventListener("click", () => {
        this.examMode = "ujian";
        pillUjian.classList.add("active");
        pillLatihan.classList.remove("active");
        this.renderCurrentQuestion();
        this.renderQuestionNav();
      });
    }

    // View tab buttons (Latihan Soal vs Ringkasan Materi)
    const tabSoal = document.getElementById("tab-soal-btn");
    const tabRingkasan = document.getElementById("tab-ringkasan-btn");
    const viewSoal = document.getElementById("view-soal");
    const viewRingkasan = document.getElementById("view-ringkasan");

    if (tabSoal && tabRingkasan) {
      tabSoal.addEventListener("click", () => {
        this.activeTab = "soal";
        tabSoal.classList.add("active");
        tabRingkasan.classList.remove("active");
        viewSoal.style.display = "block";
        viewRingkasan.style.display = "none";
      });

      tabRingkasan.addEventListener("click", () => {
        this.activeTab = "ringkasan";
        tabRingkasan.classList.add("active");
        tabSoal.classList.remove("active");
        viewSoal.style.display = "none";
        viewRingkasan.style.display = "block";
      });
    }

    // Navigasi soal sebelumnya / selanjutnya / ragu
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnDoubt = document.getElementById("btn-doubt");

    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderCurrentQuestion();
          this.renderQuestionNav();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener("click", () => {
        const list = this.getFilteredQuestions();
        if (this.currentIndex < list.length - 1) {
          this.currentIndex++;
          this.renderCurrentQuestion();
          this.renderQuestionNav();
        }
      });
    }

    if (btnDoubt) {
      btnDoubt.addEventListener("click", () => {
        const q = this.getCurrentQuestion();
        this.doubtStatus[q.id] = !this.doubtStatus[q.id];
        this.renderCurrentQuestion();
        this.renderQuestionNav();
      });
    }

    // Tombol Selesai & Nilai
    const finishBtn = document.getElementById("finish-btn");
    if (finishBtn) {
      finishBtn.addEventListener("click", () => this.submitExam());
    }

    // Tombol Reset
    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Apakah kamu yakin ingin mereset seluruh jawaban dan mulai lagi?")) {
          this.userAnswers = {};
          this.doubtStatus = {};
          this.isSubmitted = false;
          this.currentIndex = 0;
          this.renderCurrentQuestion();
          this.renderQuestionNav();
          this.updateCounters();
        }
      });
    }

    // Search input pada Ringkasan
    const searchInput = document.getElementById("summary-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        this.filterSummary(keyword);
      });
    }
  }

  renderFilterPills() {
    const bar = document.getElementById("filter-bar");
    if (!bar) return;
    bar.innerHTML = "";

    // Pill Semua
    const totalCount = this.questionsData.length;
    const allPill = document.createElement("button");
    allPill.className = `filter-pill ${this.activeFilter === "Semua" ? "active" : ""}`;
    allPill.textContent = `Semua (${totalCount})`;
    allPill.addEventListener("click", () => {
      this.activeFilter = "Semua";
      this.currentIndex = 0;
      this.renderFilterPills();
      this.renderQuestionNav();
      this.renderCurrentQuestion();
    });
    bar.appendChild(allPill);

    // Kategori pills
    this.categories.forEach(cat => {
      const count = this.questionsData.filter(q => this.isQuestionInFilter(q, cat)).length;
      const pill = document.createElement("button");
      pill.className = `filter-pill ${this.activeFilter === cat ? "active" : ""}`;
      pill.textContent = `${cat} (${count})`;
      pill.addEventListener("click", () => {
        this.activeFilter = cat;
        this.currentIndex = 0;
        this.renderFilterPills();
        this.renderQuestionNav();
        this.renderCurrentQuestion();
      });
      bar.appendChild(pill);
    });
  }

  renderQuestionNav() {
    const grid = document.getElementById("number-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const list = this.getFilteredQuestions();
    list.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.className = "num-btn";
      btn.textContent = q.id;

      if (idx === this.currentIndex) {
        btn.classList.add("current");
      }

      const ans = this.userAnswers[q.id];
      const isAnswered = ans !== undefined && (Array.isArray(ans) ? ans.length > 0 : ans !== null);
      const isDoubt = this.doubtStatus[q.id];

      if (isDoubt) {
        btn.classList.add("doubt");
      } else if (this.examMode === "latihan" || this.isSubmitted) {
        if (isAnswered) {
          const isCorrect = this.checkIsCorrect(q, ans);
          if (isCorrect) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("wrong");
          }
        }
      } else {
        if (isAnswered) {
          btn.classList.add("answered");
        }
      }

      btn.addEventListener("click", () => {
        this.currentIndex = idx;
        this.renderCurrentQuestion();
        this.renderQuestionNav();
      });

      grid.appendChild(btn);
    });
  }

  checkIsCorrect(question, userAnswer) {
    if (userAnswer === undefined || userAnswer === null) return false;
    if (Array.isArray(question.answer)) {
      if (!Array.isArray(userAnswer)) return false;
      if (question.answer.length !== userAnswer.length) return false;
      return question.answer.every(k => userAnswer.includes(k));
    }
    return question.answer === userAnswer;
  }

  renderCurrentQuestion() {
    const container = document.getElementById("question-container");
    if (!container) return;

    const list = this.getFilteredQuestions();
    if (list.length === 0) {
      container.innerHTML = "<p>Tidak ada soal pada kategori ini.</p>";
      return;
    }

    const q = this.getCurrentQuestion();
    const userAnswer = this.userAnswers[q.id];
    const isAnswered = userAnswer !== undefined && (Array.isArray(userAnswer) ? userAnswer.length > 0 : userAnswer !== null);
    const isCorrect = isAnswered && this.checkIsCorrect(q, userAnswer);
    const showInstantFeedback = (this.examMode === "latihan" && isAnswered) || this.isSubmitted;

    // Badges & Indikator
    let typeName = "Pilihan Ganda (PG)";
    if (q.type === "B-S") typeName = "Benar-Salah (B-S)";
    else if (q.type === "PGK") typeName = "Pilihan Ganda Kompleks (PGK)";

    let html = `
      <div class="question-badges">
        <span class="badge badge-number">Soal ${q.id}</span>
        <span class="badge badge-category">${q.category}</span>
        <span class="badge badge-type">${typeName}</span>
        <span class="badge badge-level">Level ${q.level}</span>
      </div>

      <div class="indicator-text">
        <span><strong>Indikator:</strong> ${q.indikator}</span>
      </div>

      ${q.stimulus ? `<div class="stimulus-box">${this.escapeHtml(q.stimulus)}</div>` : ""}

      <div class="question-prompt">${this.escapeHtml(q.question)}</div>

      <div class="options-list" id="options-group">
    `;

    // Render Options
    q.options.forEach(opt => {
      let isSelected = false;
      if (q.type === "PGK") {
        isSelected = Array.isArray(userAnswer) && userAnswer.includes(opt.key);
      } else {
        isSelected = userAnswer === opt.key;
      }

      let extraClass = isSelected ? "selected" : "";
      if (showInstantFeedback) {
        if (q.type === "PGK") {
          const isKeyCorrect = q.answer.includes(opt.key);
          if (isSelected && isKeyCorrect) extraClass += " correct";
          else if (isSelected && !isKeyCorrect) extraClass += " wrong";
          else if (!isSelected && isKeyCorrect) extraClass += " correct";
        } else {
          if (opt.key === q.answer) extraClass += " correct";
          else if (isSelected && opt.key !== q.answer) extraClass += " wrong";
        }
      }

      html += `
        <div class="option-item ${extraClass}" data-key="${opt.key}">
          ${q.type === "PGK" ? 
            `<input type="checkbox" class="option-checkbox" ${isSelected ? "checked" : ""}>` : 
            `<div class="option-key">${opt.key}</div>`
          }
          <div class="option-text">${this.escapeHtml(opt.text)}</div>
        </div>
      `;
    });

    html += `</div>`;

    // Explanation Box if feedback active
    if (showInstantFeedback) {
      const boxClass = isCorrect ? "show-correct" : "show-wrong";
      const icon = isCorrect ? "✅ Benar!" : "❌ Perhatikan Pembahasan:";
      let correctAnswerText = "";
      if (Array.isArray(q.answer)) {
        correctAnswerText = q.answer.join(", ");
      } else {
        correctAnswerText = q.answer;
      }

      html += `
        <div class="explanation-card ${boxClass}">
          <div class="explanation-title">${icon} <span>Kunci Jawaban: <strong>${correctAnswerText}</strong></span></div>
          <div class="explanation-body">${this.escapeHtml(q.explanation)}</div>
        </div>
      `;
    }

    container.innerHTML = html;

    // Attach Option Click Events
    const optionEls = container.querySelectorAll(".option-item");
    optionEls.forEach(el => {
      el.addEventListener("click", (e) => {
        const key = el.getAttribute("data-key");
        this.selectOption(q, key);
      });
    });

    // Update bottom nav buttons
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnDoubt = document.getElementById("btn-doubt");

    if (btnPrev) btnPrev.disabled = this.currentIndex === 0;
    if (btnNext) btnNext.disabled = this.currentIndex === list.length - 1;
    if (btnDoubt) {
      if (this.doubtStatus[q.id]) {
        btnDoubt.classList.add("active");
        btnDoubt.innerHTML = "⚑ Ragu-ragu (Aktif)";
      } else {
        btnDoubt.classList.remove("active");
        btnDoubt.innerHTML = "⚑ Ragu-ragu";
      }
    }
  }

  selectOption(question, key) {
    if (question.type === "PGK") {
      let currentArr = this.userAnswers[question.id] || [];
      if (!Array.isArray(currentArr)) currentArr = [];
      if (currentArr.includes(key)) {
        currentArr = currentArr.filter(k => k !== key);
      } else {
        currentArr.push(key);
      }
      this.userAnswers[question.id] = currentArr;
    } else {
      this.userAnswers[question.id] = key;
    }

    this.renderCurrentQuestion();
    this.renderQuestionNav();
    this.updateCounters();
  }

  updateCounters() {
    const answeredCount = Object.keys(this.userAnswers).filter(k => {
      const val = this.userAnswers[k];
      return val !== undefined && (Array.isArray(val) ? val.length > 0 : val !== null);
    }).length;

    const counterEl = document.getElementById("progress-count");
    if (counterEl) {
      counterEl.textContent = `${answeredCount}/${this.questionsData.length} Terjawab`;
    }
  }

  submitExam() {
    this.isSubmitted = true;
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    this.questionsData.forEach(q => {
      const ans = this.userAnswers[q.id];
      const isAnswered = ans !== undefined && (Array.isArray(ans) ? ans.length > 0 : ans !== null);
      if (!isAnswered) {
        unansweredCount++;
      } else {
        if (this.checkIsCorrect(q, ans)) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    const total = this.questionsData.length;
    const finalScore = Math.round((correctCount / total) * 100);

    // Show modal result
    this.showModalScore(finalScore, correctCount, wrongCount, unansweredCount);
    this.renderCurrentQuestion();
    this.renderQuestionNav();
  }

  showModalScore(score, correct, wrong, unanswered) {
    const existing = document.getElementById("score-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "score-modal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Hasil Evaluasi Ujian</h2>
        <div class="score-circle">
          <div class="score-num">${score}</div>
          <div class="score-label">NILAI AKHIR</div>
        </div>
        <div class="modal-stats">
          <div class="stat-item" style="color: #16a34a;">
            <h4>${correct}</h4>
            <p>Benar</p>
          </div>
          <div class="stat-item" style="color: #dc2626;">
            <h4>${wrong}</h4>
            <p>Salah</p>
          </div>
          <div class="stat-item" style="color: #64748b;">
            <h4>${unanswered}</h4>
            <p>Kosong</p>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: #475569; margin-bottom: 20px;">
          ${score >= 75 ? "🎉 Luar biasa! Pemahaman kisi-kisi sudah sangat matang. Siap menghadapi ujian!" : "💪 Tetap semangat! Pelajari kembali butir-butir ringkasan materi dan coba lagi."}
        </p>
        <div class="modal-buttons">
          <button class="action-btn btn-primary" id="btn-close-modal">Tutup & Review Soal</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.getElementById("btn-close-modal").addEventListener("click", () => {
      modal.remove();
    });
  }

  renderSummary() {
    const container = document.getElementById("summary-content");
    if (!container) return;

    let html = `
      <div class="summary-header-box">
        <div>
          <h2>${this.escapeHtml(this.summaryData.title)}</h2>
          <p style="color: var(--text-muted); font-size: 0.88rem;">
            Diringkas khusus dari 40 butir kisi-kisi ujian agar bisa dipelajari cepat dalam waktu singkat.
          </p>
        </div>
        <input type="text" id="summary-search-input" class="summary-search" placeholder="🔍 Cari nama tokoh, buku, konsep, kota...">
      </div>
      <div id="summary-cards-container" style="display: flex; flex-direction: column; gap: 20px;">
    `;

    this.summaryData.sections.forEach((sec, idx) => {
      html += `
        <div class="summary-card" data-section="${idx}">
          <div class="summary-category-title">
            <span>📌 ${this.escapeHtml(sec.category)}</span>
          </div>
          <ul class="summary-points-list">
      `;

      sec.points.forEach(pt => {
        // Render simple markdown **bold** and *italic*
        const formatted = pt
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>");
        html += `<li>${formatted}</li>`;
      });

      html += `
          </ul>
        </div>
      `;
    });

    html += `
      </div>
      
      <!-- Tabel Kilat Jawaban Kisi-Kisi 1-40 -->
      <div class="kisi-table-box">
        <h3 style="font-size: 1.1rem; color: #0f172a; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          📋 Tabel Kilat Kisi-Kisi & Kunci Jawaban Lengkap (1 - 40)
        </h3>
        <table class="kisi-table">
          <thead>
            <tr>
              <th style="width: 50px;">No</th>
              <th style="width: 170px;">Materi Pokok</th>
              <th>Indikator Kisi-Kisi</th>
              <th style="width: 70px;">Bentuk</th>
              <th style="width: 200px;">Kunci & Konsep Utama</th>
            </tr>
          </thead>
          <tbody>
    `;

    this.questionsData.forEach(q => {
      let ansText = "";
      if (Array.isArray(q.answer)) {
        ansText = q.answer.map(k => {
          const opt = q.options.find(o => o.key === k);
          return `<strong>[${k}]</strong> ${opt ? opt.text : ""}`;
        }).join("<br>");
      } else {
        const opt = q.options.find(o => o.key === q.answer);
        ansText = `<strong>[${q.answer}]</strong> ${opt ? opt.text : ""}`;
      }

      html += `
        <tr>
          <td><strong>${q.id}</strong></td>
          <td><span class="badge badge-category" style="font-size: 0.72rem;">${q.category}</span></td>
          <td>${q.indikator}</td>
          <td><span class="badge badge-type" style="font-size: 0.72rem;">${q.type}</span></td>
          <td>${ansText}</td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;
  }

  filterSummary(keyword) {
    const cards = document.querySelectorAll("#summary-cards-container .summary-card");
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (!keyword || text.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
