import Link from 'next/link';
import styles from './acerca.module.css';

export const metadata = {
  title: 'Conóceme — Juan Hojita',
};

export default function Acerca() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1 className={styles.title}>Conóceme</h1>

          <div className={styles.grid}>
            <div className={styles.photoWrap}>
              {/* Coloca tu foto en /public/juan.jpg */}
              <img src="/juan.jpg" alt="Juan Hojita" className={styles.photo} />
            </div>

            <div className={styles.bio}>
              <p>
                Mi nombre es Juan, aunque muchos me conocen como <b>Hojita</b>. Soy
                ingeniero industrial de formación y he trabajado durante varios años
                en sostenibilidad como comunicador, asesor y gerente ambiental.
              </p>
              <p>
                Desde niño he tenido una relación cercana con la naturaleza, y con el
                tiempo entendí que esa sensibilidad no estaba reñida con la técnica,
                sino que podía complementarla.
              </p>
              <p>
                A lo largo de mi trayectoria he trabajado en sostenibilidad,
                prevención de riesgos, operaciones y cuidado de personas y entornos,
                entendiendo que la seguridad, la organización y la claridad operativa
                son parte inseparable de cualquier enfoque sostenible.
              </p>
              <p className={styles.quote}>
                &ldquo;Mi experiencia se mueve entre la práctica real y la teoría que
                sí funciona, siempre buscando soluciones que puedan aplicarse sin
                añadir complejidad innecesaria.&rdquo;
              </p>
              <p>
                Además del trabajo técnico, me interesa profundamente la comunicación,
                el análisis social y la creación de espacios de encuentro.
              </p>
              <p>
                Me mueve entender cómo las personas interactúan con su entorno, cómo
                construyen comunidad y cómo toman decisiones.
              </p>
              <p>
                Esa mezcla de ingeniería, sensibilidad ambiental y vocación de cuidado
                es la base desde la que observo y trato de aportar al mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="section">
        <div className="wrap">
          <div className={styles.mvGrid}>
            <div className={styles.mvDark}>
              <span className={styles.mvLabel}>Mi misión</span>
              <p className={styles.mvText}>
                Trabajar desde la intersección entre ingeniería, sensibilidad
                ambiental y vocación de cuidado, ofreciendo criterios sólidos —no
                soluciones universales— para pensar mejor y actuar mejor, sin añadir
                complejidad innecesaria ni perder de vista a las personas.
              </p>
            </div>
            <div className={styles.mvGreen}>
              <span className={styles.mvLabel}>Mi visión</span>
              <p className={styles.mvText}>
                Contribuir, aunque sea a una escala modesta, a sistemas más
                responsables, humanos y conscientes de su impacto: entornos donde el
                trabajo alivie en lugar de desgastar, donde la organización y la
                claridad operativa convivan con el cuidado de las personas y del
                entorno, y donde las decisiones consideren sus consecuencias más allá
                del corto plazo.
              </p>
            </div>
          </div>

          <div className={styles.mvFooter}>
            <p className={styles.mvFootText}>
              <b>De aquí parte mi trabajo:</b> traducir esta misión y visión en una
              forma concreta de acompañar el cambio.
            </p>
            <Link href="/proyectos" className="btn btn-ink">
              Conoce mi trabajo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
