import { motion } from "framer-motion";
import { Sparkles, Layers, FileJson } from "lucide-react";
import MockupBrowser from "./MockupBrowser";

const benefits = [
  { icon: Sparkles, text: "Быстрый capture в popup" },
  { icon: Layers, text: "Сессии исследования" },
  { icon: FileJson, text: "Экспорт + AI-черновик CJM" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } }),
};

const HeroSection = () => (
  <section className="gradient-hero pt-28 md:pt-36 pb-16 md:pb-24">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div initial="hidden" animate="visible" className="flex flex-col gap-6">
          <motion.div variants={fadeUp} custom={0}>
            <span className="pill-badge">Chrome Extension • CJM Research • AI-assisted</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] leading-tight tracking-tight text-foreground"
          >
            Собирайте наблюдения из продукта в один клик и превращайте их в черновик CJM
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            CJM Capture Assistant помогает PO, консультантам и продуктовым командам фиксировать шаги, заметки и боли
            пользователя прямо в браузере, чтобы быстрее собирать CJM и конкурентный анализ флоу без хаоса в
            артефактах.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3">
            <a href="#roadmap" className="btn-primary-landing text-center">Попробовать демо</a>
            <a href="#roadmap" className="btn-secondary-landing text-center">Запросить корпоративный пилот</a>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2 pt-2">
            {benefits.map((b) => (
              <span key={b.text} className="pill-accent flex items-center gap-1.5">
                <b.icon className="w-3.5 h-3.5" />
                {b.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <MockupBrowser />
          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 card-base p-3 px-4 text-xs font-medium flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-primary" />
            Session Notes
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -top-3 -right-3 card-base p-3 px-4 text-xs font-medium flex items-center gap-2"
          >
            <FileJson className="w-4 h-4 text-accent" />
            Export JSON/MD
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-12 -right-6 card-base p-3 px-4 text-xs font-medium flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            AI Draft CJM
          </motion.div>
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl" style={{ boxShadow: "var(--shadow-glow)" }} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
