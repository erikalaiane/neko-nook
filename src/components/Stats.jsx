const stats = [
  { num: '12',    label: 'Gatos residentes' },
  { num: '+3k',   label: 'Visitas por mês' },
  { num: '4.9 ⭐', label: 'Avaliação média' },
  { num: '5 anos', label: 'Espalhando amor' },
]

export default function Stats() {
  return (
    <div className="relative z-10 bg-brown py-10 flex justify-center gap-16 flex-wrap">
      {stats.map(({ num, label }) => (
        <div key={label} className="text-center text-white">
          <span className="font-display text-4xl text-peach block">{num}</span>
          <span className="text-sm opacity-70 mt-1 block">{label}</span>
        </div>
      ))}
    </div>
  )
}
