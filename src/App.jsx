import { useState, useEffect } from "react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  User,
  CheckCircle,
  Send,
  Sun,
  Moon,
  Menu,
  X,
  ChevronRight,
  FolderGit2,
  Download,
  Shield,
  Eye,
  Check,
  Copy,
  Users,
} from "lucide-react";

export default function App() {
  // --- STATE MANAGEMENT ---
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [skillFilter, setSkillFilter] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggle Theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth Scroll
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Copy Handlers
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("afifrivaykusnanto29@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+6289681305605");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      errors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Format email tidak valid";
    }
    if (!formData.message.trim()) errors.message = "Pesan tidak boleh kosong";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowToast(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setShowToast(false), 5000);
      }, 1000);
    }
  };

  // --- DATA PORTOFOLIO AFIF RIVAYKUSNANTO ---

  const skillsData = [
    { name: "React.js", category: "Frontend", level: "Lanjutan", icon: "⚛️" },
    { name: "Next.js", category: "Frontend", level: "Lanjutan", icon: "▲" },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      level: "Lanjutan",
      icon: "🟨",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: "Lanjutan",
      icon: "🌊",
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      level: "Lanjutan",
      icon: "🎨",
    },
    {
      name: "WordPress",
      category: "CMS & Backend",
      level: "Lanjutan",
      icon: "📝",
    },
    {
      name: "REST API",
      category: "CMS & Backend",
      level: "Lanjutan",
      icon: "🔄",
    },
    { name: "PHP", category: "CMS & Backend", level: "Menengah", icon: "🐘" },
    { name: "MySQL", category: "CMS & Backend", level: "Menengah", icon: "🛢️" },
    {
      name: "Node.js & Express",
      category: "CMS & Backend",
      level: "Menengah",
      icon: "🟢",
    },
    {
      name: "Git & GitHub",
      category: "Tools & DevSecOps",
      level: "Lanjutan",
      icon: "🐙",
    },
    {
      name: "Figma",
      category: "Tools & DevSecOps",
      level: "Menengah",
      icon: "📐",
    },
    {
      name: "Vercel Deployment",
      category: "Tools & DevSecOps",
      level: "Lanjutan",
      icon: "🚀",
    },
    {
      name: "DevSecOps Basic",
      category: "Tools & DevSecOps",
      level: "Dasar",
      icon: "🛡️",
    },
  ];

  const projectsData = [
    {
      id: 1,
      title: "Thriftorzo - Online Thrifting Platform",
      category: "E-Commerce",
      shortDesc:
        "Platform jual-beli barang bekas online yang dikembangkan dalam 3 sprint bersama tim.",
      fullDesc:
        "Thriftorzo adalah aplikasi jual beli barang bekas online modern. Dikerjakan secara kolaboratif oleh tim Frontend (React.js, Redux, Ant Design, Tailwind) dan Backend (Spring Boot, PostgreSQL). Terpilih sebagai Tim Terbaik pada program Frontend Developer Binar Academy.",
      tags: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "Ant Design",
        "Spring Boot",
        "PostgreSQL",
      ],
      demoUrl: "https://project-thriftorzo.vercel.app/",
      githubUrl: "https://github.com/afifrivay29",
      role: "Frontend Developer (Terpilih Tim Terbaik)",
      images: [
        {
          url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
          caption: "Halaman Beranda & Banner Promo Flash Sale",
        },
        {
          url: "https://images.unsplash.com/photo-1556742049-0a67d983416e?auto=format&fit=crop&w=1200&q=80",
          caption: "Halaman Register Pengguna Baru",
        },
        {
          url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1200&q=80",
          caption: "Halaman Login & Autentikasi",
        },
      ],
    },
    {
      id: 2,
      title: "Vercel Cocktails (Vcocktails)",
      category: "Web App",
      shortDesc:
        "Situs katalog & pencarian minuman cocktail interaktif terintegrasi REST API.",
      fullDesc:
        "Aplikasi web menu cocktail yang dibangun dengan Next.js dan Tailwind CSS. Memungkinkan pengguna menjelajahi berbagai resep minuman, melakukan pencarian menu real-time, dan melihat detail kategori secara cepat dan responsive.",
      tags: ["Next.js", "Tailwind CSS", "REST API", "Vercel"],
      demoUrl: "https://cocktaildeck.vercel.app/",
      githubUrl: "https://github.com/afifrivay29",
      role: "Full Developer",
      images: [
        {
          url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
          caption: "Halaman Beranda & Header Promo Cocktail",
        },
        {
          url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
          caption: "Fitur Live Search Menus & Hasil Filter",
        },
      ],
    },
    {
      id: 3,
      title: "My To-Do List (Job Records List)",
      category: "Utility",
      shortDesc:
        "Aplikasi manajemen tugas interaktif dengan fitur CRUD lengkap & prioritas.",
      fullDesc:
        "Aplikasi web produktivitas untuk mengelola daftar pekerjaan harian. Menerapkan operasi CRUD (Create, Read, Update, Delete) secara penuh, filter status penyelesaian, serta penataan urutan berdasarkan prioritas tugas.",
      tags: ["React.js", "HTML5", "CSS3", "LocalStorage"],
      demoUrl: "https://my-to-do-list-bay.vercel.app/",
      githubUrl: "https://github.com/afifrivay29",
      role: "Full Developer",
      images: [
        {
          url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
          caption: "Halaman Utama Daftar Tugas",
        },
        {
          url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
          caption: "Form Tambah dan Edit Tugas",
        },
        {
          url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
          caption: "Tampilan Status Tugas Selesai",
        },
      ],
    },
    {
      id: 4,
      title: "Kalkulator ReactJS (iPhone Layout)",
      category: "Utility",
      shortDesc:
        "Kalkulator web interaktif dengan desain presisi ala antarmuka iOS iPhone.",
      fullDesc:
        "Proyek eksperimental untuk menguji pemahaman logika kalkulasi matematika dan manajemen state React JS. Menghadirkan antarmuka visual yang presisi meniru layout kalkulator bawaan iPhone.",
      tags: ["React.js", "JavaScript ES6", "CSS Grid", "Flexbox"],
      demoUrl: "https://afif-kalkulator-reactjs.vercel.app/",
      githubUrl: "https://github.com/afifrivay29",
      role: "Full Developer",
      images: [
        {
          url: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=80",
          caption: "Tampilan Tampilan Awal Frame iPhone",
        },
        {
          url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
          caption: "Proses Perhitungan Operasi Matematika",
        },
      ],
    },
  ];

  const workExperience = [
    {
      company: "82Cart",
      role: "Web Developer",
      period: "Nov 2022 – Sekarang",
      location: "Jakarta, Indonesia",
      highlights: [
        "Mengelola lebih dari 120 proyek website berbasis CMS per tahun (±10–12 klien/bulan) dengan fokus pada tampilan responsif dan ramah perangkat.",
        "Melakukan lebih dari 200 proses debugging dan pengujian fitur per tahun untuk menjaga stabilitas dan performa sebelum rilis.",
        "Memberikan dukungan teknis dengan waktu respons 24–48 jam dan menyelesaikan lebih dari 95% kasus melalui kolaborasi langsung dengan tim backend.",
      ],
    },
    {
      company: "PT Telkom Indonesia",
      role: "Internship (Divisi Service Operation)",
      period: "Magang 2 Bulan",
      location: "Jakarta, Indonesia",
      highlights: [
        "Menganalisis dan mengevaluasi efisiensi alur kerja operasional peran Sub-Unit Fulfillment.",
        "Memahami struktur pelayanan teknis telekomunikasi skala nasional.",
      ],
    },
  ];

  const educationData = [
    {
      school: "Universitas Negeri Jakarta (UNJ)",
      degree: "S1 Pendidikan Teknik Elektronika",
      gpa: "IPK 3.46",
      period: "Agt 2018 – Agt 2022",
      details:
        "Fokus pada Sistem Kontrol, Dasar Pemrograman, dan Elektronika Terapan.",
    },
    {
      school: "Binar Academy",
      degree: "Frontend Developer Bootcamp (MSIB Kemkominfo)",
      gpa: "Sertifikasi MSIB",
      period: "Feb 2022 – Agt 2022",
      details:
        "Pengembangan web modern dengan React.js, Redux, REST API, Git, dan pengerjaan proyek e-commerce tim.",
    },
    {
      school: "Balitbang SDM Kominfo",
      degree: "DevSecOps Associate Training",
      gpa: "Peserta MSIB",
      period: "Program MSIB",
      details:
        "Mempelajari dasar integrasi keamanan sistem pada alur kerja DevOps & CI/CD.",
    },
  ];

  const organizationExperience = [
    {
      role: "Kepala Divisi Perlengkapan (IDEA#3)",
      org: "Kelompok Peneliti Muda (KPM) UNJ",
      period: "2020",
      desc: "Mengelola logistik dan kebutuhan operasional lomba ilmiah tingkat nasional meliputi akomodasi, transportasi, venue, dan sertifikasi.",
    },
    {
      role: "Koordinator Program ToT (Training of Trainer)",
      org: "Kelompok Peneliti Muda (KPM) UNJ",
      period: "2020",
      desc: "Mendesain kurikulum pelatihan rutin dua mingguan untuk memperluas wawasan sains & teknologi mahasiswa.",
    },
    {
      role: "Asisten Fasilitator Orientasi (Teknologi)",
      org: "KPM UNJ",
      period: "2020",
      desc: "Mendampingi calon pengurus baru selama 3 bulan dan berpartisipasi aktif dalam ajang PKM UNJ Bidang Teknologi.",
    },
  ];

  // Filtering
  const filteredSkills =
    skillFilter === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === skillFilter);

  const filteredProjects =
    projectFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === projectFilter);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 backdrop-blur-xl border-b transition-all duration-300 ${
          darkMode
            ? "bg-slate-950/80 border-slate-800/80"
            : "bg-white/80 border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight leading-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Afif Rivaykusnanto
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                Web Developer
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { id: "about", label: "Tentang" },
              { id: "experience", label: "Pengalaman" },
              { id: "skills", label: "Keahlian" },
              { id: "projects", label: "Proyek" },
              { id: "education", label: "Pendidikan" },
              { id: "contact", label: "Kontak" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? darkMode
                      ? "text-indigo-400 bg-indigo-950/50"
                      : "text-indigo-600 bg-indigo-50"
                    : darkMode
                      ? "text-slate-300 hover:text-white hover:bg-slate-900"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl ml-3 transition-all border ${
                darkMode
                  ? "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
              title="Ganti Tema"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border ${darkMode ? "bg-slate-900 border-slate-800 text-amber-400" : "bg-slate-100 border-slate-200 text-slate-700"}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl border ${darkMode ? "border-slate-800 text-slate-300" : "border-slate-200 text-slate-700"}`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className={`lg:hidden px-4 pt-2 pb-6 border-b ${
              darkMode
                ? "bg-slate-950 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {[
                { id: "about", label: "Tentang Saya" },
                { id: "experience", label: "Pengalaman Kerja" },
                { id: "skills", label: "Keahlian Teknis" },
                { id: "projects", label: "Portofolio Proyek" },
                { id: "education", label: "Pendidikan & Organisasi" },
                { id: "contact", label: "Kontak Saya" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? darkMode
                        ? "text-indigo-400 bg-indigo-950/60"
                        : "text-indigo-600 bg-indigo-50"
                      : darkMode
                        ? "text-slate-300 hover:bg-slate-900"
                        : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="hero"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Siap Berkolaborasi & Bekerja (Open to Work)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Halo, Saya <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Afif Rivaykusnanto
                </span>{" "}
                👋
              </h1>

              <p
                className={`text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <strong className={darkMode ? "text-white" : "text-slate-900"}>
                  Web Developer
                </strong>{" "}
                dengan pengalaman lebih dari{" "}
                <span className="text-indigo-400 font-bold">3 tahun</span>{" "}
                mengelola & membangun aplikasi web yang responsif, berkinerja
                tinggi, dan stabil. Menguasai{" "}
                <span className="text-indigo-400">
                  React.js, Next.js, Node.js, MySQL
                </span>
                , serta memiliki latar belakang{" "}
                <span className="text-cyan-400">DevSecOps</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all flex items-center gap-2 active:scale-95"
                >
                  <FolderGit2 size={18} />
                  Lihat Portofolio
                </button>
                <a
                  href="/CV_Afif_Rivaykusnanto.pdf"
                  download="CV_Afif_Rivaykusnanto.pdf"
                  className={`px-6 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2 border active:scale-95 ${
                    darkMode
                      ? "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200"
                      : "bg-white border-slate-300 hover:bg-slate-100 text-slate-800 shadow-sm"
                  }`}
                >
                  <Download size={18} />
                  Unduh CV
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`p-3.5 rounded-xl transition-all border active:scale-95 ${
                    darkMode
                      ? "bg-slate-900 border-slate-800 text-indigo-400 hover:bg-slate-800"
                      : "bg-white border-slate-300 text-indigo-600 hover:bg-slate-100 shadow-sm"
                  }`}
                  title="Hubungi Kontak"
                >
                  <Mail size={18} />
                </button>
              </div>

              {/* Quick Contact & Socials */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium">
                <a
                  href="https://linkedin.com/in/afifrivaykusnanto"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                    darkMode
                      ? "border-slate-800 hover:border-indigo-500 text-slate-400 hover:text-white"
                      : "border-slate-200 hover:border-indigo-500 text-slate-600"
                  }`}
                >
                  <Globe size={16} className="text-indigo-400" />
                  <span>linkedin.com/in/afifrivaykusnanto</span>
                </a>
                <a
                  href="https://github.com/afifrivay29"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                    darkMode
                      ? "border-slate-800 hover:border-indigo-500 text-slate-400 hover:text-white"
                      : "border-slate-200 hover:border-indigo-500 text-slate-600"
                  }`}
                >
                  <Globe size={16} className="text-purple-400" />
                  <span>github.com/afifrivay29</span>
                </a>
              </div>
            </div>

            {/* Right Card / Metrics Stats */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

                <div
                  className={`relative rounded-3xl p-6 sm:p-8 border shadow-2xl ${
                    darkMode
                      ? "bg-slate-900/90 border-slate-800"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {/* Badge Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800/60 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-xl">
                        👨‍💻
                      </div>
                      <div>
                        <h3 className="font-bold text-base">
                          Afif Rivaykusnanto
                        </h3>
                        <p className="text-xs text-indigo-400 font-medium">
                          Jakarta, Indonesia
                        </p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      Full-Stack
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-4">
                    <div
                      className={`p-4 rounded-2xl border flex items-center justify-between ${
                        darkMode
                          ? "bg-slate-950/60 border-slate-800/80"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div>
                        <div className="text-2xl font-black text-indigo-400">
                          120+ Proyek
                        </div>
                        <div className="text-xs text-slate-400">
                          Website Dikelola / Tahun (82Cart)
                        </div>
                      </div>
                      <Globe size={24} className="text-indigo-500/60" />
                    </div>

                    <div
                      className={`p-4 rounded-2xl border flex items-center justify-between ${
                        darkMode
                          ? "bg-slate-950/60 border-slate-800/80"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div>
                        <div className="text-2xl font-black text-emerald-400">
                          95%+ Case Closed
                        </div>
                        <div className="text-xs text-slate-400">
                          Solusi Teknis Fast Response (24-48 Jam)
                        </div>
                      </div>
                      <CheckCircle size={24} className="text-emerald-500/60" />
                    </div>

                    <div
                      className={`p-4 rounded-2xl border flex items-center justify-between ${
                        darkMode
                          ? "bg-slate-950/60 border-slate-800/80"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div>
                        <div className="text-2xl font-black text-purple-400">
                          3+ Tahun
                        </div>
                        <div className="text-xs text-slate-400">
                          Pengalaman Industri Web Dev
                        </div>
                      </div>
                      <Briefcase size={24} className="text-purple-500/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TENTANG SAYA --- */}
      <section
        id="about"
        className={`py-20 border-t ${darkMode ? "bg-slate-900/30 border-slate-900" : "bg-slate-100/60 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Tentang <span className="text-indigo-400">Saya</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Ringkasan profil profesional dan latar belakang keahlian saya
              dalam industri teknologi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div
              className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <User className="text-indigo-400" /> Ringkasan Profesional
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  Saya adalah seorang <strong>Web Developer</strong> dengan
                  pengalaman lebih dari 3 tahun dalam membangun dan memelihara
                  aplikasi web yang responsif. Terbiasa menangani volume kerja
                  tinggi seperti mengelola lebih dari 120 proyek website CMS per
                  tahun serta mengeksekusi 200+ proses debugging dan optimasi
                  performa.
                </p>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  Memiliki pemahaman mendalam dalam alur kerja kolaboratif
                  bersama tim backend, designer, dan project manager. Berlatar
                  belakang pendidikan S1 Pendidikan Teknik Elektronika UNJ (IPK
                  3.46) serta lulusan Program MSIB Bootcamp Frontend Developer
                  Binar Academy dan pelatihan DevSecOps Balitbang SDM Kominfo.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-4 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  📍 Lokasi: Jakarta, Indonesia
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  🎓 Lulusan UNJ & MSIB Kemkominfo
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-6 rounded-2xl border ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <Shield size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1">
                  Dasar DevSecOps & Security
                </h4>
                <p
                  className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  Memiliki fondasi keahlian keamanan DevSecOps hasil pelatihan
                  Balitbang SDM Kominfo untuk memastikan kode web aman.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                  <Award size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1">
                  Tim Terbaik Binar Academy
                </h4>
                <p
                  className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  Terpilih sebagai kelompok tim terbaik saat mengembangkan
                  aplikasi e-commerce Thriftorzo bersama tim Backend.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <Briefcase size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1">
                  Pengalaman Telkom Indonesia
                </h4>
                <p
                  className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  Pernah magang di PT Telkom Indonesia Divisi Service Operation
                  menganalisis peran operasional Sub-Unit Fulfillment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PENGALAMAN KERJA --- */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Pengalaman <span className="text-indigo-400">Kerja</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Rekam jejak karier profesional saya di bidang web development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-indigo-500/50 ${
                  darkMode
                    ? "bg-slate-900/80 border-slate-800"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/60">
                  <div>
                    <h3 className="text-xl font-extrabold text-indigo-400">
                      {exp.role}
                    </h3>
                    <div className="text-base font-bold flex items-center gap-2 mt-1">
                      <span>{exp.company}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-normal">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <ChevronRight
                        size={18}
                        className="text-indigo-400 shrink-0 mt-0.5"
                      />
                      <span
                        className={
                          darkMode ? "text-slate-300" : "text-slate-700"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KEAHLIAN TEKNIS --- */}
      <section
        id="skills"
        className={`py-20 border-t ${darkMode ? "bg-slate-900/30 border-slate-900" : "bg-slate-100/60 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Keahlian <span className="text-indigo-400">Teknis</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Teknologi, bahasa pemrograman, dan tools yang saya kuasai.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {["All", "Frontend", "CMS & Backend", "Tools & DevSecOps"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSkillFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    skillFilter === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : darkMode
                        ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                        : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat === "All" ? "Semua Keahlian" : cat}
                </button>
              ),
            )}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border transition-all hover:-translate-y-1 ${
                  darkMode
                    ? "bg-slate-900/80 border-slate-800 hover:border-indigo-500/50"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-indigo-400 font-medium">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROYEK & PORTOFOLIO (DENGAN GALERI GAMBAR) --- */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Portofolio <span className="text-indigo-400">Proyek</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Daftar proyek web interaktif yang telah saya bangun beserta
              lampiran screenshot tampilan.
            </p>
          </div>

          {/* Project Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {["All", "E-Commerce", "Web App", "Utility"].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  projectFilter === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : darkMode
                      ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat === "All" ? "Semua Proyek" : cat}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 hover:border-indigo-500/40"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div>
                  {/* Thumbnail Cover */}
                  <div className="relative h-60 overflow-hidden bg-slate-950">
                    <img
                      src={project.images[0].url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 border border-slate-800">
                      {project.category}
                    </div>
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setActiveImageIndex(0);
                      }}
                      className="absolute bottom-3 right-3 bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 transition-all shadow-md"
                    >
                      <Eye size={14} /> Lihat Galeri ({project.images.length})
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-indigo-400 mb-1">
                      Role: {project.role}
                    </div>
                    <h3 className="text-xl font-extrabold mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                            darkMode
                              ? "bg-slate-800/80 text-slate-300 border border-slate-700/50"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/30"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveImageIndex(0);
                    }}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                      darkMode
                        ? "border-slate-800 bg-slate-950/50 text-slate-300 hover:bg-slate-800"
                        : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL DETAIL PROYEK & GALERI SCREENSHOT --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div
            className={`relative w-full max-w-3xl rounded-3xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
              darkMode
                ? "bg-slate-900 border-slate-800 text-slate-100"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800/20 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Header Modal */}
            <div className="mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-black mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-indigo-400 font-medium mt-1">
                Peran: {selectedProject.role}
              </p>
            </div>

            {/* Galeri Image Viewer */}
            <div className="mb-6">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-950 mb-3 border border-slate-800">
                <img
                  src={selectedProject.images[activeImageIndex].url}
                  alt={selectedProject.images[activeImageIndex].caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent text-xs text-white">
                  <strong>
                    {activeImageIndex + 1}.{" "}
                    {selectedProject.images[activeImageIndex].caption}
                  </strong>
                </div>
              </div>

              {/* Thumbnail Selector */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? "border-indigo-500 scale-105"
                        : "border-slate-800 opacity-60"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Deskripsi Lengkap:
              </h4>
              <p
                className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                {selectedProject.fullDesc}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Teknologi Terimplementasi:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/30"
              >
                <ExternalLink size={16} /> Buka Website Demo (Vercel)
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`py-3 px-5 rounded-xl text-sm font-semibold border flex items-center gap-2 transition-all ${
                  darkMode
                    ? "border-slate-800 hover:bg-slate-800"
                    : "border-slate-300 hover:bg-slate-100"
                }`}
              >
                <Globe size={16} /> GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- PENDIDIKAN & ORGANISASI --- */}
      <section
        id="education"
        className={`py-20 border-t ${darkMode ? "bg-slate-900/30 border-slate-900" : "bg-slate-100/60 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pendidikan & Pelatihan */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
                  <GraduationCap className="text-indigo-400" /> Pendidikan &
                  Pelatihan
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2"></div>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border transition-all ${
                      darkMode
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{edu.school}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-semibold">
                        {edu.gpa}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-indigo-400 mb-2">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-slate-400 mb-3">
                      {edu.period}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pengalaman Organisasi */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
                  <Users className="text-purple-400" /> Pengalaman Organisasi
                </h2>
                <div className="w-12 h-1 bg-purple-500 rounded-full mt-2"></div>
              </div>

              <div className="space-y-6">
                {organizationExperience.map((org, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border transition-all ${
                      darkMode
                        ? "bg-slate-900 border-slate-800"
                        : "bg-white border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-base text-purple-400">
                        {org.role}
                      </h3>
                      <span className="text-xs text-slate-400">
                        {org.period}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-300 mb-3">
                      {org.org}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {org.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KONTAK SAYA --- */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Hubungi <span className="text-indigo-400">Saya</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Punya tawaran proyek, posisi kerja, atau pertanyaan? Kirim pesan
              langsung ke saya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-6 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
              >
                <h3 className="text-xl font-bold mb-6">Kontak Langsung</h3>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Mail size={18} />
                      </div>
                      <div className="truncate text-xs">
                        <div className="text-slate-400">Email</div>
                        <div className="font-semibold text-slate-200 truncate">
                          afifrivaykusnanto29@gmail.com
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {copiedEmail ? (
                        <Check size={16} className="text-emerald-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Phone size={18} />
                      </div>
                      <div className="truncate text-xs">
                        <div className="text-slate-400">Telepon / WhatsApp</div>
                        <div className="font-semibold text-slate-200">
                          +62 896-8130-5605
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      {copiedPhone ? (
                        <Check size={16} className="text-emerald-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                      <MapPin size={18} />
                    </div>
                    <div className="text-xs">
                      <div className="text-slate-400">Domisili</div>
                      <div className="font-semibold text-slate-200">
                        Jakarta, Indonesia
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Button */}
              <a
                href="https://wa.me/6289681305605"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <Phone size={18} /> Chat Langsung via WhatsApp
              </a>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div
                className={`p-6 sm:p-8 rounded-3xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
              >
                {showToast && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3">
                    <CheckCircle size={20} />
                    <span className="text-xs sm:text-sm font-semibold">
                      Terima kasih! Pesan Anda telah terkirim.
                    </span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                        Nama Anda
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nama Lengkap"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                          formErrors.name
                            ? "border-red-500"
                            : darkMode
                              ? "bg-slate-950 border-slate-800 focus:border-indigo-500"
                              : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[10px] text-red-500 mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@domain.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                          formErrors.email
                            ? "border-red-500"
                            : darkMode
                              ? "bg-slate-950 border-slate-800 focus:border-indigo-500"
                              : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[10px] text-red-500 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Subjek
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Penawaran Proyek / Pertanyaan"
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                        darkMode
                          ? "bg-slate-950 border-slate-800 focus:border-indigo-500"
                          : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tuliskan pesan Anda di sini..."
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                        formErrors.message
                          ? "border-red-500"
                          : darkMode
                            ? "bg-slate-950 border-slate-800 focus:border-indigo-500"
                            : "bg-slate-50 border-slate-200 focus:border-indigo-500"
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[10px] text-red-500 mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Mengirim Pesan...</span>
                    ) : (
                      <>
                        <Send size={16} /> Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className={`py-8 border-t text-center text-xs ${
          darkMode
            ? "bg-slate-950 border-slate-900 text-slate-500"
            : "bg-white border-slate-200 text-slate-500"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Afif Rivaykusnanto. Built with React.js
            & Tailwind CSS.
          </div>
          <div className="flex gap-4 font-semibold">
            <a
              href="https://linkedin.com/in/afifrivaykusnanto"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/afifrivay29"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400"
            >
              GitHub
            </a>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-indigo-400"
            >
              Kembali ke Atas ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
