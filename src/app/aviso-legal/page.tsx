import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal y Términos de Uso',
  description: 'Aviso legal, términos de uso y descargo de responsabilidad de PulsoIA.',
}

export default function LegalPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Legal</span>
        <h1 className="text-3xl font-bold text-zinc-900 mt-2 mb-2" style={{ letterSpacing: '-0.02em' }}>
          Aviso Legal y Términos de Uso
        </h1>
        <p className="text-sm text-zinc-400">Última actualización: 4 de junio de 2026</p>
      </header>

      <div className="prose">
        <h2>1. Información del titular</h2>
        <p>
          El presente sitio web, <strong>PulsoIA</strong>, es un blog informativo sobre herramientas de inteligencia artificial. Para cualquier consulta, puedes contactarnos a través de nuestra <a href="/contacto">página de contacto</a>.
        </p>

        <h2>2. Objeto y ámbito de aplicación</h2>
        <p>
          El presente Aviso Legal regula el acceso y uso del sitio web PulsoIA, así como los contenidos y servicios disponibles en él. El acceso a este sitio web implica la aceptación plena y sin reservas de los presentes términos y condiciones.
        </p>

        <h2>3. Propiedad intelectual</h2>
        <p>
          Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos, gráficos y cualquier otro elemento, son propiedad de PulsoIA o se utilizan con la autorización correspondiente. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.
        </p>
        <p>
          Las marcas comerciales de terceros mencionadas en este sitio (ChatGPT, Claude, Gemini, etc.) son propiedad de sus respectivos titulares. Su mención tiene únicamente fines informativos y no implica ninguna asociación o patrocinio.
        </p>

        <h2>4. Descargo de responsabilidad</h2>
        <p>
          El contenido publicado en PulsoIA tiene únicamente fines informativos y educativos. Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos la exactitud, completitud o vigencia de los contenidos.
        </p>
        <p>
          Las herramientas, precios y características mencionados en los artículos pueden cambiar sin previo aviso. Recomendamos verificar siempre la información directamente en las fuentes oficiales de cada herramienta antes de tomar decisiones basadas en nuestro contenido.
        </p>
        <p>
          PulsoIA no se hace responsable de los daños o perjuicios que puedan derivarse del uso de la información publicada en este sitio.
        </p>

        <h2>5. Publicidad y afiliación</h2>
        <p>
          Este sitio web está monetizado mediante Google AdSense, que muestra anuncios de terceros. Los anuncios mostrados no implican ningún respaldo o recomendación por nuestra parte.
        </p>
        <p>
          Algunos artículos pueden contener enlaces de afiliado. Si realizas una compra a través de dichos enlaces, podemos recibir una comisión sin coste adicional para ti. Esto nunca influye en nuestra opinión editorial.
        </p>

        <h2>6. Enlazado a terceros</h2>
        <p>
          Este sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente como referencia informativa. PulsoIA no controla el contenido de dichos sitios y no asume responsabilidad alguna por su contenido, precisión o prácticas de privacidad.
        </p>

        <h2>7. Modificaciones</h2>
        <p>
          PulsoIA se reserva el derecho de modificar los presentes términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en esta página. El uso continuado del sitio tras dichas modificaciones implica la aceptación de los nuevos términos.
        </p>

        <h2>8. Legislación aplicable</h2>
        <p>
          El presente Aviso Legal se rige por la legislación española. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales competentes según la normativa vigente.
        </p>
      </div>
    </div>
  )
}
