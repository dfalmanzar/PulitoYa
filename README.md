# Pulito — Sitio Web

Sitio web del servicio profesional de limpieza de ventanas **Pulito** (Bogotá y municipios cercanos). Página estática construida con HTML, Tailwind CSS y JavaScript vanilla — sin necesidad de instalación ni build tools.

## Estructura del proyecto

```
PulitoYa/
├── index.html              # Página principal
├── servicios.html          # Página de servicios (Casas, Apartamentos, Industrias, Comercio)
├── css/
│   └── styles.css          # Estilos personalizados (complementan Tailwind)
├── js/
│   ├── common.js           # Navbar, menú móvil, botón flotante de WhatsApp
│   ├── index.js            # Carrusel de videos, slider antes/después, testimonios
│   ├── servicios.js        # Lógica de las pestañas (tabs)
│   └── tailwind-config.js  # Configuración de colores y tipografías de Tailwind
└── img/
    └── (logos, fotos de servicios, videos del hero)
```

## Cómo ver el sitio

No requiere instalación. Basta con abrir `index.html` directamente en el navegador, o usar la extensión **Live Server** de VS Code (clic derecho sobre `index.html` → "Open with Live Server") para ver los cambios en tiempo real mientras editas.

## Tecnologías

- **Tailwind CSS** (vía CDN) — sistema de estilos
- **JavaScript vanilla** — sin frameworks ni dependencias
- **Material Symbols** — iconografía
- **Google Fonts** — Plus Jakarta Sans (títulos) e Inter (texto)

## Cómo hacer cambios comunes

| Quiero cambiar...                          | Dónde editar                                  |
|---------------------------------------------|------------------------------------------------|
| Texto o imágenes de la página principal     | `index.html`                                  |
| Información de servicios (Casas, Comercio…) | `servicios.html`                              |
| Videos de fondo del encabezado              | `js/index.js` → variable `videoSources`       |
| Testimonios / reseñas                       | `js/index.js` → variable `reviews`            |
| Colores del sitio                           | `js/tailwind-config.js`                       |
| Número de WhatsApp                          | Buscar y reemplazar el enlace `wa.me/...`     |
| Fotos de servicios                          | Carpeta `img/` (mantener los nombres de archivo) |

## Contacto del negocio

- **WhatsApp:** enlace directo de chat configurado en el sitio
- **Teléfono:** 300 318 0788
- **Email:** pulitolimpiaventanas@gmail.com
- **Redes sociales:** Instagram, Facebook y TikTok — usuario `@pulitoya`

## Notas

- El sitio es completamente estático: no tiene backend, base de datos ni formularios que envíen datos a un servidor.
- Los videos e imágenes deben colocarse directamente en la carpeta `img/`; no se recomienda enlazar archivos alojados en Google Drive (puede fallar la reproducción).
