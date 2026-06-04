import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de PulsoIA. Información sobre qué cookies usamos, para qué y cómo puedes controlarlas.',
}

export default function CookiesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Legal</span>
        <h1 className="text-3xl font-bold text-zinc-900 mt-2 mb-2" style={{ letterSpacing: '-0.02em' }}>
          Política de Cookies
        </h1>
        <p className="text-sm text-zinc-400">Última actualización: 4 de junio de 2026</p>
      </header>

      <div className="prose">
        <p>
          Este sitio web, <strong>PulsoIA</strong>, utiliza cookies para mejorar la experiencia de navegación y para ofrecer publicidad relevante. Esta política explica qué son las cookies, cuáles usamos y cómo puedes controlarlas.
        </p>

        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten que el sitio recuerde tus preferencias y acciones durante un tiempo determinado.
        </p>

        <h2>Cookies que utilizamos</h2>

        <h3>Cookies esenciales</h3>
        <p>Son necesarias para el funcionamiento básico del sitio. Sin ellas, algunas funciones no estarían disponibles.</p>
        <ul>
          <li><strong>cookie-consent:</strong> almacena tu preferencia sobre el uso de cookies (aceptadas o rechazadas). Duración: 1 año.</li>
        </ul>

        <h3>Cookies publicitarias (Google AdSense)</h3>
        <p>
          Solo se activan si has aceptado las cookies. Google AdSense utiliza cookies para mostrar anuncios personalizados basados en tus intereses y visitas anteriores.
        </p>
        <ul>
          <li><strong>IDE:</strong> cookie de Google DoubleClick para registrar interacciones con anuncios. Duración: 1 año.</li>
          <li><strong>test_cookie:</strong> verifica si tu navegador acepta cookies. Duración: sesión.</li>
          <li><strong>DSID, FLC, AID, TAID:</strong> cookies de Google para segmentación publicitaria. Duración: variable.</li>
        </ul>
        <p>
          Puedes optar por no recibir publicidad personalizada de Google visitando: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>
        </p>
        <p>
          Para más información sobre cómo Google usa los datos: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Cómo usa Google los datos de sitios que utilizan sus servicios</a>
        </p>

        <h2>Cómo controlar las cookies</h2>
        <p>Tienes varias formas de controlar o eliminar las cookies:</p>
        <ul>
          <li><strong>Banner de cookies:</strong> al entrar por primera vez en el sitio, puedes aceptar o rechazar las cookies no esenciales.</li>
          <li><strong>Configuración del navegador:</strong> puedes configurar tu navegador para bloquear o eliminar cookies:
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
            </ul>
          </li>
          <li><strong>Opt-out de Google:</strong> usa el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">complemento de inhabilitación de Google</a>.</li>
        </ul>

        <h2>Cambios en esta política</h2>
        <p>
          Podemos actualizar esta Política de Cookies para reflejar cambios en las cookies que usamos o por otras razones operativas, legales o reglamentarias. Revisa esta página periódicamente.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tienes preguntas sobre el uso de cookies en este sitio, puedes contactarnos a través de nuestra <a href="/contacto">página de contacto</a>.
        </p>
      </div>
    </div>
  )
}
