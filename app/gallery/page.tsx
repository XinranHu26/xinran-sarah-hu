import Image from '@/components/Image'
import gallery from '@/data/galleryData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Gallery' })

export default function Page() {
  const sections = gallery.filter((section) => section.photos.length > 0)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Gallery
        </h1>
      </div>

      {sections.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Photos coming soon. Add them in <code>data/galleryData.ts</code>.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {sections.map((section) => (
            <section key={section.heading} className="py-10">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {section.heading}
              </h2>
              {section.blurb && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{section.blurb}</p>
              )}
              <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {section.photos.map((photo) => (
                  <figure key={photo.src}>
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        width={photo.width}
                        height={photo.height}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`h-full w-full ${
                          photo.fit === 'contain' ? 'object-contain' : 'object-cover'
                        }`}
                        style={{ objectPosition: photo.objectPosition ?? 'center' }}
                      />
                    </div>
                    {section.showCaptions !== false && (
                      <figcaption className="mt-3 text-sm">
                        <p className="text-gray-700 dark:text-gray-300">{photo.caption}</p>
                        {photo.event && (
                          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            {photo.event}
                            {photo.date ? ` · ${photo.date}` : ''}
                          </p>
                        )}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
