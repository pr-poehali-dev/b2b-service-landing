import Icon from "@/components/ui/icon";

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

const AboutSection = () => {
  return (
    <>
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
    </>
  );
};

export default AboutSection;
