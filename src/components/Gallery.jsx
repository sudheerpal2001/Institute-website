import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Image1 from '../../public/New folder/gallery1.jpeg'
import Image2 from '../../public/New folder/gallery2.jpeg'
import Image3 from '../../public/New folder/gallery3.jpeg'
import Image4 from '../../public/New folder/gallery4.jpeg'
import Image5 from '../../public/New folder/gallery5.jpeg'
import Image6 from '../../public/New folder/gallery6.jpeg'
import Image7 from '../../public/New folder/gallery7.jpeg'
import Image8 from '../../public/New folder/gallery8.jpeg'
import Image9 from '../../public/New folder/gallery9.jpeg'
import Image10 from '../../public/New folder/gallery10.jpeg'
import Image11 from '../../public/New folder/gallery11.jpeg'
import Image12 from '../../public/New folder/gallery12.jpeg'


// ─── Gallery Data ──────────────────────────────────────────────────
// Replace src values with your actual image paths / URLs
const galleryItems = [
  {
    src: Image1,
    thumb: Image1 ,
    // caption: "Main Campus Building",
    // tag: "Campus",
  },
  {
    src: Image2,
    thumb: Image2 ,
  },
  {
      src: Image3,
      thumb: Image3 ,
    },
    {
      src: Image4,
      thumb: Image4 ,
    },
  {
    src: Image5,
    thumb: Image5 ,
  },
  {
    src: Image6,
    thumb: Image6 ,
  },
  {
    src: Image7,
    thumb: Image7 ,

  },
  {
    src: Image8,
    thumb: Image8 ,
  },
  {
    src: Image9,
    thumb: Image9 ,

  },
  {
    src: Image10,
    thumb: Image10 ,
  },
  
  {
    src: Image11,
    thumb: Image11 ,
  },
  {
    src: Image12,
    thumb: Image12 ,
  },
];

// All unique tags
const allTags = ["All", ...Array.from(new Set(galleryItems.map((g) => g.tag)))];

// ─── Reveal Hook ───────────────────────────────────────────────────
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Lightbox Modal ────────────────────────────────────────────────
const Lightbox = ({ items, index, onClose, onPrev, onNext }) => {
  const item = items[index];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(8,13,26,0.95)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex items-center justify-center
          w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)]
          bg-[rgba(255,255,255,0.06)] text-white transition-all duration-200
          hover:bg-[rgba(79,70,229,0.3)] hover:border-indigo-500"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 flex items-center justify-center
            w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)]
            bg-[rgba(255,255,255,0.06)] text-white transition-all duration-200
            hover:bg-[rgba(79,70,229,0.3)] hover:border-indigo-500"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Image box */}
      <div
        className="relative max-w-4xl w-full mx-14 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'lbIn 0.25s ease' }}
      >
        <img
          src={item.src}
          alt={item.caption}
          className="w-full max-h-[78vh] object-contain rounded-xl shadow-2xl
            border border-[rgba(79,70,229,0.2)]"
        />

        {/* Caption bar */}
        <div className="w-full flex items-center justify-between mt-3 px-1">
          <span className="text-[0.82rem] text-[rgba(240,235,224,0.7)]">{item.caption}</span>
          <div className="flex items-center gap-3">
            <span
              className="text-[0.65rem] font-bold uppercase tracking-[1.5px] px-2.5 py-0.5 rounded-full
                bg-[rgba(79,70,229,0.18)] border border-[rgba(79,70,229,0.3)] text-indigo-400"
            >
              {item.tag}
            </span>
            <span className="text-[0.72rem] text-[rgba(240,235,224,0.35)]">
              {index + 1} / {items.length}
            </span>
          </div>
        </div>

        {/* Thumbnail strip */}
        {items.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 max-w-full scrollbar-hide">
            {items.map((img, i) => (
              <button
                key={i}
                onClick={() => {/* handled via parent */}}
                className={`flex-shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all duration-200
                  ${i === index
                    ? 'border-indigo-500 opacity-100 scale-105'
                    : 'border-transparent opacity-40 hover:opacity-70'
                  }`}
              >
                <img src={img.thumb} alt={img.caption} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 flex items-center justify-center
            w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)]
            bg-[rgba(255,255,255,0.06)] text-white transition-all duration-200
            hover:bg-[rgba(79,70,229,0.3)] hover:border-indigo-500"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <style>{`
        @keyframes lbIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

// ─── Main Gallery Component ────────────────────────────────────────
const Gallery = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeTag === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.tag === activeTag);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const goNext = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <section
      id="gallery"
      className="py-20 px-[5%]"
      style={{ background: 'var(--bg-surface, #f8fafc)' }}
    >
      {/* Header */}
      <Reveal className="mb-10">
        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">
          Photo Gallery
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Life at Rizvi Campus</h2>
        <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700" />
        
      </Reveal>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filtered.map((item, idx) => {
          // Every 7th item is large (spans 2 cols), rest normal
          const isLarge = idx % 7 === 0;
          return (
            <Reveal
              key={`${activeTag}-${idx}`}
              delay={(idx % 3) * 80}
              className={isLarge ? 'md:col-span-2' : ''}
            >
              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group
                  border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.07)]
                  transition-all duration-350
                  hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(79,70,229,0.15)]
                  hover:border-indigo-200"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.thumb}
                  alt={item.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105
                    ${isLarge ? 'h-64 md:h-72' : 'h-48 md:h-56'}`}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(8,13,26,0.82) 0%, rgba(8,13,26,0.2) 60%, transparent 100%)' }}
                >
                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center
                    bg-[rgba(79,70,229,0.8)] border border-indigo-400">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>

                  {/* Caption */}
                  <div>
                    <span
                      className="text-[0.62rem] font-bold uppercase tracking-[1.5px] px-2 py-0.5 rounded-full mb-1
                        bg-[rgba(79,70,229,0.6)] border border-[rgba(79,70,229,0.5)] text-indigo-200 inline-block"
                    >
                      {item.tag}
                    </span>
                    <div className="text-[0.82rem] font-semibold text-white leading-snug mt-0.5">
                      {item.caption}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
};

export default Gallery;
