// src/components/sections/home/video-testimonials-grid.tsx
// Client Component

'use client';

import {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  ListVideo,
  Play,
  Quote,
  Youtube,
  X,
} from 'lucide-react';

import { cn } from '@/lib/utils';

export interface VideoTestimonial {
  name: string;
  role: string;
  quote: string;

  /**
   * YouTube URL or an 11-character YouTube video ID.
   */
  videoSrc: string;

  /**
   * Optional custom thumbnail.
   * When omitted, the YouTube thumbnail is used automatically.
   */
  thumbnail?: string;
}

interface VideoLabels {
  region: string;
  watch: string;
  stop: string;
  select: string;
  nowPlaying: string;
  moreVideos: string;
  youtube: string;
  invalidVideo: string;
}

interface VideoTestimonialsGridProps {
  items: VideoTestimonial[];
  labels: VideoLabels;
}

function extractYouTubeId(
  input: string,
  depth = 0
): string {
  if (
    typeof input !== 'string' ||
    !input.trim() ||
    depth > 2
  ) {
    return '';
  }

  const cleanedInput = input
    .trim()
    .replace(/^["']|["']$/g, '')
    .replaceAll('&amp;', '&');

  // معرف YouTube مباشر
  if (
    /^[A-Za-z0-9_-]{11}$/.test(
      cleanedInput
    )
  ) {
    return cleanedInput;
  }

  const values = [cleanedInput];

  try {
    const decoded =
      decodeURIComponent(cleanedInput);

    if (decoded !== cleanedInput) {
      values.push(decoded);
    }
  } catch {
    // الرابط غير مشفر، نتابع بالقيمة الأصلية.
  }

  for (const value of values) {
    const directMatch = value.match(
      /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/|v\/))([A-Za-z0-9_-]{11})/i
    );

    if (directMatch?.[1]) {
      return directMatch[1];
    }

    try {
      const normalizedUrl =
        /^https?:\/\//i.test(value)
          ? value
          : `https://${value}`;

      const url = new URL(normalizedUrl);

      const hostname = url.hostname
        .replace(/^www\./, '')
        .toLowerCase();

      if (hostname === 'youtu.be') {
        const id = url.pathname
          .split('/')
          .filter(Boolean)[0];

        if (
          id &&
          /^[A-Za-z0-9_-]{11}$/.test(id)
        ) {
          return id;
        }
      }

      const isYouTube =
        hostname === 'youtube.com' ||
        hostname === 'm.youtube.com' ||
        hostname === 'music.youtube.com' ||
        hostname ===
          'youtube-nocookie.com';

      if (!isYouTube) {
        continue;
      }

      const queryId =
        url.searchParams.get('v');

      if (
        queryId &&
        /^[A-Za-z0-9_-]{11}$/.test(
          queryId
        )
      ) {
        return queryId;
      }

      const pathParts = url.pathname
        .split('/')
        .filter(Boolean);

      const pathTypes = [
        'embed',
        'shorts',
        'live',
        'v',
      ];

      if (
        pathTypes.includes(
          pathParts[0] ?? ''
        )
      ) {
        const pathId = pathParts[1];

        if (
          pathId &&
          /^[A-Za-z0-9_-]{11}$/.test(
            pathId
          )
        ) {
          return pathId;
        }
      }

      /*
       * يدعم روابط YouTube القديمة مثل:
       * youtube.com/attribution_link?u=...
       */
      const nestedUrl =
        url.searchParams.get('u') ??
        url.searchParams.get('q');

      if (nestedUrl) {
        const nestedId = extractYouTubeId(
          nestedUrl,
          depth + 1
        );

        if (nestedId) {
          return nestedId;
        }
      }
    } catch {
      // ننتقل إلى القيمة التالية.
    }
  }

  return '';
}

function normalizeThumbnailSource(
  source?: string
): string | undefined {
  const value = source?.trim();

  if (!value) {
    return undefined;
  }

  // صورة خارجية كاملة
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  // مسار محلي صحيح
  if (value.startsWith('/')) {
    return value;
  }

  /*
   * يحول:
   * public/images/video.webp
   * ./public/images/video.webp
   * images/video.webp
   *
   * إلى:
   * /images/video.webp
   */
  return `/${value
    .replace(/^\.?\//, '')
    .replace(/^public\//, '')}`;
}


function getYouTubeThumbnailCandidates(
  videoSrc: string
): string[] {
  const id = extractYouTubeId(videoSrc);

  if (!id) {
    return [];
  }

  return [
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${id}/sddefault.jpg`,
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
  ];
}

function VideoThumbnail({
  item,
  sizes,
  priority = false,
}: {
  item: VideoTestimonial;
  sizes: string;
  priority?: boolean;
}) {
  const customThumbnail =
    normalizeThumbnailSource(
      item.thumbnail
    );

  const sources = Array.from(
    new Set(
      [
        customThumbnail,
        ...getYouTubeThumbnailCandidates(
          item.videoSrc
        ),
      ].filter(
        (source): source is string =>
          Boolean(source)
      )
    )
  );

  const [sourceIndex, setSourceIndex] =
    useState(0);

  useEffect(() => {
    setSourceIndex(0);
  }, [
    item.thumbnail,
    item.videoSrc,
  ]);

  const currentSource =
    sources[sourceIndex];

  if (!currentSource) {
    return (
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-primary-950
          via-primary-800
          to-accent-900
        "
      >
        <Youtube
          className="
            h-14
            w-14
            text-white/25
          "
          strokeWidth={1.4}
        />
      </div>
    );
  }

  return (
    <Image
      key={currentSource}
      src={currentSource}
      alt=""
      fill
      priority={priority}
      sizes={sizes}
      onError={() => {
        setSourceIndex((current) =>
          Math.min(
            current + 1,
            sources.length
          )
        );
      }}
      className="
        object-cover
        transition-transform
        duration-500
        ease-out
        group-hover:scale-[1.035]
        motion-reduce:transition-none
        motion-reduce:group-hover:scale-100
      "
    />
  );
}


function PlaylistItem({
  item,
  index,
  active,
  labels,
  onSelect,
}: {
  item: VideoTestimonial;
  index: number;
  active: boolean;
  labels: VideoLabels;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={
        active ? 'true' : undefined
      }
      aria-label={`${labels.select} ${
        index + 1
      }: ${item.name}`}
      className={cn(
        `
          group
          relative
          grid
          w-full
          grid-cols-[7.5rem_minmax(0,1fr)]
          items-center
          gap-4
          overflow-hidden
          rounded-xl
          border
          p-2.5
          text-start
          transition-[transform,border-color,background-color,box-shadow]
          duration-300
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          motion-reduce:transition-none
          sm:grid-cols-[9rem_minmax(0,1fr)]
          lg:grid-cols-[7.5rem_minmax(0,1fr)]
          xl:grid-cols-[8.5rem_minmax(0,1fr)]
        `,
        active
          ? `
              border-accent-400
              bg-accent-50
              shadow-sm
            `
          : `
              border-border
              bg-card
              hover:-translate-y-0.5
              hover:border-accent-300
              hover:bg-accent-50/40
              hover:shadow-card
            `
      )}
    >
      <span
        className="
          relative
          aspect-video
          overflow-hidden
          rounded-lg
          bg-primary-950
        "
      >
        <VideoThumbnail
          item={item}
          sizes="150px"
        />

        <span
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-primary-950/25
            transition-colors
            duration-300
            group-hover:bg-primary-950/40
          "
        />

        <span
          aria-hidden="true"
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/95
              text-primary-900
              shadow-lg
              transition-[transform,background-color,color]
              duration-300
              group-hover:scale-110
              group-hover:bg-accent
              group-hover:text-accent-foreground
              motion-reduce:transition-none
              motion-reduce:group-hover:scale-100
            "
          >
            <Play
              className="
                h-4
                w-4
                translate-x-px
                fill-current
                rtl:-translate-x-px
              "
              strokeWidth={0}
            />
          </span>
        </span>
      </span>

      <span className="min-w-0">
        <span
          className={cn(
            `
              block
              text-caption
              font-bold
              uppercase
              tracking-wider
            `,
            active
              ? 'text-accent-700'
              : 'text-muted-foreground'
          )}
        >
          {String(index + 1).padStart(
            2,
            '0'
          )}
        </span>

        <span
          className="
            mt-1
            block
            truncate
            text-small
            font-bold
            text-foreground
          "
        >
          {item.name}
        </span>

        <span
          className="
            mt-0.5
            block
            truncate
            text-caption
            text-muted-foreground
          "
        >
          {item.role}
        </span>

        <span
          className="
            mt-2
            hidden
            line-clamp-2
            text-caption
            leading-relaxed
            text-muted-foreground
            xl:block
          "
        >
          {item.quote}
        </span>
      </span>

      <span
        aria-hidden="true"
        className={cn(
          `
            absolute
            inset-y-3
            start-0
            w-1
            rounded-e-full
            bg-accent
            transition-opacity
            duration-300
          `,
          active
            ? 'opacity-100'
            : 'opacity-0'
        )}
      />
    </button>
  );
}

export function VideoTestimonialsGrid({
  items,
  labels,
}: VideoTestimonialsGridProps) {
  const shouldReduceMotion =
    useReducedMotion();

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const selectedItem =
    items[selectedIndex] ?? items[0];

  const selectedVideoId =
    selectedItem
      ? extractYouTubeId(
          selectedItem.videoSrc
        )
      : '';

  const hasValidSelectedVideo =
    Boolean(selectedVideoId);

  useEffect(() => {
    setIsPlaying(false);
  }, [selectedIndex]);

  useEffect(() => {
    if (
      selectedIndex >= items.length
    ) {
      setSelectedIndex(0);
    }
  }, [items.length, selectedIndex]);

  if (
    !Array.isArray(items) ||
    items.length === 0 ||
    !selectedItem
  ) {
    return null;
  }

  function selectVideo(index: number) {
    setSelectedIndex(index);
    setIsPlaying(false);
  }

  return (
    <div
      role="region"
      aria-label={labels.region}
      className="
        grid
        items-start
        gap-6
        lg:grid-cols-[minmax(0,1.55fr)_minmax(310px,0.75fr)]
        xl:gap-8
      "
    >
      {/* =================================================
          Main video showcase
          ================================================= */}

      <div
        className="
          overflow-hidden
          rounded-[1.75rem]
          border
          border-primary-800/25
          bg-brand-dark
          text-white
          shadow-xl
        "
      >
        {/* Player */}
        <div
          className="
            relative
            aspect-video
            overflow-hidden
            bg-black
          "
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {isPlaying &&
            selectedVideoId ? (
              <motion.div
                key={`player-${selectedIndex}`}
                initial={{
                  opacity:
                    shouldReduceMotion
                      ? 1
                      : 0,
                }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration:
                    shouldReduceMotion
                      ? 0
                      : 0.25,
                }}
                className="
                  absolute
                  inset-0
                "
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideoId}?autoplay=1&controls=1&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3`}
                  title={selectedItem.name}
                  allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture;
                    web-share
                  "
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setIsPlaying(false)
                  }
                  aria-label={labels.stop}
                  className="
                    absolute
                    end-4
                    top-4
                    z-20
                    inline-flex
                    min-h-touch
                    min-w-touch
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-primary-950/75
                    text-white
                    shadow-lg
                    backdrop-blur-md
                    transition-colors
                    duration-200
                    hover:bg-primary-950
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                  "
                >
                  <X
                    className="h-5 w-5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </motion.div>
            ) : (
              <motion.button
                key={`cover-${selectedIndex}`}
                type="button"
                onClick={() => {
                  if (
                    !hasValidSelectedVideo
                  ) {
                    return;
                  }

                  setIsPlaying(true);
                }}
                aria-disabled={
                  !hasValidSelectedVideo
                }
                aria-label={`${labels.watch} — ${selectedItem.name}`}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        scale: 0.99,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration:
                    shouldReduceMotion
                      ? 0
                      : 0.3,
                }}
                className="
                  group
                  absolute
                  inset-0
                  h-full
                  w-full
                  overflow-hidden
                  text-start
                  cursor-pointer
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-accent
                "
              >
                <VideoThumbnail
                  item={selectedItem}
                  priority
                  sizes="
                    (min-width: 1024px) 65vw,
                    100vw
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-primary-950/85
                    via-primary-950/15
                    to-primary-950/15
                    transition-colors
                    duration-300
                    group-hover:from-primary-950/95
                  "
                />

                {/* YouTube badge */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    start-5
                    top-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-primary-950/55
                    px-3
                    py-1.5
                    text-caption
                    font-bold
                    text-white
                    backdrop-blur-md
                  "
                >
                  <Youtube
                    className="
                      h-4
                      w-4
                      fill-current
                    "
                    strokeWidth={1.7}
                  />

                  {labels.youtube}
                </span>

                {/* Main play button / invalid-link notice */}
                {hasValidSelectedVideo ? (
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/35
                        bg-white/95
                        text-primary-900
                        shadow-2xl
                        transition-[transform,background-color,color,box-shadow]
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-accent
                        group-hover:text-accent-foreground
                        group-hover:shadow-button-accent
                        motion-reduce:transition-none
                        motion-reduce:group-hover:scale-100
                        sm:h-24
                        sm:w-24
                      "
                    >
                      <Play
                        className="
                          h-8
                          w-8
                          translate-x-0.5
                          fill-current
                          rtl:-translate-x-0.5
                          sm:h-10
                          sm:w-10
                        "
                        strokeWidth={0}
                      />
                    </span>
                  </span>
                ) : (
                  <span
                    role="status"
                    className="
                      absolute
                      bottom-16
                      start-5
                      end-5
                      rounded-xl
                      border
                      border-warning-300/30
                      bg-primary-950/85
                      px-4
                      py-3
                      text-center
                      text-small
                      font-semibold
                      text-warning-200
                      backdrop-blur-md
                    "
                  >
                    {labels.invalidVideo}
                  </span>
                )}


                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-5
                    end-5
                    rounded-full
                    border
                    border-white/15
                    bg-primary-950/55
                    px-3
                    py-1.5
                    text-caption
                    font-bold
                    tracking-wider
                    text-white/75
                    backdrop-blur-md
                  "
                >
                  {String(
                    selectedIndex + 1
                  ).padStart(2, '0')}
                  <span className="mx-1.5 text-white/35">
                    /
                  </span>
                  {String(
                    items.length
                  ).padStart(2, '0')}
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Selected testimonial details */}
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.div
            key={`details-${selectedIndex}`}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -6,
            }}
            transition={{
              duration:
                shouldReduceMotion
                  ? 0
                  : 0.3,
            }}
            className="
              relative
              p-6
              sm:p-8
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -end-24
                -top-20
                h-56
                w-56
                rounded-full
                bg-accent/15
                blur-3xl
              "
            />

            <div className="relative">
              <div
                className="
                  flex
                  flex-col
                  justify-between
                  gap-4
                  sm:flex-row
                  sm:items-start
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      text-caption
                      font-bold
                      uppercase
                      tracking-wider
                      text-accent-300
                    "
                  >
                    {labels.nowPlaying}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-h3
                      font-bold
                      text-white
                    "
                  >
                    {selectedItem.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-small
                      text-white/55
                    "
                  >
                    {selectedItem.role}
                  </p>
                </div>

                <Quote
                  aria-hidden="true"
                  strokeWidth={0}
                  className="
                    h-10
                    w-10
                    shrink-0
                    fill-accent-300
                    text-accent-300
                    rtl:-scale-x-100
                  "
                />
              </div>

              <blockquote
                className="
                  mt-6
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <p
                  className="
                    max-w-3xl
                    text-body
                    leading-relaxed
                    text-white/75
                  "
                >
                  “{selectedItem.quote}”
                </p>
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =================================================
          Video playlist
          ================================================= */}

      <aside
        className="
          overflow-hidden
          rounded-[1.5rem]
          border
          border-border
          bg-surface-sunken
          p-4
          shadow-card
          sm:p-5
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            border-b
            border-border
            pb-4
          "
        >
          <div>
            <p
              className="
                flex
                items-center
                gap-2
                text-small
                font-bold
                text-foreground
              "
            >
              <ListVideo
                className="
                  h-5
                  w-5
                  text-accent-700
                "
                strokeWidth={1.8}
                aria-hidden="true"
              />

              {labels.moreVideos}
            </p>

            <p
              className="
                mt-1
                text-caption
                text-muted-foreground
              "
            >
              {items.length}{' '}
              {labels.youtube}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-primary
              text-caption
              font-bold
              text-white
            "
          >
            {String(items.length).padStart(
              2,
              '0'
            )}
          </span>
        </div>

        <div
          role="list"
          aria-label={labels.moreVideos}
          className="
            mt-4
            grid
            gap-3
            sm:grid-cols-2
            lg:max-h-[36rem]
            lg:grid-cols-1
            lg:overflow-y-auto
            lg:pe-1
          "
        >
          {items.map((item, index) => (
            <div
              role="listitem"
              key={`${item.name}-${index}`}
            >
              <PlaylistItem
                item={item}
                index={index}
                active={
                  index === selectedIndex
                }
                labels={labels}
                onSelect={() =>
                  selectVideo(index)
                }
              />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}