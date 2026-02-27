import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Клиенты", href: "#clients" },
  { label: "Контакт", href: "#contact" },
];

const SERVICES = [
  {
    num: "01",
    title: "Стратегический консалтинг",
    desc: "Разработка долгосрочных стратегий роста, оптимизация бизнес-процессов и управление трансформацией для достижения устойчивых результатов.",
    icon: "TrendingUp",
  },
  {
    num: "02",
    title: "Финансовое структурирование",
    desc: "Комплексный анализ финансовых потоков, привлечение инвестиций и выстраивание эффективной структуры капитала.",
    icon: "BarChart2",
  },
  {
    num: "03",
    title: "M&A сопровождение",
    desc: "Полное юридическое и финансовое сопровождение сделок по слиянию и поглощению на всех этапах.",
    icon: "Handshake",
  },
  {
    num: "04",
    title: "Управление репутацией",
    desc: "Формирование и защита корпоративного образа на рынке, работа с медиапространством и ключевыми стейкхолдерами.",
    icon: "Shield",
  },
];

const STATS = [
  { value: "18+", label: "Лет на рынке" },
  { value: "340", label: "Реализованных проектов" },
  { value: "₽47 млрд", label: "Сумма сделок" },
  { value: "94%", label: "Клиентов возвращаются" },
];

function useIntersection(callback: (el: Element) => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll("[data-animate]").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, [callback]);
  return ref;
}

const Index = () => {
  const revealRef = useIntersection((el) => {
    el.classList.add("animate-fade-up");
    el.classList.remove("opacity-0-init");
  });

  return (
    <div className="grain-overlay min-h-screen bg-[#0A0A0A] text-[#EDE8DC]" ref={revealRef}>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
        style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.95) 0%, transparent 100%)" }}>
        <div className="font-display text-xl tracking-widest text-gold-light font-light">
          MERIDIAN
        </div>
        <nav className="hidden md:flex gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-xs tracking-[0.15em] uppercase text-[#9A9080] hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button className="btn-ghost hidden md:block">Связаться</button>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* background radial */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8 opacity-0-init animate-fade-up"
            style={{ animationDelay: "0.1s" }}>
            Бизнес-консультирование · B2B
          </p>

          <h1
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[1.05] tracking-tight text-[#EDE8DC] mb-8 opacity-0-init animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Стратегия,<br />
            <span className="italic text-gold-light">которая работает</span>
          </h1>

          <div
            className="gold-line max-w-xs mx-auto mb-8 opacity-0-init animate-fade-up"
            style={{ animationDelay: "0.4s", animation: "line-expand 1.2s ease forwards 0.4s" }}
          />

          <p
            className="font-body font-light text-[#9A9080] text-lg max-w-xl mx-auto leading-relaxed mb-12 opacity-0-init animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            Помогаем крупному бизнесу принимать решения с точностью и уверенностью. Без компромиссов.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0-init animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <button className="btn-gold">Обсудить проект</button>
            <button className="btn-ghost">Наши услуги</button>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#9A9080]">Прокрутить</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 border-t border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(201,168,76,0.08)]">
          {STATS.map((s) => (
            <div key={s.value} className="bg-[#0A0A0A] p-10 text-center" data-animate>
              <div className="font-display text-4xl md:text-5xl font-light text-gold mb-3 opacity-0-init">
                {s.value}
              </div>
              <div className="font-body text-xs tracking-[0.15em] uppercase text-[#9A9080]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20" data-animate>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 opacity-0-init">Что мы делаем</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight text-[#EDE8DC] opacity-0-init">
              Наши услуги
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.08)]">
            {SERVICES.map((s) => (
              <div key={s.num} className="luxury-card bg-[#0A0A0A] p-10 relative overflow-hidden group" data-animate>
                <span className="section-number opacity-0-init">{s.num}</span>
                <div className="relative z-10">
                  <div className="mb-6 w-10 h-10 rounded-full border border-[rgba(201,168,76,0.25)] flex items-center justify-center opacity-0-init">
                    <Icon name={s.icon} size={16} className="text-gold" fallback="Star" />
                  </div>
                  <h3 className="font-display text-2xl font-light text-[#EDE8DC] mb-4 opacity-0-init">{s.title}</h3>
                  <p className="font-body font-light text-sm text-[#9A9080] leading-relaxed opacity-0-init">{s.desc}</p>
                  <div className="mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-gold">Подробнее</span>
                    <Icon name="ArrowRight" size={12} className="text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div data-animate>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 opacity-0-init">О компании</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight text-[#EDE8DC] mb-8 opacity-0-init">
              Экспертиза,<br /><span className="italic text-gold-light">проверенная временем</span>
            </h2>
            <div className="gold-line mb-8 opacity-0-init" style={{ maxWidth: "80px" }} />
            <p className="font-body font-light text-[#9A9080] leading-relaxed mb-6 opacity-0-init">
              Более 18 лет мы работаем с лидерами российского и международного рынка, 
              помогая им принимать решения, которые определяют будущее их компаний.
            </p>
            <p className="font-body font-light text-[#9A9080] leading-relaxed opacity-0-init">
              Наш подход — глубокое погружение в специфику бизнеса клиента, 
              выработка точечных решений и полное сопровождение на каждом этапе реализации.
            </p>
          </div>

          <div className="relative" data-animate>
            <div
              className="aspect-[4/5] opacity-0-init"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.02) 100%)",
                border: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-center px-8">
                  <div className="font-display text-8xl font-light text-[rgba(201,168,76,0.08)] mb-4">M</div>
                  <div className="gold-line mb-4" />
                  <p className="font-display text-xl italic text-[#9A9080]">
                    «Точность решений — основа устойчивого роста»
                  </p>
                  <div className="gold-line mt-4" />
                </div>
              </div>
            </div>
            {/* corner accent */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gold opacity-40" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gold opacity-40" />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center" data-animate>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 opacity-0-init">Наши клиенты</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight text-[#EDE8DC] mb-16 opacity-0-init">
            Работаем с лучшими
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(201,168,76,0.08)] opacity-0-init">
            {["Компания А", "Компания Б", "Компания В", "Компания Г", "Компания Д", "Компания Е"].map((c) => (
              <div
                key={c}
                className="bg-[#0A0A0A] py-10 px-8 font-display text-xl font-light text-[#9A9080] hover:text-gold-light transition-colors duration-300 cursor-default"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10" data-animate>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 opacity-0-init">Начать работу</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight text-[#EDE8DC] mb-6 opacity-0-init">
            Готовы к<br /><span className="italic text-gold-light">следующему шагу?</span>
          </h2>
          <div className="gold-line max-w-[80px] mx-auto mb-8 opacity-0-init" />
          <p className="font-body font-light text-[#9A9080] mb-12 opacity-0-init">
            Оставьте заявку и мы свяжемся с вами в течение 24 часов для обсуждения вашего проекта.
          </p>
          <button className="btn-gold opacity-0-init">Оставить заявку</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(201,168,76,0.1)] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl tracking-widest text-gold-light font-light">MERIDIAN</div>
          <p className="font-body text-xs text-[#9A9080] tracking-widest">
            © 2026 Meridian. Все права защищены.
          </p>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="font-body text-xs tracking-widest text-[#9A9080] hover:text-gold transition-colors duration-300 uppercase">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
