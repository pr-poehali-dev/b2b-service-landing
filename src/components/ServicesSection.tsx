import Icon from "@/components/ui/icon";

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

const ServicesSection = () => {
  return (
    <>
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
    </>
  );
};

export default ServicesSection;
