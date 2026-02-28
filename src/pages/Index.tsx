import { useEffect, useRef, useState } from "react";
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

const SERVICES = [
  { icon: "Search", title: "ИИ-аудит бизнеса", text: "Проанализируем ваши процессы и найдём точки, где ИИ даст максимальный эффект. Вы получите чёткую карту: что внедрять, в какой последовательности и зачем." },
  { icon: "Map", title: "Стратегия внедрения", text: "Разработаем пошаговый план под ваш бизнес с конкретными инструментами, сроками и ожидаемым ROI. Никакой воды — только то, что реально работает." },
  { icon: "Cpu", title: "Внедрение под ключ", text: "Настраиваем ИИ-инструменты, интегрируем в ваши процессы и системы. Вы получаете готовое решение, которое работает с первого дня." },
  { icon: "Users", title: "Обучение сотрудников", text: "Проводим тренинги, вебинары и индивидуальные консультации. После обучения ваша команда уверенно применяет ИИ в своих задачах." },
  { icon: "BarChart3", title: "Аналитика данных", text: "Настраиваем системы обработки и анализа данных. Вы принимаете решения не интуитивно, а на основе реальных цифр и прогнозов рынка." },
  { icon: "Bot", title: "ИИ-ассистенты", text: "Создаём персональных ИИ-помощников для отделов: продажи, поддержка, HR, бухгалтерия. Сотрудники работают быстрее, клиенты — довольны." },
];

const WHO = [
  { size: "Малый бизнес", title: "До 50 человек", text: "Автоматизируем рутину, настраиваем работу с клиентской базой и анализ рынка. Вы конкурируете с крупными игроками, не раздувая штат и бюджет." },
  { size: "Средний бизнес", title: "50–500 человек", text: "Оптимизируем бизнес-процессы, управление ресурсами и стратегическое планирование. Вы растёте системно, а не хаотично." },
  { size: "Крупные предприятия", title: "500+ человек", text: "Разрабатываем комплексные аналитические системы, прогнозирование и автоматизацию критических операций." },
];

const INDUSTRIES = ["🏭 Промышленность", "📈 Продажи и ритейл", "✈️ Транспорт и логистика", "🏨 Гостиничный бизнес", "🍽️ Ресторанный бизнес", "💰 Финансы", "🏗️ Строительство", "🎓 Образование"];

const CASES = [
  { logo: "ПАО «Далприбор»", title: "Корпоративное обучение ИИ", text: "Провели корпоративное обучение сотрудников работе с ИИ-инструментами. Команда освоила оптимизацию времени и решение сложных задач с помощью нейросетей.", result: "Оптимизация времени на решение задач, личная благодарность гендиректора" },
  { logo: "Аэропорт Владивосток", title: "Внедрение ИИ в рабочие процессы", text: "Консультации и внедрение ИИ-инструментов для оптимизации операционных процессов одного из крупнейших транспортных узлов Дальнего Востока.", result: "Оптимизация операционных процессов" },
  { logo: "ГК «ЭкоЦентр»", title: "ИИ-решения и партнёрство", text: "Партнёрство в области внедрения ИИ-решений и организации совместных образовательных мероприятий для предпринимателей Владивостока.", result: "Автоматизация процессов и образовательное партнёрство" },
  { logo: "Марин Трейд", title: "Автоматизация торговых операций", text: "Внедрение ИИ-инструментов для автоматизации операционных процессов в торговой компании. Настройка аналитики и прогнозирования спроса.", result: "Снижение операционных затрат" },
];

const ACHIEVEMENTS = [
  { icon: "Award", title: "500+ обученных", sub: "предпринимателей и сотрудников компаний" },
  { icon: "Building2", title: "7+ внедрений", sub: "в производственных и торговых компаниях" },
  { icon: "GraduationCap", title: "Школа «Хакни Нейросети»", sub: "оффлайн и онлайн обучение ИИ" },
  { icon: "Handshake", title: "Член Опора России", sub: "Приморский край, активный участник сообщества" },
];

const PROCESS = [
  { num: "01", title: "Заявка", text: "Оставляете контакт — мы свяжемся в течение 2 часов и согласуем первую встречу." },
  { num: "02", title: "Анализ потребностей", text: "Изучаем ваши процессы, задачи и боли. Находим где именно ИИ даст максимальный эффект." },
  { num: "03", title: "Стратегия", text: "Разрабатываем персональный план: инструменты, сроки, бюджет и ожидаемый ROI." },
  { num: "04", title: "Настройка и внедрение", text: "Устанавливаем ПО, настраиваем алгоритмы, интегрируем в ваши системы." },
  { num: "05", title: "Обучение команды", text: "Проводим тренинги для сотрудников. После — они уверенно применяют ИИ каждый день." },
  { num: "06", title: "Поддержка", text: "Мониторим, обновляем, адаптируем под новые задачи. Вы не остаётесь один на один с технологией." },
];

const WHY = [
  { icon: "Award", title: "Экспертность", text: "Глубокие знания и реальный опыт внедрений в различных отраслях — от промышленности до сервиса." },
  { icon: "Target", title: "Индивидуальный подход", text: "Каждая компания уникальна. Мы не работаем по шаблонам — решения создаются под вашу специфику." },
  { icon: "Rocket", title: "Полный цикл", text: "От консультации до поддержки после внедрения. Один подрядчик — полная ответственность за результат." },
  { icon: "Sparkles", title: "Актуальные технологии", text: "Постоянно следим за новинками ИИ. Вы получаете решения на основе самых передовых инструментов." },
  { icon: "CheckCircle", title: "Ориентация на результат", text: "Фиксируем конкретные измеримые цели на старте. Если не сможем их достичь — честно скажем." },
  { icon: "Handshake", title: "Деловая репутация", text: "Член Опора России. Работаем с государственными структурами и крупными компаниями Приморского края." },
];

const REVIEWS = [
  { text: "«Сергей провёл обучение для всей нашей команды. Сотрудники, которые раньше скептически относились к ИИ, теперь используют его каждый день. Реальная экономия времени заметна уже в первый месяц.»", avatar: "Р", name: "Роман Титков", pos: "Генеральный директор, ПАО «Далприбор»" },
  { text: "«Профессиональный подход к внедрению. Чётко обозначили что и зачем, провели обучение, настроили инструменты. Никакой воды — только конкретные решения под нашу специфику.»", avatar: "Э", name: "Представитель компании", pos: "ГК «ЭкоЦентр», Владивосток" },
  { text: "«Обратились за аудитом — получили полный план трансформации. Сергей объяснил доступно, без технического жаргона. Теперь понимаем где и как применять ИИ в нашем бизнесе.»", avatar: "К", name: "Клиент компании", pos: "Малый бизнес, Владивосток" },
];

const FAQS = [
  { q: "Подойдёт ли ИИ для моей сферы?", a: "Да. Мы работали с производством, торговлей, логистикой, сервисом и образованием. Если вашей сферы нет в списке — это возможность стать первым в нише. На бесплатном аудите мы всегда находим точки применения ИИ." },
  { q: "Почему нет цен на сайте?", a: "Потому что каждый проект уникален. Стоимость зависит от объёма задач, сложности процессов, размера компании и выбранных инструментов. После бесплатного аудита вы получите конкретную цифру — без скрытых платежей." },
  { q: "Сколько времени занимает внедрение?", a: "От 2 недель для точечных задач до 2–3 месяцев для комплексного внедрения. Конкретные сроки определяются на этапе разработки стратегии." },
  { q: "Нужны ли технические знания у сотрудников?", a: "Нет. Мы обучаем с нуля. Наша задача — чтобы после тренинга любой сотрудник уверенно работал с инструментами, независимо от технического бэкграунда." },
  { q: "Работаете ли вы за пределами Владивостока?", a: "Да. Работаем онлайн с компаниями по всей России. Выезд для очных мероприятий возможен по договорённости." },
  { q: "Что если результат не устроит?", a: "На старте мы фиксируем конкретные измеримые цели. Всё внедрение направлено на их достижение. Именно поэтому начинаем с аудита — чтобы не брать проекты, где не сможем гарантировать результат." },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollTopVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
  };

  return (
    <div style={{ background: "var(--dark)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}>

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
            <div className="hero-badge badge badge-blue reveal" style={{ marginBottom: 32 }}>
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

      {/* PAIN */}
      <section id="pain">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-red reveal"><Icon name="Zap" size={14} />Узнаёте себя?</div>
            <h2 className="section-title reveal">Ваши сотрудники тратят время на то,<br /><span className="gradient-text">что ИИ делает за минуты</span></h2>
            <p className="section-subtitle reveal">Если хотя бы один пункт про вас — значит, пора действовать</p>
          </div>

          <div className="pain-grid">
            {[
              { icon: "Clock", title: "Рутина съедает часы", text: "Менеджеры вручную делают отчёты, обрабатывают заявки, отвечают на одни и те же вопросы снова и снова" },
              { icon: "TrendingUp", title: "Конкуренты автоматизируются", text: "Пока вы думаете — они уже внедрили ИИ и экономят. Каждый день промедления стоит вам денег" },
              { icon: "Target", title: "Не знаете с чего начать", text: "Слышали про ИИ, но непонятно что именно внедрять, какие инструменты выбрать и кому доверить" },
              { icon: "ShieldAlert", title: "Пробовали сами — не взлетело", text: "Потратили деньги и время на самостоятельное внедрение, результат нулевой или даже хуже" },
            ].map((p) => (
              <div key={p.title} className="pain-card card-3d reveal">
                <div className="pain-icon"><Icon name={p.icon} size={24} /></div>
                <div>
                  <div className="pain-title">{p.title}</div>
                  <div className="pain-text">{p.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pain-close reveal">
            <p>Именно для этого существуем мы — <span>берём на себя всё, от анализа до результата</span></p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal"><Icon name="Sparkles" size={14} />Услуги</div>
            <h2 className="section-title reveal">Что мы делаем<br /><span className="gradient-text">для вашего бизнеса</span></h2>
            <p className="section-subtitle reveal">Каждая услуга — это конкретный измеримый результат, а не красивые слайды</p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card card-3d reveal">
                <div className="service-icon-wrap"><Icon name={s.icon} size={26} /></div>
                <div className="service-title">{s.title}</div>
                <div className="service-text">{s.text}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }} className="reveal">
            <a href="#cta" className="btn btn-primary btn-lg btn-shine">
              Узнать стоимость для моего бизнеса
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section id="who">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-purple reveal"><Icon name="Target" size={14} />Кому подходит</div>
            <h2 className="section-title reveal">ИИ работает в любом бизнесе —<br /><span className="gradient-text">вне зависимости от размера</span></h2>
            <p className="section-subtitle reveal">Масштаб определяет подход. Мы адаптируем решения под реальные задачи вашей компании.</p>
          </div>

          <div className="who-grid">
            {WHO.map((w) => (
              <div key={w.title} className="who-card card-3d reveal">
                <div className="who-size">{w.size}</div>
                <div className="who-title">{w.title}</div>
                <div className="who-divider" />
                <div className="who-text">{w.text}</div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <div className="industries-title">Отрасли, где мы уже работали</div>
            <div className="industries-grid">
              {INDUSTRIES.map((ind) => (
                <div key={ind} className="industry-tag">{ind}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-amber reveal"><Icon name="Award" size={14} />Кейсы</div>
            <h2 className="section-title reveal">Нам доверяют<br /><span className="gradient-text">лидеры Приморского края</span></h2>
            <p className="section-subtitle reveal">Реальные компании, реальные результаты</p>
          </div>

          <div className="cases-grid">
            {CASES.map((c) => (
              <div key={c.title} className="case-card card-3d reveal">
                <div className="case-logo"><span className="case-logo-dot" />{c.logo}</div>
                <div className="case-title">{c.title}</div>
                <div className="case-text">{c.text}</div>
                <div className="case-result"><Icon name="CheckCircle" size={14} />Результат: {c.result}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }} className="reveal">
            <div className="partners-title">Также сотрудничаем с</div>
            <div className="partners-row">
              {["Мой Бизнес", "ЦРП Приморского края", "Опора России"].map((p) => (
                <div key={p} className="partner-tag">{p}</div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }} className="reveal">
            <a href="#cta" className="btn btn-primary btn-lg btn-shine">
              Хочу такой же результат
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal"><Icon name="User" size={14} />Эксперт</div>
          </div>

          <div className="about-grid">
            <div className="about-photo reveal">
              <div className="about-photo-placeholder">
                <div className="about-avatar">👨‍💼</div>
                <div style={{ color: "var(--text-muted)", fontSize: 14 }}>Сергей Черников</div>
              </div>
              <div className="about-badge">
                <span className="about-badge-num">3+</span>
                <span className="about-badge-text">года в ИИ</span>
              </div>
            </div>

            <div className="reveal">
              <div className="about-name">Сергей Черников</div>
              <div className="about-role">Эксперт по внедрению ИИ · Промпт-инженер · Бизнес-консультант</div>
              <div className="about-quote">
                «Я не продаю технологии ради технологий. Я помогаю бизнесу зарабатывать больше и тратить меньше — с помощью ИИ»
              </div>
              <div className="about-achievements">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.title} className="achievement">
                    <div className="achievement-icon"><Icon name={a.icon} size={18} /></div>
                    <div className="achievement-text"><strong>{a.title}</strong>{a.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal"><Icon name="Rocket" size={14} />Процесс</div>
            <h2 className="section-title reveal">6 шагов от первого контакта<br /><span className="gradient-text">до результата</span></h2>
            <p className="section-subtitle reveal">Проверенный процесс без лишних слов и потери времени</p>
          </div>

          <div className="process-grid">
            {PROCESS.map((p) => (
              <div key={p.num} className="process-card card-3d reveal">
                <div className="process-num">{p.num}</div>
                <div className="process-title">{p.title}</div>
                <div className="process-text">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green reveal"><Icon name="Star" size={14} />Почему мы</div>
            <h2 className="section-title reveal">6 причин работать<br /><span className="gradient-text">с нами</span></h2>
          </div>

          <div className="why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="why-card card-3d reveal">
                <div className="why-icon"><Icon name={w.icon} size={22} /></div>
                <div className="why-title">{w.title}</div>
                <div className="why-text">{w.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-pink reveal"><Icon name="MessageCircle" size={14} />Отзывы</div>
            <h2 className="section-title reveal">Что говорят<br /><span className="gradient-text">наши клиенты</span></h2>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <div key={r.name} className="review-card card-3d reveal">
                <div className="review-stars">★★★★★</div>
                <div className="review-text">{r.text}</div>
                <div className="review-author">
                  <div className="review-avatar">{r.avatar}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-pos">{r.pos}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal"><Icon name="HelpCircle" size={14} />FAQ</div>
            <h2 className="section-title reveal">Частые вопросы</h2>
          </div>

          <div className="faq-grid">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item reveal${openFaq === i ? " open" : ""}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-arrow">+</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="radial-glow" style={{ position: "absolute", inset: 0 }} />
        <div className="cta-glow" />

        <div className="container">
          <div className="cta-inner">
            <div className="badge badge-blue reveal"><Icon name="Mail" size={14} />Начать</div>
            <h2 className="cta-title reveal">
              Начните с бесплатного аудита —<br />
              <span className="gradient-text">узнайте, где ваш бизнес теряет деньги</span>
            </h2>
            <p className="cta-sub reveal">
              Оставьте заявку. Мы свяжемся в течение 2 часов, проведём бесплатный аудит и расскажем как ИИ сработает именно в вашем бизнесе.
            </p>

            <div className="cta-form reveal">
              {!formSuccess ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Ваше имя *</label>
                      <input type="text" className="input" placeholder="Александр Иванов" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Телефон / Telegram *</label>
                      <input type="text" className="input" placeholder="+7 (924) 000-00-00" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Сфера бизнеса</label>
                      <select className="select">
                        <option value="">Выберите сферу</option>
                        <option>Промышленность / производство</option>
                        <option>Торговля / ритейл</option>
                        <option>Логистика / транспорт</option>
                        <option>Гостиничный бизнес</option>
                        <option>Ресторанный бизнес</option>
                        <option>Финансы / страхование</option>
                        <option>IT / технологии</option>
                        <option>Строительство</option>
                        <option>Образование</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Количество сотрудников</label>
                      <select className="select">
                        <option value="">Выберите размер</option>
                        <option>До 10 человек</option>
                        <option>10–50 человек</option>
                        <option>50–200 человек</option>
                        <option>200+ человек</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg form-submit btn-shine">
                    Получить бесплатный аудит
                    <Icon name="ArrowRight" size={18} />
                  </button>
                  <p className="form-privacy">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              ) : (
                <div className="form-success">
                  <div className="form-success-icon"><Icon name="Check" size={32} /></div>
                  <h3>Заявка отправлена!</h3>
                  <p>Мы свяжемся с вами в течение 2 часов</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">
              <div className="footer-logo-icon"><Icon name="Brain" size={18} /></div>
              <div>
                <div className="footer-logo-text">Нейросети <span>для Бизнеса</span></div>
                <div className="footer-sub">ИП Черников С.Н. · Владивосток</div>
              </div>
            </div>

            <div className="footer-links">
              {["#services|Услуги", "#cases|Кейсы", "#about|О нас", "#faq|FAQ"].map((item) => {
                const [href, label] = item.split("|");
                return <a key={href} href={href}>{label}</a>;
              })}
              <a href="#">Политика конфиденциальности</a>
            </div>

            <div className="footer-socials">
              <a href="#" className="social-btn" title="Telegram"><Icon name="Send" size={18} /></a>
              <a href="#" className="social-btn" title="WhatsApp"><Icon name="Phone" size={18} /></a>
              <a href="#" className="social-btn" title="Email"><Icon name="Mail" size={18} /></a>
            </div>

            <div className="footer-copy">© 2026 Нейросети для Бизнеса. Все права защищены.</div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button className={`scroll-top${scrollTopVisible ? " visible" : ""}`} onClick={scrollToTop}>
        <Icon name="ChevronUp" size={20} />
      </button>
    </div>
  );
};

export default Index;
