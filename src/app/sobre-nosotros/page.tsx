import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Conoce quiénes somos, por qué creamos PulsoIA y nuestra misión de acercar la inteligencia artificial a todos los hispanohablantes.',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Sobre nosotros</span>
        <h1 className="text-3xl font-bold text-zinc-900 mt-2 mb-4" style={{ letterSpacing: '-0.02em' }}>
          ¿Quiénes somos?
        </h1>
        <p className="text-lg text-zinc-500">
          Somos un equipo de entusiastas de la tecnología y la inteligencia artificial con una misión clara: explicar la IA de forma honesta y sin tecnicismos innecesarios.
        </p>
      </header>

      <div className="prose">
        <h2>Nuestra misión</h2>
        <p>
          La inteligencia artificial está transformando el mundo a una velocidad sin precedentes. Sin embargo, la mayoría del contenido de calidad sobre IA está en inglés, lo que deja fuera a millones de hispanohablantes que quieren entender y aprovechar estas herramientas.
        </p>
        <p>
          <strong>PulsoIA</strong> nació en 2026 para cerrar esa brecha. Publicamos guías prácticas, comparativas honestas y tutoriales paso a paso sobre las herramientas de inteligencia artificial más relevantes, todo en español y pensado para el día a día.
        </p>

        <h2>Qué encontrarás aquí</h2>
        <p>Nos especializamos en:</p>
        <ul>
          <li><strong>Comparativas:</strong> análisis honestos de herramientas como ChatGPT, Claude, Gemini y más, para que puedas elegir la que mejor se adapta a tus necesidades.</li>
          <li><strong>Tutoriales:</strong> guías paso a paso para sacar el máximo partido a las herramientas de IA, desde cero y sin conocimientos previos.</li>
          <li><strong>Automatización:</strong> cómo usar la IA para automatizar tareas repetitivas y ahorrar tiempo en tu trabajo.</li>
          <li><strong>Novedades:</strong> las últimas noticias y lanzamientos del mundo de la IA, filtradas y explicadas en contexto.</li>
        </ul>

        <h2>Nuestra filosofía editorial</h2>
        <p>
          Todo el contenido que publicamos sigue tres principios fundamentales:
        </p>
        <ul>
          <li><strong>Honestidad:</strong> si una herramienta no merece la pena, lo decimos. No aceptamos contenido patrocinado disfrazado de reseña objetiva.</li>
          <li><strong>Practicidad:</strong> cada artículo termina con algo que puedes hacer hoy, no con teoría vacía.</li>
          <li><strong>Accesibilidad:</strong> escribimos para personas reales, no para ingenieros. Si hay un término técnico, lo explicamos.</li>
        </ul>

        <h2>Contacto</h2>
        <p>
          ¿Tienes alguna pregunta, sugerencia o quieres colaborar con nosotros? Puedes escribirnos a través de nuestra <a href="/contacto">página de contacto</a>. Respondemos a todos los mensajes en un plazo máximo de 48 horas.
        </p>
      </div>
    </div>
  )
}
