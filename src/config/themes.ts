import type { ThemeKey } from "./types";

/**
 * Presets visuales. Cada uno define las variables CSS que consume el sitio.
 * Cambiar `theme` en site.ts reskinea toda la landing sin tocar componentes.
 *
 * Las fuentes se cargan en BaseLayout; aquí solo se indica qué familia usa
 * cada rol (display / texto / mono de rótulos).
 */

export interface ThemeTokens {
  /** Familias tipográficas (deben coincidir con las cargadas en BaseLayout). */
  fontDisplay: string;
  fontBody: string;
  /** Pares clave/valor que se inyectan como custom properties en :root. */
  colors: Record<string, string>;
  /** Esquema de color del navegador (afecta a controles nativos). */
  scheme: "light" | "dark";
}

export const themes: Record<ThemeKey, ThemeTokens> = {
  // Marfil cálido, tinta casi negra, latón y verde botella. Editorial clásico.
  "bufete-clasico": {
    fontDisplay: '"Fraunces", Georgia, serif',
    fontBody: '"Newsreader", Georgia, serif',
    scheme: "light",
    colors: {
      "--paper": "#F2EDE1",
      "--paper-2": "#E9E2D1",
      "--paper-3": "#1C2B25",
      "--ink": "#1B1A15",
      "--ink-soft": "#4A473C",
      "--ink-faint": "#807B6B",
      "--on-dark": "#EFE9DA",
      "--on-dark-soft": "#B9B19C",
      "--accent": "#1F3D32",
      "--accent-2": "#9C7A3C",
      "--gold": "#B0883F",
      "--line": "rgba(27, 26, 21, 0.16)",
      "--line-strong": "rgba(27, 26, 21, 0.42)",
      "--line-dark": "rgba(239, 233, 218, 0.18)",
    },
  },

  // Modo noche: carbón profundo, marfil tenue, latón. Sobrio y premium.
  "toga-noche": {
    fontDisplay: '"Fraunces", Georgia, serif',
    fontBody: '"Newsreader", Georgia, serif',
    scheme: "dark",
    colors: {
      "--paper": "#15161A",
      "--paper-2": "#1D1F25",
      "--paper-3": "#0F1013",
      "--ink": "#ECE7DA",
      "--ink-soft": "#B7B2A4",
      "--ink-faint": "#7E7A6F",
      "--on-dark": "#ECE7DA",
      "--on-dark-soft": "#B7B2A4",
      "--accent": "#C9A24B",
      "--accent-2": "#7FA892",
      "--gold": "#C9A24B",
      "--line": "rgba(236, 231, 218, 0.16)",
      "--line-strong": "rgba(236, 231, 218, 0.4)",
      "--line-dark": "rgba(236, 231, 218, 0.16)",
    },
  },

  // Blanco frío, azul notarial profundo, cobre. Más institucional.
  "azul-notarial": {
    fontDisplay: '"Fraunces", Georgia, serif',
    fontBody: '"Newsreader", Georgia, serif',
    scheme: "light",
    colors: {
      "--paper": "#F6F4F0",
      "--paper-2": "#EAE8E3",
      "--paper-3": "#15263F",
      "--ink": "#16202E",
      "--ink-soft": "#415061",
      "--ink-faint": "#6C7888",
      "--on-dark": "#EDF1F6",
      "--on-dark-soft": "#AFBBC9",
      "--accent": "#1B3A63",
      "--accent-2": "#B5652E",
      "--gold": "#B5652E",
      "--line": "rgba(22, 32, 46, 0.14)",
      "--line-strong": "rgba(22, 32, 46, 0.4)",
      "--line-dark": "rgba(237, 241, 246, 0.18)",
    },
  },
};
