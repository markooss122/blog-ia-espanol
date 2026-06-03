import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de PulsoIA. Información sobre cómo recopilamos, usamos y protegemos tus datos.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Legal</span>
        <h1 className="text-3xl font-bold text-zinc-900 mt-2 mb-2" style={{ letterSpacing: '-0.02em' }}>
          Política de Privacidad
        </h1>
        <p className="text-sm text-zinc-400">Última actualización: 4 de junio de 2026</p>
      </header>

      <div className="prose">
        <p>
          En <strong>PulsoIA</strong> (en adelante, "el sitio web"), accesible desde este dominio, la privacidad de nuestros visitantes es una prioridad. Esta Política de Privacidad describe qué información recopilamos, cómo la usamos y qué derechos tienes sobre ella.
        </p>

        <h2>1. Información que recopilamos</h2>
        <p>Recopilamos información de dos formas:</p>
        <ul>
          <li><strong>Información que nos proporcionas voluntariamente:</strong> cuando rellenas nuestro formulario de contacto o te suscribes a nuestra newsletter, recopilamos tu nombre y dirección de correo electrónico.</li>
          <li><strong>Información recopilada automáticamente:</strong> cuando visitas nuestro sitio web, podemos recopilar automáticamente cierta información técnica, como tu dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, a través de cookies y herramientas de análisis.</li>
        </ul>

        <h2>2. Uso de la información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Responder a tus consultas y mensajes de contacto</li>
          <li>Enviarte la newsletter si te has suscrito (puedes cancelar en cualquier momento)</li>
          <li>Analizar el tráfico y el comportamiento de los usuarios para mejorar el contenido del sitio</li>
          <li>Mostrar anuncios relevantes a través de Google AdSense</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          Este sitio web utiliza cookies para mejorar la experiencia del usuario y para mostrar publicidad personalizada. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.
        </p>
        <p>Tipos de cookies que utilizamos:</p>
        <ul>
          <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio.</li>
          <li><strong>Cookies analíticas:</strong> nos permiten entender cómo los visitantes interactúan con el sitio (Google Analytics).</li>
          <li><strong>Cookies publicitarias:</strong> utilizadas por Google AdSense para mostrar anuncios relevantes basados en tus intereses.</li>
        </ul>
        <p>
          Puedes controlar y desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que desactivar ciertas cookies puede afectar a la funcionalidad del sitio.
        </p>

        <h2>4. Google AdSense y publicidad</h2>
        <p>
          Este sitio web utiliza Google AdSense, un servicio de publicidad de Google LLC. Google AdSense utiliza cookies para mostrar anuncios basados en tus visitas anteriores a este y otros sitios web.
        </p>
        <p>
          Google, como proveedor externo, utiliza cookies para publicar anuncios en nuestro sitio. El uso de la cookie DART por parte de Google le permite mostrar anuncios a los usuarios en función de su visita a nuestro sitio y otros sitios de Internet. Los usuarios pueden optar por no usar la cookie DART visitando la <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Política de privacidad de la red de publicidad y contenido de Google</a>.
        </p>

        <h2>5. Proveedores de servicios externos</h2>
        <p>Trabajamos con los siguientes proveedores externos que pueden acceder a ciertos datos:</p>
        <ul>
          <li><strong>Google Analytics:</strong> análisis de tráfico web</li>
          <li><strong>Google AdSense:</strong> publicidad contextual</li>
          <li><strong>Formspree:</strong> gestión de formularios de contacto</li>
          <li><strong>Vercel:</strong> alojamiento del sitio web</li>
        </ul>
        <p>Todos estos proveedores tienen sus propias políticas de privacidad y están sujetos a sus respectivas normativas.</p>

        <h2>6. Tus derechos (RGPD)</h2>
        <p>Si eres residente en la Unión Europea, tienes los siguientes derechos sobre tus datos personales:</p>
        <ul>
          <li><strong>Acceso:</strong> puedes solicitar una copia de los datos que tenemos sobre ti</li>
          <li><strong>Rectificación:</strong> puedes solicitar que corrijamos datos inexactos</li>
          <li><strong>Supresión:</strong> puedes solicitar que eliminemos tus datos</li>
          <li><strong>Oposición:</strong> puedes oponerte al tratamiento de tus datos</li>
          <li><strong>Portabilidad:</strong> puedes solicitar que te entreguemos tus datos en formato legible</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, contacta con nosotros a través de nuestra <a href="/contacto">página de contacto</a>.</p>

        <h2>7. Seguridad de los datos</h2>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra accesos no autorizados, alteraciones, divulgaciones o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
        </p>

        <h2>8. Retención de datos</h2>
        <p>
          Conservamos los datos personales solo durante el tiempo necesario para los fines descritos en esta política, o según lo requerido por la ley. Los datos de suscriptores de newsletter se eliminan cuando cancelas la suscripción.
        </p>

        <h2>9. Menores de edad</h2>
        <p>
          Este sitio web no está dirigido a menores de 13 años. No recopilamos conscientemente información personal de menores. Si eres padre o tutor y crees que tu hijo nos ha proporcionado información personal, contáctanos.
        </p>

        <h2>10. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos cualquier cambio publicando la nueva versión en esta página con la fecha de actualización. Te recomendamos revisar esta página regularmente.
        </p>

        <h2>11. Contacto</h2>
        <p>
          Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos a través de nuestra <a href="/contacto">página de contacto</a>.
        </p>
      </div>
    </div>
  )
}
