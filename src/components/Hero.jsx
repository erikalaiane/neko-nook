// Imagem: gato laranja olhando para cima (Unsplash - Cat Eye by Daria Shatova, free to use)
const HERO_IMG = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=80&fm=webp&fit=crop'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center gap-12 max-w-[1100px] mx-auto px-10 pt-32 pb-16 flex-col md:flex-row"
    >
      {/* Texto */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 bg-mint text-brown text-sm font-bold px-4 py-1.5 rounded-full mb-5 animate-[fadeUp_0.6s_ease_both]">
          🐱 São Paulo • Pinheiros
        </div>

        <h1 className="font-display text-5xl md:text-[5rem] leading-[1.1] text-brown animate-[fadeUp_0.7s_0.1s_ease_both]">
          Café, gato<br />e{' '}
          <span className="text-caramel">muito amor</span>
        </h1>

        <p className="mt-5 text-lg text-muted max-w-md mx-auto md:mx-0 leading-relaxed animate-[fadeUp_0.7s_0.2s_ease_both]">
          Um espaço aconchegante onde o seu café fica ainda mais gostoso com uma patinha no colo. Venha nos visitar — os gatos estão esperando!
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start animate-[fadeUp_0.7s_0.3s_ease_both]">
          <a
            href="#reservas"
            className="bg-caramel text-white font-extrabold text-base px-8 py-3 rounded-full shadow-btn hover:-translate-y-0.5 hover:shadow-btn-hover active:translate-y-[3px] transition-all no-underline"
          >
            Reservar agora 🐾
          </a>
          <a
            href="#gatos"
            className="bg-transparent text-brown font-bold text-base px-8 py-3 rounded-full border-2 border-peach hover:bg-peach transition-colors no-underline"
          >
            Conhecer os gatos
          </a>
        </div>

        <div className="mt-10 flex gap-3 flex-wrap justify-center md:justify-start animate-[fadeUp_0.7s_0.4s_ease_both]">
          {['☕ Café especial', '🐈 12 gatos', '🌿 Pet-friendly'].map(b => (
            <div key={b} className="bg-white border-2 border-peach rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-bold text-brown">
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Card com imagem */}
      <div className="flex-shrink-0 flex justify-center animate-[fadeUp_0.8s_0.2s_ease_both]">
        <div className="animate-float relative bg-white border-[3px] border-peach rounded-[2.5rem] p-5 shadow-hard-peach-lg">
          <span className="absolute -top-4 right-5 bg-rose text-brown font-extrabold text-xs px-3 py-1 rounded-full border-2 border-brown">
            ⭐ Destaque do mês
          </span>
          <img
            src={HERO_IMG}
            alt="Gato laranja olhando para cima — mascote do Neko Nook"
            className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] object-cover rounded-[1.8rem]"
          />
          <p className="text-center font-display text-xl text-brown mt-3">Mochi 🧡</p>
          <p className="text-center text-xs text-muted">Scottish Fold • 2 anos</p>
        </div>
      </div>
    </section>
  )
}
