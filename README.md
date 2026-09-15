# Template React

Plantilla de trabajo con **React**, **TypeScript**, **Ant Design**, **Vite**: layout con menú, header, footer y componentes configurables desde un único config.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Estructura

```
src/
├── config/           # Configuración central
│   ├── app.config.tsx  ← Menu, header, footer, layout
│   ├── types.ts
│   └── index.ts
├── components/
│   └── layout/       # AppLayout, AppMenu, AppHeader, AppFooter, AppBreadcrumb
├── pages/            # Páginas / vistas
├── routes/           # React Router + config por módulo (breadcrumb, title)
│   ├── routes.config.tsx  ← path, data { title, urls }, component
│   └── types.ts
├── main.tsx
└── index.css
```

## Configuración

Todo se controla desde **`src/config/app.config.tsx`**:

- **`layout`**: ancho del sidebar, colapsado, tema, estilo del contenido.
- **`menu`**: ítems del menú (rutas, iconos, hijos), `defaultOpenKeys`, `collapsed`.
- **`header`**: título, logo, usuario, menú de usuario, `extra`.
- **`footer`**: copyright, enlaces, “Built with”, `extra`.

Añade o modifica ítems en `menu.items` y las rutas en `src/routes/routes.config.tsx`.

### Breadcrumb y títulos por ruta

Cada ruta puede definir **`data`** en `src/routes/routes.config.tsx`:

- **`title`**: título de la vista (lo muestra el layout; no se define en el componente).
- **`urls`**: niveles del breadcrumb (soporta N niveles). Cada nivel: `{ title, path? }`; sin `path` = nivel actual (no enlace).

El **AppBreadcrumb** se vincula al router y usa `urls` de la ruta activa.

### Cómo añadir una nueva página

1. Crea el componente en `src/pages/` (por ejemplo `MiPage.tsx`). No incluyas el título; viene de la ruta.
2. Exporta en `src/pages/index.ts`.
3. Añade la entrada en `src/routes/routes.config.tsx` (`path`, `data`, `component`).
4. Añade el ítem en `menu.items` en `app.config.tsx` (key, label, path, icon opcional).

## Scripts

| Comando      | Descripción        |
|-------------|--------------------|
| `npm run dev` | Servidor desarrollo |
| `npm run build` | Build producción   |
| `npm run preview` | Preview del build  |

## Stack

- React 18 + TypeScript
- Vite 5
- Ant Design 5
- React Router 6

### Sistema de colores y apariencia

- `layout.theme`/color primario/idioma se controlan en runtime desde `src/store/theme.store.ts` (Zustand + `persist`, guardado en localStorage).
- El panel de ajustes (`AppSettingsDrawer`, ícono de engranaje en el header) deja cambiar tema claro/oscuro, color primario (presets en `src/config/theme.config.ts`) e idioma sin recargar.
- `AppProviders.tsx` combina esos stores con `ConfigProvider` de AntD (`algorithm` + `token.colorPrimary`) — todos los componentes de AntD se recalculan solos, sin CSS a mano.

### Menú, header, breadcrumb y subheader

- Migrado a `@ant-design/pro-components` (`ProLayout` + `PageContainer`). `AppMenu`, `AppHeader` y `AppBreadcrumb` ya no existen — ProLayout los resuelve.
- `src/config/menu.config.tsx` es la única fuente de verdad: alimenta menú, breadcrumb y título de página (PageContainer los deriva solo comparando `path` con la URL).
- Responsive (colapso/Drawer en móvil) lo maneja ProLayout de forma nativa vía la prop `breakpoint`.
- El estado de colapso del sidebar persiste (`src/store/layout.store.ts`, Zustand).
- **Disposición del menú (side/top/mix):** equivalente al toggle "vertical/horizontal" del Angular original, pero nativo de ProLayout (prop `layout`). Cambiable en runtime desde el panel de ajustes o `SettingsPage`, persistido en `layout.store.ts`.
  - `side`: sidebar vertical clásico (default).
  - `top`: todo el menú arriba, sin sidebar.
  - `mix`: primer nivel arriba, submenú del item activo en un panel lateral.

### Integraciones añadidas

- **React Query** (`src/lib/queryClient.ts`, ejemplo en `src/hooks/useExampleQuery.ts` usado en `DashboardPage`).
- **i18n** (`react-i18next`, locales en `src/i18n/locales/es.json` y `en.json`; detecta y persiste el idioma).
- **Zustand** (`theme.store.ts`, `layout.store.ts`, ambos con `persist`).

### Trade-off conocido

- El bundle principal creció a ~1.18 MB (gzip ~380 KB) por `pro-components`. Es esperable: es una librería grande a cambio de resolver menú+header+breadcrumb+responsive sin código propio. Si en algún punto pesa demasiado, la alternativa es volver al `AppMenu`/`AppHeader` a mano (versión anterior) o cargar `pro-components` de forma diferida.

### Tipografía, íconos y cliente HTTP

- **Fuente:** `Poppins` (300/400/500/600/700), la misma que usaba el Angular original. Self-hosted vía `@fontsource/poppins` (no un `<link>` a `fonts.googleapis.com`) — sin request externo a Google, funciona offline, mejor para privacidad/rendimiento. Importada en `main.tsx`, aplicada también a los componentes de AntD vía `token.fontFamily` en `AppProviders.tsx`.
- **Íconos:** dos sets, con propósito distinto:
  - `@ant-design/icons` — para el "chrome" del layout (menú, botones de acción del header, iconografía que ya usa AntD internamente). Mantiene consistencia visual con los componentes de AntD.
  - `lucide-react` — para íconos de contenido (cards, ilustraciones, estados vacíos). Es el sucesor activo de Feather, que era el set principal del Angular original (`angular-feather`) — incluso el estilo visual es casi idéntico.
- **`axios`:** cliente HTTP único en `src/lib/api.ts`, con interceptor de auth (token desde `localStorage`, ajústalo a tu solución real) y normalización de errores. `baseURL` configurable vía `VITE_API_URL` (ver `.env.example`). Combínalo con React Query: `useQuery({ queryKey: [...], queryFn: () => api.get('/ruta').then(r => r.data) })`.

---

## Origen de la plantilla

Esta plantilla de trabajo es **obra conjunta humano–IA**: los requisitos y el enfoque se definieron mediante prompts (humano) y el código, la estructura y la documentación se desarrollaron con asistencia de IA. Ambos han participado en el resultado final.

## Declaración de responsabilidad humano–IA

- **Responsabilidad humana:** La persona que ideó, redactó los prompts y revisó el trabajo asume la responsabilidad sobre los fines del proyecto, las decisiones de diseño y el uso que se haga de esta plantilla y de cualquier derivado.
- **Responsabilidad IA:** La IA colaboró en la implementación siguiendo instrucciones; no decide fines ni asume responsabilidad sobre el uso, el cumplimiento normativo o las consecuencias del mismo.
- Cualquier modificación, extensión o uso en producción de esta plantilla queda bajo la responsabilidad de quienes la adoptan y mantienen.
