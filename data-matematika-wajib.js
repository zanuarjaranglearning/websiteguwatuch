// DATA KISI-KISI & SOAL MATEMATIKA WAJIB KELAS XI (PAS)
// Unit: U1 Barisan dan Deret | U2 Matematika Keuangan | U3 Transformasi Fungsi
const MTKW_SUMMARY = {
  title: "Ringkasan Kilat Matematika Wajib Kelas XI (PAS)",
  sections: [
    {
      category: "1. Barisan dan Deret",
      points: [
        "**Barisan Aritmetika** (selisih antarsuku tetap): $U_n = a + (n-1)b$, dengan $a$ suku pertama dan beda $b = U_n - U_{n-1}$.",
        "  • Jika dua suku diketahui, misalnya $U_p$ dan $U_q$: $b = \\frac{U_q - U_p}{q - p}$, lalu $a = U_p - (p-1)b$.",
        "**Deret Aritmetika**: $S_n = \\frac{n}{2}\\left(2a + (n-1)b\\right) = \\frac{n}{2}(a + U_n)$.",
        "  • Untuk mencari banyak suku dari jumlah tertentu, bentuk persamaan kuadrat dalam $n$, lalu ambil nilai $n$ yang positif.",
        "**Barisan Geometri** (perbandingan antarsuku tetap): $U_n = a r^{n-1}$, dengan rasio $r = \\frac{U_n}{U_{n-1}}$.",
        "  • Jika dua suku diketahui: $r^{q-p} = \\frac{U_q}{U_p}$.",
        "**Deret Geometri**: $S_n = \\frac{a(r^n - 1)}{r - 1}$ untuk $r > 1$, dan $S_n = \\frac{a(1 - r^n)}{1 - r}$ untuk $r$ kurang dari 1. Awas: penyebutnya $r-1$, bukan $r$.",
        "**Mengenali pola pada soal cerita**:",
        "  • Bertambah atau berkurang dengan jumlah **tetap** → aritmetika. Bertambah atau berkurang dengan **persentase atau kelipatan** → geometri.",
        "  • Naik $p\\%$ → $r = 1 + \\frac{p}{100}$. Turun $p\\%$ → $r = 1 - \\frac{p}{100}$.",
        "  • Pantulan bola: tinggi pantulan pertama adalah suku pertama ($a$), bukan tinggi awal. Pembelahan bakteri: jumlah awal adalah kondisi awal, sehingga setelah $k$ kali membelah jumlahnya $U_0 \\cdot 2^k$."
      ]
    },
    {
      category: "2. Matematika Keuangan",
      points: [
        "**Bunga Tunggal**: bunga dihitung dari modal awal saja. $M_t = M(1 + i \\cdot t)$. Untuk bunga per tahun dengan waktu dalam bulan, $t = \\frac{\\text{bulan}}{12}$.",
        "**Bunga Majemuk**: bunga ikut berbunga. $M_n = M(1+i)^n$. Dipakai juga untuk memprediksi harga akibat inflasi: $H = H_0(1+i)^n$.",
        "**Diskonto**: potongan bunga karena dibayar sebelum jatuh tempo. $D = N \\cdot d \\cdot t$ dan nilai tunai $= N - D$ ($N$ = nilai nominal). Diskonto dihitung dari **nilai nominal**. Anjak piutang dan wesel memakai konsep ini.",
        "**Rente** (pembayaran atau penerimaan sama besar tiap periode):",
        "  • **Postnumerando** (di akhir periode): nilai akhir $S_n = R \\cdot \\frac{(1+i)^n - 1}{i}$, nilai sekarang $A_n = R \\cdot \\frac{1 - (1+i)^{-n}}{i}$.",
        "  • **Pranumerando** (di awal periode): nilainya $=$ nilai postnumerando $\\times (1+i)$, baik nilai akhir maupun nilai sekarang. Pembayaran pertama dilakukan di awal.",
        "**Anuitas** (angsuran tetap): angsuran $=$ bunga $+$ angsuran pokok. Bunga periode $=$ sisa pinjaman $\\times i$, angsuran pokok $=$ anuitas $-$ bunga, sisa pinjaman baru $=$ sisa lama $-$ angsuran pokok. Pelunasan dipercepat = nilai tunai seluruh angsuran yang tersisa.",
        "**Bunga Flat**: bunga dihitung dari pokok awal untuk seluruh masa kredit (konsep bunga tunggal), sehingga bunga efektifnya lebih tinggi daripada bunga yang dihitung dari sisa pinjaman."
      ]
    },
    {
      category: "3. Transformasi Fungsi",
      points: [
        "**Translasi** $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ pada fungsi $y = f(x)$: $y = f(x - a) + b$ ($x$ diganti $x - a$, lalu ditambah $b$).",
        "**Refleksi terhadap sumbu-$X$**: $y = -f(x)$. **Refleksi terhadap sumbu-$Y$**: $y = f(-x)$.",
        "**Urutan penting**: transformasi dilakukan satu per satu sesuai urutan yang disebut. Refleksi lalu translasi **tidak sama** dengan translasi lalu refleksi.",
        "**Parabola** $y = a(x-p)^2 + q$ memiliki titik puncak $(p, q)$. Translasi $\\begin{pmatrix} h \\\\ k \\end{pmatrix}$ menggeser puncak menjadi $(p + h, q + k)$. Untuk $y = ax^2 + bx + c$: $x_p = -\\frac{b}{2a}$.",
        "**Fungsi eksponen** $y = a^x$: melalui $(0, 1)$ dengan asimtot horizontal $y = 0$. Pada $y = \\pm a^{x-h} + k$, asimtot horizontalnya menjadi $y = k$.",
        "  • Refleksi sumbu-$X$: $y = -a^x$, melalui $(0, -1)$, grafik turun, asimtot tetap $y = 0$. Translasi vertikal sejauh $k$ menggeser asimtot menjadi $y = k$."
      ]
    }
  ]
};

const MTKW_QUESTIONS = [
  {
    id: 1,
    category: "Barisan & Deret",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Menentukan suku ke-n pada konteks produksi dengan pertambahan tetap",
    stimulus: "Sebuah pabrik tas memproduksi 120 tas pada hari pertama. Setiap hari berikutnya, produksi bertambah 15 tas dari hari sebelumnya.",
    question: "Banyak tas yang diproduksi pada hari ke-12 adalah...",
    options: [
      { key: "A", text: "270 tas" },
      { key: "B", text: "285 tas" },
      { key: "C", text: "300 tas" },
      { key: "D", text: "315 tas" }
    ],
    answer: "B",
    explanation: "Pertambahan tetap 15 tas berarti barisan aritmetika dengan $a = 120$ dan $b = 15$. $U_{12} = a + 11b = 120 + 11(15) = 120 + 165 = 285$ tas."
  },
  {
    id: 2,
    category: "Barisan & Deret",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Menentukan rasio dan suku ke-n dari dua suku yang diketahui",
    stimulus: "Pada suatu barisan geometri diketahui suku kedua $U_2 = 6$ dan suku kelima $U_5 = 162$.",
    question: "Rasio dan suku ke-7 barisan tersebut berturut-turut adalah...",
    options: [
      { key: "A", text: "$r = 3$ dan $U_7 = 1.458$" },
      { key: "B", text: "$r = 3$ dan $U_7 = 486$" },
      { key: "C", text: "$r = 27$ dan $U_7 = 4.374$" },
      { key: "D", text: "$r = 2$ dan $U_7 = 384$" }
    ],
    answer: "A",
    explanation: "$r^{5-2} = \\frac{U_5}{U_2} = \\frac{162}{6} = 27$, sehingga $r = 3$. Suku pertama $a = \\frac{U_2}{r} = 2$. Maka $U_7 = a r^6 = 2 \\cdot 3^6 = 2 \\cdot 729 = 1.458$."
  },
  {
    id: 3,
    category: "Barisan & Deret",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menentukan banyak suku dari jumlah deret pada konteks tabungan",
    stimulus: "Rina menabung di celengan. Pada bulan pertama ia menabung Rp20.000, kemudian setiap bulan berikutnya tabungannya bertambah Rp10.000 dari bulan sebelumnya. Jumlah seluruh tabungan Rina akhirnya mencapai Rp900.000.",
    question: "Banyak bulan yang dibutuhkan Rina untuk mencapai jumlah tabungan tersebut adalah...",
    options: [
      { key: "A", text: "10 bulan" },
      { key: "B", text: "11 bulan" },
      { key: "C", text: "12 bulan" },
      { key: "D", text: "15 bulan" }
    ],
    answer: "C",
    explanation: "Deret aritmetika dengan $a = 20.000$ dan $b = 10.000$. $S_n = \\frac{n}{2}\\left(2 \\cdot 20.000 + (n-1) \\cdot 10.000\\right) = 5.000n^2 + 15.000n$. Dari $S_n = 900.000$ diperoleh $n^2 + 3n - 180 = 0$, yaitu $(n + 15)(n - 12) = 0$. Nilai $n = -15$ ditolak, sehingga $n = 12$ bulan."
  },
  {
    id: 4,
    category: "Barisan & Deret",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menganalisis pola penurunan (pantulan bola) dan menentukan suku ke-n",
    stimulus: "Sebuah bola dijatuhkan dari ketinggian 81 meter. Setiap kali memantul, bola mencapai ketinggian $\\frac{2}{3}$ dari ketinggian pantulan sebelumnya.",
    question: "Tinggi pantulan ke-3 bola tersebut adalah...",
    options: [
      { key: "A", text: "16 meter" },
      { key: "B", text: "36 meter" },
      { key: "C", text: "54 meter" },
      { key: "D", text: "24 meter" }
    ],
    answer: "D",
    explanation: "Pantulan pertama mencapai $81 \\times \\frac{2}{3} = 54$ m, sehingga suku pertama $a = 54$ dan $r = \\frac{2}{3}$. Pantulan ke-3 adalah $U_3 = 54 \\times \\left(\\frac{2}{3}\\right)^2 = 54 \\times \\frac{4}{9} = 24$ meter. Awas: tinggi awal 81 m bukan suku pertama."
  },
  {
    id: 5,
    category: "Barisan & Deret",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menentukan jumlah n suku pertama pada penyebaran informasi",
    stimulus: "Pada jam pertama, sebuah kabar disampaikan kepada 2 orang. Pada setiap jam berikutnya, banyak orang baru yang menerima kabar menjadi tiga kali lipat dari jam sebelumnya.",
    question: "Jumlah seluruh orang yang telah menerima kabar setelah 5 jam adalah...",
    options: [
      { key: "A", text: "162 orang" },
      { key: "B", text: "242 orang" },
      { key: "C", text: "486 orang" },
      { key: "D", text: "728 orang" }
    ],
    answer: "B",
    explanation: "Deret geometri dengan $a = 2$ dan $r = 3$. $S_5 = \\frac{2(3^5 - 1)}{3 - 1} = \\frac{2 \\cdot 242}{2} = 242$ orang. (162 adalah banyak penerima baru pada jam ke-5 saja, bukan jumlah seluruhnya.)"
  },
  {
    id: 6,
    category: "Barisan & Deret",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Menentukan suku ke-n pada pertumbuhan bakteri",
    stimulus: "Sebuah koloni berisi 500 bakteri. Setiap 30 menit, setiap bakteri membelah menjadi dua.",
    question: "Banyak bakteri setelah 3 jam adalah...",
    options: [
      { key: "A", text: "16.000 bakteri" },
      { key: "B", text: "3.000 bakteri" },
      { key: "C", text: "32.000 bakteri" },
      { key: "D", text: "64.000 bakteri" }
    ],
    answer: "C",
    explanation: "3 jam = 6 kali pembelahan (tiap 30 menit). Jumlah awal 500 adalah kondisi awal, sehingga banyak bakteri $= 500 \\times 2^6 = 500 \\times 64 = 32.000$. Memakai $2^5$ keliru karena 500 bukan hasil pembelahan pertama."
  },
  {
    id: 7,
    category: "Barisan & Deret",
    type: "PG",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Mengevaluasi prosedur penyelesaian jumlah deret",
    stimulus: "Seorang siswa diminta menghitung jumlah lima suku pertama deret $4 + 12 + 36 + 108 + 324$. Pekerjaan siswa tersebut:\nLangkah 1: $a = 4$, $r = 3$, $n = 5$.\nLangkah 2: $S_5 = \\frac{4(3^5 - 1)}{3}$.\nLangkah 3: $S_5 = \\frac{4 \\cdot 242}{3} \\approx 322{,}7$.",
    question: "Evaluasi yang paling tepat terhadap prosedur siswa tersebut adalah...",
    options: [
      { key: "A", text: "Prosedur sudah benar karena untuk $r > 1$ rumus jumlahnya adalah $\\frac{a(r^n - 1)}{r}$" },
      { key: "B", text: "Prosedur salah pada Langkah 2: penyebut seharusnya $r - 1 = 2$, sehingga $S_5 = 484$" },
      { key: "C", text: "Prosedur salah pada Langkah 2: pangkat seharusnya $n - 1$, sehingga $S_5 = 160$" },
      { key: "D", text: "Prosedur salah pada Langkah 1: deret tersebut adalah deret aritmetika dengan beda 8" }
    ],
    answer: "B",
    explanation: "Rumus deret geometri untuk $r > 1$ adalah $S_n = \\frac{a(r^n - 1)}{r - 1}$, sehingga penyebutnya $r - 1 = 2$, bukan $r = 3$. Maka $S_5 = \\frac{4(243 - 1)}{2} = 484$. Cek langsung: $4 + 12 + 36 + 108 + 324 = 484$. (Angka 160 adalah jumlah empat suku pertama, bukan hasil perbaikan yang benar.)"
  },
  {
    id: 8,
    category: "Barisan & Deret",
    type: "PG",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Membandingkan akumulasi dua pola pertumbuhan pengguna aplikasi",
    stimulus: "Dua aplikasi dirilis bersamaan. Pada hari pertama, masing-masing mendapat 100 pengguna baru. Aplikasi A mendapat pengguna baru 100 orang lebih banyak dari hari sebelumnya setiap hari. Aplikasi B mendapat pengguna baru dua kali lipat dari hari sebelumnya setiap hari.",
    question: "Setelah 6 hari, perbandingan total pengguna yang terkumpul pada kedua aplikasi yang benar adalah...",
    options: [
      { key: "A", text: "Aplikasi A lebih banyak 4.200 pengguna daripada aplikasi B" },
      { key: "B", text: "Keduanya sama banyak, yaitu 2.100 pengguna" },
      { key: "C", text: "Aplikasi B lebih banyak 4.200 pengguna daripada aplikasi A" },
      { key: "D", text: "Aplikasi B lebih banyak 2.600 pengguna daripada aplikasi A" }
    ],
    answer: "C",
    explanation: "Aplikasi A (aritmetika, $a = 100$, $b = 100$): $S_6 = \\frac{6}{2}(2 \\cdot 100 + 5 \\cdot 100) = 2.100$. Aplikasi B (geometri, $a = 100$, $r = 2$): $S_6 = \\frac{100(2^6 - 1)}{2 - 1} = 6.300$. Selisihnya $6.300 - 2.100 = 4.200$ dan B lebih banyak. Angka 2.600 berasal dari membandingkan pengguna baru hari ke-6 saja ($3.200 - 600$), padahal yang ditanyakan akumulasi."
  },
  {
    id: 9,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Menentukan nilai akhir simpanan dengan jangka waktu dalam bulan",
    stimulus: "Dina menyimpan uang Rp8.000.000 di bank dengan bunga tunggal 6% per tahun.",
    question: "Nilai akhir simpanan Dina setelah 9 bulan adalah...",
    options: [
      { key: "A", text: "Rp8.360.000" },
      { key: "B", text: "Rp8.040.000" },
      { key: "C", text: "Rp8.480.000" },
      { key: "D", text: "Rp12.320.000" }
    ],
    answer: "A",
    explanation: "Bunga $= 8.000.000 \\times 6\\% \\times \\frac{9}{12} = 360.000$. Nilai akhir $= 8.000.000 + 360.000 = 8.360.000$. (Rp8.480.000 adalah nilai setelah 1 tahun penuh.)"
  },
  {
    id: 10,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Menentukan nilai akhir investasi dengan faktor majemuk yang diberikan",
    stimulus: "Pak Hasan menginvestasikan Rp10.000.000 dengan bunga majemuk 5% per tahun selama 4 tahun. Diketahui $(1{,}05)^4 = 1{,}2155$.",
    question: "Nilai akhir investasi Pak Hasan adalah...",
    options: [
      { key: "A", text: "Rp12.000.000" },
      { key: "B", text: "Rp2.155.000" },
      { key: "C", text: "Rp12.762.800" },
      { key: "D", text: "Rp12.155.000" }
    ],
    answer: "D",
    explanation: "$M_4 = 10.000.000 \\times (1{,}05)^4 = 10.000.000 \\times 1{,}2155 = 12.155.000$. (Rp12.000.000 adalah hasil bila memakai bunga tunggal, dan Rp2.155.000 hanya bunganya saja.)"
  },
  {
    id: 11,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Mengidentifikasi konsep matematika keuangan pada pelunasan dipercepat (nilai tunai angsuran tetap)",
    stimulus: "Bu Sari memiliki pinjaman dengan angsuran tetap Rp2.000.000 setiap bulan. Setelah membayar beberapa angsuran, masih tersisa 10 angsuran. Ia ingin melunasi seluruh sisa pinjaman sekaligus pada saat ini (pelunasan dipercepat) dengan tetap memperhitungkan bunga pinjaman.",
    question: "Konsep matematika keuangan yang tepat untuk menentukan jumlah pelunasannya adalah...",
    options: [
      { key: "A", text: "Jumlah seluruh sisa angsuran, yaitu 10 × Rp2.000.000, tanpa memperhitungkan bunga" },
      { key: "B", text: "Nilai akhir dari 10 angsuran yang tersisa pada akhir masa pinjaman" },
      { key: "C", text: "Nilai tunai (nilai sekarang) dari 10 angsuran tetap yang tersisa, dihitung dengan suku bunga pinjaman" },
      { key: "D", text: "Pokok pinjaman awal dikurangi jumlah angsuran yang telah dibayar" }
    ],
    answer: "C",
    explanation: "Pada pelunasan dipercepat, uang yang dibayar sekarang harus setara dengan seluruh angsuran yang tersisa. Karena angsuran itu seharusnya dibayar di masa depan, nilainya dibawa ke saat ini, yaitu nilai tunai (nilai sekarang) dari angsuran tetap dengan suku bunga pinjaman. Menjumlahkan angsuran tanpa bunga membuat debitur ikut membayar bunga masa depan yang belum berjalan."
  },
  {
    id: 12,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Mengidentifikasi konsep yang digunakan pada pencairan piutang (anjak piutang)",
    stimulus: "PT Maju menjual piutangnya senilai Rp50.000.000 yang jatuh tempo 3 bulan lagi kepada perusahaan anjak piutang. PT Maju menerima uang tunai sekarang yang jumlahnya lebih kecil dari Rp50.000.000.",
    question: "Konsep matematika keuangan yang digunakan pada transaksi tersebut adalah...",
    options: [
      { key: "A", text: "Bunga majemuk, karena nilai uang bertambah seiring waktu" },
      { key: "B", text: "Anuitas, karena pembayaran dilakukan dengan angsuran tetap" },
      { key: "C", text: "Rente pranumerando, karena pembayaran dilakukan di awal periode" },
      { key: "D", text: "Diskonto, karena nilai nominal piutang dipotong bunga akibat dicairkan sebelum jatuh tempo" }
    ],
    answer: "D",
    explanation: "Piutang yang dicairkan sebelum jatuh tempo dipotong bunga dari nilai nominalnya. Potongan ini disebut diskonto, sehingga nilai tunai yang diterima lebih kecil daripada nilai nominal."
  },
  {
    id: 13,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Menentukan nilai tunai wesel dengan diskonto",
    stimulus: "Sebuah wesel bernilai nominal Rp12.000.000 akan jatuh tempo 6 bulan lagi. Wesel tersebut dicairkan sekarang dengan diskonto 10% per tahun.",
    question: "Nilai tunai wesel tersebut adalah...",
    options: [
      { key: "A", text: "Rp11.400.000" },
      { key: "B", text: "Rp600.000" },
      { key: "C", text: "Rp10.800.000" },
      { key: "D", text: "Rp12.600.000" }
    ],
    answer: "A",
    explanation: "Diskonto $= 12.000.000 \\times 10\\% \\times \\frac{6}{12} = 600.000$. Nilai tunai $= 12.000.000 - 600.000 = 11.400.000$. (Rp600.000 hanyalah diskontonya, dan Rp10.800.000 adalah nilai tunai bila jangka waktunya 1 tahun.)"
  },
  {
    id: 14,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Mengidentifikasi konsep rente pranumerando pada tabungan berjangka dengan setoran awal periode",
    stimulus: "Ayu menabung Rp500.000 setiap awal bulan selama 2 tahun pada bank yang memberi bunga majemuk bulanan.",
    question: "Jenis rente yang sesuai dengan tabungan Ayu adalah...",
    options: [
      { key: "A", text: "Rente postnumerando, karena setoran dilakukan di akhir setiap periode" },
      { key: "B", text: "Rente pranumerando, karena setoran dilakukan di awal setiap periode sehingga setoran pertama sudah berbunga satu periode penuh" },
      { key: "C", text: "Anuitas, karena setoran jumlahnya tetap setiap bulan" },
      { key: "D", text: "Bunga tunggal, karena setoran tidak ikut berbunga" }
    ],
    answer: "B",
    explanation: "Rente pranumerando adalah rangkaian pembayaran yang dilakukan di awal setiap periode. Pada tabungan Ayu, setiap setoran dilakukan di awal bulan, sehingga setoran pertama sudah mendapat bunga satu periode penuh. Rente postnumerando berarti setoran di akhir periode."
  },
  {
    id: 15,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menentukan nilai akhir rente postnumerando dengan faktor majemuk yang diberikan",
    stimulus: "Bu Dewi menyetor Rp1.000.000 setiap akhir tahun selama 4 tahun dengan bunga majemuk 10% per tahun. Diketahui $(1{,}1)^4 = 1{,}4641$.",
    question: "Nilai akhir seluruh setoran Bu Dewi pada akhir tahun ke-4 adalah...",
    options: [
      { key: "A", text: "Rp4.000.000" },
      { key: "B", text: "Rp5.105.100" },
      { key: "C", text: "Rp1.464.100" },
      { key: "D", text: "Rp4.641.000" }
    ],
    answer: "D",
    explanation: "Setoran di akhir periode adalah rente postnumerando. $S_4 = R \\cdot \\frac{(1+i)^4 - 1}{i} = 1.000.000 \\times \\frac{1{,}4641 - 1}{0{,}1} = 1.000.000 \\times 4{,}641 = 4.641.000$. (Rp5.105.100 adalah nilai akhir bila setoran dilakukan di awal tahun, yaitu pranumerando.)"
  },
  {
    id: 16,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Mengidentifikasi konsep rente postnumerando pada proyeksi dana pensiun",
    stimulus: "Seorang pekerja menyetor Rp2.000.000 setiap akhir bulan ke dana pensiun selama 20 tahun dengan bunga majemuk bulanan.",
    question: "Untuk memproyeksikan total dana yang terkumpul pada saat pensiun, konsep yang tepat digunakan adalah...",
    options: [
      { key: "A", text: "Nilai akhir rente postnumerando, karena setoran dilakukan di akhir periode dan yang dicari adalah total dana di masa depan" },
      { key: "B", text: "Nilai sekarang rente postnumerando, karena yang dicari adalah nilai setoran pada saat ini" },
      { key: "C", text: "Bunga tunggal, karena setoran bernilai sama setiap bulan" },
      { key: "D", text: "Diskonto, karena dana pensiun dicairkan lebih awal" }
    ],
    answer: "A",
    explanation: "Setoran di akhir setiap bulan adalah rente postnumerando. Karena yang ditanyakan adalah total dana yang terkumpul pada akhir masa setoran (masa depan), konsep yang dipakai adalah nilai akhir rente postnumerando. Nilai sekarang dipakai bila ingin mengetahui nilai seluruh setoran pada saat ini."
  },
  {
    id: 17,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Menganalisis perhitungan bunga flat pada kredit untuk menentukan konsep dasarnya",
    stimulus: "Sebuah dealer menawarkan kredit motor seharga Rp18.000.000 dengan bunga flat 8% per tahun selama 2 tahun, dibayar dengan 24 angsuran bulanan. Perhitungan dealer:\nBunga = 18.000.000 × 8% × 2 = Rp2.880.000\nAngsuran per bulan = (18.000.000 + 2.880.000) ÷ 24 = Rp870.000",
    question: "Konsep dasar yang melandasi perhitungan bunga flat tersebut adalah...",
    options: [
      { key: "A", text: "Bunga majemuk, karena bunga dihitung dari saldo yang terus bertambah" },
      { key: "B", text: "Bunga tunggal, karena bunga dihitung dari pokok awal untuk seluruh masa kredit walaupun sisa pokok terus menurun" },
      { key: "C", text: "Anuitas, karena bunga dihitung dari sisa pinjaman setiap bulan" },
      { key: "D", text: "Diskonto, karena bunga dipotong di awal dari nilai pinjaman" }
    ],
    answer: "B",
    explanation: "Pada bunga flat, bunga dihitung dari pokok awal ($18.000.000$) untuk seluruh masa kredit, tanpa memperhatikan bahwa pokok pinjaman terus berkurang setiap kali angsuran dibayar. Ini adalah konsep bunga tunggal. Akibatnya, bunga efektif kredit flat lebih tinggi daripada angka 8% yang tertulis. Pada anuitas, bunga dihitung dari sisa pinjaman."
  },
  {
    id: 18,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Mengidentifikasi konsep nilai sekarang rente pranumerando pada evaluasi sewa dan beli",
    stimulus: "Sebuah toko membandingkan membeli mesin secara tunai seharga Rp40.000.000 dengan menyewa mesin seharga Rp10.000.000 per tahun yang dibayar di awal setiap tahun selama 5 tahun.",
    question: "Agar kedua pilihan dapat dibandingkan secara adil pada saat ini, biaya sewa harus dinyatakan sebagai...",
    options: [
      { key: "A", text: "Nilai akhir rente postnumerando" },
      { key: "B", text: "Nilai sekarang rente postnumerando, karena pembayaran pertama dilakukan satu periode kemudian" },
      { key: "C", text: "Nilai sekarang rente pranumerando, karena pembayaran sewa pertama dilakukan di awal, yaitu saat ini" },
      { key: "D", text: "Jumlah biasa 5 × Rp10.000.000 = Rp50.000.000 tanpa memperhitungkan bunga" }
    ],
    answer: "C",
    explanation: "Harga beli tunai adalah nilai pada saat ini, sehingga biaya sewa juga harus dinyatakan sebagai nilai pada saat ini. Karena sewa dibayar di awal setiap tahun (pembayaran pertama dilakukan sekarang), konsep yang tepat adalah nilai sekarang rente pranumerando. Menjumlahkan 5 pembayaran tanpa bunga mengabaikan nilai waktu uang."
  },
  {
    id: 19,
    category: "Matematika Keuangan",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Mengidentifikasi konsep yang tepat untuk memprediksi harga akibat inflasi tahunan",
    stimulus: "Harga sebuah barang saat ini Rp5.000.000. Inflasi diperkirakan 4% per tahun.",
    question: "Untuk memprediksi harga barang tersebut 3 tahun lagi, konsep yang tepat digunakan adalah...",
    options: [
      { key: "A", text: "Bunga tunggal, yaitu $5.000.000 \\times (1 + 3 \\times 0{,}04)$" },
      { key: "B", text: "Diskonto, karena harga dibayar sebelum jatuh tempo" },
      { key: "C", text: "Anuitas, karena kenaikan harga dibayar dengan angsuran tetap" },
      { key: "D", text: "Bunga majemuk, yaitu $5.000.000 \\times (1 + 0{,}04)^3$, karena kenaikan setiap tahun dihitung dari harga tahun sebelumnya" }
    ],
    answer: "D",
    explanation: "Inflasi bekerja berantai: kenaikan tahun berikutnya dihitung dari harga yang sudah naik pada tahun sebelumnya. Ini adalah konsep bunga majemuk, $H = H_0(1+i)^n = 5.000.000 \\times (1{,}04)^3 \\approx 5.624.320$."
  },
  {
    id: 20,
    category: "Transformasi Fungsi",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "Mudah",
    indikator: "Menentukan persamaan fungsi linear hasil translasi",
    stimulus: "Fungsi $f(x) = 2x + 3$ ditranslasikan oleh $T = \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$.",
    question: "Persamaan fungsi hasil translasi tersebut adalah...",
    options: [
      { key: "A", text: "$y = 2x - 6$" },
      { key: "B", text: "$y = 2x - 4$" },
      { key: "C", text: "$y = 2x + 10$" },
      { key: "D", text: "$y = 2x + 2$" }
    ],
    answer: "A",
    explanation: "Translasi $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ mengubah $y = f(x)$ menjadi $y = f(x - a) + b$. Maka $y = 2(x - 4) + 3 + (-1) = 2x - 8 + 3 - 1 = 2x - 6$."
  },
  {
    id: 21,
    category: "Transformasi Fungsi",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menentukan parameter translasi dari perpindahan titik puncak parabola",
    stimulus: "Grafik fungsi $y = x^2 - 4x + 7$ ditranslasikan oleh $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ sehingga titik puncaknya berpindah ke $(5, -1)$.",
    question: "Nilai $a$ dan $b$ berturut-turut adalah...",
    options: [
      { key: "A", text: "$a = 7$ dan $b = 2$" },
      { key: "B", text: "$a = -3$ dan $b = 4$" },
      { key: "C", text: "$a = 3$ dan $b = -4$" },
      { key: "D", text: "$a = 3$ dan $b = -2$" }
    ],
    answer: "C",
    explanation: "Titik puncak awal: $x_p = -\\frac{b}{2a} = -\\frac{-4}{2} = 2$ dan $y_p = 2^2 - 4(2) + 7 = 3$, yaitu $(2, 3)$. Translasi memindahkan $(2, 3)$ ke $(5, -1)$, sehingga $a = 5 - 2 = 3$ dan $b = -1 - 3 = -4$."
  },
  {
    id: 22,
    category: "Transformasi Fungsi",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menentukan persamaan hasil refleksi terhadap sumbu-Y dilanjutkan translasi",
    stimulus: "Grafik fungsi $y = x^2 + 2x - 3$ dicerminkan terhadap sumbu-$Y$, kemudian hasilnya ditranslasikan oleh $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$.",
    question: "Persamaan grafik hasil transformasi tersebut adalah...",
    options: [
      { key: "A", text: "$y = x^2 - 2$" },
      { key: "B", text: "$y = x^2 - 4x + 2$" },
      { key: "C", text: "$y = -x^2 + 6$" },
      { key: "D", text: "$y = x^2 - 4x - 2$" }
    ],
    answer: "B",
    explanation: "Refleksi sumbu-$Y$ mengganti $x$ dengan $-x$: $y = (-x)^2 + 2(-x) - 3 = x^2 - 2x - 3$. Translasi $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$: $y = (x-1)^2 - 2(x-1) - 3 + 2 = x^2 - 2x + 1 - 2x + 2 - 3 + 2 = x^2 - 4x + 2$. (Hasil $y = x^2 - 2$ muncul bila urutannya terbalik, translasi dulu baru refleksi.)"
  },
  {
    id: 23,
    category: "Transformasi Fungsi",
    type: "PG",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Mengevaluasi prosedur penentuan fungsi hasil refleksi dan translasi",
    stimulus: "Diberikan $f(x) = x^2 - 3$. Seorang siswa menentukan hasil refleksi terhadap sumbu-$X$ dilanjutkan translasi $\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ sebagai berikut:\nLangkah 1 (refleksi sumbu-$X$): $y = -(x^2 - 3) = -x^2 + 3$.\nLangkah 2 (translasi): $y = -(x + 2)^2 + 3 + 1 = -(x + 2)^2 + 4$.",
    question: "Evaluasi yang tepat terhadap pekerjaan siswa tersebut adalah...",
    options: [
      { key: "A", text: "Pekerjaan siswa sudah benar seluruhnya" },
      { key: "B", text: "Langkah 1 salah, seharusnya hasil refleksi sumbu-$X$ adalah $y = x^2 + 3$" },
      { key: "C", text: "Langkah 2 salah: translasi sejauh 2 ke kanan mengganti $x$ dengan $x - 2$, sehingga hasil yang benar adalah $y = -(x - 2)^2 + 4$" },
      { key: "D", text: "Langkah 2 salah: komponen vertikal seharusnya dikurangi, sehingga hasilnya $y = -(x - 2)^2 + 2$" }
    ],
    answer: "C",
    explanation: "Langkah 1 benar: refleksi sumbu-$X$ menghasilkan $y = -f(x) = -x^2 + 3$. Pada Langkah 2, translasi $\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ berarti $x$ diganti $x - 2$ (bukan $x + 2$) dan hasilnya ditambah 1. Jadi $y = -(x - 2)^2 + 3 + 1 = -(x - 2)^2 + 4$."
  },
  {
    id: 24,
    category: "Transformasi Fungsi",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menentukan titik pada grafik hasil refleksi terhadap sumbu-X dan translasi",
    stimulus: "Grafik $f(x) = x^2 - 4$ dicerminkan terhadap sumbu-$X$, kemudian ditranslasikan oleh $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$.",
    question: "Titik yang terletak pada grafik hasil transformasi tersebut adalah...",
    options: [
      { key: "A", text: "$(5, 2)$" },
      { key: "B", text: "$(5, -2)$" },
      { key: "C", text: "$(3, -6)$" },
      { key: "D", text: "$(2, 6)$" }
    ],
    answer: "A",
    explanation: "Refleksi sumbu-$X$: $y = -(x^2 - 4) = -x^2 + 4$. Translasi $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$: $y = -(x-3)^2 + 4 + 2 = -(x-3)^2 + 6$. Uji $x = 5$: $y = -(2)^2 + 6 = 2$, sehingga $(5, 2)$ terletak pada grafik. Titik lain tidak memenuhi: $x = 3$ memberi $y = 6$, dan $x = 2$ memberi $y = 5$."
  },
  {
    id: 25,
    category: "Transformasi Fungsi",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menafsirkan translasi grafik pada konteks lintasan bola",
    stimulus: "Lintasan sebuah bola yang ditendang dinyatakan dengan $h(x) = -x^2 + 6x$, dengan $h$ adalah tinggi bola (meter) dan $x$ adalah jarak mendatar (meter) dari titik tendangan. Pada tendangan berikutnya, lintasan bola merupakan hasil translasi lintasan pertama sejauh 2 meter ke kanan dan 1 meter ke atas.",
    question: "Penafsiran yang benar mengenai titik tertinggi lintasan baru adalah...",
    options: [
      { key: "A", text: "Titik tertinggi di $(1, 8)$: bola mencapai tinggi 8 meter pada jarak mendatar 1 meter" },
      { key: "B", text: "Titik tertinggi di $(3, 10)$: bola mencapai tinggi 10 meter pada jarak mendatar 3 meter" },
      { key: "C", text: "Titik tertinggi di $(5, 9)$: bola mencapai tinggi 9 meter pada jarak mendatar 5 meter" },
      { key: "D", text: "Titik tertinggi di $(5, 10)$: bola mencapai tinggi maksimum 10 meter pada jarak mendatar 5 meter" }
    ],
    answer: "D",
    explanation: "Ubah ke bentuk puncak: $h(x) = -(x - 3)^2 + 9$, sehingga titik tertinggi lintasan pertama adalah $(3, 9)$. Translasi 2 meter ke kanan dan 1 meter ke atas memindahkan puncak ke $(3 + 2, 9 + 1) = (5, 10)$. Artinya bola mencapai tinggi maksimum 10 meter pada jarak mendatar 5 meter."
  },
  {
    id: 26,
    category: "Barisan & Deret",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menganalisis kebenaran pernyataan berdasarkan dua suku yang diketahui",
    stimulus: "Pada suatu barisan aritmetika diketahui $U_3 = 11$ dan $U_8 = 31$.",
    question: "Pilih SEMUA pernyataan yang BENAR mengenai barisan tersebut. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Beda barisan tersebut adalah 4" },
      { key: "B", text: "Suku pertama barisan tersebut adalah 3" },
      { key: "C", text: "Suku ke-10 barisan tersebut adalah 43" },
      { key: "D", text: "Rumus suku ke-$n$ adalah $U_n = 4n - 1$" },
      { key: "E", text: "Jumlah lima suku pertama barisan tersebut adalah 50" }
    ],
    answer: ["A", "B", "D"],
    explanation: "$b = \\frac{U_8 - U_3}{8 - 3} = \\frac{31 - 11}{5} = 4$ (A benar). $a = U_3 - 2b = 11 - 8 = 3$ (B benar). $U_n = 3 + (n-1)4 = 4n - 1$ (D benar). Pernyataan C salah karena $U_{10} = 4(10) - 1 = 39$. Pernyataan E salah karena $S_5 = \\frac{5}{2}(3 + 19) = 55$."
  },
  {
    id: 27,
    category: "Barisan & Deret",
    type: "PGK",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Membandingkan pertumbuhan tetap dan pertumbuhan persentase dua usaha",
    stimulus: "Dua usaha memulai dengan omzet bulan pertama yang sama, yaitu Rp10 juta. Omzet usaha X naik tetap Rp2 juta setiap bulan. Omzet usaha Y naik 20% setiap bulan dari omzet bulan sebelumnya.",
    question: "Pilih SEMUA pernyataan yang BENAR. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Pada bulan ke-2, omzet kedua usaha sama, yaitu Rp12 juta" },
      { key: "B", text: "Pada bulan ke-3, omzet usaha X lebih besar daripada usaha Y" },
      { key: "C", text: "Omzet usaha Y pada bulan ke-4 adalah Rp17,28 juta" },
      { key: "D", text: "Omzet usaha X membentuk barisan aritmetika, sedangkan omzet usaha Y membentuk barisan geometri" },
      { key: "E", text: "Mulai bulan ke-3, omzet usaha X selalu lebih besar daripada usaha Y" }
    ],
    answer: ["A", "C", "D"],
    explanation: "Usaha X: aritmetika ($a = 10$, $b = 2$) sehingga 10, 12, 14, 16, ... Usaha Y: geometri ($a = 10$, $r = 1{,}2$) sehingga omzetnya 10; 12; 14,4; 17,28; dan seterusnya. Bulan ke-2 sama-sama 12 (A benar). Bulan ke-3: X = 14 dan Y = 14,4, jadi Y lebih besar (B salah). Bulan ke-4: Y = 17,28 (C benar). D benar. E salah karena mulai bulan ke-3 omzet Y justru selalu lebih besar."
  },
  {
    id: 28,
    category: "Barisan & Deret",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menentukan kebenaran pernyataan tentang suku, rasio, dan jumlah",
    stimulus: "Diberikan barisan geometri $2, 6, 18, \\dots$",
    question: "Pilih SEMUA pernyataan yang BENAR. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Rasio barisan tersebut adalah 3" },
      { key: "B", text: "Suku ke-5 barisan tersebut adalah 486" },
      { key: "C", text: "Jumlah empat suku pertama adalah 80" },
      { key: "D", text: "Rumus suku ke-$n$ adalah $U_n = 2 \\cdot 3^n$" },
      { key: "E", text: "Jumlah tiga suku pertama adalah 26" }
    ],
    answer: ["A", "C", "E"],
    explanation: "$r = \\frac{6}{2} = 3$ (A benar). $U_5 = 2 \\cdot 3^4 = 162$, bukan 486 (B salah; 486 adalah $U_6$). $S_4 = \\frac{2(3^4 - 1)}{3 - 1} = 80$ (C benar). Rumus yang benar adalah $U_n = 2 \\cdot 3^{n-1}$, bukan $2 \\cdot 3^n$ (D salah). $S_3 = 2 + 6 + 18 = 26$ (E benar)."
  },
  {
    id: 29,
    category: "Barisan & Deret",
    type: "PGK",
    level: "C6 (Mencipta)",
    kategori_kisi: "Sulit",
    indikator: "Memodelkan dan menyimpulkan tiga bilangan yang berubah pola",
    stimulus: "Tiga bilangan membentuk barisan aritmetika dengan jumlah 18. Jika bilangan ketiga ditambah 1, ketiga bilangan tersebut membentuk barisan geometri.",
    question: "Pilih SEMUA pernyataan yang BENAR. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Bilangan kedua pada barisan aritmetika tersebut adalah 6" },
      { key: "B", text: "Salah satu kemungkinan ketiga bilangan tersebut adalah 4, 6, 8" },
      { key: "C", text: "Untuk bilangan 4, 6, 8, barisan geometri yang terbentuk memiliki rasio $\\frac{3}{2}$" },
      { key: "D", text: "Hanya ada satu kemungkinan barisan aritmetika yang memenuhi syarat" },
      { key: "E", text: "Barisan geometri yang terbentuk selalu memiliki rasio $\\frac{3}{2}$" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Misalkan bilangannya $6 - d$, $6$, $6 + d$ (jumlah $= 18$, jadi bilangan kedua 6; A benar). Setelah suku ketiga ditambah 1: $(6 - d), 6, (7 + d)$ geometri, sehingga $6^2 = (6 - d)(7 + d)$, yaitu $d^2 + d - 6 = 0$ dan $d = 2$ atau $d = -3$. Untuk $d = 2$: 4, 6, 8 menjadi 4, 6, 9 dengan rasio $\\frac{3}{2}$ (B dan C benar). Untuk $d = -3$: 9, 6, 3 menjadi 9, 6, 4 dengan rasio $\\frac{2}{3}$, sehingga ada dua kemungkinan (D dan E salah)."
  },
  {
    id: 30,
    category: "Matematika Keuangan",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menganalisis pernyataan tentang bunga per periode dan saldo akhir",
    stimulus: "Modal Rp2.000.000 disimpan dengan bunga majemuk 10% per tahun selama 3 tahun.",
    question: "Pilih SEMUA pernyataan yang BENAR. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Bunga pada tahun pertama adalah Rp200.000" },
      { key: "B", text: "Bunga pada tahun kedua adalah Rp200.000" },
      { key: "C", text: "Saldo akhir tahun ketiga adalah Rp2.662.000" },
      { key: "D", text: "Total bunga selama tiga tahun adalah Rp600.000" },
      { key: "E", text: "Bunga setiap tahun sama besar karena dihitung dari modal awal" }
    ],
    answer: ["A", "C"],
    explanation: "Tahun 1: bunga $= 10\\% \\times 2.000.000 = 200.000$, saldo 2.200.000 (A benar). Tahun 2: bunga $= 220.000$, saldo 2.420.000 (B salah). Tahun 3: bunga $= 242.000$, saldo 2.662.000 (C benar). Total bunga $= 662.000$, bukan 600.000 (D salah). Pada bunga majemuk, bunga setiap tahun membesar karena dihitung dari saldo tahun sebelumnya (E salah; itu ciri bunga tunggal)."
  },
  {
    id: 31,
    category: "Matematika Keuangan",
    type: "PGK",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Menganalisis nilai akhir dan nilai sekarang rente postnumerando dan pranumerando",
    stimulus: "Setoran Rp1.000.000 dilakukan setiap tahun selama 3 tahun dengan bunga majemuk 10% per tahun. Diketahui $(1{,}1)^3 = 1{,}331$ dan $(1{,}1)^{-3} = 0{,}7513$.",
    question: "Pilih SEMUA pernyataan yang BENAR. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Nilai akhir rente postnumerando adalah Rp3.310.000" },
      { key: "B", text: "Nilai akhir rente pranumerando adalah Rp3.641.000" },
      { key: "C", text: "Nilai akhir rente pranumerando lebih kecil daripada rente postnumerando" },
      { key: "D", text: "Nilai sekarang rente postnumerando adalah Rp2.487.000" },
      { key: "E", text: "Nilai sekarang rente pranumerando sama dengan rente postnumerando, yaitu Rp2.487.000" }
    ],
    answer: ["A", "B", "D"],
    explanation: "Postnumerando: nilai akhir $= 1.000.000 \\times \\frac{1{,}331 - 1}{0{,}1} = 3.310.000$ (A benar) dan nilai sekarang $= 1.000.000 \\times \\frac{1 - 0{,}7513}{0{,}1} = 2.487.000$ (D benar). Pranumerando $=$ postnumerando $\\times (1{,}1)$, sehingga nilai akhirnya $3.310.000 \\times 1{,}1 = 3.641.000$ (B benar) dan nilai sekarangnya $2.487.000 \\times 1{,}1 = 2.735.700$. Jadi rente pranumerando selalu lebih besar (C dan E salah)."
  },
  {
    id: 32,
    category: "Matematika Keuangan",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menganalisis pernyataan tentang diskonto dan nilai tunai",
    stimulus: "Sebuah wesel bernilai nominal Rp20.000.000 jatuh tempo 4 bulan lagi dan dicairkan sekarang dengan diskonto 9% per tahun.",
    question: "Pilih SEMUA pernyataan yang BENAR. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Besar diskonto adalah Rp600.000" },
      { key: "B", text: "Nilai tunai wesel adalah Rp19.400.000" },
      { key: "C", text: "Nilai tunai wesel lebih besar daripada nilai nominalnya" },
      { key: "D", text: "Jika jangka waktunya 8 bulan dengan diskonto yang sama, besar diskonto menjadi dua kali lipat" },
      { key: "E", text: "Diskonto dihitung dari nilai tunai wesel" }
    ],
    answer: ["A", "B", "D"],
    explanation: "Diskonto $= 20.000.000 \\times 9\\% \\times \\frac{4}{12} = 600.000$ (A benar). Nilai tunai $= 20.000.000 - 600.000 = 19.400.000$ (B benar). Nilai tunai selalu lebih kecil dari nilai nominal (C salah). Dengan 8 bulan, diskonto $= 20.000.000 \\times 9\\% \\times \\frac{8}{12} = 1.200.000$, dua kali lipat (D benar). Diskonto dihitung dari nilai nominal, bukan nilai tunai (E salah)."
  },
  {
    id: 33,
    category: "Matematika Keuangan",
    type: "PGK",
    level: "C5 (Mengevaluasi)",
    kategori_kisi: "Sulit",
    indikator: "Menganalisis rencana angsuran pinjaman",
    stimulus: "Pinjaman Rp5.000.000 dilunasi dengan anuitas (angsuran tetap) Rp1.500.000 per bulan. Bunga 2% per bulan dihitung dari sisa pinjaman pada awal bulan.",
    question: "Pilih SEMUA pernyataan yang BENAR mengenai rencana angsuran bulan pertama dan kedua. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Bunga bulan pertama adalah Rp100.000" },
      { key: "B", text: "Angsuran pokok bulan pertama adalah Rp1.400.000" },
      { key: "C", text: "Sisa pinjaman setelah angsuran kedua adalah Rp2.200.000" },
      { key: "D", text: "Bunga bulan kedua sama dengan bunga bulan pertama, yaitu Rp100.000" },
      { key: "E", text: "Angsuran pokok bulan kedua lebih besar daripada angsuran pokok bulan pertama" }
    ],
    answer: ["A", "B", "E"],
    explanation: "Bulan 1: bunga $= 2\\% \\times 5.000.000 = 100.000$ (A benar); angsuran pokok $= 1.500.000 - 100.000 = 1.400.000$ (B benar); sisa pinjaman $= 3.600.000$. Bulan 2: bunga $= 2\\% \\times 3.600.000 = 72.000$ (D salah); angsuran pokok $= 1.428.000$, lebih besar dari bulan pertama (E benar); sisa pinjaman $= 3.600.000 - 1.428.000 = 2.172.000$, bukan 2.200.000 (C salah). Pada anuitas, bunga mengecil dan angsuran pokok membesar, sementara total angsuran tetap."
  },
  {
    id: 34,
    category: "Transformasi Fungsi",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "Sedang",
    indikator: "Menganalisis pernyataan tentang grafik fungsi eksponen hasil transformasi",
    stimulus: "Grafik fungsi $f(x) = 2^x$ dicerminkan terhadap sumbu-$X$, kemudian ditranslasikan oleh $\\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$ sehingga menghasilkan grafik $g$.",
    question: "Pilih SEMUA pernyataan yang BENAR mengenai grafik $g$. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Persamaan grafik $g$ adalah $y = -2^x + 4$" },
      { key: "B", text: "Asimtot horizontal grafik $g$ adalah $y = 0$" },
      { key: "C", text: "Grafik $g$ memotong sumbu-$Y$ di titik $(0, 3)$" },
      { key: "D", text: "Grafik $g$ merupakan fungsi naik" },
      { key: "E", text: "Grafik $g$ melalui titik $(1, 1)$" }
    ],
    answer: ["A", "C"],
    explanation: "Refleksi sumbu-$X$: $y = -2^x$. Translasi $\\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$: $y = -2^x + 4$ (A benar). Asimtot horizontalnya bergeser dari $y = 0$ menjadi $y = 4$ (B salah). Saat $x = 0$: $y = -1 + 4 = 3$, jadi memotong sumbu-$Y$ di $(0, 3)$ (C benar). Karena $-2^x$ semakin kecil saat $x$ membesar, grafik $g$ turun (D salah). Saat $x = 1$: $y = -2 + 4 = 2$, bukan 1 (E salah)."
  },
  {
    id: 35,
    category: "Transformasi Fungsi",
    type: "PGK",
    level: "C6 (Mencipta)",
    kategori_kisi: "Sulit",
    indikator: "Menentukan komposisi transformasi yang tepat berdasarkan ciri grafik",
    stimulus: "Grafik $f(x) = 2^x$ ditransformasikan menjadi grafik $g$ dengan ciri-ciri: (i) grafik turun, (ii) memiliki asimtot horizontal $y = 3$, dan (iii) memotong sumbu-$Y$ di titik $(0, 2)$.",
    question: "Pilih SEMUA pernyataan yang BENAR. (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Refleksi terhadap sumbu-$X$ dilanjutkan translasi $\\begin{pmatrix} 0 \\\\ 3 \\end{pmatrix}$ menghasilkan grafik dengan ciri tersebut" },
      { key: "B", text: "Translasi $\\begin{pmatrix} 0 \\\\ 3 \\end{pmatrix}$ dilanjutkan refleksi terhadap sumbu-$X$ menghasilkan asimtot $y = -3$, sehingga tidak sesuai dengan ciri tersebut" },
      { key: "C", text: "Refleksi terhadap sumbu-$X$ dilanjutkan translasi $\\begin{pmatrix} 0 \\\\ -3 \\end{pmatrix}$ menghasilkan grafik dengan ciri tersebut" },
      { key: "D", text: "Refleksi terhadap sumbu-$Y$ dilanjutkan translasi $\\begin{pmatrix} 0 \\\\ 3 \\end{pmatrix}$ menghasilkan grafik dengan ciri tersebut" },
      { key: "E", text: "Persamaan grafik $g$ adalah $y = -2^x + 3$" }
    ],
    answer: ["A", "B", "E"],
    explanation: "Grafik turun dan asimtot di atas $y = 0$ menunjukkan adanya refleksi sumbu-$X$ dan translasi ke atas. Refleksi sumbu-$X$: $y = -2^x$, lalu translasi $\\begin{pmatrix} 0 \\\\ 3 \\end{pmatrix}$: $y = -2^x + 3$ dengan asimtot $y = 3$ dan titik $(0, 2)$ (A dan E benar). Bila translasi dulu ($y = 2^x + 3$) lalu refleksi sumbu-$X$, hasilnya $y = -2^x - 3$ dengan asimtot $y = -3$ (B benar). Translasi $\\begin{pmatrix} 0 \\\\ -3 \\end{pmatrix}$ menghasilkan asimtot $y = -3$ (C salah). Refleksi sumbu-$Y$ menghasilkan $y = 2^{-x} + 3$ yang melalui $(0, 4)$, bukan $(0, 2)$ (D salah)."
  }
];
