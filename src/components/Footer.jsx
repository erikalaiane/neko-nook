export default function Footer() {
  return (
    <footer className="relative z-10 bg-brown text-cream py-12 px-10 text-center">
      <p className="font-display text-3xl text-peach mb-2">🐾 Neko Nook</p>
      <p className="opacity-60 text-sm">R. dos Gatos, 42 — Pinheiros, São Paulo</p>
      <p className="opacity-60 text-sm mt-1">Seg a Dom: 10h às 19h</p>

      <div className="flex justify-center gap-8 my-5">
        {['Instagram', 'WhatsApp', 'Política de visitas', 'Adoção'].map(link => (
          <a
            key={link}
            href="#"
            className="text-cream/60 text-sm no-underline hover:text-peach transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <p className="opacity-40 text-sm">
        Made with ☕ & 🐾 — Neko Nook Cat Café © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
