//  Client Component
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Play, X, Quote } from 'lucide-react';

export interface VideoTestimonial {
  name: string;
  role: string;
  quote: string;
  thumbnail?: string;
  videoType: 'youtube' | 'file';
  videoSrc: string;
}



export function VideoTestimonialsGrid({
  items,
  playLabel,
  closeLabel,
}: {
  items: VideoTestimonial[];
  playLabel: string;
  closeLabel: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [active, close]);

  const current = active !== null ? items[active] : null;
// Extracts the clean 11-char video ID from whatever the user pasted:
// a bare ID, a youtu.be link, a full watch URL, or an ID with ?si= params.
function extractYouTubeId(input: string): string {
  const s = input.trim();
  // youtu.be/ID  or  youtube.com/watch?v=ID  or  youtube.com/embed/ID
  const match = s.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  if (match?.[1]) return match[1];
  // Otherwise strip any query/hash and take the first 11 valid chars.
  const bare = s.split(/[?&#/]/)[0] ?? s;
  return bare.slice(0, 11);
}

function youtubeThumb(id: string): string {
  return `https://img.youtube.com/vi/${extractYouTubeId(id)}/hqdefault.jpg`;
}

function resolveThumbnail(item: VideoTestimonial): string {
  if (item.thumbnail) return item.thumbnail;
  if (item.videoType === 'youtube') return youtubeThumb(item.videoSrc);
  return '';
}

  return (
    <>
      <ul role="list" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={`${item.name}-${i}`}>
            <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${playLabel} — ${item.name}`}
                className="relative aspect-video w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-inset"
              >
                <Image
                  src={resolveThumbnail(item)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent transition-colors duration-300 group-hover:from-primary-900/60" />

                <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-accent-600 shadow-xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white motion-reduce:transition-none">
                    <Play className="h-7 w-7 translate-x-0.5 fill-current" strokeWidth={0} />
                  </span>
                  <span className="absolute h-16 w-16 rounded-full ring-2 ring-white/60 [animation:video-pulse_2.5s_ease-out_infinite] motion-reduce:hidden" />
                </span>
              </button>

              <figcaption className="flex flex-1 flex-col p-5">
                <Quote className="h-6 w-6 fill-accent-500/15 text-accent-500/15 rtl:-scale-x-100" strokeWidth={0} aria-hidden="true" />
                <blockquote className="mt-2 flex-1">
                  <p className="text-small text-ink-secondary">{item.quote}</p>
                </blockquote>
                <div className="mt-4 border-t border-primary-100 pt-3">
                  <p className="text-small font-semibold text-primary">{item.name}</p>
                  <p className="text-caption text-ink-secondary">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={current.name}
        >
          <div
            className="absolute inset-0 bg-primary-950/80 backdrop-blur-sm [animation:video-fade_0.2s_ease-out]"
            onClick={close}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-4xl [animation:video-zoom_0.25s_ease-out]">
            <button
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="absolute -top-11 end-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </button>

            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
              <div className="relative aspect-video w-full">
           {current.videoType === 'youtube' ? (
  <iframe
    src={`https://www.youtube.com/embed/${extractYouTubeId(current.videoSrc)}?autoplay=1&rel=0`}
    title={current.name}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute inset-0 h-full w-full"
  />
) : (
  <video src={current.videoSrc} controls autoPlay className="absolute inset-0 h-full w-full" />
)}
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-body font-semibold text-white">{current.name}</p>
              <p className="text-small text-white/70">{current.role}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}