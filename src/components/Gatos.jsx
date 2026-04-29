import { useReveal } from '../hooks/useReveal'

const cats = [
  {
    name:  'Luna',
    breed: 'Maine Coon • 3 anos',
    img:   'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80&fm=webp&fit=crop',
    alt:   'Luna, gata Maine Coon peluda olhando para câmera',
    bg:    'bg-[#FFF0F5]',
    tags:  [{ label: 'Carinhosa', color: 'bg-peach text-brown' }, { label: 'Brincalhona', color: 'bg-rose text-brown' }],
  },
  {
    name:  'Bento',
    breed: 'Ragdoll • 4 anos',
    img:   'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80&fm=webp&fit=crop',
    alt:   'Bento, gato Ragdoll de olhos azuis deitado',
    bg:    'bg-[#F0FFF5]',
    tags:  [{ label: 'Calmo', color: 'bg-mint text-brown' }, { label: 'Dorminhoco', color: 'bg-lavender text-brown' }],
  },
  {
    name:  'Oreo',
    breed: 'Doméstico • 2 anos',
    img:   'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&q=80&fm=webp&fit=crop',
    alt:   'Oreo, gato preto e branco curioso',
    bg:    'bg-[#F5F0FF]',
    tags:  [{ label: 'Arteiro', color: 'bg-lavender text-brown' }, { label: 'Curioso', color: 'bg-peach text-brown' }],
  },
  {
    name:  'Simba',
    breed: 'Persa • 5 anos',
    img:   'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80&fm=webp&fit=crop',
    alt:   'Simba, gato Persa laranja com pelo longo',
    bg:    'bg-[#FFFBF0]',
    tags:  [{ label: 'Reservado', color: 'bg-peach text-brown' }, { label: 'Nobre', color: 'bg-mint text-brown' }],
  },
]

export default function Gatos() {
  const ref = useReveal()

  return (
    <section id="gatos" className="relative z-10 py-24 px-10 max-w-[1100px] mx-auto">
      <div ref={ref} className="reveal text-center mb-14">
        <span className="inline-block bg-lavender text-brown font-bold text-sm px-4 py-1.5 rounded-full mb-3">
          🐾 Conheça a família
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-brown">Os donos da casa</h2>
        <p className="text-muted mt-3 text-base">Cada um tem um jeitinho único. Vai que você encontra seu favorito!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cats.map((cat, i) => (
          <CatCard key={cat.name} cat={cat} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}

function CatCard({ cat, delay }) {
  const ref = useReveal(delay)

  return (
    <div
      ref={ref}
      className="reveal bg-white rounded-[2rem] overflow-hidden border-2 border-peach shadow-hard-peach transition-all duration-200 hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-hard-peach-lg"
    >
      <div className={`h-52 overflow-hidden ${cat.bg}`}>
        <img
          src={cat.img}
          alt={cat.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="font-display text-2xl text-brown">{cat.name}</p>
        <p className="text-xs text-muted font-semibold mt-0.5">{cat.breed}</p>
        <div className="flex gap-2 flex-wrap mt-3">
          {cat.tags.map(t => (
            <span key={t.label} className={`text-xs font-bold px-3 py-1 rounded-full ${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
