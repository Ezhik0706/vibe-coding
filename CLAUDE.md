# CLAUDE.md

## Project Overview

Landing page for a **CJM (Customer Journey Map) research assistant** browser extension. The product helps POs, consultants, and product teams capture user observations, record steps/notes/pain points directly in the browser, and export them as AI-drafted CJMs.

Primary content language: **Russian**.

---

## Repository Structure

```
/ (repo root)
└── Vibe Coding/
    └── lovable-project-891ecaff-45ad-4e00-980d-b9de14ca8cd0-2026-03-10/
        ├── src/
        │   ├── components/
        │   │   ├── landing/     # Page sections (Hero, Features, etc.)
        │   │   └── ui/          # shadcn-ui component library
        │   ├── hooks/           # Custom React hooks
        │   ├── lib/             # Utilities (cn, etc.)
        │   ├── pages/           # Route-level pages
        │   └── test/            # Vitest unit tests
        ├── public/
        ├── package.json
        └── vite.config.ts
```

All development happens inside the `Vibe Coding/lovable-project-*/` directory. Run all commands from there.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript 5.8 |
| Build | Vite 5 (SWC plugin) |
| Styling | Tailwind CSS 3 + CSS variables |
| Components | shadcn-ui (Radix UI primitives) |
| Animation | Framer Motion |
| Routing | React Router DOM 6 |
| Forms | React Hook Form + Zod |
| Server state | TanStack React Query 5 |
| Icons | Lucide React |
| Toasts | Sonner |
| Theming | next-themes (dark mode via `.dark` class) |
| Unit tests | Vitest + Testing Library |
| E2E tests | Playwright |
| Package manager | npm (bun.lock also present) |

---

## Development Commands

All commands run from inside the project subdirectory:

```bash
cd "Vibe Coding/lovable-project-891ecaff-45ad-4e00-980d-b9de14ca8cd0-2026-03-10"

npm run dev          # Dev server at http://localhost:8080
npm run build        # Production build
npm run build:dev    # Dev-mode build
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run test         # Vitest unit tests (run once)
npm run test:watch   # Vitest in watch mode
npx playwright test  # E2E tests
```

---

## Code Conventions

### Path Aliases
Use `@/` for all src imports — never use relative paths like `../../`.

```ts
// Good
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Bad
import { cn } from "../../lib/utils"
```

### Class Naming
Use the `cn()` utility from `@/lib/utils` for all conditional Tailwind class merging:

```ts
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class", className)} />
```

### Components
- Landing page sections live in `src/components/landing/`
- Generic reusable UI primitives live in `src/components/ui/` (shadcn-ui — do not modify unless necessary)
- Each landing section is a single self-contained component

### TypeScript
- `strict` is **off** in tsconfig — but prefer explicit types in new code
- Avoid `any`; use `unknown` when type is truly unknown
- `noUnusedLocals` is off, but don't leave dead code intentionally

### Styling
- Use Tailwind utility classes as the primary styling method
- Custom component classes (`.section-container`, `.card-base`, `.btn-primary-landing`) are defined in `src/index.css`
- Colors are CSS variables — use semantic tokens (`text-foreground`, `bg-primary`, etc.) rather than raw colors
- Dark mode: add `dark:` variants when styling new components

### Animations
- Use Framer Motion for entrance animations on landing sections
- Keep animations subtle and purposeful — this is a B2B product

---

## Component Development (shadcn-ui)

To add a new shadcn-ui component:

```bash
npx shadcn-ui@latest add <component-name>
```

Components are added to `src/components/ui/` and should not be edited directly unless customizing for the project.

---

## Testing

### Unit Tests (Vitest)
- Test files: `src/**/*.{test,spec}.{ts,tsx}`
- Setup: `src/test/setup.ts`
- Environment: jsdom
- Use `@testing-library/react` for component tests

### E2E Tests (Playwright)
- Config: `playwright.config.ts` (uses Lovable preset)
- Custom fixtures: `playwright-fixture.ts`
- Target: full user flows on landing page

---

## Architecture Notes

- **No backend** — this is a purely static frontend SPA
- **No environment variables** — no `.env` files needed currently
- **Single route** — `Index.tsx` is the only page; `NotFound.tsx` handles 404
- The `App.tsx` wraps everything in: `QueryClientProvider` → `TooltipProvider` → `BrowserRouter` → `Toaster/Sonner`
- `TanStack Query` is set up but not actively used yet (prepared for future API calls)

---

## Deployment

The project is managed via the **Lovable** platform (lovable.dev). Deployment is triggered from the Lovable UI, not via manual CLI. The `lovable-tagger` dev dependency is part of this integration.

---

## Don't

1. **Не редактируй файлы в `src/components/ui/` напрямую.**
   Shadcn-ui перезапишет правки при следующем обновлении компонента. Для кастомизации — создавай обёртку в `src/components/` или переопределяй через CSS-переменные в `src/index.css`.

2. **Не используй хардкодные цвета Tailwind (`text-blue-500`, `bg-white`) вместо семантических токенов.**
   Тёмная тема (`dark:`) перестанет работать корректно. Используй `text-foreground`, `bg-background`, `bg-primary` и т.д. — они определены в `tailwind.config.ts` через CSS-переменные.

3. **Не добавляй JSX новых секций лендинга прямо в `src/pages/Index.tsx`.**
   Нарушает архитектуру "одна секция — один файл в `src/components/landing/`". Создавай отдельный компонент и импортируй его в Index.

4. **Не запускай npm-команды из корня репозитория.**
   `package.json` находится в `Vibe Coding/lovable-project-*/`. Все команды (`dev`, `build`, `test`) запускать только из этой папки.

5. **Не используй `useState` + `useEffect` для серверных/асинхронных данных.**
   В проекте подключён TanStack React Query — используй `useQuery` / `useMutation`. Это даёт кэширование, дедупликацию запросов и автоматическое управление состоянием `loading/error`.

---

## What Claude Should Know

- **Рабочая директория для всех операций с кодом** — `"Vibe Coding/lovable-project-891ecaff-45ad-4e00-980d-b9de14ca8cd0-2026-03-10"`. Все файлы проекта, `package.json`, `vite.config.ts` и `src/` находятся там, а не в корне репозитория.

- **Контент на русском языке — это намеренно.** Все тексты в лендинге (заголовки, кнопки, описания) написаны по-русски. При добавлении нового контента или правке существующего сохранять русскоязычный стиль и тональность B2B-продукта для PO и продуктовых команд.

- **`TanStack Query` и `React Hook Form + Zod` настроены, но пока почти не используются.** Это задел под будущий API. Если появляется задача с формой или загрузкой данных — подключать именно эти библиотеки, а не городить `useState`/`useEffect` вручную.

---

## Key Files

| File | Purpose |
|---|---|
| `src/pages/Index.tsx` | Main landing page — composes all sections |
| `src/components/landing/HeroSection.tsx` | Primary hero with CTAs |
| `src/index.css` | Global styles, CSS variables, custom classes |
| `tailwind.config.ts` | Theme tokens, fonts, color system |
| `vite.config.ts` | Build config, port 8080, `@` alias |
| `components.json` | shadcn-ui configuration |
| `src/lib/utils.ts` | `cn()` utility |
