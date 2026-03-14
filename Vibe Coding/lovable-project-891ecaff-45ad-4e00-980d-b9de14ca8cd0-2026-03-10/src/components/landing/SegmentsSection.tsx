import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, Building2, AlertTriangle, FileSearch, Link, Clock, Shuffle, Presentation, Shield, Target } from "lucide-react";

const segments = [
  {
    title: "Для частных PO / Product-консультантов",
    icon: UserCheck,
    pains: [
      { icon: Shuffle, text: "Хаотичные заметки из разных источников" },
      { icon: Clock, text: "Долгое структурирование наблюдений в CJM" },
      { icon: Link, text: "Сложно сохранять контекст шагов/URL" },
      { icon: Presentation, text: "Нужен быстрый артефакт для клиента/команды" },
    ],
    result: "Быстрее synthesis и подготовка черновика CJM",
  },
  {
    title: "Для корпоративных продуктовых команд",
    icon: Building2,
    pains: [
      { icon: AlertTriangle, text: "Дорогая ручная работа по R&D CJM" },
      { icon: FileSearch, text: "Разрозненный конкурентный анализ флоу" },
      { icon: Target, text: "Потеря контекста между исследованием и презентацией" },
      { icon: Shield, text: "Нет единого стандарта фиксации наблюдений" },
    ],
    result: "Снижение cost на исследование и ускорение подготовки решений",
  },
];

const SegmentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-section-alt section-padding" id="segments" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] leading-tight text-foreground mb-4">
            Кому это нужно и где появляется экономия
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Один инструмент для личной продуктовой практики и для команд, которые хотят сократить cost на CJM/R&D и
            конкурентный анализ флоу.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-base p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <seg.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">{seg.title}</h3>
              </div>

              <div className="space-y-4 mb-6">
                {seg.pains.map((p) => (
                  <div key={p.text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <p.icon className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                    <span className="text-foreground text-sm leading-relaxed">{p.text}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-primary/5 border border-primary/10 p-4">
                <p className="text-sm font-semibold text-primary text-center">{seg.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
