import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ImageLightbox({
  thumb,        // e.g. '/img/sample.png'
  full,         // e.g. '/img/sample.png' (can be same as thumb)
  alt = '',
  size = 48,    // thumbnail box size (px)
  radius = 8,   // corner radius (px)
}: { thumb: string; full: string; alt?: string; size?: number; radius?: number }) {
  const [open, setOpen] = React.useState(false);
  const t = useBaseUrl(thumb);
  const f = useBaseUrl(full);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={`Open image${alt ? `: ${alt}` : ''}`}
        onClick={() => setOpen(true)}
        style={{
          width: size,
          height: size,
          padding: 0,
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: radius,
          overflow: 'hidden',
          background: 'transparent',
          cursor: 'zoom-in',
          display: 'inline-block',
        }}
      >
        <img
          src={t}
          alt={alt}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <img
            src={f}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 'min(90vw, 1200px)',
              maxHeight: '90vh',
              borderRadius: 12,
              boxShadow: '0 8px 40px rgba(0,0,0,.4)',
            }}
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            style={{
              position: 'fixed',
              top: 12,
              right: 12,
              background: 'rgba(0,0,0,.6)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,.2)',
              borderRadius: 8,
              padding: '6px 10px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
