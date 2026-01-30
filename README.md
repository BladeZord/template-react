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

---

## Origen de la plantilla

Esta plantilla de trabajo es **obra conjunta humano–IA**: los requisitos y el enfoque se definieron mediante prompts (humano) y el código, la estructura y la documentación se desarrollaron con asistencia de IA. Ambos han participado en el resultado final.

## Declaración de responsabilidad humano–IA

- **Responsabilidad humana:** La persona que ideó, redactó los prompts y revisó el trabajo asume la responsabilidad sobre los fines del proyecto, las decisiones de diseño y el uso que se haga de esta plantilla y de cualquier derivado.
- **Responsabilidad IA:** La IA colaboró en la implementación siguiendo instrucciones; no decide fines ni asume responsabilidad sobre el uso, el cumplimiento normativo o las consecuencias del mismo.
- Cualquier modificación, extensión o uso en producción de esta plantilla queda bajo la responsabilidad de quienes la adoptan y mantienen.
