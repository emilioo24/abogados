import type { SiteConfig } from "./types";

/**
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  CONFIGURACIÓN DEL DESPACHO                                           │
 * │                                                                       │
 * │  Este es el ÚNICO archivo que necesitas editar para personalizar la   │
 * │  landing para un nuevo cliente. Cambia los textos, los datos de       │
 * │  contacto y el `theme`. No hace falta tocar ningún componente.        │
 * └─────────────────────────────────────────────────────────────────────┘
 */
export const site: SiteConfig = {
  // "bufete-clasico" | "toga-noche" | "azul-notarial"
  theme: "bufete-clasico",

  brand: {
    name: "Alarcón & Vidal",
    monogram: "AV",
    attorney: "Helena Alarcón Vidal",
    credential: "Abogada · Col. 14.302 ICAM",
    established: 1998,
    tagline: "Derecho civil y mercantil con criterio.",
  },

  nav: [
    { label: "Despacho", href: "#despacho" },
    { label: "Áreas", href: "#areas" },
    { label: "Método", href: "#metodo" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    eyebrow: "Despacho de abogados · Madrid",
    headline: "Defensa serena para asuntos que no admiten",
    headlineAccent: "improvisación.",
    subline:
      "Acompañamos a empresas y familias en sus decisiones jurídicas más delicadas, con estrategia, discreción y un trato directo con la abogada que lleva su caso.",
    primaryCta: { label: "Solicitar una consulta", href: "#contacto" },
    secondaryCta: { label: "Ver áreas de práctica", href: "#areas" },
  },

  stats: [
    { value: "25", label: "años ejerciendo" },
    { value: "+900", label: "asuntos resueltos" },
    { value: "94%", label: "acuerdos sin juicio" },
    { value: "48 h", label: "respuesta a su consulta" },
  ],

  about: {
    eyebrow: "01 — El despacho",
    title: "Un despacho pequeño, por convicción.",
    body: [
      "Trabajamos pocos asuntos a la vez porque creemos que el derecho se ejerce bien cuando hay tiempo para pensar. Cada expediente lo lleva quien lo firma: sin intermediarios, sin pasantes anónimos y sin sorpresas en la minuta.",
      "Nuestra práctica se construye sobre tres pilares: anticipar el conflicto antes de que ocurra, negociar con firmeza cuando ya está sobre la mesa y litigar con rigor cuando no queda otra vía. La mayoría de nuestros clientes llegan por recomendación de otro al que defendimos.",
    ],
    credentials: [
      "Doctora en Derecho por la Universidad Complutense",
      "Profesora asociada de Derecho Mercantil",
      "Mediadora civil y mercantil registrada",
      "Miembro del Ilustre Colegio de Abogados de Madrid",
    ],
  },

  practiceAreas: {
    eyebrow: "02 — Áreas de práctica",
    title: "En qué podemos ayudarle",
    intro:
      "Concentramos nuestro trabajo en las materias donde una buena estrategia marca la diferencia entre ganar y perder.",
    items: [
      {
        id: "civil",
        title: "Derecho Civil",
        description:
          "Contratos, responsabilidad, reclamaciones de cantidad y conflictos entre particulares resueltos con la vista puesta en el acuerdo.",
        bullets: ["Contratos y obligaciones", "Reclamaciones de cantidad", "Responsabilidad civil"],
      },
      {
        id: "mercantil",
        title: "Derecho Mercantil",
        description:
          "Acompañamos a sociedades en su día a día y en sus momentos críticos, del pacto de socios al conflicto societario.",
        bullets: ["Sociedades y pactos de socios", "Contratación mercantil", "Conflictos societarios"],
      },
      {
        id: "familia",
        title: "Familia y Sucesiones",
        description:
          "Divorcios, herencias y planificación patrimonial tratados con la sensibilidad que estos asuntos exigen.",
        bullets: ["Separaciones y divorcios", "Herencias y testamentos", "Planificación patrimonial"],
      },
      {
        id: "inmobiliario",
        title: "Inmobiliario",
        description:
          "Compraventas, arrendamientos y conflictos de propiedad, con el detalle registral y fiscal bien atado.",
        bullets: ["Compraventa y arrendamientos", "Propiedad horizontal", "Desahucios"],
      },
      {
        id: "concursal",
        title: "Concursal y Reestructuración",
        description:
          "Soluciones para empresas en dificultad: del plan de reestructuración al concurso ordenado.",
        bullets: ["Planes de reestructuración", "Concurso de acreedores", "Segunda oportunidad"],
      },
      {
        id: "laboral",
        title: "Laboral",
        description:
          "Despidos, conflictos colectivos y asesoramiento a empresa y directivos en sus relaciones laborales.",
        bullets: ["Despidos y reclamaciones", "Alta dirección", "Negociación colectiva"],
      },
    ],
  },

  process: {
    eyebrow: "03 — Método",
    title: "Cómo trabajamos su caso",
    intro:
      "Un proceso claro desde el primer minuto. Usted siempre sabe en qué punto está su asunto y qué viene después.",
    steps: [
      {
        title: "Primera consulta",
        description:
          "Escuchamos su asunto sin prisa y le decimos con franqueza si tiene recorrido. Si no podemos ayudarle, se lo diremos.",
      },
      {
        title: "Estrategia y presupuesto",
        description:
          "Le presentamos un plan de actuación con sus opciones, plazos y un presupuesto cerrado por escrito. Sin letra pequeña.",
      },
      {
        title: "Actuación",
        description:
          "Negociamos o litigamos según lo acordado, manteniéndole informado en cada hito relevante del expediente.",
      },
      {
        title: "Cierre y seguimiento",
        description:
          "Resolvemos el asunto y nos quedamos disponibles para lo que venga después. La relación no termina con la sentencia.",
      },
    ],
  },

  testimonials: {
    eyebrow: "04 — Opiniones",
    title: "Lo que dicen quienes confiaron",
    items: [
      {
        quote:
          "Llegué desbordada por una herencia conflictiva y salí con un acuerdo que pensé imposible. Trato cercano y una claridad enorme en cada paso.",
        author: "María José R.",
        context: "Sucesiones · Particular",
      },
      {
        quote:
          "Resolvieron un conflicto entre socios que amenazaba con hundir la empresa. Firmeza negociando y un dominio del mercantil fuera de lo común.",
        author: "Grupo Ribera, S.L.",
        context: "Mercantil · Empresa",
      },
      {
        quote:
          "Lo que más valoro es que me dijeron desde el principio lo que era realista. Nada de promesas vacías. El presupuesto se cumplió al céntimo.",
        author: "Antonio L.",
        context: "Civil · Reclamación",
      },
    ],
  },

  faq: {
    eyebrow: "05 — Preguntas frecuentes",
    title: "Antes de llamarnos",
    items: [
      {
        question: "¿La primera consulta tiene coste?",
        answer:
          "La primera toma de contacto para valorar su asunto es sin compromiso. Si decidimos trabajar juntos, le entregaremos un presupuesto cerrado por escrito antes de iniciar cualquier actuación.",
      },
      {
        question: "¿Trabajan con clientes de fuera de Madrid?",
        answer:
          "Sí. Atendemos por videoconferencia y nos desplazamos cuando el asunto lo requiere. Buena parte de nuestros clientes residen fuera de la provincia.",
      },
      {
        question: "¿Cómo cobran sus honorarios?",
        answer:
          "Según el tipo de asunto: presupuesto cerrado, por horas o, en determinados casos, una parte vinculada al resultado. Lo acordamos siempre por escrito antes de empezar.",
      },
      {
        question: "¿En cuánto tiempo responden?",
        answer:
          "Atendemos toda consulta inicial en un plazo máximo de 48 horas laborables. Durante el asunto, mantenemos una comunicación directa con la abogada que lo lleva.",
      },
    ],
  },

  contact: {
    eyebrow: "06 — Contacto",
    title: "Cuéntenos su asunto",
    intro:
      "Rellene el formulario o llámenos directamente. Le responderemos en menos de 48 horas con los siguientes pasos.",
    info: {
      phone: "+34 910 000 000",
      phoneRaw: "34910000000",
      email: "contacto@alarconvidal.com",
      whatsapp: "34600000000",
      addressLine: "Calle de Velázquez 47, 2º izq.",
      city: "Madrid",
      region: "Comunidad de Madrid",
      postalCode: "28001",
      country: "España",
      hours: "Lunes a viernes · 9:00 – 19:00",
      mapEmbed:
        "https://www.google.com/maps?q=Calle+de+Velazquez+47,+Madrid&output=embed",
    },
  },

  footer: {
    note: "Despacho inscrito en el Ilustre Colegio de Abogados de Madrid. Esta web tiene carácter informativo y no constituye asesoramiento jurídico.",
    legalLinks: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
  },

  seo: {
    url: "https://alarconvidal.com",
    title: "Alarcón & Vidal · Abogados en Madrid",
    description:
      "Despacho de abogados en Madrid especializado en derecho civil, mercantil, familia y sucesiones. Trato directo, estrategia clara y primera consulta sin compromiso.",
    keywords: [
      "abogados Madrid",
      "despacho de abogados",
      "abogado civil",
      "abogado mercantil",
      "abogado de familia",
      "herencias",
      "derecho societario",
    ],
    locale: "es-ES",
    ogImage: "/og.svg",
    twitterHandle: "@alarconvidal",
  },
};
