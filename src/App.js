import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaGraduationCap, FaLanguage, FaGamepad, FaMusic, FaRunning, FaLaptopCode, FaMoon, FaSun, FaBriefcase, FaEnvelope, FaHome, FaUsers } from 'react-icons/fa';

// Motivasyon sözleri listesi
const motivationQuotes = [
  {
    text: "Kod yazmak, düşünceleri bilgisayarın anlayacağı dile çevirmektir.",
    author: "Steve Jobs"
  },
  {
    text: "Başarı, her gün tekrarlanan küçük çabaların toplamıdır.",
    author: "Robert Collier"
  },
  {
    text: "En iyi kod, hiç yazılmamış koddur.",
    author: "Unknown"
  },
  {
    text: "Öğrenmek asla bitmez, sadece başlangıçtır.",
    author: "Unknown"
  },
  {
    text: "Her başarısızlık, başarıya giden yolda bir adımdır.",
    author: "William Whewell"
  }
];

// Sayfa geçiş animasyonu için wrapper bileşeni
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Ana sayfa bileşeni
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return motivationQuotes[dayOfYear % motivationQuotes.length];
  });

  useEffect(() => {
    // Sistem temasını kontrol et
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Tema değiştiğinde body class'ını güncelle
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const themeToggleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Tema değiştir"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={darkMode ? 'sun' : 'moon'}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mehmet BEGUN
        </motion.h1>
        <motion.p 
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bilgisayar Mühendisliği Öğrencisi
        </motion.p>

        <motion.div 
          className="quote-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.p 
            className="quote-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            "{quote.text}"
          </motion.p>
          <motion.p 
            className="quote-author"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            - {quote.author}
          </motion.p>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href="https://github.com/MehmetBegun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/mehmet-begun-628546345/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.header>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="subtitle">Hakkımda</h2>
        <p className="text">
          Merhaba! Ben Mehmet, tutkulu bir web geliştiricisiyim. Modern web teknolojileri ve kullanıcı deneyimi konularında uzmanlaşmış durumdayım. 
          React, Node.js ve modern web teknolojileri ile yenilikçi çözümler üretmeyi seviyorum.
        </p>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="subtitle">
          <FaGraduationCap className="inline-block mr-2" /> Eğitim
        </h2>
        <div className="grid">
          <div className="section">
            <h3 className="subtitle">Bilgisayar Mühendisliği</h3>
            <p className="text">TOBB ETÜ</p>
            <p className="text">2023 - Devam Ediyor</p>
            <p className="text">4. Sınıf</p>
            <p className="text">GNO: 2.45/4.00</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="subtitle">
          <FaLanguage className="inline-block mr-2" /> Dil Yeterlilikleri
        </h2>
        <div className="grid">
          <div className="section">
            <h3 className="subtitle">İngilizce</h3>
            <p className="text">TOEFL IBT: 85/120</p>
            <p className="text">Cambridge B2+ Advanced</p>
          </div>
          <div className="section">
            <h3 className="subtitle">Almanca</h3>
            <p className="text">Goethe-Zertifikat A1</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="subtitle">Yeteneklerim</h2>
        <div className="grid">
          <div className="section">
            <h3 className="subtitle">Yazılım Dilleri</h3>
            <p className="text">Python, C, C++, Java, HTML, CSS</p>
          </div>
          <div className="section">
            <h3 className="subtitle">Frontend</h3>
            <p className="text">React, JavaScript, HTML5, CSS3, Tailwind CSS</p>
          </div>
          <div className="section">
            <h3 className="subtitle">Backend</h3>
            <p className="text">Node.js, Express, MongoDB, PostgreSQL</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="subtitle">Hobilerim</h2>
        <div className="grid">
          <div className="section hobby-card">
            <FaGamepad className="hobby-icon" />
            <h3 className="subtitle">Oyun</h3>
            <p className="text">Hikayeli oyunları oynamayı seviyorum. Beni biraz da olsa gerçek dünyadan uzaklaştırıyorlar.</p>
          </div>
          <div className="section hobby-card">
            <FaLaptopCode className="hobby-icon" />
            <h3 className="subtitle">Yazılım Geliştirme</h3>
            <p className="text">Yazılım geliştirmeyi öğrenmeye çalışıyorum. Python, C, C++, Java, HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, PostgreSQL, Git, Docker, AWS, CI/CD gibi teknolojileri öğreniyorum.</p>
          </div>
          <div className="section hobby-card">
            <FaUsers className="hobby-icon" />
            <h3 className="subtitle">Sevdiğim insanlar ile vakit geçirmek</h3>
            <p className="text">Ailem ile vakit geçirmeyi seviyorum. Arkadaşlarımla vakit geçirmeyi de seviyorum.</p>
          </div>
          <div className="section hobby-card">
            <FaMusic className="hobby-icon" />
            <h3 className="subtitle">Müzik</h3>
            <p className="text">Rap müzik dinlemeyi seviyorum.</p>
          </div>
          <div className="section hobby-card">
            <FaRunning className="hobby-icon" />
            <h3 className="subtitle">Spor</h3>
            <p className="text">Fitness ve boks yapmayı seviyorum. Ayrıca masa tenisi oynamktan da çok keyif alıyorum. Düzenli olarak spor yapmaya çalışıyorum.</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="subtitle">
          <FaLaptopCode className="icon" /> Projelerim
        </h2>
        <div className="grid">
          <div className="section project-card">
            <h3 className="subtitle">Kişisel Web Sitesi</h3>
            <p className="text">React ve modern web teknolojileri kullanarak geliştirdiğim kişisel web sitem.</p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/MehmetBegun" className="link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Kaynak Kod
              </a>
            </div>
          </div>
          <div className="section project-card">
            <h3 className="subtitle">E-Ticaret Uygulaması</h3>
            <p className="text">Node.js ve MongoDB kullanarak geliştirdiğim tam kapsamlı e-ticaret uygulaması.</p>
            <div className="tech-stack">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/MehmetBegun" className="link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Kaynak Kod
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="subtitle">İletişim</h2>
        <div className="grid">
          <a href="https://github.com/MehmetBegun" className="link" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mehmet-begun-628546345/" className="link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} /> LinkedIn
          </a>
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="mailto:mehmetbegun11@gmail.com" className="button">
            Bana Ulaşın
          </a>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h2 className="subtitle">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaBriefcase className="icon" /> İş Deneyimlerim
          </motion.span>
        </h2>
        <div className="grid">
          <motion.div 
            className="section experience-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="experience-header">
              <h3 className="subtitle">Uzun Dönem Stajyer</h3>
              <motion.span 
                className="experience-date"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Mayıs 2025 - Devam Ediyor
              </motion.span>
            </div>
            <p className="company">TURK AI</p>
            <motion.ul 
              className="experience-list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                  "Python 2025 : 100 Günlük Programlama Kampı"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

// İletişim sayfası bileşeni
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="section contact-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <FaEnvelope className="icon" /> İletişim
        </h2>

        <div className="contact-grid">
          <motion.a 
            href="https://github.com/MehmetBegun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub className="contact-icon" />
            <div className="contact-info">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">@MehmetBegun</span>
            </div>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/mehmet-begun-628546345/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaLinkedin className="contact-icon" />
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Mehmet Begun</span>
            </div>
          </motion.a>

          <motion.a 
            href="mailto:mehmetbegun11@gmail.com"
            className="contact-item"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEnvelope className="contact-icon" />
            <div className="contact-info">
              <span className="contact-label">E-posta</span>
              <span className="contact-value">mehmetbegun11@gmail.com</span>
            </div>
          </motion.a>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <motion.div 
            className="form-group"
            whileHover={{ scale: 1.02 }}
          >
            <label htmlFor="name">İsim</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </motion.div>
          <motion.div 
            className="form-group"
            whileHover={{ scale: 1.02 }}
          >
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </motion.div>
          <motion.div 
            className="form-group"
            whileHover={{ scale: 1.02 }}
          >
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
          </motion.button>
          {status === 'success' && (
            <motion.p 
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Mesajınız başarıyla gönderildi!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p 
              className="error-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Bir hata oluştu. Lütfen tekrar deneyin.
            </motion.p>
          )}
        </form>
      </motion.section>
    </motion.div>
  );
};

// Ana uygulama bileşeni
function App() {
  return (
    <Router>
      <motion.nav className="navigation">
        <motion.div 
          className="nav-links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="nav-link">
            <FaHome className="icon" /> Ana Sayfa
          </Link>
          <Link to="/contact" className="nav-link">
            <FaEnvelope className="icon" /> İletişim
          </Link>
        </motion.div>
      </motion.nav>

      <Routes>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </Router>
  );
}

export default App;