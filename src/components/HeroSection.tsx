import Icon from "@/components/ui/icon";

const PARTICLES = [
  { left: "10%", delay: "0s", duration: "18s" },
  { left: "20%", delay: "2s", duration: "22s" },
  { left: "30%", delay: "4s", duration: "20s" },
  { left: "40%", delay: "1s", duration: "19s" },
  { left: "50%", delay: "3s", duration: "21s" },
  { left: "60%", delay: "5s", duration: "17s" },
  { left: "70%", delay: "2s", duration: "23s" },
  { left: "80%", delay: "4s", duration: "18s" },
  { left: "90%", delay: "1s", duration: "20s" },
];

const STATS = [
  { num: "7+", label: "Внедрений в компаниях" },
  { num: "500+", label: "Обученных сотрудников" },
  { num: "30%", label: "Экономия рабочего времени" },
  { num: "3+", label: "Года в ИИ-консалтинге" },
];

interface HeroSectionProps {
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  scrollToTop: () => void;
}

const HeroSection = ({ scrolled, mobileOpen, setMobileOpen, scrollToTop }: HeroSectionProps) => {
  return (
    <>
      {/* HEADER */}
      <header className={scrolled ? "scrolled" : ""} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "16px 0", transition: "all 0.3s ease" }}>
        <div className="container">
          <div className="header-inner">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <div className="logo-icon">
                <Icon name="Brain" size={20} />
              </div>
              <div>
                <div className="logo-text">Нейросети <span>для Бизнеса</span></div>
                <div className="logo-sub">ИП Черников С.Н.</div>
              </div>
            </a>

            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none" }}>
              <Icon name="Menu" size={20} />
            </button>

            <nav className={mobileOpen ? "open" : ""}>
              {["#services|Услуги", "#cases|Кейсы", "#process|Процесс", "#reviews|Отзывы", "#faq|FAQ"].map((item) => {
                const [href, label] = item.split("|");
                return (
                  <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
                );
              })}
              <a href="#cta" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Получить аудит</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg animated-gradient" />
        <div className="hero-bg grid-bg" />
        <div className="hero-bg radial-glow" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        <div className="particles">
          {PARTICLES.map((p, i) => (
            <div key={i} className="particle" style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }} />
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge badge badge-blue reveal" style={{ marginBottom: 16 }}>
              <span className="hero-badge-dot" />
              Принимаем заявки — свяжемся за 2 часа
            </div>

            <h1 className="hero-title reveal">
              Внедрим ИИ в ваш бизнес —<br />
              <span className="gradient-text">вы обгоните конкурентов,</span><br />
              которые всё ещё думают
            </h1>

            <p className="hero-sub reveal">
              Аудит, стратегия, внедрение под ключ и обучение сотрудников.
              Работаем с производствами, предприятиями и любым бизнесом в Приморском крае и по всей России.
            </p>

            <div className="hero-bullets reveal">
              {["Далприбор, Аэропорт Владивосток, ЭкоЦентр", "Экономия от 30% с первого месяца", "Полный цикл под ключ"].map((b) => (
                <div key={b} className="hero-bullet">
                  <div className="hero-bullet-icon"><Icon name="Check" size={12} /></div>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta reveal">
              <a href="#cta" className="btn btn-primary btn-lg btn-shine animate-pulse-glow">
                Получить бесплатный аудит
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#cases" className="btn btn-outline btn-lg">
                Смотреть кейсы
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.num} className="stat-item reveal">
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
