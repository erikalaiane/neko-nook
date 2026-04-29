import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reservas() {
  const headerRef = useReveal()
  const formRef   = useReveal(100)

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nome: '', email: '', data: '', horario: 'Manhã — 10h às 12h', pessoas: '1 pessoa', obs: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservas" className="relative z-10 py-24 px-10">
      <div className="max-w-[600px] mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10">
          <span className="inline-block bg-rose text-brown font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            📅 Venha nos visitar
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-brown">Reserve sua visita</h2>
          <p className="text-muted mt-3 text-base">
            Vagas limitadas para o conforto dos gatos (e dos humanos também 🐾).
          </p>
        </div>

        <div
          ref={formRef}
          className="reveal bg-white border-[3px] border-peach rounded-[2.5rem] p-10 shadow-hard-peach-lg"
        >
          {submitted ? (
            <div className="text-center py-8">
              <span className="text-6xl block mb-4">🐾</span>
              <h3 className="font-display text-2xl text-brown mb-2">Reserva confirmada!</h3>
              <p className="text-muted">Você receberá a confirmação por e-mail em até 24h.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-caramel font-bold underline cursor-pointer bg-transparent border-none"
              >
                Fazer nova reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Seu nome" name="nome" type="text" placeholder="Como te chamar?" value={form.nome} onChange={handleChange} />
                <Field label="E-mail"   name="email" type="email" placeholder="seu@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Data" name="data" type="date" value={form.data} onChange={handleChange} />
                <SelectField
                  label="Horário" name="horario" value={form.horario} onChange={handleChange}
                  options={['Manhã — 10h às 12h', 'Tarde — 14h às 16h', 'Tarde — 16h às 18h']}
                />
              </div>
              <SelectField
                label="Número de pessoas" name="pessoas" value={form.pessoas} onChange={handleChange}
                options={['1 pessoa', '2 pessoas', '3 pessoas', '4+ pessoas (grupo)']}
              />
              <div>
                <label className="font-bold text-sm text-brown block mb-1.5">Observações (opcional)</label>
                <textarea
                  name="obs"
                  rows={3}
                  value={form.obs}
                  onChange={handleChange}
                  placeholder="Aniversário, alergia, pedido especial..."
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach bg-cream font-body text-sm text-brown outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-caramel text-white font-extrabold text-lg py-4 rounded-full shadow-btn hover:-translate-y-0.5 hover:shadow-btn-hover active:translate-y-[3px] transition-all"
              >
                Confirmar reserva 🐾
              </button>
              <p className="text-center text-xs text-muted">
                Você receberá a confirmação por e-mail em até 24h.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="font-bold text-sm text-brown block mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-2xl border-2 border-peach bg-cream font-body text-sm text-brown outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/20 transition-all"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="font-bold text-sm text-brown block mb-1.5">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-2xl border-2 border-peach bg-cream font-body text-sm text-brown outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/20 transition-all"
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}
