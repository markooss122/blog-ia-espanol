'use client'

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal'
  className?: string
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const publisherId = 'ca-pub-XXXXXXXXXX'

  if (publisherId === 'ca-pub-XXXXXXXXXX') {
    return (
      <div className={`bg-gray-100 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 text-sm ${className}`}>
        [Espacio AdSense — slot: {slot}]
      </div>
    )
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client={publisherId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  )
}
