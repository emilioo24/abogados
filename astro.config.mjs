// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site";

/**
 * Despliegue.
 *
 * - Dominio propio o página de usuario (usuario.github.io):
 *     no hace falta nada; usa la URL de la config y base "/".
 *
 * - GitHub Pages en un repositorio de proyecto (usuario.github.io/mi-repo):
 *     el workflow define automáticamente estas variables:
 *       SITE_URL  = https://usuario.github.io
 *       BASE_PATH = /mi-repo
 *
 * En local no se definen, así que se usa la URL del despacho y base "/".
 */
const SITE_URL = process.env.SITE_URL || site.seo.url;
const BASE_PATH = process.env.BASE_PATH || "/";

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
