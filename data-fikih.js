// DATA KISI-KISI & SOAL FIKIH KELAS XI (JINAYAH DAN PERADILAN ISLAM)
const FIKIH_SUMMARY = {
  title: "Ringkasan Kilat Fikih Kelas XI - Jinayah & Peradilan Islam",
  sections: [
    {
      category: "1. Pembunuhan, Qishash, dan Diyat",
      points: [
        "**Tiga Macam Pembunuhan**:",
        "  • **Pembunuhan Sengaja (*Qatl al-'Amd*)**: Menggunakan alat yang lazimnya mematikan disertai niat. Hukuman: **Qishash** (hukum mati). Jika dimaafkan ahli waris, wajib membayar **Diyat Mughallazah** secara tunai dari harta pelaku sendiri.",
        "  • **Pembunuhan Mirip Sengaja (*Qatl Syibh al-'Amd*)**: Menggunakan alat yang lazimnya tidak mematikan (seperti kayu kecil/tamparan), berniat menganiaya tetapi korban tewas. Hukuman: **Diyat Mughallazah** yang ditanggung oleh keluarga pelaku (*'aqilah*) dicicil selama 3 tahun + **Kaffarah** (puasa 2 bulan berturut-turut). Tidak ada qishash.",
        "  • **Pembunuhan Tersalah/Kelalaian (*Qatl al-Khata'*)**: Tidak berniat membunuh dan tidak berniat menganiaya (misal: kecelakaan lalu lintas/kelalaian). Hukuman: **Diyat Mukhaffafah** yang ditanggung *'aqilah* dicicil 3 tahun + **Kaffarah**.",
        "**Diyat (Denda Darah)**:",
        "  • **Diyat Mughallazah (Berat)**: 100 ekor unta (30 hiqqah, 30 jadz'ah, 40 khalifah/unta bunting).",
        "  • **Diyat Mukhaffafah (Ringan)**: 100 ekor unta dibagi 5 kategori (masing-masing 20 ekor: hiqqah, jadz'ah, binta makhadh, binta labun, ibna labun).",
        "  • **Arsy**: Diyat pengganti untuk luka/rusaknya anggota tubuh selain nyawa.",
        "**Difa'un 'an Nafs (Bela Diri)**: Seseorang yang terpaksa membunuh penyerang demi menyelamatkan nyawa, harta, atau kehormatannya yang sah, darah penyerang adalah *hadar* (sia-sia) sehingga pemilik rumah bebas dari qishash, diyat, dan kaffarah.",
        "**Orang Tua Membunuh Anak**: Orang tua tidak diqishash atas pembunuhan anak kandungnya ('*la yuqtalu walidun bi waladihi*'), namun wajib membayar diyat mughallazah dan dihukum ta'zir berat."
      ]
    },
    {
      category: "2. Jarimah Hudud (Zina, Qadzaf, Sariqah, Hirabah, Bughat)",
      points: [
        "**Zina**:",
        "  • **Muhshan** (pernah menikah sah): Dihukum **Rajam** (dilempar batu sampai mati).",
        "  • **Ghairu Muhshan** (lajang): Dicambuk **100 kali** dan menurut Mazhab Syafi'i ditambah **diasingkan (*taghrib*) selama 1 tahun** sejauh jarak qashar shalat.",
        "  • **Alat Bukti Zina**: Pengakuan 4 kali atau kesaksian **4 orang laki-laki adil** yang melihat langsung. Foto/video dan kehamilan saja tidak cukup menjatuhkan had zina karena mengandung unsur *syubhat*.",
        "  • **Pencabutan Pengakuan (*Ar-ruju' 'anil iqrar*)**: Hakim wajib menerima pencabutan pengakuan sebelum had selesai dilaksanakan, dan hukuman had otomatis gugur.",
        "**Qadzaf & Li'an**:",
        "  • **Qadzaf**: Menuduh orang mukhsan berzina tanpa menghadirkan 4 saksi adil. Sanksi: **80 kali cambuk**, **ditolak kesaksiannya selamanya**, dan **dinyatakan fasik**.",
        "  • Jika saksi pelapor kurang dari 4 (misal hanya 3 orang), maka ketiga saksi tersebut yang dijatuhi had qadzaf 80 cambuk.",
        "  • **Li'an**: Prosedur bagi suami yang menuduh istrinya berzina tanpa 4 saksi. Suami bersumpah 4 kali atas nama Allah dan ke-5 melaknat diri jika dusta; istri membalas sumpah agar terbebas dari had rajam.",
        "**Sariqah (Pencurian)**:",
        "  • **Syarat Had Potong Tangan**: Pelaku mukallaf, barang milik orang lain secara sah, diambil diam-diam dari tempat penyimpanan yang semestinya (**Hirz**), dan nilainya mencapai batas minimal (**Nishab**, yaitu 1/4 dinar emas atau 3 dirham perak).",
        "  • **Penggugur Had Sariqah**: Barang kurang dari nishab, pencurian dalam kondisi darurat kelaparan (*amur ramadah*), pencurian oleh anak belum baligh, pencurian harta orang tua/anak (ada *syubhat* kepemilikan), atau barang bukan harta bernilai syariat (*ghair mutaqawwam* seperti khamr). Pelaku hanya dikenai ta'zir.",
        "  • **Khiyanah (Penggelapan Amanah)**: Tidak dipotong tangan karena barang sudah berada di tangannya, hukumannya adalah sanksi ta'zir.",
        "**Hirabah (Perampokan Bersenjata / Terorisme Jalanan)**:",
        "  • Merampas harta + membunuh = Dihukum mati lalu disalib.",
        "  • Membunuh tanpa mengambil harta = Dihukum mati (qishash).",
        "  • Mengambil harta tanpa membunuh = Dipotong tangan dan kaki secara silang (tangan kanan & kaki kiri).",
        "  • Hanya menakut-nakuti/teror = Diasingkan (*nafy*) atau dipenjara.",
        "  • Jika tobat sebelum tertangkap: Had hirabah gugur, namun hak korban atas harta dan darah tetap berlaku.",
        "**Bughat (Pemberontakan)**:",
        "  • Syarat bughat: Memiliki kekuatan bersenjata, memiliki alasan penafsiran politis (*ta'wil*), dan memiliki pemimpin (*amir*).",
        "  • Tindakan pertama pemerintah yang sah: Mengirim utusan nasihat/dialog damai (*tabayyun*).",
        "  • Perlakuan saat perang: Tawanan tidak boleh dibunuh, yang luka dirawat, yang lari tidak boleh dikejar, dan harta mereka bukan ghanimah (harus dikembalikan)."
      ]
    },
    {
      category: "3. Peradilan Islam (Al-Qadha') & Ta'zir",
      points: [
        "**Prinsip Etika Hakim (*Adab al-Qadhi*)**: Hakim dilarang mengadili saat marah, lapar berat, haus, atau mengantuk; wajib memperlakukan kedua pihak secara adil dan setara dalam pandangan, ucapan, dan tempat duduk.",
        "**Menyidangkan Kerabat**: Hakim dilarang menyidangkan perkara anak kandung, istri, atau kerabat dekatnya sendiri untuk menghindari praduga keberpihakan (*tuhmah*); hakim wajib menolak atau mengundurkan diri.",
        "**Hukum Acara Pembuktian**: *'Al-bayyinatu 'ala al-mudda'i wal yaminu 'ala man ankara'* (Beban bukti ada pada penggugat, sedangkan sumpah dibebankan pada tergugat yang mengingkari). Jika penggugat tidak punya saksi/bukti, hakim meminta tergugat bersumpah.",
        "**Pembatalan Putusan (*Naqdh al-Hukm*)**: Putusan hakim batal demi hukum jika bertentangan secara nyata dengan *nash qath'i* (Al-Qur'an/Sunnah Mutawatir) atau *Ijma'*.",
        "**Macam-Macam Hakim**:",
        "  • **Qadhi**: Hakim peradilan umum menangani perkara perdata dan pidana.",
        "  • **Muhtasib**: Hakim pengawas ketertiban umum, timbangan pasar, dan moralitas sosial (wilayatul hisbah).",
        "  • **Wali al-Mazalim**: Mahkamah tinggi yang menangani pengaduan rakyat atas kesewenang-wenangan penguasa, pejabat, atau perwira militer.",
        "  • **Muhakkam**: Hakim wasit/arbitrase yang dipilih atas kerelaan kedua pihak yang bersengketa.",
        "**Ta'zir**: Sanksi atas tindak pidana yang jenis dan batas hukumannya tidak ditentukan secara tegas dalam Al-Qur'an atau Hadis. Bentuk dan kadarnya diserahkan kepada ijtihad hakim / ulil amri demi kemaslahatan umum."
      ]
    }
  ]
};

const FIKIH_QUESTIONS = [
  {
    id: 1,
    category: "Pembunuhan & Diyat",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis akibat hukum (qishash, diyat, kaffarah) atas kematian penyerang yang terjadi saat pemilik rumah membela diri",
    stimulus: "Seorang pemilik rumah terbangun di malam hari karena mendengar kegaduhan. Ia mendapati seorang pencuri bersenjata parang yang langsung mengayunkan senjata hendak menebas kepalanya. Dalam keadaan terdesak dan membela jiwanya (difa'un 'an nafs), pemilik rumah memukul kepala penyerang menggunakan balok kayu hingga penyerang tewas di tempat.",
    question: "Berdasarkan prinsip fikih jinayah, akibat hukum yang berlaku bagi pemilik rumah tersebut adalah...",
    options: [
      { key: "A", text: "Dikenai hukuman qishash karena menghilangkan nyawa manusia secara sengaja" },
      { key: "B", text: "Bebas dari hukuman qishash, tetapi wajib membayar diyat mukhaffafah kepada keluarga penyerang" },
      { key: "C", text: "Bebas dari tuntutan qishash, diyat, dan kaffarah karena darah penyerang berstatus hadar (tidak dijamin syariat)" },
      { key: "D", text: "Wajib membayar kaffarah berupa puasa dua bulan berturut-turut tanpa diyat" }
    ],
    answer: "C",
    explanation: "Dalam konsep 'difa'un 'an nafs' (pembelaan diri yang sah dari ancaman pembunuhan), darah penyerang dihukumi hadar (gugur kehormatannya). Maka pihak yang membela diri bebas murni dari qishash, diyat, maupun kaffarah."
  },
  {
    id: 2,
    category: "Pembunuhan & Diyat",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Mengklasifikasikan jenis pembunuhan dan menentukan sanksinya pada kasus kematian akibat kelalaian pengemudi",
    stimulus: "Seorang sopir truk mengantuk berat saat mengemudi di jalan raya antarprovinsi hingga menabrak pengendara sepeda motor hingga tewas seketika. Sopir tersebut sama sekali tidak mengenal korban dan tidak memiliki niat untuk melukai siapa pun.",
    question: "Kasus tersebut diklasifikasikan sebagai jenis pembunuhan apa dan bagaimana ketentuan sanksi syariatnya?",
    options: [
      { key: "A", text: "Pembunuhan sengaja (qatl al-'amd); dikenai qishash hukuman mati" },
      { key: "B", text: "Pembunuhan mirip sengaja (qatl syibh al-'amd); diyat mughallazah tunai oleh sopir" },
      { key: "C", text: "Pembunuhan tersalah/kelalaian (qatl al-khata'); dikenai diyat mukhaffafah yang ditanggung 'aqilah (keluarga) dicicil 3 tahun ditambah kaffarah" },
      { key: "D", text: "Bebas dari sanksi syariat karena murni faktor musibah takdir" }
    ],
    answer: "C",
    explanation: "Kecelakaan lalu lintas akibat kelalaian tanpa niat membunuh tergolong pembunuhan tersalah (qatl al-khata'). Sanksinya adalah diyat mukhaffafah yang dibebankan kepada 'aqilah (kerabat pihak ayah) dicicil selama 3 tahun, disertai kaffarah (memerdekakan budak atau puasa 2 bulan berturut-turut)."
  },
  {
    id: 3,
    category: "Penganiayaan",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan penyelesaian hukum atas penganiayaan sengaja yang merusak anggota tubuh korban tanpa menimbulkan kematian",
    stimulus: "Dalam suatu perkelahian, Arman dengan sengaja memotong jari telunjuk tangan kanan Budi hingga putus menggunakan pisau dapur, namun korban tetap selamat dan tidak meninggal dunia.",
    question: "Penyelesaian hukum jinayah yang paling tepat atas perbuatan penganiayaan sengaja tersebut adalah...",
    options: [
      { key: "A", text: "Pelaku wajib dijatuhi hukuman mati secara mutlak" },
      { key: "B", text: "Berlaku qishash anggota tubuh (dipotong jari yang sama pada pelaku) jika memungkinkan tanpa melampaui batas, atau membayar diyat khusus anggota tubuh (arsy) bila dimaafkan" },
      { key: "C", text: "Pelaku hanya dihukum teguran lisan tanpa ganti rugi materiil" },
      { key: "D", text: "Wajib membayar diyat penuh sebesar seratus ekor unta" }
    ],
    answer: "B",
    explanation: "Pada penganiayaan sengaja terhadap anggota badan (jarh al-'amd), berlaku qishash seimbang pada anggota tubuh yang sama asalkan aman dari bahaya kematian. Jika korban memaafkan qishash, pelaku wajib membayar ganti rugi (arsy/diyat anggota badan)."
  },
  {
    id: 4,
    category: "Qadzaf",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menentukan konsekuensi hukum tuduhan zina tanpa saksi yang disampaikan melalui media digital",
    stimulus: "Seseorang membuat unggahan video viral di media sosial yang secara terang-terangan menuduh seorang perempuan muslimah terhormat berbuat zina dengan pria lain. Ketika dipanggil ke pengadilan, pengunggah tidak mampu menghadirkan empat orang saksi pria yang adil.",
    question: "Konsekuensi hukum had qadzaf yang dijatuhkan kepada pelaku penyebar tuduhan tersebut adalah...",
    options: [
      { key: "A", text: "Dicambuk 100 kali dan dipenjara seumur hidup" },
      { key: "B", text: "Dicambuk 80 kali, gugur hak kesaksiannya selamanya, dan dicap sebagai orang fasik" },
      { key: "C", text: "Hanya dikenakan denda uang tanpa sanksi fisik" },
      { key: "D", text: "Dihukum buang selama satu tahun penuh" }
    ],
    answer: "B",
    explanation: "Berdasarkan QS. An-Nur ayat 4, pelaku qadzaf (menuduh wanita baik-baik berzina tanpa 4 saksi) dijatuhi tiga hukuman: dicambuk 80 kali, ditolak kesaksiannya untuk selama-lamanya, dan dinilai sebagai orang fasik."
  },
  {
    id: 5,
    category: "Zina",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan langkah hakim ketika pelaku zina mencabut pengakuan sebelum had dilaksanakan",
    stimulus: "Seorang pria mendatangi pengadilan dan empat kali mengaku bahwa dirinya telah berzina. Hakim memutuskan sanksi had atas dasar pengakuan tersebut. Namun sesaat sebelum eksekusi hukuman dimulai, pria tersebut mencabut kembali pengakuannya (ar-ruju' 'anil iqrar) dan menyatakan dirinya tidak berzina.",
    question: "Langkah syar'i yang wajib diambil oleh hakim dalam situasi tersebut adalah...",
    options: [
      { key: "A", text: "Tetap melaksanakan had karena pengakuan di awal sudah sah empat kali" },
      { key: "B", text: "Menerima pencabutan pengakuan dan menggugurkan sanksi had demi menghindari keraguan (syubhat)" },
      { key: "C", text: "Menghukum mati pelaku karena dianggap mempermainkan peradilan" },
      { key: "D", text: "Menghukum cambuk keluarga pelaku sebagai pengganti" }
    ],
    answer: "B",
    explanation: "Dalam jinayah hudud yang murni hak Allah (seperti zina), pencabutan pengakuan (ar-ruju' 'anil iqrar) wajib diterima hakim dan menggugurkan had, berdasarkan kaidah 'idra'ul hudud bisy-syubuhat' (hindarilah hukuman had karena adanya kesamaran/keraguan)."
  },
  {
    id: 6,
    category: "Zina",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan sanksi had bagi pelaku zina berstatus muhshan yang terbukti oleh empat saksi",
    stimulus: "Seorang pria yang telah memiliki istri sah terbukti secara meyakinkan melakukan perzinaan di hadapan sidang mahkamah melalui kesaksian empat orang laki-laki muslim yang adil.",
    question: "Bentuk sanksi had yang wajib dijatuhkan kepada pelaku zina muhshan tersebut adalah...",
    options: [
      { key: "A", text: "Dicambuk seratus kali lalu diasingkan satu tahun" },
      { key: "B", text: "Dihukum rajam (dilempar batu) hingga meninggal dunia" },
      { key: "C", text: "Dipotong tangan kanannya dan diasingkan" },
      { key: "D", text: "Membayar diyat mughallazah kepada masyarakat" }
    ],
    answer: "B",
    explanation: "Pelaku zina berstatus muhshan (sudah baligh, berakal, merdeka, dan pernah berhubungan intim dalam pernikahan sah) dijatuhi sanksi had rajam (dilempar batu sampai mati)."
  },
  {
    id: 7,
    category: "Zina",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan penyelesaian kasus kehamilan di luar nikah yang tidak disertai saksi maupun pengakuan",
    stimulus: "Seorang wanita lajang ditemukan dalam kondisi hamil di luar nikah. Di pengadilan, tidak ada empat saksi yang melihat perzinaan, dan wanita tersebut bungkam serta tidak membuat pengakuan bahwa dirinya berzina (bisa jadi korban pemerkosaan atau syubhat).",
    question: "Menurut mayoritas ulama fikih (jumhur), penyelesaian hukum had zina terhadap wanita tersebut adalah...",
    options: [
      { key: "A", text: "Wajib langsung dirajam saat itu juga" },
      { key: "B", text: "Tidak dapat dijatuhi had zina semata-mata karena kehamilan, sebab ada syubhat kemungkinan pemaksaan/perkosaan" },
      { key: "C", text: "Dikenai hukuman potong tangan dan kaki bersilang" },
      { key: "D", text: "Keluarga wanita tersebut yang wajib dijatuhi hukuman cambuk" }
    ],
    answer: "B",
    explanation: "Menurut jumhur ulama (Syafi'iyah, Hanafiyah, Hanabilah), kehamilan saja bukanlah bukti mutlak zina karena terdapat syubhat pemerkosaan atau ketidaksadaran. Sanksi had zina tidak boleh dijatuhkan tanpa 4 saksi atau pengakuan sukarela."
  },
  {
    id: 8,
    category: "Qadzaf & Li'an",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan penyelesaian tuduhan zina suami kepada istri yang tidak disertai empat saksi",
    stimulus: "Fahri menuduh istrinya telah berselingkuh dan berzina dengan laki-laki lain hingga melahirkan anak yang diyakini bukan darah dagingnya. Namun Fahri tidak memiliki empat orang saksi untuk membuktikannya di pengadilan.",
    question: "Prosedur hukum syariat yang harus ditempuh agar suami terhindar dari had qadzaf adalah...",
    options: [
      { key: "A", text: "Melakukan proses Li'an (bersumpah 5 kali di hadapan hakim)" },
      { key: "B", text: "Membayar diyat mukhaffafah kepada mertuanya" },
      { key: "C", text: "Menyerahkan separuh hartanya sebagai tebusan talaq" },
      { key: "D", text: "Menjalani hukuman penjara selama 3 tahun" }
    ],
    answer: "A",
    explanation: "Jika suami menuduh istrinya berzina dan tidak sanggup mendatangkan 4 saksi, solusinya adalah proses Li'an (sumpah saling melaknat 5 kali). Dengan li'an, suami terbebas dari had qadzaf dan pasangan tersebut dipisahkan untuk selamanya."
  },
  {
    id: 9,
    category: "Qadzaf & Li'an",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis akibat hukum tuduhan zina terhadap orang yang belum memenuhi syarat ihshan",
    stimulus: "Seseorang menuduh seorang anak yang belum baligh atau orang yang dikenal terang-terangan sebagai pelaku maksiat (bukan orang yang 'afif / terpelihara kehormatannya) telah berzina.",
    question: "Akibat hukum jinayah bagi penuduh dalam kasus tersebut adalah...",
    options: [
      { key: "A", text: "Tetap dijatuhi had qadzaf delapan puluh kali cambukan" },
      { key: "B", text: "Tidak dijatuhi had qadzaf 80 cambuk karena korban belum memenuhi syarat ihshan, namun penuduh dijatuhi sanksi ta'zir" },
      { key: "C", text: "Penuduh dibebaskan tanpa sanksi apa pun karena tuduhannya dianggap sah" },
      { key: "D", text: "Penuduh wajib membayar arsy sebesar sepertiga diyat" }
    ],
    answer: "B",
    explanation: "Salah satu syarat berlakunya had qadzaf (80 cambuk) adalah orang yang dituduh harus berstatus muhshan (baligh, berakal, muslim, dan dikenal menjaga kehormatan). Jika syarat ini tidak terpenuhi, had qadzaf gugur dan diganti sanksi ta'zir atas perbuatan mencela."
  },
  {
    id: 10,
    category: "Qadzaf & Li'an",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis akibat hukum ucapan sindiran (kinayah) yang ditafsirkan sebagai tuduhan zina",
    stimulus: "Saat bertengkar di balai desa, Hasan berkata kepada Zaid, 'Aku bukan orang yang suka tidur sembarangan di luar rumah seperti keluargamu!' Ucapan tersebut merupakan lafaz sindiran (kinayah) yang tidak secara tegas menyebut kata zina.",
    question: "Kedudukan hukum atas tuduhan dengan lafaz kinayah tersebut adalah...",
    options: [
      { key: "A", text: "Langsung dijatuhi had qadzaf 80 kali cambukan tanpa perlu memeriksa niat" },
      { key: "B", text: "Tidak dijatuhi had qadzaf kecuali jika pelaku mengakui niatnya menuduh zina, namun jika tidak berniat zina maka dikenakan sanksi ta'zir karena menyakiti sesama" },
      { key: "C", text: "Pelaku wajib melakukan sujud sahwi di hadapan hakim" },
      { key: "D", text: "Gugur seluruh hak waris pelaku di keluarganya" }
    ],
    answer: "B",
    explanation: "Lafaz kinayah (sindiran/samar) tidak otomatis menjatuhkan had qadzaf, melainkan bergantung pada niat penutur. Jika penutur bersumpah tidak berniat menuduh zina, had qadzaf gugur, namun ia tetap dapat dita'zir karena perkataan buruk."
  },
  {
    id: 11,
    category: "Qadzaf & Li'an",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan akibat hukum bagi para pelapor zina yang jumlah saksinya kurang dari empat orang",
    stimulus: "Tiga orang pria mendatangi pengadilan memberi kesaksian bahwa mereka melihat Pak Lurah melakukan zina. Namun ketika diminta menghadirkan saksi keempat, mereka tidak mampu menemukannya.",
    question: "Berdasarkan ketetapan syariat Islam, akibat hukum bagi ketiga orang saksi tersebut adalah...",
    options: [
      { key: "A", text: "Kesaksiannya diterima sebagian dan ditunda sidangnya" },
      { key: "B", text: "Ketiga saksi tersebut dihukumi sebagai pelaku qadzaf dan dijatuhi hukuman 80 kali cambukan" },
      { key: "C", text: "Ketiga saksi diberikan penghargaan karena berani melapor" },
      { key: "D", text: "Ketiganya hanya diminta membayar kafarat sumpah" }
    ],
    answer: "B",
    explanation: "Dalam hukum acara jinayah Islam, jika saksi zina kurang dari 4 orang pria adil (misalnya hanya 3 orang), maka kesaksian mereka batal dan ketiga saksi tersebut secara hukum dianggap sebagai penuduh zina palsu (qadzaf), sehingga masing-masing dijatuhi cambuk 80 kali."
  },
  {
    id: 12,
    category: "Sariqah",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis apakah had sariqah dapat dijatuhkan pada pengambilan barang yang diletakkan di tempat terbuka",
    stimulus: "Seseorang mengambil laptop mahal milik pengunjung kafe yang ditinggalkan tergeletak begitu saja di atas bangku taman umum tanpa ada yang menjaga.",
    question: "Apakah pelaku pengambilan laptop tersebut dijatuhi hukuman had potong tangan?",
    options: [
      { key: "A", text: "Ya, karena harga laptop melebihi nishab seperempat dinar emas" },
      { key: "B", text: "Tidak, karena barang diambil di tempat terbuka dan tidak memenuhi syarat hirz (tempat penyimpanan yang aman); hukumannya adalah ta'zir" },
      { key: "C", text: "Ya, karena setiap barang yang diambil tanpa izin pemiliknya wajib dipotong tangan" },
      { key: "D", text: "Tidak, karena barang yang berada di tempat terbuka otomatis menjadi harta temuan (luqathah)" }
    ],
    answer: "B",
    explanation: "Syarat utama penerapan had potong tangan pencurian (sariqah) adalah barang harus diambil dari hirz (tempat penyimpanan yang layak/aman). Barang yang tergeletak di tempat terbuka bukan di dalam hirz, sehingga had potong tangan gugur dan diganti ta'zir."
  },
  {
    id: 13,
    category: "Sariqah",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis pengaruh hubungan keluarga (orang tua dan anak) terhadap penerapan had pencurian",
    stimulus: "Seorang ayah mengambil uang tunai dalam jumlah besar di dalam brankas terkunci milik anak kandungnya secara diam-diam tanpa izin sang anak untuk kebutuhan pribadinya.",
    question: "Bagaimanakah kedudukan hukum had sariqah (potong tangan) terhadap ayah tersebut?",
    options: [
      { key: "A", text: "Ayah wajib dipotong tangan kanannya karena mencuri dari brankas terkunci" },
      { key: "B", text: "Had potong tangan gugur bagi ayah karena adanya syubhat kepemilikan ('anta wa maluka li-abika'), namun tetap berkewajiban mengembalikan dan bisa dita'zir" },
      { key: "C", text: "Sang anak yang dijatuhi hukuman cambuk karena melaporkan ayahnya" },
      { key: "D", text: "Ayah dihukum buang selama dua tahun di luar kota" }
    ],
    answer: "B",
    explanation: "Had potong tangan tidak diberlakukan atas orang tua yang mengambil harta anaknya berdasarkan sabda Nabi: 'Engkau dan hartamu adalah milik ayahmu'. Adanya syubhat hak nafkah dan kepemilikan menggugurkan had hudud."
  },
  {
    id: 14,
    category: "Sariqah",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis pengaruh keadaan darurat dan maqashid syariah terhadap penerapan had pencurian",
    stimulus: "Pada masa paceklik kelaparan yang dahsyat, seorang kepala keluarga yang anak-anaknya sekarat karena tidak makan tiga hari terpaksa mencuri sekarung gandum dari gudang saudagar kaya.",
    question: "Berdasarkan prinsip maqashid syariah dan keteladanan Khalifah Umar bin Khattab, keputusan hukum yang tepat adalah...",
    options: [
      { key: "A", text: "Had potong tangan tetap dijalankan secara mutlak tanpa memandang kondisi kelaparan" },
      { key: "B", text: "Had potong tangan digugurkan demi memelihara jiwa (hifdz an-nafs) dalam kondisi darurat, dan pelaku hanya diwajibkan mengganti harga gandum saat sudah mampu" },
      { key: "C", text: "Pelaku dihukum mati karena mencuri dalam jumlah banyak" },
      { key: "D", text: "Pemilik gudang yang dipotong tangannya karena menimbun bahan pangan" }
    ],
    answer: "B",
    explanation: "Keadaan darurat kelaparan menggugurkan had potong tangan, sebagaimana ijtihad Umar bin Khattab pada tahun paceklik (amur ramadah). Menjaga kelangsungan jiwa (hifdz an-nafs) lebih didahulukan daripada menjaga harta (hifdz al-mal)."
  },
  {
    id: 15,
    category: "Sariqah",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis kedudukan hukum pencurian benda yang tidak bernilai menurut syariat",
    stimulus: "Seseorang menyelinap ke gudang dan mencuri sepuluh botol minuman keras (khamr) impor berharga puluhan juta rupiah milik seorang pedagang.",
    question: "Kedudukan hukum penerapan had sariqah (potong tangan) pada kasus tersebut adalah...",
    options: [
      { key: "A", text: "Wajib dipotong tangan karena nilainya puluhan juta rupiah" },
      { key: "B", text: "Tidak dijatuhi had potong tangan karena khamr bukan harta yang bernilai secara syar'i (bukan mal mutaqawwam), namun pelaku dikenai ta'zir" },
      { key: "C", text: "Pelaku dihukum qishash karena membawa barang berbahaya" },
      { key: "D", text: "Pelaku dan pemilik khamr wajib dirajam bersama-sama" }
    ],
    answer: "B",
    explanation: "Syarat barang yang dicuri agar terkena had potong tangan harus berupa 'mal mutaqawwam' (harta bernilai sah menurut syariat). Khamr, bangkai, dan babi tidak bernilai dalam pandangan syariat Islam, sehingga had sariqah tidak berlaku."
  },
  {
    id: 16,
    category: "Sariqah",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan putusan atas pencurian yang nilainya tidak mencapai batas minimal (nishab)",
    stimulus: "Seorang pemuda tertangkap basah mencuri seekor ayam seharga Rp50.000 dari kandang tertutup milik tetangganya. Nilai tersebut jauh di bawah nishab pencurian (1/4 dinar emas atau setara kira-kira 1 gram emas murni).",
    question: "Putusan hakim peradilan Islam terhadap pemuda tersebut adalah...",
    options: [
      { key: "A", text: "Dijatuhi hukuman potong tangan kanan" },
      { key: "B", text: "Bebas dari had potong tangan, tetapi dikenai hukuman ta'zir yang mendidik dan wajib mengembalikan ayam tersebut" },
      { key: "C", text: "Dikenai hukuman cambuk 80 kali" },
      { key: "D", text: "Dikenai denda sebesar diyat unta" }
    ],
    answer: "B",
    explanation: "Pencurian barang yang nilainya tidak mencapai nishab (1/4 dinar emas) tidak dikenai had potong tangan, melainkan dikenai sanksi ta'zir dan kewajiban mengembalikan barang curian atau mengganti nilainya."
  },
  {
    id: 17,
    category: "Sariqah & Khiyanah",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Membedakan sariqah dan penggelapan amanah (khiyanah) pada pengurus yang menguasai barang",
    stimulus: "Bendahara panitia pembangunan masjid membawa kabur uang kas kasir sebesar Rp20 juta yang dipercayakan kepadanya untuk dibelanjakan semen.",
    question: "Perbuatan bendahara tersebut dikategorikan sebagai apa dan bagaimana sanksinya dalam fikih?",
    options: [
      { key: "A", text: "Sariqah (pencurian); dikenai sanksi had potong tangan kanan" },
      { key: "B", text: "Khiyanah (penggelapan amanah); tidak dipotong tangan, melainkan dikenai sanksi ta'zir dan kewajiban mengembalikan uang kas" },
      { key: "C", text: "Hirabah (perampokan); dikenai hukuman potong tangan dan kaki bersilang" },
      { key: "D", text: "Bughat; diperangi oleh masyarakat umum" }
    ],
    answer: "B",
    explanation: "Khiyanah adalah penggelapan barang yang sudah berada di bawah kekuasaan atau titipan pelaku secara sah. Karena barang tidak diambil dari hirz orang lain secara sembunyi-sembunyi, had potong tangan tidak berlaku, melainkan dihukum ta'zir."
  },
  {
    id: 18,
    category: "Hirabah",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Mengklasifikasikan jarimah dan menentukan sanksi pada perampokan bersenjata di jalan tanpa pembunuhan",
    stimulus: "Sekelompok pembegal bersenjata tajam mencegat mobil pedagang di jalan tol sepi, menodong korban, dan merampas perhiasan serta uang tunai ratusan juta rupiah tanpa melukai atau membunuh korbannya.",
    question: "Berdasarkan QS. Al-Ma'idah ayat 33, sanksi had hirabah yang tepat bagi para pembegal tersebut adalah...",
    options: [
      { key: "A", text: "Dihukum mati dan disalib" },
      { key: "B", text: "Dipotong tangan dan kaki mereka secara bersilang (tangan kanan dan kaki kiri)" },
      { key: "C", text: "Hanya dipenjara selama enam bulan" },
      { key: "D", text: "Dicambuk 100 kali dan diasingkan" }
    ],
    answer: "B",
    explanation: "Ketentuan hukuman hirabah: jika merampas harta tanpa membunuh, sanksinya adalah dipotong tangan dan kakinya secara bertimbal balik/silang (tangan kanan dan kaki kiri)."
  },
  {
    id: 19,
    category: "Hirabah",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan sanksi had hirabah yang disertai pembunuhan dan perampasan harta",
    stimulus: "Kawanan bajak laut bersenjata api menyerbu kapal nelayan, membunuh nakhoda kapal secara kejam, lalu menjarah seluruh muatan ikan dan mesin perahu.",
    question: "Sanksi had hirabah yang dijatuhkan bagi kawanan yang membunuh sekaligus menjarah harta tersebut adalah...",
    options: [
      { key: "A", text: "Dipotong tangan dan kakinya secara bersilang" },
      { key: "B", text: "Dihukum mati kemudian disalib di tempat terbuka" },
      { key: "C", text: "Diasingkan ke pulau terpencil" },
      { key: "D", text: "Wajib membayar diyat mughallazah tanpa hukuman fisik" }
    ],
    answer: "B",
    explanation: "Pelaku hirabah yang membunuh sekaligus mengambil harta korbannya dijatuhi sanksi terberat: dihukum mati lalu disalib di tempat umum sebagai peringatan keras bagi masyarakat."
  },
  {
    id: 20,
    category: "Hirabah",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis status hukum teror di jalan yang tidak disertai pengambilan harta",
    stimulus: "Sekelompok geng motor bersenjata pedang melakukan aksi teror dengan mengacungkan senjata di jalan umum, memecahkan kaca kendaraan, dan menakut-nakuti warga yang lewat tanpa mengambil harta sepeser pun dan tanpa menewaskan korban.",
    question: "Bentuk sanksi had hirabah yang diterapkan atas perbuatan teror tersebut adalah...",
    options: [
      { key: "A", text: "Dihukum mati" },
      { key: "B", text: "Dipotong tangan kanannya" },
      { key: "C", text: "Diasingkan dari wilayah tempat tinggalnya (nafy) atau dipenjarakan" },
      { key: "D", text: "Dikenai kewajiban kaffarah puasa" }
    ],
    answer: "C",
    explanation: "Pelaku hirabah yang hanya menakut-nakuti orang yang lewat di jalan tanpa merampas harta dan tanpa membunuh, hukumannya adalah diasingkan (an yunfaw min al-ardh) atau dipenjarakan sampai bertaubat."
  },
  {
    id: 21,
    category: "Bughat",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Mengidentifikasi status kelompok bersenjata penentang pemerintah dan menentukan langkah pertama pemerintah yang sah",
    stimulus: "Sebuah faksi bersenjata mendeklarasikan penolakan terhadap kepemimpinan kepala negara yang sah dengan alasan salah tafsir ayat Al-Qur'an (ta'wil bathil) dan telah menguasai satu markas distrik militer.",
    question: "Langkah pertama yang wajib dilakukan oleh pemerintah yang sah sebelum melancarkan tindakan militer adalah...",
    options: [
      { key: "A", text: "Langsung menjatuhkan bom udara tanpa peringatan" },
      { key: "B", text: "Mengirim utusan ahli ilmu untuk berdialog, meneliti tuntutan, dan menasihati mereka agar kembali taat" },
      { key: "C", text: "Menghukum mati seluruh keluarga anggota kelompok tersebut" },
      { key: "D", text: "Menyita seluruh harta kekayaan warga sipil di wilayah itu" }
    ],
    answer: "B",
    explanation: "Tahapan menghadapi kelompok bughat (pemberontak): pertama mengirim utusan untuk mencari tahu sebab pembangkangan, berdialog meluruskan kesalahpahaman ta'wil, serta mengajak kembali taat secara damai."
  },
  {
    id: 22,
    category: "Bughat",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan perlakuan terhadap tawanan, yang terluka, yang melarikan diri, dan harta kelompok bughat",
    stimulus: "Setelah pertempuran sengit melawan kelompok bughat usai, pasukan pemerintah berhasil mengamankan medan pertempuran.",
    question: "Perlakuan syar'i yang benar terhadap tawanan, korban luka, buronan, dan harta kelompok bughat adalah...",
    options: [
      { key: "A", text: "Tawanan dieksekusi mati dan harta mereka dibagi sebagai ghanimah" },
      { key: "B", text: "Tawanan tidak boleh dibunuh, yang terluka dirawat, yang melarikan diri tidak dikejar, dan harta benda mereka tidak boleh dijadikan rampasan perang (harus dikembalikan)" },
      { key: "C", text: "Seluruh anggota bughat dijadikan budak sahaya" },
      { key: "D", text: "Harta benda bughat dibakar habis di lapangan terbuka" }
    ],
    answer: "B",
    explanation: "Prinsip perang melawan bughat berbeda dengan orang kafir harbi: memerangi bughat tujuannya menyadarkan bukan membinasakan. Maka tawanan tak boleh dibunuh, korban luka tak boleh dihabisi, buronan tak dikejar, dan hartanya bukan ghanimah."
  },
  {
    id: 23,
    category: "Peradilan Islam",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan sikap hakim yang menyidangkan perkara kerabatnya sesuai etika peradilan",
    stimulus: "Hakim Ahmad ditugaskan memimpin sidang sengketa warisan yang salah satu pihak tergugatnya adalah anak kandungnya sendiri.",
    question: "Sikap etis yang wajib diambil oleh Hakim Ahmad sesuai prinsip adab al-qadha' adalah...",
    options: [
      { key: "A", text: "Tetap menyidangkan perkara tersebut agar cepat selesai" },
      { key: "B", text: "Menolak atau mengundurkan diri dari memeriksa perkara tersebut demi menjaga objektivitas dan menghindari prasangka keberpihakan (tuhmah)" },
      { key: "C", text: "Memenangkan pihak lawannya agar dianggap hakim yang adil oleh masyarakat" },
      { key: "D", text: "Menyerahkan perkara kepada panitera tanpa sidang" }
    ],
    answer: "B",
    explanation: "Hakim dilarang menyidangkan perkara yang melibatkan orang tua, anak kandung, atau istrinya, karena adanya tuduhan keberpihakan (tuhmah). Hakim wajib mengundurkan diri dan mendelegasikan ke hakim lain."
  },
  {
    id: 24,
    category: "Peradilan Islam",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan cara mengambil putusan majelis hakim yang berbeda ijtihad",
    stimulus: "Dalam sebuah perkara perdata syariah rumit yang ditangani oleh tiga hakim majelis, terjadi perbedaan ijtihad hukum antara hakim satu dengan lainnya.",
    question: "Bagaimanakah mekanisme syar'i pengambilan putusan peradilan dalam majelis hakim yang berbeda pendapat?",
    options: [
      { key: "A", text: "Mengundi nomor koin untuk memilih salah satu pendapat" },
      { key: "B", text: "Musyawarah mufakat, dan jika tidak tercapai diambil berdasarkan suara terbanyak (mayoritas) majelis hakim" },
      { key: "C", text: "Membatalkan seluruh perkara dan membiarkan para pihak bersengketa selamanya" },
      { key: "D", text: "Meminta pendapat saksi ahli yang bukan muslim" }
    ],
    answer: "B",
    explanation: "Dalam majelis hakim, putusan diambil melalui musyawarah mufakat. Apabila terdapat silang pendapat, keputusan diambil berdasarkan suara mayoritas (suara terbanyak) anggota majelis hakim."
  },
  {
    id: 25,
    category: "Peradilan Islam",
    type: "PG",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis keabsahan putusan hakim yang bertentangan dengan nash qath'i",
    stimulus: "Seorang hakim menjatuhkan vonis bahwa seorang anak perempuan berhak menerima warisan dua kali lipat lebih banyak daripada anak laki-laki kandung dengan alasan emansipasi modern.",
    question: "Analisis terhadap keabsahan putusan hakim yang bertentangan secara eksplisit dengan nash Al-Qur'an (nash qath'i) adalah...",
    options: [
      { key: "A", text: "Putusan hakim tetap sah dan berkekuatan hukum tetap karena ijtihad hakim tidak boleh dibatalkan" },
      { key: "B", text: "Putusan hakim tersebut batal demi hukum (naqdh al-hukm) dan wajib dianulir karena bertentangan dengan nash yang qath'i" },
      { key: "C", text: "Putusan ditunda pelaksanaannya sampai lima tahun" },
      { key: "D", text: "Hakim hanya didenda membayar diyat kepada ahli waris" }
    ],
    answer: "B",
    explanation: "Putusan hakim wajib dibatalkan (naqdh al-hukm) apabila bertentangan dengan nash qath'i (Al-Qur'an/Sunnah Shahihah) atau bertentangan dengan Ijma' ulama."
  },
  {
    id: 26,
    category: "Jarimah Ta'zir",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Mengklasifikasikan jarimah yang sanksinya tidak ditetapkan tegas dalam nash dan menentukan bentuk sanksinya",
    stimulus: "Seseorang tertangkap mengedarkan video konten pornografi di lingkungan sekolah dan melakukan penipuan daring (online). Kedua perbuatan tersebut tidak memiliki sanksi batasan fisik tertentu dalam Al-Qur'an maupun Hadis.",
    question: "Klasifikasi tindak pidana dan penentuan sanksi hukum atas perbuatan tersebut adalah...",
    options: [
      { key: "A", text: "Jarimah Hudud; dikenai hukum potong tangan" },
      { key: "B", text: "Jarimah Qishash; pelaku wajib dibunuh" },
      { key: "C", text: "Jarimah Ta'zir; bentuk dan kadar hukumannya diserahkan kepada ketetapan hakim / penguasa demi kemaslahatan umum" },
      { key: "D", text: "Jarimah Kaffarah; pelaku hanya wajib berpuasa tiga hari" }
    ],
    answer: "C",
    explanation: "Tindak pidana yang sanksinya tidak ditentukan secara pasti oleh nash disebut Jarimah Ta'zir. Hakim atau pemerintah (ulil amri) berhak menentukan sanksi yang proporsional (penjara, denda, kerja sosial, cambuk ringan) sesuai kemaslahatan."
  },
  {
    id: 27,
    category: "Pembunuhan & Qishash",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan putusan atas pembunuhan sengaja yang dilakukan orang tua terhadap anak kandungnya",
    stimulus: "Seorang ayah yang emosi memukul kepala anak kandungnya hingga tewas seketika menggunakan senjata tajam.",
    question: "Berdasarkan hadis Rasulullah SAW mengenai kedudukan orang tua terhadap anak, putusan hukum yang dijatuhkan kepada ayah tersebut adalah...",
    options: [
      { key: "A", text: "Ayah dijatuhi hukuman mati (qishash)" },
      { key: "B", text: "Ayah tidak diqishash ('la yuqtalu walidun bi waladihi'), tetapi wajib membayar diyat mughallazah kepada ahli waris korban lainnya dan dijatuhi hukuman ta'zir berat" },
      { key: "C", text: "Ayah dibebaskan tanpa sanksi apa pun" },
      { key: "D", text: "Ayah hanya disuruh istighfar seratus kali" }
    ],
    answer: "B",
    explanation: "Rasulullah SAW bersabda: 'Orang tua tidak dibunuh (diqishash) karena membunuh anaknya'. Sebagai gantinya, ayah wajib membayar diyat mughallazah kepada ahli waris korban (selain dirinya) dan dipenjara/dita'zir berat."
  },
  {
    id: 28,
    category: "Sariqah",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan putusan atas pencurian yang dilakukan pelaku yang belum baligh",
    stimulus: "Seorang anak berusia sepuluh tahun mencuri perhiasan emas senilai 50 juta rupiah dari etalase toko perhiasan.",
    question: "Bagaimanakah putusan hukum syariat terhadap anak tersebut?",
    options: [
      { key: "A", text: "Dipenjara seumur hidup" },
      { key: "B", text: "Dipotong tangan kanannya karena telah mencapai nishab" },
      { key: "C", text: "Gugur sanksi had potong tangan karena belum baligh (belum mukallaf), namun diberi sanksi edukatif (ta'zir pembinaan) dan walinya wajib mengembalikan barang curian" },
      { key: "D", text: "Dikenai hukuman cambuk 100 kali" }
    ],
    answer: "C",
    explanation: "Anak yang belum baligh belum terkena taklif hukum pidana had ('rufi'al qalamu 'an tsalatsin'). Had potong tangan tidak berlaku bagi anak-anak, melainkan pembinaan edukatif serta ganti rugi ditanggung oleh walinya."
  },
  {
    id: 29,
    category: "Peradilan Islam",
    type: "PG",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan langkah hakim pada gugatan yang penggugatnya tidak memiliki alat bukti",
    stimulus: "Rudi menggugat Anton di hadapan hakim bahwa Anton memiliki utang Rp10 juta yang belum dibayar. Namun Rudi sama sekali tidak memiliki kuitansi, saksi, maupun bukti transfer. Anton membantah tuduhan utang tersebut.",
    question: "Sesuai kaidah hukum acara peradilan Islam, langkah yang harus diambil hakim adalah...",
    options: [
      { key: "A", text: "Langsung memenjarakan tergugat Anton" },
      { key: "B", text: "Meminta tergugat (Anton) untuk bersumpah; jika Anton bersumpah bahwa ia tidak berutang, maka gugatan Rudi ditolak" },
      { key: "C", text: "Menghukum cambuk penggugat Rudi karena menuduh" },
      { key: "D", text: "Membagi dua uang Rp10 juta tersebut kepada keduanya" }
    ],
    answer: "B",
    explanation: "Kaidah peradilan: 'Al-bayyinatu 'ala al-mudda'i wal yaminu 'ala man ankara' (Bukti wajib bagi penggugat, dan sumpah wajib bagi yang mengingkari/tergugat). Bila penggugat nihil bukti, tergugat diminta bersumpah untuk mematahkan gugatan."
  },
  {
    id: 30,
    category: "Pembunuhan & Diyat",
    type: "PG",
    level: "C2 (Memahami)",
    kategori_kisi: "LOTS",
    indikator: "Membedakan bentuk diyat dan pihak yang menanggungnya pada pembunuhan sengaja yang dimaafkan serta pembunuhan karena kelalaian",
    stimulus: "Dalam fikih jinayah, bentuk diyat dan pihak penanggungnya dibedakan secara tegas sesuai tingkat kesalahan pelaku.",
    question: "Perbedaan yang tepat antara diyat pembunuhan sengaja yang dimaafkan dan pembunuhan karena kelalaian adalah...",
    options: [
      { key: "A", text: "Pembunuhan sengaja dikenai diyat mukhaffafah dicicil keluarga; pembunuhan kelalaian dikenai diyat mughallazah tunai" },
      { key: "B", text: "Pembunuhan sengaja yang dimaafkan dikenai Diyat Mughallazah yang dibayar tunai oleh pelaku sendiri; sedangkan pembunuhan kelalaian dikenai Diyat Mukhaffafah yang ditanggung 'aqilah (keluarga) dicicil 3 tahun" },
      { key: "C", text: "Keduanya sama-sama ditanggung oleh kas negara (Baitul Mal)" },
      { key: "D", text: "Pembunuhan kelalaian tidak memiliki kewajiban diyat sama sekali" }
    ],
    answer: "B",
    explanation: "Diyat pembunuhan sengaja yang dimaafkan bersifat mughallazah (berat) dan wajib dibayar tunai dari harta pelaku sendiri. Sedangkan pembunuhan kelalaian bersifat mukhaffafah (ringan) dan ditanggung oleh 'aqilah dicicil selama 3 tahun."
  },
  {
    id: 31,
    category: "Pembunuhan & Diyat",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis akibat pemaafan ahli waris terhadap qishash dan diyat pada pembunuhan sengaja",
    stimulus: "Dalam kasus pembunuhan sengaja, keluarga korban (wali darah) memiliki otoritas penuh terhadap hukuman qishash.",
    question: "Pernyataan manakah yang BENAR mengenai akibat hukum dari pemaafan wali darah korban? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Jika seluruh ahli waris memaafkan qishash tanpa menuntut diyat, pelaku bebas murni dari qishash dan diyat" },
      { key: "B", text: "Jika ahli waris memaafkan qishash dengan menuntut diyat, maka hukuman qishash gugur dan berubah menjadi kewajiban Diyat Mughallazah" },
      { key: "C", text: "Jika salah satu saja dari beberapa ahli waris memaafkan qishash, maka hukuman qishash otomatis gugur bagi pelaku" },
      { key: "D", text: "Pemaafan ahli waris tidak memiliki pengaruh apa pun terhadap pelaksanaan eksekusi qishash" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Pernyataan A, B, dan C benar. Pemaafan wali darah menggugurkan qishash menjadi diyat mughallazah. Jika dimaafkan total tanpa diyat, pelaku bebas dari sanksi perdata. Jika ada beberapa ahli waris dan satu orang saja memaafkan, hak qishash langsung gugur demi menghargai pemaafan."
  },
  {
    id: 32,
    category: "Zina",
    type: "PGK",
    level: "C2 (Memahami)",
    kategori_kisi: "LOTS",
    indikator: "Menyebutkan sanksi pezina ghairu muhshan menurut mazhab Syafi'i",
    stimulus: "Fikih Mazhab Syafi'i merumuskan rincian hukuman bagi pelaku zina berstatus ghairu muhshan (belum pernah menikah sah) secara komprehensif berdasarkan nash hadis shahih.",
    question: "Sanksi apa sajakah yang dijatuhkan kepada pelaku zina ghairu muhshan menurut Mazhab Syafi'i? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Didera (dicambuk) sebanyak 100 kali" },
      { key: "B", text: "Diasingkan (taghrib) selama 1 tahun penuh" },
      { key: "C", text: "Jarak pengasingan sekurang-kurangnya mencapai jarak masafatul qashr (jarak boleh qashar shalat, sekitar 80 km)" },
      { key: "D", text: "Dilempari batu hingga meninggal dunia (rajam)" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Menurut Mazhab Syafi'i, had zina ghairu muhshan ada dua: didera 100 kali dan diasingkan (taghrib) selama 1 tahun ke tempat yang jaraknya minimal jarak boleh meng-qashar shalat. Pilihan D adalah hukuman untuk muhshan."
  },
  {
    id: 33,
    category: "Zina",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Mengidentifikasi alat bukti sah zina dan menilai kecukupan foto serta kehamilan sebagai bukti",
    stimulus: "Penerapan hukum had zina menuntut kehati-hatian tingkat tinggi untuk melindungi kehormatan kaum muslimin dari fitnah.",
    question: "Pernyataan manakah yang TEPAT mengenai pembuktian tindak pidana zina dalam fikih Islam? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Zina dapat terbukti secara sah melalui kesaksian empat orang laki-laki muslim yang adil dan melihat langsung kejadiannya" },
      { key: "B", text: "Pengakuan sukarela dari pelaku zina yang dinyatakan sebanyak empat kali di hadapan hakim dapat menjadi alat bukti sah" },
      { key: "C", text: "Foto atau rekaman video digital serta kehamilan saja tidak cukup kuat untuk menjatuhkan had zina karena mengandung syubhat pemalsuan atau paksaan" },
      { key: "D", text: "Kesaksian satu orang wanita sudah cukup untuk menjatuhkan had rajam bagi pelaku zina muhshan" }
    ],
    answer: ["A", "B", "C"],
    explanation: "A, B, dan C benar. Bukti zina yang diakui secara qath'i adalah 4 saksi pria adil atau pengakuan 4 kali. Bukti elektronik dan kehamilan mengandung syubhat sehingga tidak bisa dipakai menjatuhkan had rajam/cambuk."
  },
  {
    id: 34,
    category: "Qadzaf & Li'an",
    type: "PGK",
    level: "C3 (Menerapkan)",
    kategori_kisi: "LOTS",
    indikator: "Menentukan sanksi qadzaf dan cara penuduh terbebas dari had",
    stimulus: "Tuduhan zina terhadap seorang muslim yang baik memiliki ancaman sanksi yang sangat keras dalam Al-Qur'an.",
    question: "Manakah pernyataan yang BENAR mengenai sanksi qadzaf dan hal yang membebaskan penuduh dari had? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Penuduh terbebas dari had qadzaf jika berhasil menghadirkan empat orang saksi pria yang adil" },
      { key: "B", text: "Penuduh terbebas dari had qadzaf jika pihak tertuduh mengakui kebenaran perzinaan tersebut" },
      { key: "C", text: "Suami yang menuduh istrinya berzina dapat terbebas dari had qadzaf dengan melakukan sumpah Li'an" },
      { key: "D", text: "Sanksi qadzaf adalah dipotong tangan dan membayar diyat penuh" }
    ],
    answer: ["A", "B", "C"],
    explanation: "A, B, dan C adalah sebab-sebab penggugur had qadzaf bagi penuduh. Pilihan D salah karena sanksi qadzaf adalah 80 cambukan, penolakan kesaksian, dan dicap fasik."
  },
  {
    id: 35,
    category: "Sariqah",
    type: "PGK",
    level: "C2 (Memahami)",
    kategori_kisi: "LOTS",
    indikator: "Mengidentifikasi syarat penerapan had sariqah",
    stimulus: "Hukuman potong tangan bagi pencuri (sariqah) memiliki syarat-syarat yang sangat ketat agar tidak terjadi kezaliman hukum.",
    question: "Syarat-syarat apa sajakah yang harus dipenuhi agar had potong tangan dapat dijatuhkan? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Pelaku pencurian sudah berstatus mukallaf (baligh dan berakal sehat)" },
      { key: "B", text: "Barang yang dicuri mencapai nishab (senilai minimal seperempat dinar emas)" },
      { key: "C", text: "Barang diambil secara sembunyi-sembunyi dari tempat penyimpanan yang aman (hirz)" },
      { key: "D", text: "Barang yang dicuri berstatus milik bersama antara pelaku dan korban" }
    ],
    answer: ["A", "B", "C"],
    explanation: "A, B, dan C adalah syarat sah had sariqah. Jika barang milik bersama (pilihan D), terdapat syubhat kepemilikan yang menggugurkan had potong tangan."
  },
  {
    id: 36,
    category: "Sariqah",
    type: "PGK",
    level: "C2 (Memahami)",
    kategori_kisi: "LOTS",
    indikator: "Mengidentifikasi hal-hal yang menggugurkan had sariqah",
    stimulus: "Dalam kondisi tertentu, hukuman had potong tangan bagi pencuri bisa gugur dan beralih ke hukuman ta'zir.",
    question: "Hal-hal apa sajakah yang dapat menggugurkan pelaksanaan had potong tangan? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Nilai barang yang dicuri kurang dari nishab seperempat dinar emas" },
      { key: "B", text: "Pencurian dilakukan dalam kondisi bencana darurat kelaparan demi mempertahankan hidup" },
      { key: "C", text: "Barang yang dicuri merupakan benda yang tidak bernilai syariat (misal khamr atau babi)" },
      { key: "D", text: "Pencuri mengaku bertaubat saat barang bukti sudah disita di pengadilan" }
    ],
    answer: ["A", "B", "C"],
    explanation: "A, B, dan C menggugurkan had potong tangan. Pilihan D salah karena tobat setelah tertangkap dan diadili tidak menggugurkan had sariqah."
  },
  {
    id: 37,
    category: "Hirabah",
    type: "PGK",
    level: "C4 (Menganalisis)",
    kategori_kisi: "HOTS",
    indikator: "Menganalisis pengaruh tobat sebelum tertangkap terhadap had hirabah dan hak korban",
    stimulus: "Al-Qur'an surat Al-Ma'idah ayat 34 memberikan pengecualian istimewa bagi para perampok/pembegal yang bertaubat dengan sungguh-sungguh sebelum mereka tertangkap oleh aparat.",
    question: "Bagaimanakah kedudukan hukum bagi pelaku hirabah yang bertaubat sebelum tertangkap? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Gugur sanksi had hirabah (seperti hukuman mati, disalib, potong silang, dan pengasingan)" },
      { key: "B", text: "Hak adami korban (tuntutan qishash atas pembunuhan dan ganti rugi harta yang dirampas) tetap berlaku kecuali dimaafkan oleh korban/ahli waris" },
      { key: "C", text: "Tobat sebelum tertangkap secara otomatis menghapus seluruh hak ganti rugi materiil korban" },
      { key: "D", text: "Pelaku wajib menyerahkan diri kepada penguasa dan berdamai dengan masyarakat" }
    ],
    answer: ["A", "B", "D"],
    explanation: "A, B, dan D tepat. Berdasarkan QS. Al-Ma'idah: 34, tobat sebelum tertangkap menggugurkan hak Allah (had hirabah), namun hak adami (qishash dan pengembalian harta korban) tetap melekat pada pelaku sampai diselesaikan dengan korban."
  },
  {
    id: 38,
    category: "Bughat & Hirabah",
    type: "PGK",
    level: "C2 (Memahami)",
    kategori_kisi: "LOTS",
    indikator: "Membedakan bughat dan hirabah dari segi tujuan dan unsurnya",
    stimulus: "Meskipun sama-sama menggunakan kekuatan senjata, bughat dan hirabah memiliki klasifikasi dan penanganan hukum yang sangat berlainan dalam fikih.",
    question: "Pernyataan manakah yang BENAR membedakan antara bughat dan hirabah? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Kelompok bughat memiliki alasan penafsiran politis/agama (ta'wil) yang melandasi pembangkangannya terhadap pemerintah" },
      { key: "B", text: "Pelaku hirabah murni bertujuan kriminal untuk merampas harta atau menimbulkan teror di jalan tanpa ta'wil" },
      { key: "C", text: "Bughat dipimpin oleh seorang pemimpin/amir dan memiliki kekuatan terorganisir untuk menggulingkan kekuasaan sah" },
      { key: "D", text: "Harta kelompok bughat yang dirampas dalam perang otomatis berstatus sebagai harta rampasan perang (ghanimah)" }
    ],
    answer: ["A", "B", "C"],
    explanation: "A, B, dan C adalah perbedaan mendasar. Pilihan D salah karena harta bughat haram dijadikan ghanimah dan wajib dikembalikan kepada pemiliknya."
  },
  {
    id: 39,
    category: "Peradilan Islam",
    type: "PGK",
    level: "C2 (Memahami)",
    kategori_kisi: "LOTS",
    indikator: "Mengidentifikasi prinsip etika hakim (adab al-qadhi)",
    stimulus: "Seorang hakim (qadhi) memegang amanah menegakkan keadilan Ilahi di muka bumi, sehingga dituntut mematuhi kode etik yang luhur.",
    question: "Prinsip-prinsip etika manakah yang wajib dipatuhi oleh seorang hakim muslim? (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Memperlakukan kedua belah pihak yang bersengketa secara adil dan setara dalam pandangan mata, cara berbicara, dan tempat duduk di persidangan" },
      { key: "B", text: "Dilarang memutus perkara saat berada dalam kondisi emosi marah, lapar yang sangat, mengantuk, atau cemas berlebih" },
      { key: "C", text: "Haram menerima hadiah atau suap (risywah) dari pihak-pihak yang sedang berperkara" },
      { key: "D", text: "Boleh menerima jamuan makan khusus dari salah satu pihak yang berperkara secara rahasia" }
    ],
    answer: ["A", "B", "C"],
    explanation: "A, B, dan C adalah kode etik fundamental (adab al-qadhi). Pilihan D adalah larangan keras karena mengarah pada suap/gratifikasi (risywah)."
  },
  {
    id: 40,
    category: "Peradilan Islam",
    type: "PGK",
    level: "C2 (Memahami)",
    kategori_kisi: "LOTS",
    indikator: "Mengidentifikasi macam-macam hakim dalam peradilan Islam dan wewenangnya",
    stimulus: "Sistem peradilan Islam klasik memiliki berbagai tingkatan dan kekhususan lembaga peradilan untuk melayani kebutuhan masyarakat.",
    question: "Identifikasi jenis hakim dan wewenangnya yang BENAR dalam sejarah peradilan Islam adalah... (Pilihan jawaban lebih dari satu)",
    options: [
      { key: "A", text: "Qadhi: Hakim peradilan umum yang menangani sengketa perdata, pidana jinayah, dan keluarga" },
      { key: "B", text: "Muhtasib: Hakim pengawas ketertiban umum, takaran/timbangan di pasar, dan moralitas sosial (hisbah)" },
      { key: "C", text: "Wali al-Mazalim: Mahkamah tinggi untuk mengadili penyalahgunaan wewenang dan kezaliman yang dilakukan oleh pejabat negara atau aparat militer" },
      { key: "D", text: "Muhakkam: Hakim penengah (arbitrase) yang dipilih sukarela oleh kedua pihak yang bersengketa untuk menyelesaikan urusan perdata" }
    ],
    answer: ["A", "B", "C", "D"],
    explanation: "Semua pilihan A, B, C, dan D benar! Qadhi (peradilan umum), Muhtasib (wilayatul hisbah/pasar & ketertiban), Wali Mazalim (pengadilan kesewenang-wenangan penguasa), dan Muhakkam (wasit arbitrase)."
  }
];
