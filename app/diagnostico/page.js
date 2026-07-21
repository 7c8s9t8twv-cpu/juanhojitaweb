'use client';

import { useState } from 'react';
import styles from './diagnostico.module.css';

const questions = [
  { cat: 'Costos y precios', text: '¿Sabes con exactitud cuál es tu margen de ganancia real en tu producto o servicio más vendido?' },
  { cat: 'Costos y precios', text: '¿Has actualizado tus precios en los últimos 3 meses si el costo de tus insumos subió?' },
  { cat: 'Control de inventario', text: '¿Sabes, sin contar físicamente en este momento, cuánto stock tienes de tu producto principal?' },
  { cat: 'Control de inventario', text: '¿Tienes definido un stock mínimo por producto que dispare una alerta de reorden?' },
  { cat: 'Procesos y documentación', text: 'Si te ausentaras una semana sin avisar, ¿el negocio seguiría operando con normalidad?' },
  { cat: 'Procesos y documentación', text: '¿Tienes al menos 3 procesos clave de tu negocio documentados por escrito, paso a paso?' },
  { cat: 'Indicadores', text: '¿Revisas algún número concreto de tu negocio (margen, ventas, % de entregas a tiempo) cada semana?' },
  { cat: 'Indicadores', text: '¿Podrías decir hoy mismo si tu negocio creció o decreció respecto al mes pasado, con un número exacto?' },
  { cat: 'Calidad', text: '¿Tienes un protocolo claro de qué hacer cuando un cliente recibe un producto o servicio defectuoso?' },
  { cat: 'Calidad', text: '¿Registras los errores o quejas para detectar si el mismo problema se repite con el tiempo?' },
];

// ⚠️ REEMPLAZAR las URLs por los enlaces reales de Gumroad.
const categoryProducts = {
  'Costos y precios': { name: 'Calculadora de Costos y Margen', url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-COSTOS' },
  'Control de inventario': { name: 'Toolkit de Control de Inventario', url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-INVENTARIO' },
  'Procesos y documentación': { name: 'Manual de Operaciones', url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-PROCESOS' },
  'Indicadores': { name: 'Guía de Arranque Operativo', url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-INDICADORES' },
  'Calidad': { name: 'Gap Analysis ISO 9001', url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-CALIDAD' },
};
const bundleProduct = { name: 'Bundle completo — Sistema operativo de 5 herramientas', url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-BUNDLE' };
const isoProduct = { name: 'Gap Analysis ISO 9001 — verifica y certifica tu sistema', url: 'https://juanhojita.gumroad.com/l/REEMPLAZAR-ISO' };

function buildResult(answers) {
  const score = answers.filter((a) => a === true).length;

  let tag, msg;
  if (score <= 3) {
    tag = 'Operando casi a ciegas';
    msg = 'Tu negocio depende casi enteramente de memoria e intuición. Cualquier sistema que implementes va a tener un impacto grande de inmediato.';
  } else if (score <= 6) {
    tag = 'Bases parciales, huecos importantes';
    msg = 'Tienes algunas bases, pero hay huecos que probablemente te están costando dinero o tiempo sin que lo notes.';
  } else if (score <= 9) {
    tag = 'Operación sólida, falta pulir';
    msg = 'Tu negocio ya tiene varios sistemas funcionando. Es momento de formalizar y verificar lo que falta.';
  } else {
    tag = 'Operación sólida';
    msg = 'Tu operación está sólida en las 5 áreas. El siguiente nivel es verificar la calidad del sistema completo de forma estructurada.';
  }

  const noCounts = {};
  Object.keys(categoryProducts).forEach((c) => (noCounts[c] = 0));
  questions.forEach((q, i) => {
    if (answers[i] === false) noCounts[q.cat]++;
  });

  const weakCats = Object.entries(noCounts).filter(([, n]) => n > 0);
  let recommendedName, recommendedUrl;
  if (weakCats.length >= 3) {
    recommendedName = bundleProduct.name;
    recommendedUrl = bundleProduct.url;
  } else if (weakCats.length === 0) {
    recommendedName = isoProduct.name;
    recommendedUrl = isoProduct.url;
  } else {
    weakCats.sort((a, b) => b[1] - a[1]);
    const top = weakCats[0][0];
    recommendedName = categoryProducts[top].name;
    recommendedUrl = categoryProducts[top].url;
  }

  const breakdown = Object.keys(categoryProducts).map((cat) => ({
    cat,
    ok: noCounts[cat] === 0,
  }));

  return { score, tag, msg, recommendedName, recommendedUrl, breakdown };
}

export default function Diagnostico() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const q = questions[currentQ];
  const progress = (currentQ / questions.length) * 100;

  function answer(value) {
    const next = [...answers];
    next[currentQ] = value;
    setAnswers(next);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setCurrentQ(0);
    setAnswers([]);
    setDone(false);
    setEmail('');
    setSent(false);
    setError('');
    document.getElementById('diag-top')?.scrollIntoView({ behavior: 'smooth' });
  }

  async function submitEmail(e) {
    e.preventDefault();
    setError('');
    setSending(true);
    const r = buildResult(answers);
    try {
      const resp = await fetch('/api/suscribir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          score: r.score,
          tag: r.tag,
          recomendado: r.recommendedName,
        }),
      });
      if (!resp.ok) throw new Error('fail');
      setSent(true);
    } catch {
      setError('Hubo un problema al enviar. Intenta de nuevo en un momento.');
    } finally {
      setSending(false);
    }
  }

  const r = done ? buildResult(answers) : null;

  return (
    <section className="section" id="diag-top">
      <div className="wrap-narrow">
        {/* HERO */}
        <div className={styles.hero}>
          <span className={styles.eyebrowBox}>Gratis · 5 minutos</span>
          <h1 className={styles.h1}>¿Qué tan a ciegas opera tu negocio?</h1>
          <p className={styles.sub}>
            10 preguntas sí/no te dicen, hoy mismo, cuál de los 5 sistemas operativos
            de tu negocio necesita arreglo primero — antes de gastar un dólar en
            consultoría.
          </p>
          <div className={styles.meta}>
            <span>10 preguntas</span>
            <span>Resultado instantáneo</span>
            <span>Sin tarjeta de crédito</span>
          </div>
        </div>

        {/* PAIN */}
        <div className={styles.pain}>
          <p>
            La mayoría de los dueños de PYME sospechan que algo no anda bien en su
            negocio, pero no saben identificar <b>exactamente qué</b>. ¿Es el precio?
            ¿El inventario? ¿Que nadie documenta nada? Sin un diagnóstico claro, es
            fácil gastar tiempo arreglando lo que no es la causa real del problema.
          </p>
        </div>

        {/* QUIZ */}
        {!done && (
          <div>
            <div className={styles.diagHeader}>
              <h2 className={styles.h2}>Responde con honestidad</h2>
              <p>No como crees que debería ser tu negocio — como realmente opera hoy.</p>
            </div>

            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.progressLabel}>
              Pregunta {currentQ + 1} de {questions.length}
            </div>

            <div className={styles.card}>
              <div className={styles.catTag}>{q.cat}</div>
              <div className={styles.qDisplay}>{q.text}</div>
              <div className={styles.answerRow}>
                <button className={`${styles.ansBtn} ${styles.yes}`} onClick={() => answer(true)}>Sí</button>
                <button className={`${styles.ansBtn} ${styles.no}`} onClick={() => answer(false)}>No</button>
              </div>
            </div>

            <div className={styles.navBack}>
              <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0}>
                ← Pregunta anterior
              </button>
            </div>
          </div>
        )}

        {/* RESULTADO */}
        {done && r && (
          <div>
            <div className={styles.scoreDisplay}>
              <div className={styles.scoreNum}>{r.score}<span>/10</span></div>
              <div className={styles.scoreTag}>{r.tag}</div>
            </div>

            <p className={styles.resultMsg}>{r.msg}</p>

            <div className={styles.breakdown}>
              {r.breakdown.map((item) => (
                <div key={item.cat} className={styles.breakdownItem}>
                  <span>{item.cat}</span>
                  <span className={`${styles.status} ${item.ok ? styles.statusOk : styles.statusWarn}`}>
                    {item.ok ? 'EN ORDEN' : 'NECESITA ATENCIÓN'}
                  </span>
                </div>
              ))}
            </div>

            {/* CAPTURA */}
            <div className={styles.captureBox}>
              {!sent ? (
                <>
                  <h3 className={styles.captureH3}>Guarda tu resultado y recibe el PDF completo</h3>
                  <p className={styles.captureP}>
                    Te enviamos el diagnóstico completo en PDF con la tabla de
                    interpretación detallada y el mapeo completo a cada producto — para
                    que lo revises con calma.
                  </p>
                  <form className={styles.emailForm} onSubmit={submitEmail}>
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" disabled={sending}>
                      {sending ? 'Enviando…' : 'Enviar mi resultado'}
                    </button>
                  </form>
                  {error && <div className={styles.error}>{error}</div>}
                  <div className={styles.captureNote}>Sin spam. Un email para confirmar y listo.</div>
                </>
              ) : (
                <div className={styles.success}>
                  ✓ Revisa tu correo — te enviamos el PDF completo del diagnóstico con
                  tu resultado guardado.
                </div>
              )}
            </div>

            {/* RECOMENDACIÓN */}
            <div className={styles.recommendBox}>
              <div className={styles.rbLabel}>Tu siguiente paso recomendado</div>
              <div className={styles.rbProduct}>{r.recommendedName}</div>
              <a className="btn btn-green" href={r.recommendedUrl} target="_blank" rel="noopener">
                Comprar ahora →
              </a>
            </div>

            <div className={styles.restart}>
              <button onClick={restart}>Volver a hacer el diagnóstico</button>
            </div>
          </div>
        )}

        {/* TRUST */}
        <div className={styles.trust}>
          <div>
            <h4>Por qué este diagnóstico</h4>
            <p>
              Cubre los 5 sistemas que definen si una PYME opera con control o a
              ciegas: costos, inventario, procesos, indicadores y calidad — los mismos
              que reviso en consultorías reales.
            </p>
          </div>
          <div>
            <h4>Qué haces con el resultado</h4>
            <p>
              Tu puntaje te dice por dónde empezar. Si necesitas la herramienta
              correspondiente, está disponible por separado — pero el diagnóstico en sí
              no tiene costo ni compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
