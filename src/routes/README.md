# Rutas, menú y breadcrumb

Una sola fuente de verdad: **`src/config/menu.config.tsx`**. De ahí sale:

- El menú lateral (renderizado por `ProLayout`).
- El breadcrumb (lo arma `PageContainer` solo, comparando `path` contra la URL actual — no se declara a mano).
- El título de cada página (mismo mecanismo).

`src/routes/routes.config.tsx` solo mapea `path -> componente` (con `React.lazy` para code-splitting). `src/routes/index.tsx` cruza ambos archivos para generar las rutas de React Router, y falla en build si un `path` del menú no tiene componente registrado (evita rutas fantasma).

## Para añadir una página nueva

1. Crea el componente en `src/pages/NuevaPagina.tsx`.
2. Agrega sus textos a `src/i18n/locales/es.json` y `en.json` (clave bajo `menu.*`).
3. Agrega el nodo en `menu.config.tsx`:
   ```tsx
   { path: '/nueva-pagina', name: 'menu.nuevaPagina', icon: <StarOutlined /> }
   ```
   Para un submenú, anida con `children` (soporta N niveles).
4. Registra el componente en `routes.config.tsx`:
   ```ts
   '/nueva-pagina': lazy(() => import('@/pages/NuevaPagina').then((m) => ({ default: m.NuevaPagina }))),
   ```

No hace falta tocar `AppLayout.tsx` ni declarar breadcrumb a mano.
