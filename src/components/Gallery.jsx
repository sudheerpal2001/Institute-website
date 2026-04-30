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

const galleryItems = [
  { src: Image1, thumb: Image1 },
  { src: Image2, thumb: Image2 },
  { src: Image3, thumb: Image3 },
  { src: Image4, thumb: Image4 },
  { src: Image5, thumb: Image5 },
  { src: Image6, thumb: Image6 },
  { src: Image7, thumb: Image7 },
  { src: Image8, thumb: Image8 },
  { src: Image9, thumb: Image9 },
  { src: Image10, thumb: Image10 },
  { src: Image11, thumb: Image11 },
  { src: Image12, thumb: Image12 },
];

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

const Lightbox = ({ items, index, onClose, onPrev, onNext }) => {
  const item = items[index];

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

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
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex items-center justify-center
          w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)]
          bg-[rgba(255,255,255,0.06)] text-white transition-all duration-200
          hover:bg-[rgba(79,70,229,0.3)] hover:border-indigo-500"
      >
        <X className="w-5 h-5" />
      </button>

      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 flex items-center justify-center
            w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)]
            bg-[rgba(255,255,255,0.06)] text-white transition-all duration-200
            hover:bg-[rgba(79,70,229,0.3)] hover:border-indigo-500"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <div
        className="relative max-w-4xl w-full mx-14 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'lbIn 0.25s ease' }}
      >
        <img
          src={item.src}
          alt={`Gallery image ${index + 1}`}
          className="w-full max-h-[78vh] object-contain rounded-xl shadow-2xl
            border border-[rgba(79,70,229,0.2)]"
        />

        <div className="w-full flex items-center justify-between mt-3 px-1">
          <span className="text-[0.72rem] text-[rgba(240,235,224,0.35)]">
            {index + 1} / {items.length}
          </span>
        </div>

        {items.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 max-w-full" style={{ scrollbarWidth: 'none' }}>
            {items.map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all duration-200
                  ${i === index ? 'border-indigo-500 opacity-100 scale-105' : 'border-transparent opacity-40 hover:opacity-70'}`}
              >
                <img src={img.thumb} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 flex items-center justify-center
            w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)]
            bg-[rgba(255,255,255,0.06)] text-white transition-all duration-200
            hover:bg-[rgba(79,70,229,0.3)] hover:border-indigo-500"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <style>{`
        @keyframes lbIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const goNext = () => setLightboxIndex((i) => (i + 1) % galleryItems.length);

  return (
    <section
      id="gallery"
      className="py-10 px-[5%]"
      style={{ background: '#f8fafc' }}
    >
      {/* Header */}
      <Reveal className="mb-10">
        <div className="text-[0.7rem] font-bold uppercase tracking-widest text-indigo-600 mb-1">
          Photo Gallery
        </div>
        <h2 className="text-5xl font-bold text-black mb-3">Life at Rizvi Campus</h2>
        <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700" />
      </Reveal>

      {/* Uniform Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item, idx) => (
          <Reveal
            key={idx}
            delay={(idx % 4) * 50}
          >
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer group
                border border-gray-200 shadow-sm
                transition-all duration-150
                hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(79,70,229,0.13)]
                hover:border-blue-200"
              onClick={() => openLightbox(idx)}
            >
              {/* Fixed height — same for all */}
              <div className="h-52">
                <img
                  src={item.thumb}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 60%)' }}
              >
                <div className="absolute top-2.5 right-3 w-7 h-7 rounded-full
                  bg-[rgba(79,70,229,0.8)] border border-indigo-400/50
                  flex items-center justify-center">
                  <ZoomIn className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Bottom slide-in bar */}
              <div className="absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full
                transition-all duration-200 ease-out
                bg-gradient-to-r from-indigo-500 to-indigo-400" />
            </div>
          </Reveal>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
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