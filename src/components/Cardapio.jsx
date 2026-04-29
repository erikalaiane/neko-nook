import { useReveal } from '../hooks/useReveal'

const categories = [
  {
    title: '☕ Cafés Especiais',
    img:   'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80&fm=webp&fit=crop',
    alt:   'Cappuccino com arte latte em forma de coração',
    border: 'border-peach',
    shadow: 'shadow-[5px_5px_0_#FFD6BA]',
    items: [
      { name: 'Cappuccino Neko',   desc: 'Com arte de gatinho no leite',         price: 'R$ 18' },
      { name: 'Latte Caramel Paw', desc: 'Espresso, leite e calda de caramelo',  price: 'R$ 20' },
      { name: 'Cold Brew Mochi',   desc: 'Café gelado com leite de aveia',       price: 'R$ 22' },
      { name: 'Espresso Simples',  desc: 'Grão especial da Serra da Mantiqueira', price: 'R$ 10' },
    ],
  },
  {
    title: '🍵 Chás & Drinks',
    img:   'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=80&fm=webp&fit=crop',
    alt:   'Matcha latte verde em copo com espuma',
    border: 'border-mint',
    shadow: 'shadow-[5px_5px_0_#B8F0DC]',
    items: [
      { name: 'Matcha Latte',      desc: 'Matcha japonês com leite vaporizado',  price: 'R$ 19' },
      { name: 'Chá de Hibisco',    desc: 'Gelado com mel e limão',               price: 'R$ 14' },
      { name: 'Chai Latte',        desc: 'Especiarias indianas com leite',        price: 'R$ 18' },
      { name: 'Limonada da Luna',  desc: 'Com lavanda e hortelã fresca',          price: 'R$ 16' },
    ],
  },
  {
    title: '🍰 Para beliscar',
    img:   'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80&fm=webp&fit=crop',
    alt:   'Waffle com frutas vermelhas e chantilly',
    border: 'border-lavender',
    shadow: 'shadow-[5px_5px_0_#D9C6FF]',
    items: [
      { name: 'Cookies de Baunilha', desc: 'Feitos na hora, 3 unidades',           price: 'R$ 16' },
      { name: 'Waffle com Frutas',   desc: 'Chantilly e calda de frutas vermelhas', price: 'R$ 28' },
      { name: 'Brownie Oreo',        desc: 'Quente, com sorvete de creme',          price: 'R$ 22' },
      { name: 'Torrada Artesanal',   desc: 'Com requeijão e geleia de framboesa',   price: 'R$ 18' },
    ],
  },
]

export default function Cardapio() {
  const headerRef = useReveal()

  return (
    <section id="cardapio" className="relative z-10 py-24 px-10 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal text-center mb-14">
        <span className="inline-block bg-peach text-brown font-bold text-sm px-4 py-1.5 rounded-full mb-3">
          ☕ Para você
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-brown">Cardápio com amor</h2>
        <p className="text-muted mt-3 text-base">Ingredientes selecionados, preparados com carinho — igual os nossos gatos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <MenuCard key={cat.title} category={cat} delay={i * 100} />
        ))}
      </div>

      <p className="text-center mt-8 text-muted text-sm">
        🐾 A entrada já inclui 1h de convivência com os gatos. Taxa: <strong className="text-brown">R$ 35/pessoa</strong>.
      </p>
    </section>
  )
}

function MenuCard({ category, delay }) {
  const ref = useReveal(delay)

  return (
    <div
      ref={ref}
      className={`reveal bg-white rounded-[2rem] overflow-hidden border-2 ${category.border} ${category.shadow} hover:-translate-y-1 transition-all duration-200`}
    >
      {/* Imagem do topo */}
      <div className="h-44 overflow-hidden">
        <img
          src={category.img}
          alt={category.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Itens */}
      <div className="p-6">
        <h3 className="font-display text-xl text-brown mb-4 pb-3 border-b-2 border-dashed border-peach flex items-center gap-2">
          {category.title}
        </h3>
        {category.items.map(item => (
          <div key={item.name} className="flex justify-between items-start py-2.5 border-b border-black/5 last:border-0">
            <div>
              <p className="font-bold text-sm text-brown">{item.name}</p>
              <p className="text-xs text-muted mt-0.5">{item.desc}</p>
            </div>
            <span className="font-display text-base text-caramel ml-4 shrink-0">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
