export default function Footer() {
  const social = [
    { label: 'Substack', href: 'https://substack.com/@juanhojita' },
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'TikTok', href: 'https://tiktok.com/' },
    { label: 'X', href: 'https://x.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-social">
          {social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
              {/* ícono simple en texto; reemplaza por SVG si quieres */}
              {s.label[0]}
            </a>
          ))}
        </div>
        <div className="footer-brand">JUAN HOJITA</div>
      </div>
    </footer>
  );
}
