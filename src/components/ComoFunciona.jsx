import { useReveal } from '../hooks/useReveal'

const HOW_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80&fm=webp&fit=crop'

const steps = [
  { icon: '📅', num: '01', title: 'Reserve sua visita',    desc: 'Escolha o dia, horário e número de pessoas pelo site. Rápido e fácil.' },
  { icon: '🚪', num: '02', title: 'Chegue e se acomode',   desc: 'Confirmamos sua reserva, você higieniza as mãos e entra no espaço.' },
  { icon: '☕', num: '03', title: 'Peça seu café',          desc: 'Explore o cardápio com cafés especiais, tês e petiscos deliciosos.' },
  { icon: '🐾', num: '04', title: 'Curta os gatos!',        desc: 'Interaja, faça carinho e tire muitas fotos. Tempo mínimo: 1 hora.' },
]

export default function ComoFunciona() {
  const headerRef = useReveal()

  return (
    <section
      id="como-funciona"
      className="relative z-10 bg-brown py-28 px-10 my-8"
      style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-14">
          <span className="inline-block bg-white/10 text-peach font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            ✨ Simples assim
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-peach">Como funciona sua visita</h2>
          <p className="text-cream/60 mt-3">Em 4 passos você já está com um gatinho no colo ☁️</p>
        </div>

        {/* Imagem + Steps lado a lado */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Imagem */}
          <ImageBlock />

          {/* Steps */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <StepCard key={s.num} step={s} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ImageBlock() {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal flex-shrink-0">
      <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-[8px_8px_0_rgba(255,255,255,0.1)]">
        <img
          src={HOW_IMG}
          alt="Pessoa acariciando um gato feliz dentro do café"
          className="w-full lg:w-[400px] h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
        <p className="absolute bottom-4 left-5 text-white font-bold text-sm">
          🐾 Mais de 3.000 visitas por mês
        </p>
      </div>
    </div>
  )
}

function StepCard({ step, delay }) {
  const ref = useReveal(delay)
  return (
    <div
      ref={ref}
      className="reveal text-center p-7 bg-white/7 rounded-2xl border border-white/15 hover:bg-white/12 hover:-translate-y-1 transition-all duration-200"
    >
      <span className="text-5xl block mb-3">{step.icon}</span>
      <span className="font-display text-sm text-rose tracking-wide block mb-1">PASSO {step.num}</span>
      <p className="font-extrabold text-base text-cream mb-2">{step.title}</p>
      <p className="text-sm text-cream/60 leading-relaxed">{step.desc}</p>
    </div>
  )
}
