# Lexland — Landing page premium para abogados

Plantilla **reutilizable** de landing page para abogados y despachos, construida con
[Astro](https://astro.build). Pensada para venderse como SaaS: cada cliente nuevo se
configura editando **un solo archivo**, sin tocar componentes.

Estética de *bufete editorial*: papel marfil, tipografía serif con carácter
(Fraunces + Newsreader), filetes finos, secciones numeradas como un escrito jurídico,
capitular, marquee de áreas y reveals al hacer scroll. Nada de plantilla genérica.

---

## Puesta en marcha

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera /dist (sitio estático, listo para subir)
pnpm preview    # sirve el build de producción
```

Requisitos: Node 18+ y pnpm.

---

## Personalizar para un cliente nuevo (lo único que tocas)

Todo el contenido vive en **`src/config/site.ts`**. Edita ese archivo y listo:

- **`brand`** — nombre, monograma, abogado/a, colegiación, año, eslogan.
- **`nav`, `hero`, `stats`, `about`** — textos de cabecera y presentación.
- **`practiceAreas`** — añade o quita áreas de práctica (la cuadrícula y el
  marquee se generan solos).
- **`process`, `testimonials`, `faq`** — método, opiniones y preguntas.
- **`contact.info`** — teléfono, email, WhatsApp, dirección, horario y mapa.
- **`seo`** — `url`, título, descripción, keywords, idioma e imagen social.

Los tipos están en `src/config/types.ts`: tu editor te autocompleta y avisa si
falta un campo.

### Cambiar el aspecto (reskin por cliente)

En `site.ts`, la propiedad `theme` admite tres presets definidos en
`src/config/themes.ts`:

| Preset             | Estilo                                   |
| ------------------ | ---------------------------------------- |
| `bufete-clasico`   | Marfil + tinta + verde botella y latón   |
| `toga-noche`       | Modo noche: carbón + marfil + oro        |
| `azul-notarial`    | Blanco frío + azul notarial + cobre      |

Para crear paletas nuevas, duplica un bloque en `themes.ts` (son variables CSS),
y úsalo desde `site.ts`. Ningún componente necesita cambios.

---

## SEO incluido

- `<title>`, descripción, keywords, **canonical** y `robots` por página.
- **Open Graph** + **Twitter Cards** (imagen social en `public/og.svg`).
- **Datos estructurados JSON-LD** (`LegalService` + `Attorney`) generados desde la
  config → resultados enriquecidos en Google.
- **Sitemap** automático (`@astrojs/sitemap`) y `public/robots.txt`.
- HTML semántico, idioma desde config y soporte de `prefers-reduced-motion`.

> Recuerda actualizar el dominio en `seo.url` (lo usan la canónica, el sitemap y
> el OG) y el `Sitemap:` de `public/robots.txt`.

### Imagen social (OG)

Se incluye `public/og.svg` como marcador. Para máxima compatibilidad en redes
sociales conviene exportarla a **PNG 1200×630** (`/og.png`) y apuntar
`seo.ogImage` a ella.

---

## El formulario de contacto

Por defecto el formulario **compone un correo (`mailto:`)** sin necesidad de
backend. Para producción, conéctalo a un servicio (Formspree, Resend, un endpoint
propio, etc.) editando el `<script>` al final de `src/components/Contact.astro`.

---

## Estructura

```
src/
├─ config/
│  ├─ site.ts      ← ÚNICO archivo a editar por cliente
│  ├─ themes.ts    ← presets de color/tipografía
│  └─ types.ts     ← esquema tipado de la config
├─ layouts/
│  └─ BaseLayout.astro   ← <head>, fuentes, inyección de tema, grano, reveals
├─ components/     ← Header, Hero, Marquee, About, PracticeAreas, Process,
│                    Testimonials, Faq, Contact, Footer, SEO
├─ styles/
│  └─ global.css
└─ pages/
   └─ index.astro
public/            ← favicon.svg, og.svg, robots.txt
```

## Desplegar

Al ser estático (`/dist`), funciona en cualquier hosting estático:
**Vercel, Netlify, Cloudflare Pages, GitHub Pages**… Build command `pnpm build`,
carpeta de salida `dist`.

### GitHub Pages (automático)

El repo incluye un workflow en `.github/workflows/deploy.yml` que compila y
publica en cada push a `main`. Pasos, una sola vez:

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz push. El workflow construye y publica solo; la URL aparece en la
   pestaña **Actions** y en **Settings → Pages**.

> Importante: confirma que **`pnpm-lock.yaml` está versionado** (no en `.gitignore`).
> El workflow detecta pnpm a partir de ese archivo.

**¿A qué URL se despliega?** El workflow lo resuelve automáticamente:

| Tipo de repositorio                       | URL resultante                       | Qué hacer                                                        |
| ----------------------------------------- | ------------------------------------ | --------------------------------------------------------------- |
| Proyecto, p. ej. `mi-despacho`            | `usuario.github.io/mi-despacho`      | Nada: el workflow pone `base` y dominio solos.                  |
| Página de usuario `usuario.github.io`     | `usuario.github.io`                  | Comenta `BASE_PATH` y `SITE_URL` en el workflow (base = `/`).   |
| Dominio propio (CNAME)                    | `tudominio.com`                      | Comenta esas dos líneas y pon tu dominio en `seo.url`.          |

Para dominio propio, añade además el dominio en **Settings → Pages → Custom domain**
(crea un fichero `public/CNAME` con el dominio si quieres versionarlo).

Las rutas (favicon, imagen social, sitemap, enlaces) se ajustan solas al `base`
configurado, así que el mismo código sirve para los tres casos.
