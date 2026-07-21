import styles from './tienda.module.css';

export const metadata = {
  title: 'Tienda — Juan Hojita',
};

// ⚠️ REEMPLAZA estos productos y URLs por los reales de tu Gumroad.
const productos = [
  {
    nombre: 'Calculadora de Costos y Margen',
    desc: 'Plantilla para saber si tu negocio gana dinero de verdad, no solo si vende.',
    precio: 'RD$ —',
    url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-COSTOS',
  },
  {
    nombre: 'Método de Control de Inventario',
    desc: 'Sistema simple para saber, en cualquier momento, cuánto tienes y cuándo reabastecer.',
    precio: 'RD$ —',
    url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-INVENTARIO',
  },
  {
    nombre: 'Guía de Manuales Operativos',
    desc: 'El conocimiento que vive en la cabeza de una persona, convertido en algo que se puede enseñar y delegar.',
    precio: 'RD$ —',
    url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-MANUALES',
  },
  {
    nombre: 'Análisis de Brecha ISO',
    desc: 'Evaluación de cumplimiento normativo como base para decisiones de calidad o sostenibilidad.',
    precio: 'RD$ —',
    url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-ISO',
  },
  {
    nombre: 'Guía de Arranque 90 días',
    desc: 'Para negocios nuevos o en reestructuración que necesitan los sistemas básicos funcionando rápido.',
    precio: 'RD$ —',
    url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-ARRANQUE',
  },
  {
    nombre: 'Bundle completo',
    desc: 'Sistema operativo de 5 herramientas. El paquete completo para ordenar tu operación.',
    precio: 'RD$ —',
    url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-BUNDLE',
  },
];

export default function Tienda() {
  return (
    <>
      <section className="hero-dark">
        <div className="wrap">
          <span className="eyebrow">Herramientas digitales</span>
          <h1>Tienda</h1>
          <p>
            Las mismas herramientas que uso en consultorías reales, listas para usar.
            El punto de entrada más rápido si quieres resolver algo puntual por tu
            cuenta.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.grid}>
            {productos.map((p) => (
              <article key={p.nombre} className={styles.card}>
                <h3 className={styles.cardTitle}>{p.nombre}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.cardFoot}>
                  <span className={styles.precio}>{p.precio}</span>
                  <a href={p.url} target="_blank" rel="noopener" className="btn btn-green">
                    Comprar →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
