/* ══════════════ Configuración Tailwind compartida ══════════════ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#005fae",
        "primary-dark": "#004785",
        "primary-light": "#5ea5ff",
        "primary-fixed": "#d4e3ff",
        "on-primary": "#ffffff",
        "surface": "#f7f9fb",
        "surface-low": "#f2f4f6",
        "surface-high": "#e6e8ea",
        "on-surface": "#191c1e",
        "on-surface-variant": "#3e4850",
        "outline-variant": "#bdc8d1",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
};
