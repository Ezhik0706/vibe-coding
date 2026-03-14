import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Link, FolderOpen, FileJson, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Быстрое сохранение шага/заметки в popup",
    desc: "Фиксируйте наблюдение прямо в браузере, не переключаясь между вкладками и документами.",
  },
  {
    icon: Link,
    title: "Сохранение URL + title + комментария",
    desc: "Каждое наблюдение сохраняется с контекстом страницы, чтобы не терять источник и смысл.",
  },
  {
    icon: FolderOpen,
    title: "Список сессий исследования",
    desc: "Группируйте заметки по задачам, гипотезам, сценариям или конкурентам.",
  },
  {
    icon: FileJson,
    title: "Экспорт в JSON / Markdown",
    desc: "Подготовьте данные для презентации, документации, анализа или импорта в другие инструменты.",
  },
  {
    icon: Sparkles,
    title: 'AI-кнопка: собрать черновик CJM',
    desc: "На основе заметок ассистент предлагает структурированный черновик CJM для дальнейшей доработки.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-section-alt section-padding" id="features" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] leading-tight text-foreground mb-4">
            Что уже можно показать в MVP
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Функции, которые дают быстрый результат уже в первые 2–3 недели разработки.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-base p-7 flex flex-col ${i >= 3 ? "md:col-span-1 lg:col-start-auto" : ""}`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
