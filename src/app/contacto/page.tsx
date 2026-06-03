import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con el equipo de IA en Español. Respondemos en menos de 48 horas.',
}

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Contacto</span>
        <h1 className="text-3xl font-bold text-zinc-900 mt-2 mb-4" style={{ letterSpacing: '-0.02em' }}>
          Escríbenos
        </h1>
        <p className="text-lg text-zinc-500">
          ¿Tienes una pregunta, sugerencia o quieres proponer una colaboración? Rellena el formulario y te respondemos en menos de 48 horas.
        </p>
      </header>

      <form
        action="https://formspree.io/f/xldndpwg"
        method="POST"
        className="space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-2.5 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tu@email.com"
            className="w-full px-4 py-2.5 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-2.5 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          >
            <option value="pregunta">Pregunta general</option>
            <option value="sugerencia">Sugerencia de artículo</option>
            <option value="colaboracion">Colaboración</option>
            <option value="error">Corrección / error en un artículo</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            className="w-full px-4 py-2.5 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-10 pt-6 border-t border-zinc-100">
        <p className="text-sm text-zinc-400">
          También puedes escribirnos directamente a{' '}
          <a href="mailto:hola@iaenespanol.com" className="text-indigo-600 hover:underline">
            hola@iaenespanol.com
          </a>
        </p>
      </div>
    </div>
  )
}
