import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQS = [
  { q: "Подойдёт ли ИИ для моей сферы?", a: "Да. Мы работали с производством, торговлей, логистикой, сервисом и образованием. Если вашей сферы нет в списке — это возможность стать первым в нише. На бесплатном аудите мы всегда находим точки применения ИИ." },
  { q: "Почему нет цен на сайте?", a: "Потому что каждый проект уникален. Стоимость зависит от объёма задач, сложности процессов, размера компании и выбранных инструментов. После бесплатного аудита вы получите конкретную цифру — без скрытых платежей." },
  { q: "Сколько времени занимает внедрение?", a: "От 2 недель для точечных задач до 2–3 месяцев для комплексного внедрения. Конкретные сроки определяются на этапе разработки стратегии." },
  { q: "Нужны ли технические знания у сотрудников?", a: "Нет. Мы обучаем с нуля. Наша задача — чтобы после тренинга любой сотрудник уверенно работал с инструментами, независимо от технического бэкграунда." },
  { q: "Работаете ли вы за пределами Владивостока?", a: "Да. Работаем онлайн с компаниями по всей России. Выезд для очных мероприятий возможен по договорённости." },
  { q: "Что если результат не устроит?", a: "На старте мы фиксируем конкретные измеримые цели. Всё внедрение направлено на их достижение. Именно поэтому начинаем с аудита — чтобы не брать проекты, где не сможем гарантировать результат." },
];

interface CtaSectionProps {
  scrollTopVisible: boolean;
  scrollToTop: () => void;
}

const CtaSection = ({ scrollTopVisible, scrollToTop }: CtaSectionProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
  };

  return (
    <>
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
    </>
  );
};

export default CtaSection;
