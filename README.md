# Sitio web de Juan Hojita (Next.js)

Sitio personal y de consultoría, reconstruido en **Next.js 15** (App Router),
todo en tipografía **Lato** y paleta verde oliva. Incluye el diagnóstico
interactivo con captura de correo funcional vía SMTP de Hostinger.

---

## Estructura

```
juanhojita/
├─ app/
│  ├─ layout.js              ← layout global (navbar + footer + Lato)
│  ├─ globals.css            ← tokens de color y estilos base
│  ├─ page.js                ← Inicio
│  ├─ home.module.css
│  ├─ acerca/page.js         ← Acerca de (Conóceme)
│  ├─ proyectos/page.js      ← Trabajos y proyectos
│  ├─ tienda/page.js         ← Tienda (productos Gumroad)
│  ├─ diagnostico/page.js    ← Diagnóstico interactivo
│  └─ api/suscribir/route.js ← API de correo (SMTP Hostinger)
├─ components/
│  ├─ Navbar.js
│  └─ Footer.js
├─ public/                   ← pon aquí juan.jpg y diagnostico-operativo.pdf
├─ .env.local.example        ← plantilla de variables de entorno
└─ package.json
```

---

## 1. Requisitos en tu Mac (una sola vez)

Instala **Node.js 20+** (incluye npm). Compruébalo en la Terminal:

```bash
node --version    # debe decir v20 o superior
npm --version
```

Si no lo tienes, descárgalo de https://nodejs.org (versión LTS).

---

## 2. Correr el sitio en local

Desde la carpeta del proyecto:

```bash
npm install        # instala dependencias (una vez)
npm run dev        # arranca el servidor de desarrollo
```

Abre http://localhost:3000 en tu navegador. Cada cambio se refleja al guardar.

---

## 3. Configurar el correo (diagnóstico)

1. Copia `.env.local.example` como `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
2. Rellena tus datos SMTP reales de Hostinger
   (hPanel → Emails → tu cuenta → Configuración):
   ```
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=hola@juanhojita.com
   SMTP_PASS=tu_contraseña
   NOTIFY_TO=hola@juanhojita.com
   ```
3. (Opcional) Pon tu PDF en `public/diagnostico-operativo.pdf`.

`.env.local` **nunca** se sube a GitHub (ya está en `.gitignore`).

---

## 4. Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio juanhojita en Next.js"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/juanhojita.git
git push -u origin main
```

---

## 5. Desplegar en Hostinger

1. En hPanel → **Websites → Node.js → Get started**.
2. Elige **Connect GitHub** y selecciona el repositorio `juanhojita`.
3. Configuración de build:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Node version: 20+
4. En **Environment variables** añade las mismas 5 variables del paso 3
   (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_TO).
5. Apunta tu dominio `juanhojita.com` a esta app.

Cada `git push` a `main` puede redesplegar automáticamente.

---

## Cosas que debes personalizar (busca "REEMPLAZAR")

- **URLs de Gumroad**: en `app/page.js`, `app/tienda/page.js` y
  `app/diagnostico/page.js`. Reemplaza los placeholders
  `https://juanhojita.gumroad.com/l/REEMPLAZAR-XXX` por tus enlaces reales.
- **Foto**: `public/juan.jpg`.
- **PDF del diagnóstico**: `public/diagnostico-operativo.pdf`.
- **Redes sociales**: enlaces en `components/Footer.js` y el LinkedIn en
  `app/proyectos/page.js`.
- **Precios de la tienda**: en `app/tienda/page.js`.

---

## Notas

- El diagnóstico guarda cada correo en `suscriptores.csv` (respaldo) y además
  te envía un aviso por correo, así siempre tienes copia.
- Si el hosting tiene filesystem de solo lectura, el CSV se omite sin romper
  nada; los correos se siguen enviando.
- Todo el diseño usa las variables de color en `app/globals.css`; cambia la
  paleta ahí en un solo lugar.
