# Rutas y breadcrumb

Las rutas se definen **por módulo** en `routes.config.tsx`. Cada entrada tiene:

- **`path`** o **`index`**: ruta (o índice para `/`).
- **`data`**: `{ title, urls }` vinculados al router.
  - **`title`**: título de la vista (lo pinta el layout; la vista no lo define).
  - **`urls`**: niveles del breadcrumb (soporta N niveles). `path` opcional por nivel (sin `path` = actual, no enlace).
- **`component`**: componente de la vista.

Ejemplo:

```ts
{
  path: "cargo",
  data: {
    title: "Gestión de cargos",
    urls: [
      { title: "Administración" },
      { title: "Gestión de cargos" },
    ],
  },
  component: CargoComponent,
}
```

Para añadir un módulo: agrega una entrada en `routesConfig` y el componente en `pages/` (o en tu módulo).
