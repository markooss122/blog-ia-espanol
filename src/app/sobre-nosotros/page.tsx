import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Conoce quiénes somos, por qué creamos PulsoIA y nuestra misión de acercar la inteligencia artificial a todos los hispanohablantes.',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Sobre nosotros</span>
        <h1 className="text-3xl font-bold text-zinc-900 mt-2 mb-4" style={{ letterSpacing: '-0.02em' }}>
          ¿Quiénes somos?
        </h1>
        <p className="text-lg text-zinc-500">
          PulsoIA es el blog de referencia sobre inteligencia artificial en español, fundado por Marcos Alcega con una misión clara: explicar la IA de forma honesta, práctica y sin tecnicismos innecesarios.
        </p>
      </header>

      <div className="prose">

        {/* Autor principal con E-E-A-T */}
        <div className="not-prose bg-zinc-50 border border-zinc-200 rounded-xl p-5 mb-8 flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">MA</div>
          <div>
            <p className="font-bold text-zinc-900 text-base">Marcos Alcega</p>
            <p className="text-sm text-blue-600 font-medium mb-2">Fundador y editor principal</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Especialista en herramientas de inteligencia artificial con más de 5 años analizando y probando tecnología digital. Fundador de PulsoIA en 2026, con experiencia previa en medios tecnológicos digitales y consultoría de transformación digital para pymes. Apasionado por acercar la IA al usuario hispanohablante de forma práctica y sin barreras.
            </p>
            <p className="text-xs text-zinc-400 mt-2">📧 <a href="mailto:pulsoiaes@gmail.com" className="text-blue-600 hover:underline">pulsoiaes@gmail.com</a></p>
          </div>
        </div>

        <h2>Nuestra misión</h2>
        <p>
          La inteligencia artificial está transformando el mundo a una velocidad sin precedentes. Sin embargo, la mayoría del contenido de calidad sobre IA está en inglés, lo que deja fuera a millones de hispanohablantes que quieren entender y aprovechar estas herramientas.
        </p>
        <p>
          <strong>PulsoIA</strong> nació en 2026 para cerrar esa brecha. Publicamos guías prácticas, comparativas honestas y tutoriales paso a paso sobre las herramientas de inteligencia artificial más relevantes, todo en español y pensado para el día a día.
        </p>

        <h2>Qué encontrarás aquí</h2>
        <p>Nos especializamos en cinco áreas clave:</p>
        <ul>
          <li><strong>Comparativas:</strong> análisis honestos y basados en pruebas reales de herramientas como ChatGPT, Claude, Gemini y más, para que puedas elegir la que mejor se adapta a tus necesidades sin perder tiempo.</li>
          <li><strong>Tutoriales:</strong> guías paso a paso para sacar el máximo partido a las herramientas de IA, desde cero y sin conocimientos previos.</li>
          <li><strong>Automatización:</strong> cómo usar la IA junto a herramientas como Zapier, Make o n8n para automatizar tareas repetitivas y ahorrar horas cada semana.</li>
          <li><strong>Herramientas:</strong> reseñas detalladas de las aplicaciones de IA más útiles por categoría: escritura, imagen, voz, productividad y más.</li>
          <li><strong>Novedades:</strong> las últimas noticias y lanzamientos del mundo de la IA, filtradas y explicadas en contexto para que sepas qué importa realmente.</li>
        </ul>

        <h2>Nuestra metodología editorial</h2>
        <p>
          Todo el contenido que publicamos en PulsoIA sigue un proceso riguroso:
        </p>
        <ul>
          <li><strong>Prueba real:</strong> cada herramienta que analizamos la hemos usado directamente. No escribimos sobre lo que no conocemos de primera mano.</li>
          <li><strong>Honestidad:</strong> si una herramienta no merece la pena, lo decimos. No aceptamos contenido patrocinado disfrazado de reseña objetiva. Cuando hay una relación comercial, lo indicamos explícitamente.</li>
          <li><strong>Actualización continua:</strong> el sector de la IA cambia muy rápido. Revisamos y actualizamos nuestros artículos regularmente para que la información sea siempre vigente.</li>
          <li><strong>Accesibilidad:</strong> escribimos para personas reales, no para ingenieros. Si hay un término técnico, lo explicamos. Nuestro lector objetivo es cualquier persona curiosa que quiera aprovechar la IA en su vida o negocio.</li>
        </ul>

        <h2>Transparencia y publicidad</h2>
        <p>
          PulsoIA está financiado mediante publicidad contextual de Google AdSense. Los anuncios que aparecen en el sitio son seleccionados automáticamente por Google y no influyen en nuestra opinión editorial.
        </p>
        <p>
          Algunos artículos pueden contener enlaces de afiliado a herramientas o servicios. Cuando esto ocurre, lo indicamos claramente en el artículo. Una comisión de afiliado nunca condiciona nuestra valoración: si una herramienta no es buena, lo decimos aunque tengamos un enlace de afiliado.
        </p>

        <h2>Contacto</h2>
        <p>
          ¿Tienes alguna pregunta, sugerencia, corrección o quieres proponer una colaboración? Puedes escribirnos a través de nuestra <a href="/contacto">página de contacto</a> o directamente a <a href="mailto:pulsoiaes@gmail.com">pulsoiaes@gmail.com</a>. Respondemos a todos los mensajes en un plazo máximo de 48 horas.
        </p>
      </div>
    </div>
  )
}
