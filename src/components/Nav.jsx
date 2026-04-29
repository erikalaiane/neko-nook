export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 bg-cream/85 backdrop-blur-md border-b-2 border-dashed border-peach">
      <a href="#hero" className="font-display text-2xl text-caramel flex items-center gap-1 no-underline">
        🐾 Neko Nook
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {[
          ['#gatos',         'Nossos Gatos'],
          ['#como-funciona', 'Como Funciona'],
          ['#cardapio',      'Cardápio'],
          ['#reservas',      'Reservas'],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="font-bold text-[0.95rem] text-brown no-underline relative group transition-colors hover:text-caramel"
            >
              {label}
              <span className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-rose rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#reservas"
        className="bg-caramel text-white font-extrabold text-sm px-5 py-2.5 rounded-full no-underline shadow-btn hover:-translate-y-0.5 hover:shadow-btn-hover active:translate-y-0.5 transition-all"
      >
        Reservar mesa ✨
      </a>
    </nav>
  )
}
