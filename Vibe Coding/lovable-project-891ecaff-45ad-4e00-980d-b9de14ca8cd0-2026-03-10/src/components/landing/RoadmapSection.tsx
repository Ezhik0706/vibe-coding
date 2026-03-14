import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenLine, FolderOpen, Sparkles, UserCheck, Building2 } from "lucide-react";

const milestones = [
  { week: "Неделя 1", icon: PenLine, text: "Popup + сохранение заметки/шага + URL/title" },
  { week: "Неделя 2", icon: FolderOpen, text: "Список сессий исследования + экспорт JSON/Markdown" },
  { week: "Неделя 3", icon: Sparkles, text: 'AI-кнопка «собери черновик CJM» + базовый output' },
];

const RoadmapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-section-alt section-padding" id="roadmap" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] leading-tight text-foreground mb-4">
            Что будет готово через 2–3 недели
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Реалистичный MVP для быстрой проверки ценности — с демонстрацией ключевого потока от capture до CJM draft.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {milestones.map((m, i) => (
            <motion.div
              key={m.week}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-base p-7 text-center"
            >
              <span className="pill-badge mb-4 inline-block">{m.week}</span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-foreground font-medium leading-relaxed">{m.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-base p-8 text-center border-primary/15"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Для PO / консультантов</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Получить ранний доступ и протестировать рабочий поток на своих кейсах
            </p>
            <a href="#footer" className="btn-primary-landing w-full sm:w-auto text-center">Вступить в waitlist</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-base p-8 text-center border-accent/15"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Для корпоративных команд</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Обсудить пилот для оптимизации cost на CJM/R&D и конкурентный анализ флоу
            </p>
            <a href="#footer" className="btn-secondary-landing w-full sm:w-auto text-center border-accent/30 hover:bg-accent/5">Запросить пилот</a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          Фокус на practical workflow, не generic AI chat
        </motion.p>
      </div>
    </section>
  );
};

export default RoadmapSection;
