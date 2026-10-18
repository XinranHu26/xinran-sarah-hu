'use client'

import { useState } from 'react'
import Image from '@/components/Image'

interface Props {
  /** YouTube video id */
  id: string
  title: string
  /** Poster frame under /public, served locally so nothing is requested from
   *  YouTube until the viewer actually presses play */
  poster: string
  caption?: string
}

export default function VideoEmbed({ id, title, poster, caption }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src={poster}
              alt=""
              width={1280}
              height={720}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover transition group-hover:opacity-90"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="bg-primary-500/90 group-hover:bg-primary-500 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition">
                <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-7 w-7" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-700 dark:text-gray-300">{caption}</figcaption>
      )}
    </figure>
  )
}
