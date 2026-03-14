import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, PenLine, Link, FolderOpen, Sparkles } from "lucide-react";

const steps = [
  { icon: Globe, title: "Откройте флоу", desc: "Исследуемый продукт или конкурент в браузере" },
  { icon: PenLine, title: "Зафиксируйте шаг", desc: "Заметка, боль, комментарий через popup" },
  { icon: Link, title: "Сохраните контекст", desc: "URL + title + ручной комментарий" },
  { icon: FolderOpen, title: "Соберите в сессию", desc: "Упорядоченные наблюдения по сценарию" },
  { icon: Sparkles, title: "Экспорт + AI-черновик", desc: "JSON/Markdown + AI draft CJM" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" id="how-it-works" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] leading-tight text-foreground mb-4">
            Как работает CJM Capture Assistant
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            От наблюдения в браузере до структурированного черновика CJM — в одном рабочем потоке.
          </p>
        </motion.div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid grid-cols-5 gap-4 relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="step-number mb-4">
                {i + 1}
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-bold text-sm text-foreground mb-1">{s.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden space-y-6 relative pl-8">
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-border" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 relative"
            >
              <div className="step-number shrink-0 absolute -left-8 text-xs w-10 h-10">{i + 1}</div>
              <div className="pl-6">
                <h4 className="font-display font-bold text-base text-foreground mb-1">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
