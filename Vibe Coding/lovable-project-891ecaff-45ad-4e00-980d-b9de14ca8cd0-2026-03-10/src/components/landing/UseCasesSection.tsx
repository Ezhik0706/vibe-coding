import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, GitCompare, Map, Briefcase, TrendingDown, Zap, Users } from "lucide-react";

const useCases = [
  {
    icon: Search,
    title: "Аудит текущего пользовательского флоу",
    desc: "Сбор шагов/болей по реальному сценарию.",
    result: "Быстрее собранный артефакт для обсуждения",
  },
  {
    icon: GitCompare,
    title: "Конкурентный анализ флоу",
    desc: "Фиксация шагов конкурентов и сравнение UX-паттернов.",
    result: "Структурированный материал для product strategy",
  },
  {
    icon: Map,
    title: "Подготовка CJM для редизайна / discovery",
    desc: "Единый сбор наблюдений перед synthesis.",
    result: "Меньше потерь контекста при передаче в команду",
  },
  {
    icon: Briefcase,
    title: "Консалтинговые исследования для клиента",
    desc: "Стандартизация сбора данных и ускорение подготовки deliverables.",
    result: "Выше предсказуемость и скорость работы",
  },
];

const kpis = [
  { icon: TrendingDown, text: "Сокращение ручной сборки артефактов" },
  { icon: Zap, text: "Ускорение synthesis и подготовки CJM" },
  { icon: Users, text: "Стандартизация research capture в команде" },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" id="use-cases" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] leading-tight text-foreground mb-4">
            Где инструмент дает максимальный эффект
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Практические сценарии для консультантов, PO и продуктовых команд — с акцентом на скорость и снижение
            ручных затрат.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <uc.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{uc.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{uc.desc}</p>
              <div className="rounded-xl bg-accent/5 border border-accent/10 p-3">
                <p className="text-xs font-semibold text-accent">→ {uc.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* KPI */}
        <div className="grid sm:grid-cols-3 gap-4">
          {kpis.map((k, i) => (
            <motion.div
              key={k.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="kpi-card flex flex-col items-center gap-3"
            >
              <k.icon className="w-6 h-6 text-primary" />
              <p className="text-sm font-semibold text-foreground text-center">{k.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
