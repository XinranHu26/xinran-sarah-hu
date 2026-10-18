import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import { researchThemes } from '@/data/researchData'
import publications from '@/data/publicationsData'
import education from '@/data/educationData'
import VideoEmbed from '@/components/VideoEmbed'

interface Highlight {
  label: string
  href: string
  src: string
  width: number
  height: number
  alt: string
  objectPosition?: string
}

const highlights: Highlight[] = [
  {
    label: 'Research',
    href: '/research',
    src: '/static/images/gallery/fieldwork-roadside-crew.jpg',
    width: 1600,
    height: 1200,
    alt: 'Recording a highway maintenance crew at work along the roadway.',
  },
  {
    label: 'Teaching',
    href: '/teaching',
    src: '/static/images/gallery/lecture-engaging.jpg',
    width: 1600,
    height: 1200,
    alt: 'Working through a problem with the CM 301 class.',
  },
  {
    label: 'Conferences',
    href: '/gallery',
    src: '/static/images/gallery/trb-2025-podium.jpg',
    width: 1600,
    height: 1926,
    alt: 'Presenting at the TRB Annual Meeting in Washington, DC.',
  },
]

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const { name, avatar, occupation, company, tagline } = mainContent

  const topicOrder = ['BIM', 'Ergonomics', 'Fatigue', 'Usability']
  const selected = publications
    .flatMap((group) => group.items)
    .filter((pub) => pub.selected)
    .sort((a, b) => topicOrder.indexOf(a.topic ?? '') - topicOrder.indexOf(b.topic ?? ''))

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Intro */}
      <div className="items-start space-y-6 pt-8 pb-10 md:grid md:grid-cols-3 md:space-y-0 md:gap-x-10">
        <div className="flex flex-col items-center md:items-start">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              width={256}
              height={256}
              className="h-44 w-44 rounded-full object-cover md:h-56 md:w-56"
              priority
            />
          )}
          <div className="mt-5 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="scholar" href={siteMetadata.scholar} size={6} />
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            {name}
          </h1>
          {tagline && (
            <p className="text-primary-600 dark:text-primary-400 mt-1 text-sm font-medium">
              {tagline}
            </p>
          )}
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{occupation}</p>
          <p className="text-gray-500 dark:text-gray-400">{company}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
            <a
              className="hover:text-primary-500 dark:hover:text-primary-400"
              href={`mailto:${siteMetadata.email}`}
            >
              {siteMetadata.email}
            </a>
            <a
              className="hover:text-primary-500 dark:hover:text-primary-400"
              href={`mailto:${siteMetadata.altEmail}`}
            >
              {siteMetadata.altEmail}
            </a>
          </div>
          <div className="prose dark:prose-invert mt-6 max-w-none">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/publications"
              className="bg-primary-500 hover:bg-primary-600 rounded-md px-4 py-2 text-sm font-medium text-white"
            >
              Publications
            </Link>
            <Link
              href="/research"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:text-gray-200 dark:hover:border-gray-500"
            >
              Research
            </Link>
          </div>
        </div>
      </div>

      {/* Representative work — research, teaching, conferences */}
      <div className="py-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-5">
          {highlights.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 768px) 33vw, 33vw"
                  className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                  style={{ objectPosition: item.objectPosition ?? 'center' }}
                />
              </div>
              <p className="group-hover:text-primary-500 dark:group-hover:text-primary-400 mt-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Videos */}
      <div className="py-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Video
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <VideoEmbed
            id="SDWN-5HMlqA"
            title="Field data collection"
            poster="/static/images/video/field-data-collection-poster.jpg"
            caption="Field data collection with INDOT highway maintenance crews."
          />
          <VideoEmbed
            id="3Iflw6qpd9s"
            title="Teaching demo"
            poster="/static/images/video/teaching-demo-poster.jpg"
            caption="Teaching demonstration."
          />
        </div>
      </div>

      {/* Education */}
      <div className="py-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Education
        </h2>
        <div className="mt-6 space-y-6">
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.institution}-${item.date}`}
              className="border-l-2 border-gray-200 pl-5 dark:border-gray-700"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.degree}, {item.field}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.institution} &middot; {item.location}
              </p>
              {item.advisor && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Advisor: {item.advisor}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Research themes */}
      <div className="py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Research
          </h2>
          <Link
            href="/research"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
          >
            All projects &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {researchThemes.slice(0, 4).map((theme) => (
            <div
              key={theme.title}
              className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{theme.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {theme.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {theme.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-primary-600 dark:text-primary-400 rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected publications */}
      <div className="py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Selected Publications
          </h2>
          <Link
            href="/publications"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
          >
            See all &rarr;
          </Link>
        </div>
        <ul className="mt-6 space-y-6">
          {selected.map((pub) => (
            <li key={pub.title} className="text-sm leading-6">
              {pub.topic && (
                <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-wide uppercase">
                  {pub.topic}
                </span>
              )}
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {pub.doi ? (
                  <Link
                    href={pub.doi}
                    className="hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    {pub.title}
                  </Link>
                ) : (
                  pub.title
                )}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {pub.authors} ({pub.year}).
              </p>
              <p className="text-gray-500 italic dark:text-gray-400">{pub.venue}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
