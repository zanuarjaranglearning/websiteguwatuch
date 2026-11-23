// DATA KISI-KISI & SOAL MATEMATIKA TINGKAT LANJUT KELAS XI
const MATEMATIKA_SUMMARY = {
  title: "Ringkasan Kilat Matematika Tingkat Lanjut Kelas XI",
  sections: [
    {
      category: "1. Transformasi Geometri & Vektor",
      points: [
        "**Translasi (Pergeseran)**: Titik $P(x, y)$ ditranslasikan oleh vektor $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ menghasilkan bayangan $P'(x', y') = (x + a, y + b)$.",
        "  • Arah pergeseran: $a$ satuan horizontal (positif = ke kanan, negatif = ke kiri), $b$ satuan vertikal (positif = ke atas, negatif = ke bawah).",
        "  • **Komposisi Translasi**: $T_1 \\circ T_2 = T_2 \\circ T_1 = \\begin{pmatrix} a_1 + a_2 \\\\ b_1 + b_2 \\end{pmatrix}$ bersifat komutatif.",
        "**Refleksi (Pencerminan)**:",
        "  • Sumbu-$X$: $(x, y) \\to (x, -y)$",
        "  • Sumbu-$Y$: $(x, y) \\to (-x, y)$",
        "  • Garis $y = x$: $(x, y) \\to (y, x)$",
        "  • Garis $y = -x$: $(x, y) \\to (-y, -x)$",
        "  • Titik Asal $O(0, 0)$: $(x, y) \\to (-x, -y)$",
        "**Rotasi (Perputaran)** berpusat di $O(0, 0)$:",
        "  • Rotasi $90^\\circ$ berlawanan arah jarum jam: $(x, y) \\to (-y, x)$",
        "  • Rotasi $180^\\circ$: $(x, y) \\to (-x, -y)$",
        "  • Rotasi $270^\\circ$ (atau $-90^\\circ$): $(x, y) \\to (y, -x)$",
        "**Dilatasi (Perbesaran/Pengecilan)** berpusat di $O(0, 0)$ faktor skala $k$:",
        "  • $(x, y) \\to (kx, ky)$"
      ]
    },
    {
      category: "2. Polinomial (Suku Banyak)",
      points: [
        "**Bentuk Umum**: $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$. Derajat = pangkat tertinggi ($n$), Koefisien Utama = $a_n$, Konstanta = $a_0$.",
        "**Operasi Polinomial**: Penjumlahan dan pengurangan dilakukan dengan mengelompokkan suku-suku sejenis (berderajat sama). Perkalian dilakukan dengan sifat distributif.",
        "**Identitas Pembagian**: $P(x) = Q(x) \\cdot H(x) + S(x)$, dengan derajat sisa $S(x)$ lebih kecil dari derajat pembagi $Q(x)$.",
        "  • Jika $P(x)$ dibagi $(x - k)$, sisa pembagian adalah $S = P(k)$.",
        "  • Jika $P(x)$ dibagi $(ax + b)$, sisa pembagian adalah $S = P\\left(-\\frac{b}{a}\\right)$, dan jika memakai bagan Horner, hasil bagi pada baris akhir harus dibagi dengan $a$.",
        "**Teorema Faktor**: $(x - k)$ adalah faktor dari $P(x)$ jika dan hanya jika sisa pembagian $P(k) = 0$."
      ]
    },
    {
      category: "3. Matriks & Penerapannya",
      points: [
        "**Ordo Matriks**: Ukuran baris $\\times$ kolom ($m \\times n$). Matriks $3 \\times 2$ memiliki 3 baris dan 2 kolom (total 6 elemen).",
        "**Operasi Matriks**:",
        "  • Penjumlahan & Pengurangan: Elemen-elemen yang seletak dijumlahkan/dikurangkan (ordo harus sama persis).",
        "  • Perkalian Skalar: Setiap elemen matriks dikalikan dengan skalar $k$.",
        "  • Transpose ($A^T$): Mengubah baris menjadi kolom. Sifat: $(A^T)^T = A$, $(A + B)^T = A^T + B^T$.",
        "**Jenis-Jenis Matriks**: Matriks Persegi, Matriks Nol, Matriks Diagonal, Matriks Segitiga Atas/Bawah, Matriks Identitas $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.",
        "**Determinan Matriks $2 \\times 2$**: Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\det(A) = |A| = ad - bc$.",
        "**Invers Matriks $2 \\times 2$**: $A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, syarat ada invers: $\\det(A) \\neq 0$ (matriks non-singular).",
        "**Penyelesaian SPLDV Matriks**: Jika $AX = B$, maka $X = A^{-1}B$."
      ]
    }
  ]
};

const MATEMATIKA_QUESTIONS = [
  {
    id: 1,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C1 (Mengingat)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan titik umum dan vektor translasi, murid menentukan aturan koordinat bayangannya.",
    stimulus: "Translasi merupakan transformasi geometri yang memindahkan setiap titik pada bidang menurut jarak dan arah tertentu yang dinyatakan oleh suatu vektor perpindahan.",
    question: "Jika suatu titik umum $P(x, y)$ ditranslasikan oleh vektor translasi $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$, maka koordinat bayangan $P'$ yang dihasilkan adalah...",
    options: [
      { key: "A", text: "P'(x - a, y - b)" },
      { key: "B", text: "P'(x + a, y + b)" },
      { key: "C", text: "P'(ax, by)" },
      { key: "D", text: "P'(y + a, x + b)" }
    ],
    answer: "B",
    explanation: "Aturan dasar translasi menambahkan komponen vektor translasi ke koordinat titik asal: $x' = x + a$ dan $y' = y + b$, sehingga koordinat bayangannya adalah $P'(x + a, y + b)$."
  },
  {
    id: 2,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C2 (Memahami)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan vektor translasi, murid menginterpretasikan arah dan besar perpindahan titik.",
    stimulus: "Sebuah partikel pada bidang koordinat Cartesius mengalami perpindahan dengan vektor translasi $T = \\begin{pmatrix} -4 \\\\ 6 \\end{pmatrix}$.",
    question: "Interpretasi arah dan besar perpindahan partikel tersebut yang benar adalah...",
    options: [
      { key: "A", text: "4 satuan ke kanan dan 6 satuan ke bawah" },
      { key: "B", text: "4 satuan ke kiri dan 6 satuan ke atas" },
      { key: "C", text: "6 satuan ke kiri dan 4 satuan ke atas" },
      { key: "D", text: "4 satuan ke bawah dan 6 satuan ke kanan" }
    ],
    answer: "B",
    explanation: "Komponen horizontal $a = -4$ berarti pergeseran 4 satuan ke arah kiri (sumbu-X negatif), dan komponen vertikal $b = +6$ berarti pergeseran 6 satuan ke arah atas (sumbu-Y positif)."
  },
  {
    id: 3,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan koordinat titik dan vektor translasi, murid menghitung koordinat bayangan titik.",
    stimulus: "Titik $P(-3, 5)$ ditranslasikan oleh vektor $T = \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$.",
    question: "Koordinat bayangan titik $P$ setelah translasi adalah...",
    options: [
      { key: "A", text: "(1, 3)" },
      { key: "B", text: "(-7, 7)" },
      { key: "C", text: "(1, 7)" },
      { key: "D", text: "(-1, 3)" }
    ],
    answer: "A",
    explanation: "$x' = -3 + 4 = 1$ dan $y' = 5 + (-2) = 3$. Jadi bayangannya adalah $P'(1, 3)$."
  },
  {
    id: 4,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan konteks pergerakan robot dengan dua instruksi translasi, murid menentukan posisi akhirnya.",
    stimulus: "Sebuah robot mainan mula-mula berada pada koordinat $(1, 4)$. Robot tersebut menerima instruksi pergerakan pertama dengan vektor translasi $T_1 = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$, kemudian dilanjutkan dengan instruksi kedua $T_2 = \\begin{pmatrix} -5 \\\\ 7 \\end{pmatrix}$.",
    question: "Posisi koordinat akhir robot tersebut adalah...",
    options: [
      { key: "A", text: "(-1, 9)" },
      { key: "B", text: "(4, 2)" },
      { key: "C", text: "(-1, 5)" },
      { key: "D", text: "(2, 9)" }
    ],
    answer: "A",
    explanation: "Posisi akhir: $x = 1 + 3 + (-5) = -1$; $y = 4 + (-2) + 7 = 9$. Koordinat akhirnya adalah $(-1, 9)$."
  },
  {
    id: 5,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan posisi perpustakaan pada peta dan pergeseran ke timur serta utara, murid menentukan koordinat baru.",
    stimulus: "Pada peta denah sekolah, posisi gedung perpustakaan berada pada koordinat $(2, 3)$. Dalam rencana penataan ulang, gedung perpustakaan dipindahkan sejauh 4 satuan ke timur dan 5 satuan ke utara.",
    question: "Koordinat baru gedung perpustakaan pada denah adalah...",
    options: [
      { key: "A", text: "(6, 8)" },
      { key: "B", text: "(8, 6)" },
      { key: "C", text: "(-2, 8)" },
      { key: "D", text: "(6, -2)" }
    ],
    answer: "A",
    explanation: "Ke timur berarti $+4$ pada absis ($x$), ke utara berarti $+5$ pada ordinat ($y$). Koordinat baru = $(2 + 4, 3 + 5) = (6, 8)$."
  },
  {
    id: 6,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan titik dan rotasi 90° berlawanan arah jarum jam berpusat O, murid menentukan koordinat bayangan.",
    stimulus: "Titik $A(4, -2)$ dirotasikan sebesar $90^\\circ$ berlawanan arah putaran jarum jam dengan pusat rotasi di titik asal $O(0, 0)$.",
    question: "Koordinat bayangan titik $A$ adalah...",
    options: [
      { key: "A", text: "A'(2, 4)" },
      { key: "B", text: "A'(-2, -4)" },
      { key: "C", text: "A'(-4, 2)" },
      { key: "D", text: "A'(2, -4)" }
    ],
    answer: "A",
    explanation: "Rumus rotasi $R[O, 90^\\circ]$ berlawanan arah jarum jam adalah $(x, y) \\to (-y, x)$. Maka $A'(-(-2), 4) = A'(2, 4)$."
  },
  {
    id: 7,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan titik yang dicerminkan terhadap y=x kemudian ditranslasikan, murid menentukan bayangan akhirnya.",
    stimulus: "Titik $B(3, -5)$ dicerminkan terhadap garis $y = x$, kemudian bayangannya ditranslasikan oleh vektor $T = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$.",
    question: "Koordinat bayangan akhir dari titik $B$ adalah...",
    options: [
      { key: "A", text: "(-3, 7)" },
      { key: "B", text: "(5, -1)" },
      { key: "C", text: "(-3, -1)" },
      { key: "D", text: "(7, -3)" }
    ],
    answer: "A",
    explanation: "Refleksi garis $y = x$: $(x, y) \\to (y, x)$, sehingga $B(3, -5) \\to B'(-5, 3)$. Lalu translasi $T = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$: $B''(-5 + 2, 3 + 4) = B''(-3, 7)$."
  },
  {
    id: 8,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan konteks desain ikon dengan refleksi sumbu-Y dan dilatasi, murid menentukan koordinat bayangan akhir.",
    stimulus: "Dalam suatu aplikasi desain grafis, sebuah titik sudut ikon berada pada koordinat $C(2, 4)$. Titik tersebut dicerminkan terhadap sumbu-$Y$, lalu didilatasikan dengan faktor skala $k = 3$ berpusat di $O(0, 0)$.",
    question: "Koordinat bayangan akhir titik $C$ adalah...",
    options: [
      { key: "A", text: "C'(-6, 12)" },
      { key: "B", text: "C'(6, 12)" },
      { key: "C", text: "C'(-6, -12)" },
      { key: "D", text: "C'(2, 12)" }
    ],
    answer: "A",
    explanation: "Refleksi sumbu-$Y$: $(x, y) \\to (-x, y)$, sehingga $C(2, 4) \\to C'(-2, 4)$. Dilatasi $[O, 3]$: $C''(-2 \\times 3, 4 \\times 3) = C''(-6, 12)$."
  },
  {
    id: 9,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan titik yang dirotasikan 180° kemudian dicerminkan terhadap sumbu-X, murid menentukan bayangan akhir.",
    stimulus: "Titik $D(5, 3)$ dirotasikan sebesar $180^\\circ$ berpusat di $O(0, 0)$, kemudian dilanjutkan dengan pencerminan terhadap sumbu-$X$.",
    question: "Koordinat bayangan akhir titik $D$ adalah...",
    options: [
      { key: "A", text: "(-5, 3)" },
      { key: "B", text: "(-5, -3)" },
      { key: "C", text: "(5, -3)" },
      { key: "D", text: "(3, 5)" }
    ],
    answer: "A",
    explanation: "Rotasi $180^\\circ$: $(x, y) \\to (-x, -y)$, sehingga $D(5, 3) \\to D'(-5, -3)$. Pencerminan sumbu-$X$: $(x, y) \\to (x, -y)$, sehingga $D''(-5, -(-3)) = D''(-5, 3)$."
  },
  {
    id: 10,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan titik berparameter yang dicerminkan dan didilatasikan, murid menentukan nilai parameter dari bayangan akhir.",
    stimulus: "Titik $P(a, b)$ dicerminkan terhadap garis $y = -x$, kemudian didilatasikan dengan faktor skala 2 berpusat di $O(0, 0)$ menghasilkan bayangan akhir $P'(6, -8)$.",
    question: "Nilai dari $a + b$ adalah...",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "-1" },
      { key: "C", text: "7" },
      { key: "D", text: "-7" }
    ],
    answer: "A",
    explanation: "Refleksi garis $y = -x$: $(a, b) \\to (-b, -a)$. Dilatasi $[O, 2]$: $(-2b, -2a) = (6, -8)$. Maka $-2b = 6 \\implies b = -3$ dan $-2a = -8 \\implies a = 4$. Jadi $a + b = 4 + (-3) = 1$."
  },
  {
    id: 11,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan dua pendapat tentang urutan translasi, murid mengevaluasi kebenaran pendapat berdasarkan sifat komutatif penjumlahan vektor.",
    stimulus: "Siswa A berpendapat bahwa jika titik $P$ ditranslasikan oleh $T_1$ lalu $T_2$, hasilnya akan berbeda jika titik $P$ ditranslasikan oleh $T_2$ terlebih dahulu kemudian $T_1$. Siswa B membantah dan menyatakan hasilnya pasti sama.",
    question: "Evaluasi matematis yang paling tepat atas kedua pendapat tersebut adalah...",
    options: [
      { key: "A", text: "Siswa A benar, karena komposisi transformasi selalu tidak bersifat komutatif" },
      { key: "B", text: "Siswa B benar, karena translasi ekuivalen dengan operasi penjumlahan vektor yang bersifat komutatif: T1 + T2 = T2 + T1" },
      { key: "C", text: "Keduanya salah, karena hasil translasi bergantung pada letak kuadran titik asal" },
      { key: "D", text: "Siswa B benar hanya jika salah satu vektor adalah vektor nol" }
    ],
    answer: "B",
    explanation: "Komposisi translasi berakar dari penjumlahan vektor: $T_1 + T_2 = \\begin{pmatrix} a_1 + a_2 \\\\ b_1 + b_2 \\end{pmatrix} = T_2 + T_1$. Penjumlahan bilangan real bersifat komutatif, sehingga urutan translasi tidak mempengaruhi hasil akhir. Pendapat Siswa B benar."
  },
  {
    id: 12,
    category: "Transformasi Geometri",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan posisi awal, posisi akhir, dan dua vektor translasi berparameter, murid menentukan nilai parameter agar tercapai posisi tujuan.",
    stimulus: "Sebuah drone bergerak dari koordinat awal $(2, 1)$ menuju koordinat tujuan $(8, 6)$ melalui dua tahap perpindahan dengan vektor $T_1 = \\begin{pmatrix} p \\\\ 3 \\end{pmatrix}$ dan $T_2 = \\begin{pmatrix} 2 \\\\ q \\end{pmatrix}$.",
    question: "Nilai parameter $p$ dan $q$ berturut-turut adalah...",
    options: [
      { key: "A", text: "p = 4 dan q = 2" },
      { key: "B", text: "p = 2 dan q = 4" },
      { key: "C", text: "p = 6 dan q = 5" },
      { key: "D", text: "p = 3 dan q = 3" }
    ],
    answer: "A",
    explanation: "Sumbu X: $2 + p + 2 = 8 \\implies p + 4 = 8 \\implies p = 4$. Sumbu Y: $1 + 3 + q = 6 \\implies q + 4 = 6 \\implies q = 2$. Jadi $p = 4$ dan $q = 2$."
  },
  {
    id: 13,
    category: "Polinomial",
    type: "PG",
    level: "C1 (Mengingat)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan polinomial, murid mengidentifikasi derajat dan koefisien utamanya.",
    stimulus: "Diberikan suku banyak $P(x) = 5x^4 - 3x^3 + 7x^2 - 9x + 12$.",
    question: "Derajat dan koefisien utama dari polinomial $P(x)$ tersebut berturut-turut adalah...",
    options: [
      { key: "A", text: "Derajat 4 dan koefisien utama 5" },
      { key: "B", text: "Derajat 5 dan koefisien utama 4" },
      { key: "C", text: "Derajat 4 dan koefisien utama 12" },
      { key: "D", text: "Derajat 3 dan koefisien utama -3" }
    ],
    answer: "A",
    explanation: "Derajat polinomial adalah pangkat tertinggi dari variabel $x$, yaitu 4. Koefisien utama adalah koefisien dari suku berderajat tertinggi, yaitu 5."
  },
  {
    id: 14,
    category: "Polinomial",
    type: "PG",
    level: "C2 (Memahami)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan polinomial, murid mengidentifikasi koefisien suku tertentu dan konstanta.",
    stimulus: "Diberikan polinomial $Q(x) = 2x^5 - 4x^3 + 6x - 15$.",
    question: "Koefisien dari suku berderajat 3 ($x^3$) dan suku konstantanya berturut-turut adalah...",
    options: [
      { key: "A", text: "-4 dan -15" },
      { key: "B", text: "4 dan 15" },
      { key: "C", text: "-4 dan 15" },
      { key: "D", text: "2 dan -15" }
    ],
    answer: "A",
    explanation: "Koefisien suku $x^3$ adalah $-4$, dan suku konstanta (suku tanpa variabel $x$) adalah $-15$."
  },
  {
    id: 15,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan dua model polinomial produksi, murid menentukan polinomial jumlah hasil produksi kedua unit.",
    stimulus: "Hasil produksi harian unit I suatu pabrik dimodelkan oleh $P_1(x) = 3x^2 + 5x + 20$, sedangkan unit II dimodelkan oleh $P_2(x) = 2x^2 - 3x + 15$, di mana $x$ menyatakan jam kerja mesin.",
    question: "Polinomial jumlah hasil produksi kedua unit ($P_1(x) + P_2(x)$) adalah...",
    options: [
      { key: "A", text: "5x^2 + 2x + 35" },
      { key: "B", text: "5x^2 + 8x + 35" },
      { key: "C", text: "x^2 + 2x + 5" },
      { key: "D", text: "6x^2 - 15x + 300" }
    ],
    answer: "A",
    explanation: "$P_1(x) + P_2(x) = (3x^2 + 2x^2) + (5x - 3x) + (20 + 15) = 5x^2 + 2x + 35$."
  },
  {
    id: 16,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan ukuran panjang dan lebar taman dalam bentuk polinomial, murid menentukan bentuk polinomial luasnya.",
    stimulus: "Sebuah taman berbentuk persegi panjang memiliki ukuran panjang $(2x + 3)$ meter dan lebar $(x - 4)$ meter.",
    question: "Bentuk polinomial yang menyatakan luas taman tersebut dalam meter persegi adalah...",
    options: [
      { key: "A", text: "2x^2 - 5x - 12" },
      { key: "B", text: "2x^2 + 5x - 12" },
      { key: "C", text: "2x^2 - 11x - 12" },
      { key: "D", text: "2x^2 - 12" }
    ],
    answer: "A",
    explanation: "Luas = Panjang $\\times$ Lebar = $(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$."
  },
  {
    id: 17,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan fungsi polinomial pendapatan dan jumlah periode produksi, murid menghitung nilai pendapatan pada periode tertentu.",
    stimulus: "Fungsi estimasi pendapatan sebuah UMKM dinyatakan oleh polinomial $R(x) = x^3 - 2x^2 + 4x + 10$ dalam satuan juta rupiah, di mana $x$ menyatakan periode bulan.",
    question: "Besar pendapatan UMKM tersebut pada periode bulan ke-3 ($x = 3$) adalah...",
    options: [
      { key: "A", text: "Rp31.000.000,00" },
      { key: "B", text: "Rp28.000.000,00" },
      { key: "C", text: "Rp35.000.000,00" },
      { key: "D", text: "Rp25.000.000,00" }
    ],
    answer: "A",
    explanation: "$R(3) = (3)^3 - 2(3)^2 + 4(3) + 10 = 27 - 2(9) + 12 + 10 = 27 - 18 + 22 = 31$ juta rupiah."
  },
  {
    id: 18,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan polinomial yang dibagi oleh x−2, murid menentukan hasil bagi dan sisa pembagian.",
    stimulus: "Polinomial $f(x) = 2x^3 - 3x^2 + x - 5$ dibagi oleh $(x - 2)$.",
    question: "Hasil bagi $H(x)$ dan sisa pembagian $S$ berturut-turut adalah...",
    options: [
      { key: "A", text: "H(x) = 2x^2 + x + 3 dan sisa S = 1" },
      { key: "B", text: "H(x) = 2x^2 - 7x + 15 dan sisa S = -35" },
      { key: "C", text: "H(x) = 2x^2 + x + 3 dan sisa S = -1" },
      { key: "D", text: "H(x) = x^2 + 2x + 1 dan sisa S = 5" }
    ],
    answer: "A",
    explanation: "Menggunakan skema Horner pada $x = 2$: Baris 1: 2, -3, 1, -5. Hasil kali 2*2=4 -> -3+4=1. Hasil kali 1*2=2 -> 1+2=3. Hasil kali 3*2=6 -> -5+6=1. Koefisien hasil bagi: $2x^2 + x + 3$ dan sisa $S = 1$."
  },
  {
    id: 19,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan polinomial dengan parameter dan informasi sisa pembagian oleh x−2, murid menentukan nilai parameter.",
    stimulus: "Diketahui polinomial $P(x) = x^3 - 4x^2 + ax + 6$. Jika $P(x)$ dibagi oleh $(x - 2)$ bersisa 8.",
    question: "Nilai parameter $a$ yang memenuhi adalah...",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "4" },
      { key: "C", text: "-5" },
      { key: "D", text: "3" }
    ],
    answer: "A",
    explanation: "Berdasarkan Teorema Sisa, sisa pembagian oleh $(x - 2)$ adalah $P(2) = 8$. Maka: $(2)^3 - 4(2)^2 + a(2) + 6 = 8 \\implies 8 - 16 + 2a + 6 = 8 \\implies 2a - 2 = 8 \\implies 2a = 10 \\implies a = 5$."
  },
  {
    id: 20,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan polinomial, murid menentukan pasangan faktor linearnya berdasarkan teorema faktor.",
    stimulus: "Diberikan polinomial $P(x) = x^3 - 6x^2 + 11x - 6$.",
    question: "Pasangan faktor linear dari polinomial $P(x)$ tersebut adalah...",
    options: [
      { key: "A", text: "(x - 1) dan (x - 2)" },
      { key: "B", text: "(x + 1) dan (x + 2)" },
      { key: "C", text: "(x - 1) dan (x + 3)" },
      { key: "D", text: "(x + 2) dan (x - 3)" }
    ],
    answer: "A",
    explanation: "Uji nilai: $P(1) = 1 - 6 + 11 - 6 = 0$, maka $(x - 1)$ adalah faktor. $P(2) = 8 - 24 + 22 - 6 = 0$, maka $(x - 2)$ adalah faktor. $P(3) = 27 - 54 + 33 - 6 = 0$, maka $(x - 3)$ adalah faktor. Jadi pasangan faktor linearnya adalah $(x - 1)$ dan $(x - 2)$."
  },
  {
    id: 21,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan model polinomial dengan parameter dan informasi sisa pembagian, murid menentukan nilai parameter.",
    stimulus: "Sebuah model matematis dinyatakan dengan $P(t) = 2t^3 + kt^2 - 5t + 4$. Apabila model tersebut dibagi oleh $(t - 1)$ menghasilkan sisa 7.",
    question: "Nilai parameter $k$ adalah...",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "5" },
      { key: "C", text: "-6" },
      { key: "D", text: "4" }
    ],
    answer: "A",
    explanation: "Sesuai Teorema Sisa: $P(1) = 7 \\implies 2(1)^3 + k(1)^2 - 5(1) + 4 = 7 \\implies 2 + k - 5 + 4 = 7 \\implies k + 1 = 7 \\implies k = 6$."
  },
  {
    id: 22,
    category: "Polinomial",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sukar",
    indikator: "Disajikan dua hasil pembagian polinomial oleh 2x+1, murid menganalisis hasil yang memenuhi identitas pembagian.",
    stimulus: "Suatu polinomial $f(x)$ dibagi oleh pembagi linear $(2x + 1)$. Seorang siswa menggunakan metode Horner dengan pembagi $(x + 1/2)$ dan memperoleh hasil bagi $H(x)$ serta sisa $S$.",
    question: "Berdasarkan identitas pembagian $f(x) = (2x + 1) \\cdot H_{asli}(x) + S_{asli}$, hubungan yang tepat antara hasil bagi dan sisa sebenarnya adalah...",
    options: [
      { key: "A", text: "Hasil bagi sebenarnya adalah 1/2 H(x) dan sisa sebenarnya adalah tetap S" },
      { key: "B", text: "Hasil bagi sebenarnya adalah 2 H(x) dan sisa sebenarnya adalah 1/2 S" },
      { key: "C", text: "Hasil bagi sebenarnya adalah H(x) dan sisa sebenarnya adalah 1/2 S" },
      { key: "D", text: "Hasil bagi sebenarnya adalah 1/2 H(x) dan sisa sebenarnya adalah 2 S" }
    ],
    answer: "A",
    explanation: "Identitas pembagian: $f(x) = (x + 1/2)H(x) + S = \\frac{1}{2}(2x + 1)H(x) + S = (2x + 1)\\left[\\frac{1}{2}H(x)\\right] + S$. Jadi hasil bagi sebenarnya adalah $\\frac{1}{2}H(x)$ dan sisanya tetap $S$."
  },
  {
    id: 23,
    category: "Polinomial",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan akar-akar dan koefisien utama, murid menentukan polinomial yang memenuhi syarat.",
    stimulus: "Sebuah polinomial berderajat 3 memiliki akar-akar real $-1, 2,$ dan $3$, serta memiliki koefisien utama sama dengan 2.",
    question: "Bentuk polinomial tersebut adalah...",
    options: [
      { key: "A", text: "2x^3 - 8x^2 + 2x + 12" },
      { key: "B", text: "2x^3 + 8x^2 - 2x - 12" },
      { key: "C", text: "x^3 - 4x^2 + x + 6" },
      { key: "D", text: "2x^3 - 4x^2 + 2x + 6" }
    ],
    answer: "A",
    explanation: "$P(x) = 2(x - (-1))(x - 2)(x - 3) = 2(x + 1)(x^2 - 5x + 6) = 2(x^3 - 5x^2 + 6x + x^2 - 5x + 6) = 2(x^3 - 4x^2 + x + 6) = 2x^3 - 8x^2 + 2x + 12$."
  },
  {
    id: 24,
    category: "Polinomial",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan dua kondisi sisa pembagian polinomial berparameter, murid menganalisis nilai kombinasi parameter.",
    stimulus: "Polinomial $P(x) = x^4 + ax^3 + bx^2 - 7$ dibagi oleh $(x - 1)$ memberikan sisa 2, dan jika dibagi oleh $(x + 1)$ memberikan sisa -4.",
    question: "Nilai dari $(a + b)$ adalah...",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "6" },
      { key: "C", text: "4" },
      { key: "D", text: "10" }
    ],
    answer: "A",
    explanation: "Sisa dibagi $(x - 1)$ adalah $P(1) = 2 \\implies 1^4 + a(1)^3 + b(1)^2 - 7 = 2 \\implies 1 + a + b - 7 = 2 \\implies a + b - 6 = 2 \\implies a + b = 8$."
  },
  {
    id: 25,
    category: "Matriks",
    type: "PG",
    level: "C1 (Mengingat)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan matriks, murid mengidentifikasi ordo dan banyak elemennya.",
    stimulus: "Diberikan matriks $M = \\begin{pmatrix} 2 & 5 \\\\ -1 & 3 \\\\ 4 & 0 \\end{pmatrix}$.",
    question: "Ordo dan banyak elemen dari matriks $M$ berturut-turut adalah...",
    options: [
      { key: "A", text: "Ordo 3 x 2 dan banyak elemen 6" },
      { key: "B", text: "Ordo 2 x 3 dan banyak elemen 6" },
      { key: "C", text: "Ordo 3 x 3 dan banyak elemen 9" },
      { key: "D", text: "Ordo 2 x 2 dan banyak elemen 4" }
    ],
    answer: "A",
    explanation: "Matriks $M$ memiliki 3 baris dan 2 kolom, sehingga berordo $3 \\times 2$ dengan total elemen $3 \\times 2 = 6$."
  },
  {
    id: 26,
    category: "Matriks",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Disajikan dua matriks yang sama, murid menentukan nilai variabel dan jumlahnya.",
    stimulus: "Diketahui kesamaan dua matriks: $\\begin{pmatrix} 2x & 4 \\\\ 3 & y - 1 \\end{pmatrix} = \\begin{pmatrix} 8 & 4 \\\\ 3 & 5 \\end{pmatrix}$.",
    question: "Nilai dari $x + y$ adalah...",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "8" },
      { key: "C", text: "9" },
      { key: "D", text: "12" }
    ],
    answer: "A",
    explanation: "Elemen seletak: $2x = 8 \\implies x = 4$; $y - 1 = 5 \\implies y = 6$. Nilai $x + y = 4 + 6 = 10$."
  },
  {
    id: 27,
    category: "Matriks",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan dua matriks, murid menghitung hasil operasi 2A−B.",
    stimulus: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & -1 \\\\ 2 & 3 \\end{pmatrix}$.",
    question: "Hasil operasi matriks $2A - B$ adalah...",
    options: [
      { key: "A", text: "[[3, 3], [4, 5]]" },
      { key: "B", text: "[[3, 1], [4, 5]]" },
      { key: "C", text: "[[1, 3], [1, 1]]" },
      { key: "D", text: "[[4, 2], [6, 8]]" }
    ],
    answer: "A",
    explanation: "$2A = \\begin{pmatrix} 4 & 2 \\\\ 6 & 8 \\end{pmatrix}$. Maka $2A - B = \\begin{pmatrix} 4 - 1 & 2 - (-1) \\\\ 6 - 2 & 8 - 3 \\end{pmatrix} = \\begin{pmatrix} 3 & 3 \\\\ 4 & 5 \\end{pmatrix}$."
  },
  {
    id: 28,
    category: "Matriks",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan hubungan B=3A−2I, murid menentukan matriks B.",
    stimulus: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ dan matriks identitas $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.",
    question: "Matriks $B$ yang memenuhi hubungan $B = 3A - 2I$ adalah...",
    options: [
      { key: "A", text: "[[4, 3], [0, 7]]" },
      { key: "B", text: "[[6, 3], [0, 9]]" },
      { key: "C", text: "[[4, 1], [0, 7]]" },
      { key: "D", text: "[[5, 3], [0, 8]]" }
    ],
    answer: "A",
    explanation: "$3A = \\begin{pmatrix} 6 & 3 \\\\ 0 & 9 \\end{pmatrix}$, $2I = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$. $B = 3A - 2I = \\begin{pmatrix} 6 - 2 & 3 - 0 \\\\ 0 - 0 & 9 - 2 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 0 & 7 \\end{pmatrix}$."
  },
  {
    id: 29,
    category: "Matriks",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan matriks A dan hubungan B=Aᵀ, murid menentukan hasil Bᵀ+2A.",
    stimulus: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan matriks $B = A^T$.",
    question: "Hasil dari operasi matriks $B^T + 2A$ adalah...",
    options: [
      { key: "A", text: "[[3, 6], [9, 12]]" },
      { key: "B", text: "[[2, 4], [6, 8]]" },
      { key: "C", text: "[[3, 7], [8, 12]]" },
      { key: "D", text: "[[1, 2], [3, 4]]" }
    ],
    answer: "A",
    explanation: "Sifat transpose: $B^T = (A^T)^T = A$. Maka $B^T + 2A = A + 2A = 3A = 3 \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$."
  },
  {
    id: 30,
    category: "Matriks",
    type: "PG",
    level: "C2 (Memahami)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan beberapa matriks, murid mengidentifikasi jenis matriks berdasarkan elemen dan bentuknya.",
    stimulus: "Perhatikan matriks $K = \\begin{pmatrix} 4 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
    question: "Matriks $K$ tersebut digolongkan sebagai jenis matriks...",
    options: [
      { key: "A", text: "Matriks diagonal" },
      { key: "B", text: "Matriks identitas" },
      { key: "C", text: "Matriks segitiga bawah" },
      { key: "D", text: "Matriks baris" }
    ],
    answer: "A",
    explanation: "Matriks diagonal adalah matriks persegi yang semua elemen di luar diagonal utamanya bernilai nol, sedangkan elemen pada diagonal utamanya tidak semuanya nol."
  },
  {
    id: 31,
    category: "Matriks",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan matriks berparameter dan nilai determinannya, murid menentukan nilai parameter.",
    stimulus: "Diketahui matriks $M = \\begin{pmatrix} k & 3 \\\\ 2 & 4 \\end{pmatrix}$. Jika nilai determinan matriks $M$ adalah 10.",
    question: "Nilai parameter $k$ adalah...",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "3" },
      { key: "C", text: "5" },
      { key: "D", text: "-4" }
    ],
    answer: "A",
    explanation: "$\\det(M) = (k)(4) - (3)(2) = 4k - 6$. Diketahui determinan $= 10$, maka $4k - 6 = 10 \\implies 4k = 16 \\implies k = 4$."
  },
  {
    id: 32,
    category: "Matriks",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan proses penentuan invers yang keliru, murid menganalisis letak kesalahan prosedur.",
    stimulus: "Seorang murid mencari invers dari matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$. Langkah murid tersebut adalah: Determinan = $(3)(4) - (2)(1) = 10$. Lalu murid menuliskan: $A^{-1} = \\frac{1}{10} \\begin{pmatrix} 3 & -2 \\\\ -1 & 4 \\end{pmatrix}$.",
    question: "Letak kesalahan prosedur yang dilakukan murid tersebut adalah...",
    options: [
      { key: "A", text: "Murid lupa menukar posisi elemen pada diagonal utama (seharusnya posisi 3 dan 4 saling bertukar tempat)" },
      { key: "B", text: "Perhitungan nilai determinannya salah, seharusnya bernilai 14" },
      { key: "C", text: "Tanda elemen diagonal samping seharusnya positif (+2 dan +1)" },
      { key: "D", text: "Nilai pecahan pengali seharusnya 10, bukan 1/10" }
    ],
    answer: "A",
    explanation: "Untuk matriks $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, adjoinnya adalah $\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$. Murid lupa menukar posisi elemen diagonal utama $a$ dan $d$ (3 dan 4), seharusnya adjoinnya adalah $\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$."
  },
  {
    id: 33,
    category: "Matriks",
    type: "PG",
    level: "C2 (Memahami)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan persamaan AX=B dan bentuk penyelesaiannya, murid mengidentifikasi syarat keberadaan invers A.",
    stimulus: "Diberikan persamaan matriks $AX = B$, di mana $A, X,$ dan $B$ adalah matriks berordo $2 \\times 2$. Bentuk penyelesaiannya adalah $X = A^{-1}B$.",
    question: "Syarat mutlak agar matriks $A^{-1}$ ada (matriks $A$ memiliki invers) sehingga penyelesaian $X$ bersifat tunggal adalah...",
    options: [
      { key: "A", text: "Determinan matriks A tidak boleh sama dengan nol (det(A) ≠ 0 / non-singular)" },
      { key: "B", text: "Matriks A harus merupakan matriks diagonal" },
      { key: "C", text: "Determinan matriks A harus bernilai positif" },
      { key: "D", text: "Matriks B harus sama dengan matriks identitas" }
    ],
    answer: "A",
    explanation: "Invers matriks $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$ hanya terdefinisi jika penyebut $\\det(A) \\neq 0$. Matriks dengan determinan $\\neq 0$ disebut matriks non-singular."
  },
  {
    id: 34,
    category: "Matriks",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan tabel jumlah penjualan dan total pendapatan, murid memilih model perkalian matriks yang merepresentasikan data.",
    stimulus: "Sebuah toko kelontong mencatat penjualan beras dan gula selama dua hari:\n• Hari I: 4 kg beras dan 2 kg gula dengan pendapatan Rp64.000\n• Hari II: 3 kg beras dan 5 kg gula dengan pendapatan Rp83.000\nJika $x$ adalah harga per kg beras dan $y$ adalah harga per kg gula.",
    question: "Model perkalian matriks yang tepat untuk merepresentasikan data penjualan tersebut adalah...",
    options: [
      { key: "A", text: "[[4, 2], [3, 5]] * [[x], [y]] = [[64000], [83000]]" },
      { key: "B", text: "[[4, 3], [2, 5]] * [[x], [y]] = [[83000], [64000]]" },
      { key: "C", text: "[[4, 2], [3, 5]] * [[64000], [83000]] = [[x], [y]]" },
      { key: "D", text: "[[x], [y]] * [[4, 2], [3, 5]] = [[64000], [83000]]" }
    ],
    answer: "A",
    explanation: "Persamaan SPLDV: $4x + 2y = 64.000$ dan $3x + 5y = 83.000$. Dalam bentuk perkalian matriks: $\\begin{pmatrix} 4 & 2 \\\\ 3 & 5 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 64000 \\\\ 83000 \\end{pmatrix}$."
  },
  {
    id: 35,
    category: "Matriks",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Sedang",
    indikator: "Disajikan informasi harga dua barang dalam dua paket, murid memilih model persamaan matriks yang sesuai.",
    stimulus: "Toko buku menyediakan dua paket alat tulis:\n• Paket A: 2 buku dan 3 pensil seharga Rp18.000\n• Paket B: 3 buku dan 1 pensil seharga Rp20.000\nMisalkan harga sebuah buku adalah $b$ dan harga sebuah pensil adalah $p$.",
    question: "Model persamaan matriks yang sesuai dengan informasi kedua paket tersebut adalah...",
    options: [
      { key: "A", text: "[[2, 3], [3, 1]] * [[b], [p]] = [[18000], [20000]]" },
      { key: "B", text: "[[2, 3], [1, 3]] * [[b], [p]] = [[18000], [20000]]" },
      { key: "C", text: "[[2, 3], [3, 1]] * [[18000], [20000]] = [[b], [p]]" },
      { key: "D", text: "[[3, 2], [1, 3]] * [[b], [p]] = [[20000], [18000]]" }
    ],
    answer: "A",
    explanation: "Sistem persamaan: $2b + 3p = 18.000$ dan $3b + 1p = 20.000$. Bentuk matriks: $\\begin{pmatrix} 2 & 3 \\\\ 3 & 1 \\end{pmatrix} \\begin{pmatrix} b \\\\ p \\end{pmatrix} = \\begin{pmatrix} 18000 \\\\ 20000 \\end{pmatrix}$."
  }
];
