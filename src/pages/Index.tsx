import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Reveal from '@/components/landing/Reveal';

const IMG = {
  seoul:
    'https://cdn.poehali.dev/projects/d63b7d85-0f3e-4b08-ad0a-e351e4372f3c/files/c4a60c40-1927-488c-adeb-c06c07c7d6e4.jpg',
  work:
    'https://cdn.poehali.dev/projects/d63b7d85-0f3e-4b08-ad0a-e351e4372f3c/files/0711011a-4b8e-46d4-bc7e-5904b5bb94b5.jpg',
  housing:
    'https://cdn.poehali.dev/projects/d63b7d85-0f3e-4b08-ad0a-e351e4372f3c/files/89cde639-516d-4fac-b0e1-ec7eb42feb13.jpg',
  logo:
    'https://cdn.poehali.dev/projects/d63b7d85-0f3e-4b08-ad0a-e351e4372f3c/bucket/c9962d26-eb16-4341-9ea1-e846159e838a.png',
};

const advantages = [
  { icon: 'BadgeCheck', title: 'Проверенные работодатели', text: 'Проверенные работодатели с прозрачными условиями труда.' },
  { icon: 'MessagesSquare', title: 'Русскоязычная поддержка', text: 'Сопровождаем на родном языке на каждом шаге.' },
  { icon: 'Route', title: 'Сопровождение до работы', text: 'Ведём вас от заявки до первого рабочего дня.' },
  { icon: 'Home', title: 'Помощь с жильём', text: 'Подбираем комфортное жильё.' },
  { icon: 'FileText', title: 'Оформление документов', text: 'Берём на себя оформление визы, договоры и все формальности.' },
  { icon: 'HeartHandshake', title: 'Поддержка после', text: 'Остаёмся на связи и помогаем уже после трудоустройства.' },
];

const services = [
  {
    icon: 'Factory',
    title: 'Работа в Южной Корее',
    text: 'Производства, теплицы, склады, заводы, сельское хозяйство и рыбные предприятия.',
    img: IMG.work,
  },
  {
    icon: 'KeyRound',
    title: 'Аренда жилья',
    text: 'Поиск жилья, смена адреса, заключение договора аренды.',
    img: IMG.housing,
  },
  {
    icon: 'StampIcon',
    title: 'Виза G1',
    text: 'Подготовка документов, подача, продление и полное сопровождение.',
    img: IMG.seoul,
  },
  {
    icon: 'PlaneTakeoff',
    title: 'K-ETA и перелёт',
    text: 'Оформление, проверка документов, помощь при отказе, встреча в аэропорту.',
    img: IMG.work,
  },
];

const steps = [
  { n: '01', icon: 'Send', title: 'Заявка', text: 'Оставляете заявку на сайте за минуту' },
  { n: '02', icon: 'Phone', title: 'Консультация', text: 'Связываемся и обсуждаем ваши цели' },
  { n: '03', icon: 'Search', title: 'Подбор вакансии', text: 'Находим работу под ваши пожелания' },
  { n: '04', icon: 'FileSignature', title: 'Документы', text: 'Оформляем кету и все необходимые документы для перелёта' },
  { n: '05', icon: 'Plane', title: 'Прилёт', text: 'Встречаем вас прямо в аэропорту Кореи' },
  { n: '06', icon: 'Home', title: 'Заселение', text: 'Помогаем заехать в подготовленное жильё' },
  { n: '07', icon: 'Briefcase', title: 'Выход на работу', text: 'Сопровождаем до первого рабочего дня' },
];

const vacancies = [
  {
    title: 'Работник производства',
    salary: '2 800 000 ₩/мес',
    region: 'Кёнгидо',
    details: ['Жильё предоставляется', 'Питание 2-разовое'],
    img: 'https://cdn.poehali.dev/projects/d63b7d85-0f3e-4b08-ad0a-e351e4372f3c/files/757b2b39-a4d2-48be-a17d-48ac699f168f.jpg',
  },
  {
    title: 'Работник теплицы',
    salary: '3 900 000 ₩/мес',
    region: 'Чхунчхон',
    details: ['Проживание предоставляется', 'Питание 3-разовое'],
    img: 'https://cdn.poehali.dev/projects/d63b7d85-0f3e-4b08-ad0a-e351e4372f3c/files/50a5ebd6-859e-41b2-8c84-d71e98fddad4.jpg',
  },
  {
    title: 'Сотрудник склада',
    salary: '3 200 000 ₩/мес',
    region: 'Инчхон',
    details: ['Жильё не предоставляется', 'Питание — обед'],
    img: 'https://cdn.poehali.dev/projects/d63b7d85-0f3e-4b08-ad0a-e351e4372f3c/files/cd7a600a-d7b0-4b8a-af98-9680cc24535d.jpg',
  },
];

const reviews = [
  { name: 'Алексей М.', role: 'Завод, Кёнгидо', text: 'Помогли с визой и жильём за две недели. Встретили прямо в аэропорту — всё чётко.', type: 'Текст' },
  { name: 'Динара К.', role: 'Теплицы, Чхунчхон', text: 'Поддержка на русском очень выручила. Чувствовала себя спокойно на всех этапах.', type: 'Видео' },
  { name: 'Сергей П.', role: 'Склад, Инчхон', text: 'Зарплата как обещали, условия проживания отличные. Рекомендую без сомнений.', type: 'Фото' },
];

const channels = [
  { title: 'Вакансии в Корее', desc: 'Свежие предложения работы каждый день', icon: 'Send', url: '#' },
  { title: 'Жизнь и советы', desc: 'Опыт переезда, лайфхаки и истории', icon: 'BookOpen', url: '#' },
];

const faq = [
  { q: 'Нужно ли знать корейский язык?', a: 'Нет. Для большинства вакансий знание языка не требуется, а вся поддержка ведётся на русском.' },
  { q: 'Сколько стоит сопровождение?', a: 'Стоимость зависит от пакета услуг. После бесплатной консультации мы подберём оптимальный вариант под вашу задачу.' },
  { q: 'Что если по визе откажут?', a: 'Мы тщательно готовим документы заранее, а при отказе помогаем разобраться в причинах и подать повторно.' },
  { q: 'Помогаете ли с жильём?', a: 'Да. Подбираем жильё рядом с местом работы, помогаем заключить договор и оформить смену адреса.' },
  { q: 'Как быстро можно выехать?', a: 'В среднем весь процесс от заявки до вылета занимает от 3 до 6 недель.' },
];

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Этапы', href: '#steps' },
  { label: 'Вакансии', href: '#vacancies' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Вопросы', href: '#faq' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-navy antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container mx-auto px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl glass border border-white/10 bg-navy/80 px-5 py-3 backdrop-blur-xl">
            <a href="#" className="flex items-center gap-2.5 text-white">
              <img src={IMG.logo} alt="K-Work" className="h-10 w-10 rounded-xl object-cover" />
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                K-<span className="text-red-500">W</span>ork
              </span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                  {l.label}
                </a>
              ))}
            </nav>
            <a href="#contact" className="hidden md:block">
              <Button className="rounded-xl bg-royal font-display font-semibold hover:bg-royal/90">Консультация</Button>
            </a>
            <button onClick={() => setMenuOpen((v) => !v)} className="text-white md:hidden" aria-label="Меню">
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-navy/95 p-4 backdrop-blur-xl md:hidden animate-fade-in">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <Button className="mt-2 w-full rounded-xl bg-royal font-semibold">Консультация</Button>
              </a>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-24 text-white md:pt-44 md:pb-32">
        <div className="absolute inset-0">
          <img src={IMG.seoul} alt="Сеул" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/85 to-navy-deep" />
          <div className="absolute inset-0 navy-grid opacity-60" />
        </div>
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl animate-fade-up">
              Работа в Южной Корее <span className="text-royal">с полным</span> сопровождением
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70 animate-fade-up" style={{ animationDelay: '120ms' }}>
              Подберём вакансию, оформим визу G1 и K-ETA, поможем с жильём и встретим в аэропорту. Вы просто приезжаете и работаете.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: '240ms' }}>
              <a href="#vacancies">
                <Button size="lg" className="w-full rounded-xl bg-royal px-8 font-display text-base font-semibold hover:bg-royal/90 sm:w-auto">
                  Подобрать работу
                  <Icon name="ArrowRight" className="ml-1" size={18} />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="w-full rounded-xl border-white/25 bg-transparent px-8 font-display text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  Получить консультацию
                </Button>
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ['1500+', 'трудоустроено'],
                ['98%', 'одобренных виз'],
                ['24/7', 'поддержка'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-extrabold text-white">{num}</div>
                  <div className="text-sm text-white/60">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl text-balance">
              Берём на себя всё, чтобы вам было спокойно
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-ice p-7 transition-all duration-300 hover:-translate-y-1 hover:border-royal/20 hover:shadow-xl hover:shadow-navy/5">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-royal">
                    <Icon name={a.icon} size={22} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ice py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-royal">Наши услуги</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl text-balance">
              Полный спектр под разные цели
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-navy text-white">
                  <div className="absolute inset-0">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/90 to-navy/60" />
                  </div>
                  <div className="relative flex h-full flex-col p-8 md:p-10">
                    <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-royal">
                      <Icon name={s.icon} fallback="Briefcase" size={26} />
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-extrabold">{s.title}</h3>
                    <p className="text-white/70">{s.text}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-royal-foreground/0 text-white/80 transition-colors group-hover:text-white">
                      Подробнее <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="bg-navy-deep py-20 text-white md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-royal">Как мы работаем</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl text-balance">
              Семь понятных шагов до первого рабочего дня
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 pt-6 transition-all hover:border-royal/40 hover:bg-white/[0.08]">
                  <span className="pointer-events-none absolute -right-2 -top-3 font-display text-[80px] font-extrabold leading-none text-white/[0.05] select-none transition-colors group-hover:text-royal/10">
                    {s.n}
                  </span>
                  <div className="relative mb-3 grid h-10 w-10 place-items-center rounded-xl bg-royal">
                    <Icon name={s.icon} fallback="Circle" size={18} />
                  </div>
                  <h3 className="relative font-display text-base font-bold leading-tight">{s.title}</h3>
                  <p className="relative mt-1 text-sm leading-snug text-white/55">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VACANCIES */}
      <section id="vacancies" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-royal">Вакансии</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl text-balance">
                Популярные предложения прямо сейчас
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {vacancies.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10">
                  <div className="relative h-48 overflow-hidden">
                    <img src={v.img} alt={v.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy backdrop-blur">
                      {v.region}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-1 font-display text-xl font-bold text-navy">{v.title}</h3>
                    <div className="mb-4 font-display text-lg font-extrabold text-royal">{v.salary}</div>
                    <div className="mb-6 space-y-1.5">
                      {v.details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-slate-500">
                          <Icon name="Check" size={14} className="text-royal shrink-0" /> {d}
                        </div>
                      ))}
                    </div>
                    <a href="#contact" className="mt-auto">
                      <Button variant="outline" className="w-full rounded-xl border-navy/15 font-semibold text-navy hover:bg-navy hover:text-white">
                        Подробнее
                      </Button>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-ice py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-royal">Отзывы</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl text-balance">
              Истории тех, кто уже работает в Корее
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                  <div className="mb-4 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Icon key={k} name="Star" size={16} className="fill-amber-400" />
                    ))}
                    <span className="ml-2 rounded-full bg-ice px-2.5 py-0.5 text-xs font-semibold text-slate-500">{r.type}</span>
                  </div>
                  <p className="flex-1 text-slate-600">«{r.text}»</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-navy font-display font-bold text-white">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy">{r.name}</div>
                      <div className="text-sm text-slate-400">{r.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TELEGRAM */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-royal">Сообщество</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl text-balance">
              Подпишитесь на наши Telegram-каналы
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <a href={c.url} className="group flex items-center gap-6 rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/20">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-royal">
                    <Icon name={c.icon} fallback="Send" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold">{c.title}</h3>
                    <p className="text-white/60">{c.desc}</p>
                  </div>
                  <Icon name="ArrowRight" size={22} className="text-white/50 transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-ice py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-royal">FAQ</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl text-balance">
                Частые вопросы
              </h2>
              <p className="mt-4 text-slate-500">Не нашли ответ? Напишите нам — ответим в течение часа.</p>
            </Reveal>
            <Reveal delay={120}>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="mb-3 rounded-2xl border border-slate-100 bg-white px-6">
                    <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-navy hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-navy-deep py-20 text-white md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="grid md:grid-cols-2">
              <div className="relative hidden md:block">
                <img src={IMG.seoul} alt="Корея" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/60 to-navy-deep/80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Icon name="Quote" size={32} className="mb-3 text-royal" />
                  <p className="font-display text-lg font-semibold">Сделаем переезд простым и безопасным.</p>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance">Оставьте заявку</h2>
                <p className="mt-2 text-white/60">Свяжемся и бесплатно проконсультируем.</p>
                <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Ваше имя" className="h-12 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-royal" />
                  <Input placeholder="Телефон" type="tel" className="h-12 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-royal" />
                  <Input placeholder="Telegram (@username)" className="h-12 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-royal" />
                  <Button type="submit" size="lg" className="w-full rounded-xl bg-royal font-display text-base font-semibold hover:bg-royal/90">
                    Отправить заявку
                  </Button>
                  <p className="text-center text-xs text-white/40">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy py-14 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <img src={IMG.logo} alt="K-Work" className="h-10 w-10 rounded-xl object-cover" />
                <span className="font-display text-lg font-extrabold text-white">K-<span className="text-red-500">W</span>ork</span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-white/60">
                Помогаем гражданам СНГ официально трудоустроиться в Южной Корее с полным сопровождением на всех этапах.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-display font-bold">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-white/60">
                <li className="flex items-center gap-2"><Icon name="Phone" size={16} /> +82 10 0000 0000</li>
                <li className="flex items-center gap-2"><Icon name="Mail" size={16} /> info@koreawork.kr</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={16} /> Сеул, Южная Корея</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-display font-bold">Мы на связи</h4>
              <div className="flex gap-3">
                {[['Send', '#'], ['MessageCircle', '#'], ['Phone', '#']].map(([icon, url]) => (
                  <a key={icon} href={url} className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition-colors hover:bg-royal">
                    <Icon name={icon} fallback="Link" size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
            <span>© 2026 K-Work. Все права защищены.</span>
            <span>Официальное трудоустройство в Южной Корее</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;