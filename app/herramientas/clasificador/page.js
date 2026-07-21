import styles from './clasificador.module.css';

export const metadata = {
  title: 'Clasificador de transacciones bancarias | Juan Hojita',
  description:
    'Convierte tus estados de cuenta del Banco Popular y BHD en un presupuesto ordenado. Gratis, sin registro, y todo se procesa en tu navegador: tus datos bancarios nunca salen de tu computadora.',
  openGraph: {
    title: 'Clasificador de transacciones bancarias',
    description:
      'Sube tus estados de cuenta y obtén tu gasto por categoría en segundos. Todo corre en tu navegador.',
    type: 'website',
  },
};

const pasos = [
  {
    n: '1',
    t: 'Descarga tus estados',
    d: 'Desde Popular en Línea o la banca en línea del BHD. Sirven los PDF, los CSV y los TXT tal como los da el banco.',
  },
  {
    n: '2',
    t: 'Súbelos a la herramienta',
    d: 'Puedes cargar varios a la vez y de bancos distintos. Los movimientos entre tus propias cuentas se marcan como traspasos y no se cuentan dos veces.',
  },
  {
    n: '3',
    t: 'Revisa y ajusta',
    d: 'La mayoría de los movimientos se clasifican solos. Corriges lo que haga falta y añades tus propias palabras clave.',
  },
  {
    n: '4',
    t: 'Descarga el resultado',
    d: 'CSV para llevarlo a Excel, o el resumen en PDF con los gráficos.',
  },
];

const funciones = [
  ['Gasto por categoría', 'Más de cincuenta categorías agrupadas en macrocategorías: vivienda, alimentación, transporte, salud, obligaciones.'],
  ['Gastos e ingresos por mes', 'Barras de gasto con la línea de ingresos encima, para ver de un vistazo los meses en que gastaste más de lo que entró.'],
  ['Saldo acumulado', 'La suma corrida mes a mes. Lo que importa es la pendiente: si sube cada vez menos, el margen se está achicando.'],
  ['Gasto por día del mes', 'Revela si el gasto se concentra al cobrar, que suele ser la causa de que el mes no alcance.'],
  ['Comercios recurrentes', 'Los que aparecen en tres o más meses. Los de monto alto y pocas transacciones suelen ser suscripciones olvidadas.'],
  ['Cuentas de terceros', 'A quién le transfieres de forma recurrente. Puedes ponerle nombre y categoría para que el alquiler deje de ser una transferencia anónima.'],
];

export default function Clasificador() {
  return (
    <>
      {/* HERO */}
      <section className="hero-dark">
        <div className="wrap">
          <span className={styles.kicker}>Herramienta gratuita</span>
          <h1>Clasificador de transacciones bancarias</h1>
          <p>
            Sube tus estados de cuenta del Banco Popular o del BHD y obtén, en
            segundos, en qué se te está yendo el dinero. Sin registro, sin
            instalar nada y sin subir tus datos a ningún servidor.
          </p>

          <div className={styles.acciones}>
            <a
              href="/herramientas/clasificador.html"
              className={styles.cta}
              target="_blank"
              rel="noopener"
            >
              Abrir la herramienta
            </a>
            <span className={styles.notaCta}>
              Se abre en una pestaña nueva
            </span>
          </div>
        </div>
      </section>

      {/* PRIVACIDAD */}
      <section className="wrap">
        <div className={styles.privacidad}>
          <h2>Tus datos bancarios no salen de tu computadora</h2>
          <p>
            Esta herramienta no tiene servidor. Todo el procesamiento ocurre
            dentro de tu navegador, en tu propia máquina: los archivos que subes
            nunca viajan a internet, no se guardan en ninguna parte y no hay
            base de datos donde pudieran quedar registrados.
          </p>
          <p>
            Puedes comprobarlo: desconecta el wifi después de que cargue la
            página y verás que sigue funcionando igual. Si prefieres,{' '}
            <a href="/herramientas/clasificador.html" download>
              descarga el archivo
            </a>{' '}
            y ábrelo desde tu computadora sin conexión.
          </p>
          <p className={styles.contrapunto}>
            La otra cara de esa decisión: la configuración que hagas (tus
            cuentas, tus palabras clave) vive solo mientras la pestaña esté
            abierta. Si recargas, empiezas de cero.
          </p>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="wrap">
        <h2 className={styles.titulo}>Cómo funciona</h2>
        <ol className={styles.pasos}>
          {pasos.map((p) => (
            <li key={p.n}>
              <span className={styles.num}>{p.n}</span>
              <div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* QUÉ MUESTRA */}
      <section className="wrap">
        <h2 className={styles.titulo}>Qué te muestra</h2>
        <div className={styles.grid}>
          {funciones.map(([t, d]) => (
            <div key={t} className={styles.tarjeta}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATOS */}
      <section className="wrap">
        <div className={styles.formatos}>
          <h2>Formatos que reconoce</h2>
          <ul>
            <li>
              <b>Banco Popular</b> — estados en PDF y exportaciones CSV de
              Popular en Línea, tanto de ahorros como de cuenta corriente.
            </li>
            <li>
              <b>BHD</b> — estados mensuales en PDF y el archivo TXT de
              &ldquo;Detalle de movimiento&rdquo;.
            </li>
            <li>
              <b>Texto pegado</b> — si tu banco no está en la lista, puedes
              pegar el texto directamente y la herramienta intentará leerlo.
            </li>
          </ul>
          <p className={styles.nota}>
            Nota sobre el BHD: su archivo de &ldquo;Detalle de movimiento&rdquo;
            viene con la columna del monto recortada desde el propio banco. La
            herramienta rescata esas filas para que las completes a mano, pero
            para esa cuenta conviene usar los PDF mensuales.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="wrap">
        <div className={styles.cierre}>
          <h2>¿Lo usas para tu negocio?</h2>
          <p>
            Esta herramienta resuelve el diagnóstico personal. Si lo que
            necesitas es ordenar la operación de una empresa —costos, márgenes,
            procesos, indicadores— eso es justamente a lo que me dedico.
          </p>
          <div className={styles.acciones}>
            <a href="/herramientas/clasificador.html" className={styles.cta} target="_blank" rel="noopener">
              Abrir la herramienta
            </a>
            <a href="/diagnostico" className={styles.ctaAlt}>
              Hacer el diagnóstico operativo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
