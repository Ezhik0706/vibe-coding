import { Route } from "lucide-react";

const footerLinks = [
  {
    title: "Продукт",
    links: [
      { label: "Как работает", href: "#how-it-works" },
      { label: "Функции", href: "#features" },
      { label: "MVP", href: "#roadmap" },
    ],
  },
  {
    title: "Для клиентов",
    links: [
      { label: "PO / Консультанты", href: "#roadmap" },
      { label: "Корпоративный пилот", href: "#roadmap" },
    ],
  },
  {
    title: "Материалы",
    links: [
      { label: "Демо", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "hello@cjmcapture.io", href: "mailto:hello@cjmcapture.io" },
      { label: "Telegram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

const SiteFooter = () => (
  <footer className="border-t border-border py-12 md:py-16" id="footer">
    <div className="section-container">
      <div className="grid md:grid-cols-5 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-foreground mb-3">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Route className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            CJM Capture
          </a>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Chrome extension для системного сбора наблюдений и подготовки черновика CJM.
          </p>
        </div>

        {/* Links */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">© 2026 CJM Capture Assistant. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Made for product teams</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
