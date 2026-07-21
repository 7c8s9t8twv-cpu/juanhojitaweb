import Link from 'next/link';
import styles from './home.module.css';

const niveles = [
  {
    title: 'Diagnóstico y Diseño',
    desc: 'Entender cómo funciona de verdad, antes de cambiar nada.',
  },
  {
    title: 'Plan y Estructura',
    desc: 'Convertir el diagnóstico en un plan que la gente realmente usa.',
  },
  {
    title: 'Acompañamiento e Implementación',
    desc: 'Hacer que el cambio se quede, meses después.',
  },
];

const fases = [
  {
    num: '01',
    label: 'Punto de partida · Diagnóstico y Diseño',
    lead: 'Antes de cambiar algo, hay que entender cómo funciona de verdad — no cómo se supone que funciona en el papel.',
    items: [
      ['Diagnóstico de madurez organizacional', 'Una mirada honesta a procesos, gente, tecnología y cultura, para saber con precisión dónde está parada tu organización hoy.'],
      ['Mapeo de procesos actual vs. deseado', 'Documentamos cómo se hacen las cosas ahora y cómo deberían hacerse, con las brechas claramente identificadas.'],
      ['Análisis de impacto del cambio', 'Antes de tocar nada, identificamos quién se verá afectado, cómo, y qué resistencia es previsible.'],
      ['Análisis de brecha ISO 9001 / 14001', 'Evaluación de cumplimiento normativo como base para decisiones de calidad o sostenibilidad.'],
      ['Análisis de costos y precios de venta', 'Para saber si tu negocio gana dinero de verdad, no solo si vende.'],
    ],
  },
  {
    num: '02',
    label: 'El cambio · Plan y Estructura',
    lead: 'Un buen diagnóstico sin un plan de implementación se queda en un documento bonito que nadie usa.',
    items: [
      ['Plan de gestión de cambio', 'Comunicación, capacitación y cronograma de adopción, pensados para la gente que va a vivir el cambio, no solo para el proceso.'],
      ['Manual de operaciones', 'El conocimiento que hoy vive en la memoria de una o dos personas, convertido en algo que se puede enseñar, delegar y mejorar.'],
      ['Plan de arranque operativo en 90 días', 'Para organizaciones nuevas o en reestructuración que necesitan los sistemas básicos funcionando rápido y bien.'],
      ['Control de inventario', 'Sistemas simples para saber, en cualquier momento, cuánto se tiene y cuándo reabastecer.'],
      ['Diseño de estructura organizacional y roles', 'Cuando cambiar un proceso implica cambiar quién hace qué.'],
    ],
  },
  {
    num: '03',
    label: 'Sostener el cambio · Acompañamiento e Implementación',
    lead: 'La parte más difícil de cualquier transformación no es diseñarla. Es que se quede, meses después de que la conversación inicial terminó.',
    items: [
      ['Acompañamiento en la implementación', 'Presencia real durante la ejecución, no solo un plan entregado y una despedida.'],
      ['Facilitación de talleres de alineación', 'Espacios donde el equipo discute el cambio antes de que empiece, para que no llegue como una sorpresa impuesta.'],
      ['Medición de sostenibilidad del cambio', 'Revisamos, 60 a 90 días después, si la mejora se mantuvo o si todo volvió a la forma anterior.'],
    ],
  },
];

const productos = [
  ['Guía de Manuales Operativos →', 'https://juanhojita.gumroad.com/l/REEMPLAZAR-MANUALES'],
  ['Método de Control de Inventario →', 'https://juanhojita.gumroad.com/l/REEMPLAZAR-INVENTARIO'],
  ['Calculadora de Costos y Margen →', 'https://juanhojita.gumroad.com/l/REEMPLAZAR-COSTOS'],
  ['Análisis de Brecha ISO →', 'https://juanhojita.gumroad.com/l/REEMPLAZAR-ISO'],
  ['Guía de Arranque 90 días →', 'https://juanhojita.gumroad.com/l/REEMPLAZAR-ARRANQUE'],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-dark">
        <div className="wrap">
          <span className="eyebrow">Servicios de consultoría</span>
          <h1>Transformación de procesos y gestión del cambio</h1>
          <p>
            Ayudo a equipos y organizaciones a entender cómo operan realmente,
            identificar dónde se pierde tiempo, dinero o claridad, y construir el
            camino —con la gente, no a pesar de ella— hacia una forma de trabajar
            más ordenada y sostenible.
          </p>
          <p>
            Nada de modelos universales ni fórmulas generales. Traigo un proceso de
            diagnóstico honesto y un acompañamiento real durante el cambio, para que
            la mejora se quede después de que yo me vaya.
          </p>
          <div style={{ marginTop: 14 }}>
            <Link href="/diagnostico" className="btn btn-green">
              Descubre qué está mal en tu proceso
            </Link>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ENCONTRARÁS AQUÍ? */}
      <section className="section">
        <div className="wrap">
          <h2 className={styles.sectionTitle}>¿Qué encontrarás aquí?</h2>
          <p className={styles.sectionLead}>
            Trabajo en tres niveles, según qué tan grande sea el cambio que tu
            organización necesita. Puedes empezar en cualquiera de los tres.
          </p>
          <div className={styles.nivelesGrid}>
            {niveles.map((n) => (
              <div key={n.title} className={styles.nivel}>
                <h3 className={styles.nivelTitle}>{n.title}</h3>
                <p className={styles.nivelDesc}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASES 01 / 02 / 03 */}
      {fases.map((f, i) => (
        <div key={f.num}>
          <div className={styles.faseBar}>
            <div className="wrap">
              <span className={styles.faseNum}>{f.num}</span>
              <span className={styles.faseLabel}>{f.label}</span>
            </div>
          </div>
          <section className={styles.faseBody} data-alt={i % 2 === 1}>
            <div className={`wrap ${styles.faseGrid}`}>
              <p className={styles.faseLead}>{f.lead}</p>
              <div className={styles.faseItems}>
                {f.items.map(([t, d]) => (
                  <div key={t} className={styles.faseItem}>
                    <h3 className={styles.itemTitle}>{t}</h3>
                    <p className={styles.itemDesc}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* ¿PREFIERES EMPEZAR POR TU CUENTA? */}
      <section className="section section-green">
        <div className={`wrap ${styles.diyGrid}`}>
          <div>
            <h2 className={styles.diyTitle}>¿Prefieres empezar por tu cuenta?</h2>
            <p className={styles.diyLead}>
              Varios de los servicios de arriba también existen como herramientas
              digitales listas para usar, en mi tienda. Son el punto de entrada más
              rápido si quieres resolver algo puntual antes de pensar en un
              acompañamiento más amplio.
            </p>
          </div>
          <div className={styles.diyBtns}>
            {productos.map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener"
                className={styles.diyBtn}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ¿CÓMO TRABAJO? */}
      <section className="section section-dark">
        <div className="wrap">
          <span className="eyebrow eyebrow-light">¿Cómo trabajo?</span>
          <p className={styles.closing}>
            No impongo modelos prestados de otros contextos. Cada organización tiene
            su propia historia, su propia gente y sus propias razones para resistirse
            al cambio, y esas razones casi siempre tienen sentido. Mi trabajo es
            entender esa lógica antes de proponer cualquier cosa, y construir contigo
            —no para ti— la capacidad de decidir mejor cuando yo ya no esté presente.
          </p>
          <Link href="/proyectos" className="btn btn-green" style={{ marginTop: 28 }}>
            Hablemos de tu organización →
          </Link>
        </div>
      </section>
    </>
  );
}
