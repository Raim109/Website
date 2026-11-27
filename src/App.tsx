import { useState, useEffect } from "react";
import {
  Building2,
  TrendingUp,
  Shield,
  Globe,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  BarChart3,
  Landmark,
  Briefcase,
  FileText,
} from "lucide-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg border-2 border-[#c9a84c] bg-[#0a1628] flex items-center justify-center group-hover:border-[#e0c068] transition-colors duration-300 overflow-hidden">
              {/* Square logo placeholder - replace src with your logo */}
              <span className="text-[#c9a84c] font-bold text-lg tracking-tight">
                RK
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wide leading-tight">
                Rajm<span className="text-[#c9a84c]">Kapital</span>
              </span>
              <span className="text-[#8899aa] text-[10px] uppercase tracking-[0.2em] leading-tight">
                Corporate Banking
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-[#b0bec5] hover:text-[#c9a84c] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-[#c9a84c] text-[#0a1628] text-sm font-semibold rounded hover:bg-[#e0c068] transition-all duration-300"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-lg border-t border-white/5">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[#b0bec5] hover:text-[#c9a84c] hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 px-4 py-3 bg-[#c9a84c] text-[#0a1628] font-semibold rounded-lg text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#0a1628]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#c9a84c] blur-[128px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#1a3a5c] blur-[100px]" />
      </div>
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-[#c9a84c] text-sm font-medium">
                Trusted by 500+ Corporations Worldwide
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Powering Growth
              <br />
              Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e0c068]">
                Strategic
              </span>
              <br />
              Banking Solutions
            </h1>
            <p className="text-[#8899aa] text-lg leading-relaxed mb-10 max-w-lg">
              RajmKapital delivers bespoke corporate banking services tailored to
              accelerate your enterprise. From capital markets to treasury
              management, we build financial strategies that endure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0a1628] font-semibold rounded-lg hover:bg-[#e0c068] transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
              >
                Explore Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-lg hover:border-[#c9a84c]/40 hover:bg-white/5 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-[#c9a84c]/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-[#c9a84c]/15 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-[#c9a84c]/20 animate-[spin_20s_linear_infinite]" />

              {/* Center card */}
              <div className="absolute inset-24 rounded-2xl bg-gradient-to-br from-[#132a45] to-[#0f2035] border border-[#c9a84c]/20 flex items-center justify-center shadow-2xl shadow-black/40">
                <div className="text-center p-6">
                  <Landmark
                    size={48}
                    className="text-[#c9a84c] mx-auto mb-4"
                  />
                  <div className="text-3xl font-bold text-white mb-1">
                    $42B+
                  </div>
                  <div className="text-[#8899aa] text-sm">Assets Under Management</div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute top-8 right-0 bg-[#132a45]/90 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">+24.8%</div>
                    <div className="text-[#8899aa] text-xs">Portfolio Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 bg-[#132a45]/90 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                    <Shield size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">AAA Rated</div>
                    <div className="text-[#8899aa] text-xs">Credit Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#8899aa] text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={18} className="text-[#c9a84c] animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "500+", label: "Corporate Clients" },
    { value: "$42B+", label: "Assets Managed" },
    { value: "35+", label: "Countries Served" },
    { value: "25+", label: "Years of Excellence" },
  ];

  return (
    <section className="relative bg-[#0d1f35] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c] mb-2">
                {stat.value}
              </div>
              <div className="text-[#8899aa] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <TrendingUp size={28} />,
      title: "Capital Markets",
      desc: "Access global capital markets with our expert advisory on IPOs, bond issuances, and structured finance solutions tailored to your growth trajectory.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Mergers & Acquisitions",
      desc: "Strategic M&A advisory from target identification through post-merger integration. We maximize value at every stage of the deal lifecycle.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Treasury Management",
      desc: "Optimize liquidity, manage risk, and streamline cash flow with our comprehensive treasury solutions designed for modern enterprises.",
    },
    {
      icon: <Globe size={28} />,
      title: "Trade Finance",
      desc: "Facilitate international trade with letters of credit, trade guarantees, and supply chain financing across 35+ jurisdictions.",
    },
    {
      icon: <Shield size={28} />,
      title: "Risk Advisory",
      desc: "Comprehensive risk assessment and mitigation strategies covering market, credit, operational, and regulatory risk frameworks.",
    },
    {
      icon: <FileText size={28} />,
      title: "Debt Structuring",
      desc: "Custom debt solutions including syndicated loans, mezzanine financing, and restructuring advisory to optimize your capital structure.",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0a1628]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#c9a84c] blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Corporate
            <br />
            Banking Solutions
          </h2>
          <p className="text-[#8899aa] max-w-2xl mx-auto text-lg">
            From strategic advisory to execution, we provide end-to-end financial
            solutions that empower enterprises to achieve their ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#132a45]/80 to-[#0f2035]/80 border border-white/5 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#c9a84c]/5"
            >
              <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-6 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#8899aa] leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#c9a84c] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0d1f35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#132a45] to-[#0a1628] border border-white/5 p-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl bg-[#0a1628] border border-white/5 p-6">
                    <Building2 size={32} className="text-[#c9a84c] mb-3" />
                    <div className="text-2xl font-bold text-white">2001</div>
                    <div className="text-[#8899aa] text-sm">Founded</div>
                  </div>
                  <div className="rounded-xl bg-[#0a1628] border border-white/5 p-6">
                    <Users size={32} className="text-[#c9a84c] mb-3" />
                    <div className="text-2xl font-bold text-white">2,400+</div>
                    <div className="text-[#8899aa] text-sm">Professionals</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-xl bg-[#0a1628] border border-white/5 p-6">
                    <Globe size={32} className="text-[#c9a84c] mb-3" />
                    <div className="text-2xl font-bold text-white">35+</div>
                    <div className="text-[#8899aa] text-sm">Global Offices</div>
                  </div>
                  <div className="rounded-xl bg-[#0a1628] border border-white/5 p-6">
                    <Shield size={32} className="text-[#c9a84c] mb-3" />
                    <div className="text-2xl font-bold text-white">AAA</div>
                    <div className="text-[#8899aa] text-sm">Credit Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              About RajmKapital
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              A Legacy of Trust,
              <br />
              A Future of Innovation
            </h2>
            <p className="text-[#8899aa] text-lg leading-relaxed mb-6">
              For over two decades, RajmKapital has been the financial partner of
              choice for leading corporations, sovereign wealth funds, and
              institutional investors across the globe.
            </p>
            <p className="text-[#8899aa] leading-relaxed mb-8">
              Our approach combines deep industry expertise with cutting-edge
              financial technology to deliver solutions that are as innovative as
              they are reliable. We believe in building lasting partnerships
              grounded in transparency, integrity, and exceptional results.
            </p>

            <div className="space-y-4">
              {[
                "Bespoke solutions for complex financial challenges",
                "Global reach with local market expertise",
                "Award-winning risk management frameworks",
                "Committed to sustainable and responsible banking",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                  </div>
                  <span className="text-[#b0bec5]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const articles = [
    {
      category: "Market Analysis",
      title: "Navigating Interest Rate Shifts: A Corporate Treasury Guide",
      date: "Dec 15, 2026",
      readTime: "8 min read",
    },
    {
      category: "Industry Report",
      title: "The Future of Sustainable Finance in Emerging Markets",
      date: "Dec 10, 2026",
      readTime: "12 min read",
    },
    {
      category: "Thought Leadership",
      title: "Digital Transformation in Corporate Banking: 2027 Outlook",
      date: "Dec 5, 2026",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="insights" className="relative py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <span className="inline-block text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Latest Thinking
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:gap-3 transition-all"
          >
            View all insights <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group rounded-2xl bg-gradient-to-br from-[#132a45]/60 to-[#0f2035]/60 border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-[#1a3a5c]/40 to-[#0f2035] flex items-center justify-center">
                <BarChart3
                  size={48}
                  className="text-[#c9a84c]/20 group-hover:text-[#c9a84c]/40 transition-colors"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-[#556677] text-xs">•</span>
                  <span className="text-[#556677] text-xs">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#c9a84c] transition-colors leading-snug">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#8899aa] text-sm">
                    {article.readTime}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0d1f35]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#c9a84c] blur-[150px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="inline-block text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Build Your
              <br />
              Financial Future
            </h2>
            <p className="text-[#8899aa] text-lg leading-relaxed mb-10">
              Connect with our team of corporate banking specialists. Whether
              you're exploring capital markets, restructuring debt, or seeking
              strategic advisory — we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <div className="text-[#8899aa]">+1 (212) 555-0190</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <div className="text-[#8899aa]">
                    corporate@rajmkapital.com
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">
                    Headquarters
                  </div>
                  <div className="text-[#8899aa]">
                    One Financial Center, 42nd Floor
                    <br />
                    New York, NY 10004
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl bg-gradient-to-br from-[#132a45]/80 to-[#0f2035]/80 border border-white/5 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#8899aa] text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0a1628] border border-white/10 rounded-lg text-white placeholder-[#556677] focus:border-[#c9a84c]/50 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-[#8899aa] text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0a1628] border border-white/10 rounded-lg text-white placeholder-[#556677] focus:border-[#c9a84c]/50 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#8899aa] text-sm mb-2">
                  Corporate Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#0a1628] border border-white/10 rounded-lg text-white placeholder-[#556677] focus:border-[#c9a84c]/50 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-[#8899aa] text-sm mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#0a1628] border border-white/10 rounded-lg text-white placeholder-[#556677] focus:border-[#c9a84c]/50 focus:outline-none transition-colors"
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label className="block text-[#8899aa] text-sm mb-2">
                  How Can We Help?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-white/10 rounded-lg text-white placeholder-[#556677] focus:border-[#c9a84c]/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your banking needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#c9a84c] text-[#0a1628] font-semibold rounded-lg hover:bg-[#e0c068] transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#070e1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg border-2 border-[#c9a84c] bg-[#0a1628] flex items-center justify-center">
                <span className="text-[#c9a84c] font-bold text-sm">RK</span>
              </div>
              <span className="text-white font-bold text-lg">
                Rajm<span className="text-[#c9a84c]">Kapital</span>
              </span>
            </div>
            <p className="text-[#8899aa] text-sm leading-relaxed mb-6">
              Delivering world-class corporate banking solutions with integrity,
              innovation, and a commitment to our clients' success.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Capital Markets",
                "M&A Advisory",
                "Treasury Management",
                "Trade Finance",
                "Risk Advisory",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[#8899aa] text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Leadership", "Careers", "Press", "ESG"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#about"
                      className="text-[#8899aa] text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Regulatory Disclosures",
                "Compliance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#8899aa] text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#556677] text-sm">
            © 2026 RajmKapital. All rights reserved.
          </p>
          <p className="text-[#556677] text-xs">
            Member FDIC. Equal Housing Lender. NMLS# 123456
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#0a1628] min-h-screen font-sans antialiased">
      <Header />
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}
