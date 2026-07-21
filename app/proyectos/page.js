import Link from 'next/link';
import styles from './proyectos.module.css';

export const metadata = {
  title: 'Trabajos y proyectos — Juan Hojita',
};

const trabajos = [
  {
    title: 'Consultor Operativo y Gestor de Transición Digital',
    fecha: 'Oct 2019 – Presente',
    org: 'TORIBIO MONES EQUIPOS CONTRA INCENDIOS',
    desc: 'Diseño y supervisión de SOPs operativos y técnicos para la organización. Gestión de inventarios y costos. Alineación de procesos con las normativas ISO 9001, NFPA 10 y NFPA 25. Implementación de controles y reportes orientados a auditorías y continuidad operativa.',
    tags: ['Diseño de SOPs', 'Control de Costos', 'Gestión de Inventarios', 'NFPA 10 y 25', 'ISO 9001 y 14001', 'Continuidad Operativa'],
  },
  {
    title: 'Gerente de Operaciones y Gerente General',
    fecha: 'Jul 2020 – Jul 2025',
    org: 'TIERRA URBANA SERVICIOS AMBIENTALES',
    desc: 'Dirección general y operativa de la empresa. Diseño de la estructura operativa y de los SOPs clave del negocio. Supervisión de equipos, proveedores y cumplimiento normativo. Implementación de indicadores de gestión y mejora continua, con foco en sostenibilidad y viabilidad económica.',
    tags: ['Dirección General', 'Sostenibilidad', 'Mejora Continua', 'Gestión de Proveedores', 'Gestión de Equipos', 'Diseño Organizacional'],
  },
  {
    title: 'Oficial de Servicios Corporativos',
    fecha: 'Sep 2016 – Sep 2019',
    org: 'EMBAJADA BRITÁNICA · SANTO DOMINGO Y PUERTO PRÍNCIPE',
    desc: 'Supervisión de procedimientos de seguridad y emergencia. Gestión de contratos, proveedores, inmuebles e inventarios. Diseño de planes de continuidad operativa y liderazgo durante situaciones de crisis.',
    tags: ['Seguridad Física', 'Auditorías', 'Manejo de Emergencias', 'Gestión de Contratos', 'Liderazgo en Crisis', 'Planes de Continuidad'],
  },
];

const proyectos = [
  {
    title: 'Vainita Verde',
    kind: 'RADIO',
    desc: 'Produzco y conduzco el segmento medioambiental del programa Reset Radio, llevando temas de sostenibilidad y medioambiente a un formato de radio accesible y conversacional.',
    tags: ['Producción de Contenidos', 'Locución', 'Entrevistas', 'Comunicación Ambiental'],
    big: true,
  },
  {
    title: 'Riotrillo',
    kind: 'SENDERISMO',
    desc: 'Estructuré el proyecto de circuitos de senderismo de larga distancia en la Cordillera Central de la República Dominicana. Creé la identidad de marca y la señalética del proyecto, y coordiné las capacitaciones a guías de montaña.',
    tags: ['Identidad de marca', 'Gestión de Proyectos', 'Balizado de Senderos', 'Planificación Territorial', 'Capacitación'],
    big: true,
  },
  {
    title: 'TerraGo',
    kind: 'JUEGO DE MESA',
    desc: 'Asesoré la información medioambiental del juego de estrategia Terra Go, asegurando precisión y rigor en el contenido ambiental integrado a la mecánica del juego.',
    tags: ['Asesoría Ambiental', 'Consultoría de Contenido', 'Gamificación', 'Educación Ambiental'],
    big: true,
  },
  {
    title: 'Amiga Date Cuenta · Mathculinity',
    kind: 'PODCASTS',
    desc: 'Productor y director creativo del podcast.',
    tags: ['Producción de Podcast', 'Dirección Creativa'],
    big: false,
  },
  {
    title: 'Manos en la Masa · Crudo y Fuerte (activo)',
    kind: 'PODCASTS',
    desc: 'Productor y (co)conductor del podcast.',
    tags: ['Producción de Podcast', 'Conducción'],
    big: false,
  },
];

function Tags({ items, light }) {
  return (
    <div className={styles.tags}>
      {items.map((t) => (
        <span key={t} className={light ? styles.tagLight : styles.tag}>
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Proyectos() {
  return (
    <>
      {/* HERO */}
      <section className="hero-dark">
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <h1>Trabajos y proyectos</h1>
            <p>
              Mi trabajo se mueve en dos terrenos que, a primera vista, parecen
              distintos: la ingeniería de procesos y operaciones por un lado, y la
              creación de contenido, cultura y comunidad por el otro. En la práctica,
              son la misma curiosidad aplicada a preguntas distintas: cómo funciona un
              sistema, cómo se cuenta una historia, cómo se construye algo que dure.
            </p>
            <p>
              Aquí encontrarás ambos: los trabajos donde he sido responsable de
              procesos, equipos y cumplimiento, y los proyectos donde exploro
              medioambiente, senderismo, juegos y audio.
            </p>
            <a href="https://linkedin.com/" target="_blank" rel="noopener" className={styles.linkedin}>
              ← entra a mi linkedin
            </a>
          </div>
        </div>
      </section>

      {/* TRABAJOS */}
      <section className="section">
        <div className="wrap">
          <h2 className={styles.blockTitle}>Trabajos</h2>
          <p className={styles.blockLead}>
            Mi experiencia formal en ingeniería industrial, operaciones y sistemas,
            donde la responsabilidad es medible y la consistencia no es opcional.
          </p>
          <div className={styles.cards}>
            {trabajos.map((t) => (
              <article key={t.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{t.title}</h3>
                <div className={styles.cardFecha}>{t.fecha}</div>
                <div className={styles.cardOrg}>{t.org}</div>
                <p className={styles.cardDesc}>{t.desc}</p>
                <Tags items={t.tags} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="section section-dark">
        <div className="wrap">
          <h2 className={styles.blockTitleLight}>Proyectos</h2>
          <p className={styles.blockLeadLight}>
            Espacios donde exploro medioambiente, territorio, juego y conversación,
            con la misma atención al detalle que aplico en lo operativo, pero en un
            registro distinto.
          </p>

          <div className={styles.projBig}>
            {proyectos.filter((p) => p.big).map((p) => (
              <article key={p.title} className={styles.projCard}>
                <div className={styles.projHead}>
                  <h3 className={styles.projTitle}>{p.title}</h3>
                  <span className={styles.projKind}>{p.kind}</span>
                </div>
                <p className={styles.projDesc}>{p.desc}</p>
                <Tags items={p.tags} light />
              </article>
            ))}
          </div>

          <div className={styles.projSmall}>
            {proyectos.filter((p) => !p.big).map((p) => (
              <article key={p.title} className={styles.projCard}>
                <div className={styles.projHead}>
                  <h3 className={styles.projTitle}>{p.title}</h3>
                  <span className={styles.projKind}>{p.kind}</span>
                </div>
                <p className={styles.projDesc}>{p.desc}</p>
                <Tags items={p.tags} light />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="section">
        <div className="wrap-narrow" style={{ textAlign: 'left' }}>
          <p className={styles.closing}>
            Ya sea diseñando un sistema operativo para una empresa o estructurando una
            ruta de senderismo, mi enfoque es el mismo: entender el contexto real antes
            de proponer cualquier cosa, y construir algo que la gente pueda usar y
            sostener en el tiempo.
          </p>
          <Link href="/diagnostico" className="btn btn-ink" style={{ marginTop: 24 }}>
            Hablemos de tu próximo proyecto →
          </Link>
        </div>
      </section>
    </>
  );
}
