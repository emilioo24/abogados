/**
 * Tipos del esquema de configuración de un despacho.
 *
 * Toda la landing se renderiza a partir de un objeto `SiteConfig`.
 * Para dar de alta un nuevo cliente basta con clonar `site.ts` y rellenar
 * estos campos: ningún componente necesita tocarse.
 */

export type ThemeKey = "bufete-clasico" | "toga-noche" | "azul-notarial";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  /** Valor destacado, p. ej. "+20" o "98%". */
  value: string;
  /** Descripción corta debajo del valor. */
  label: string;
}

export interface PracticeArea {
  /** Identificador corto, usado también como ancla. */
  id: string;
  title: string;
  description: string;
  /** Lista breve de servicios concretos dentro del área. */
  bullets?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  /** Contexto del cliente, p. ej. "Empresa familiar · Mercantil". */
  context: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoConfig {
  /** URL canónica del sitio, sin barra final. Ej: "https://midespacho.com". */
  url: string;
  title: string;
  description: string;
  keywords: string[];
  /** Código de idioma BCP 47, p. ej. "es-ES" o "es-MX". */
  locale: string;
  /** Ruta de la imagen para redes sociales (relativa a /public). */
  ogImage: string;
  /** Nombre que aparece como autor/organización en los metadatos. */
  twitterHandle?: string;
}

export interface ContactConfig {
  phone: string;
  /** Teléfono en formato internacional sin símbolos, para enlaces tel: y wa.me. */
  phoneRaw: string;
  email: string;
  whatsapp?: string;
  addressLine: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  /** Texto libre con el horario de atención. */
  hours: string;
  /** URL de embed de Google Maps (iframe src). Opcional. */
  mapEmbed?: string;
}

export interface SiteConfig {
  /** Preset visual. Define paleta y tipografías. */
  theme: ThemeKey;

  brand: {
    /** Nombre comercial del despacho. */
    name: string;
    /** Iniciales para el logotipo tipográfico. */
    monogram: string;
    /** Nombre del abogado o socia/o principal. */
    attorney: string;
    /** Cargo / colegiación, p. ej. "Abogada · Col. 12.345 ICAM". */
    credential: string;
    /** Año de fundación. */
    established: number;
    /** Eslogan breve. */
    tagline: string;
  };

  nav: NavLink[];

  hero: {
    /** Pequeño rótulo superior. */
    eyebrow: string;
    /** Titular principal. Se permite \n para saltos manuales. */
    headline: string;
    /** Palabra(s) del titular a resaltar con el acento. */
    headlineAccent: string;
    subline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };

  stats: Stat[];

  about: {
    eyebrow: string;
    title: string;
    /** Párrafos del cuerpo. El primero lleva capitular. */
    body: string[];
    /** Lista de méritos / credenciales. */
    credentials: string[];
  };

  practiceAreas: {
    eyebrow: string;
    title: string;
    intro: string;
    items: PracticeArea[];
  };

  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: ProcessStep[];
  };

  testimonials: {
    eyebrow: string;
    title: string;
    items: Testimonial[];
  };

  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };

  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    info: ContactConfig;
  };

  footer: {
    note: string;
    /** Enlaces legales (aviso legal, privacidad, etc.). */
    legalLinks: NavLink[];
  };

  seo: SeoConfig;
}
