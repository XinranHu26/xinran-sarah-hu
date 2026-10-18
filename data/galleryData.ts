export interface Photo {
  /** Path under /public */
  src: string
  /** Intrinsic size of the processed file, used by next/image */
  width: number
  height: number
  /** Shown under the photo when the section has captions on; always the alt text */
  caption: string
  /** Event and city, when it is not already implied by the section */
  event?: string
  /** e.g. "January 2025" */
  date?: string
  /** CSS object-position for the square crop; defaults to center */
  objectPosition?: string
}

export interface PhotoSection {
  heading: string
  blurb?: string
  /** Print captions under each photo. Defaults to true. */
  showCaptions?: boolean
  photos: Photo[]
}

/**
 * HOW TO ADD A PHOTO
 * 1. Drop the original into content-inbox/photos-presentations/
 * 2. Tell Claude, or resize it yourself into public/static/images/gallery/
 * 3. Add an entry below. Empty sections are hidden automatically.
 *
 * Photos display in a uniform square grid, so the subject should sit near
 * the centre of the frame.
 */
const gallery: PhotoSection[] = [
  {
    heading: 'Conferences & Presentations',
    // Lead row first, then newest to oldest.
    photos: [
      {
        src: '/static/images/gallery/trb-2025-podium.jpg',
        width: 1600,
        height: 1926,
        caption: 'Presenting on exoskeletons and joint mechanics in shoveling.',
        event: 'TRB Annual Meeting, Washington, DC',
        date: 'January 2025',
      },
      {
        src: '/static/images/gallery/trb-2025-signage.jpg',
        width: 1600,
        height: 1403,
        caption: 'At the TRB Annual Meeting.',
        event: 'TRB Annual Meeting, Washington, DC',
        date: 'January 2025',
      },
      {
        src: '/static/images/gallery/ahfe-2024-honolulu.jpg',
        width: 1080,
        height: 1440,
        caption: 'Left to right: Xingzhou Guo, Hongyue Wu, and me.',
        event: 'AHFE International Conference, Honolulu, HI',
        date: '2024',
      },
      {
        src: '/static/images/gallery/jtrp-poster-session.jpg',
        width: 1600,
        height: 1200,
        caption: 'Left to right: me, Dr. Yunfeng (Cindy) Chen, and Bingzhen Li.',
        event: 'JTRP Poster Session, Indianapolis, IN',
        date: '2026',
      },
      {
        src: '/static/images/gallery/jtrp-poster-discussion.jpg',
        width: 870,
        height: 652,
        caption: 'Discussing results with visitors.',
        event: 'JTRP Poster Session, Indianapolis, IN',
        date: '2026',
      },
      {
        src: '/static/images/gallery/road-school-poster-board.jpg',
        width: 1280,
        height: 1707,
        caption: 'Presenting the Applied Ergonomics poster.',
        event: 'Purdue Road School, West Lafayette, IN',
        date: '2026',
      },
      {
        src: '/static/images/gallery/wbc-2025-presentation.jpg',
        width: 1600,
        height: 1200,
        caption: 'Presenting a field study on exoskeletons and ergonomic handles.',
        event: 'CIB World Building Congress, West Lafayette, IN',
        date: '2025',
      },
      {
        src: '/static/images/gallery/wbc-2025-group.jpg',
        width: 1600,
        height: 1200,
        caption: 'With fellow presenters.',
        event: 'CIB World Building Congress, West Lafayette, IN',
        date: '2025',
      },
      {
        src: '/static/images/gallery/road-school-poster.jpg',
        width: 1600,
        height: 1200,
        caption: 'Presenting the Applied Ergonomics poster.',
        event: 'Purdue Road School, West Lafayette, IN',
        objectPosition: '75% center',
        date: '2025',
      },
    ],
  },
  {
    heading: 'Teaching',
    blurb: 'CM 301, Purdue University.',
    showCaptions: false,
    photos: [
      {
        src: '/static/images/gallery/lecture-hall-wide.jpg',
        width: 1600,
        height: 1067,
        caption: 'Lecturing on statement analysis.',
      },
      {
        src: '/static/images/gallery/lecture-podium.jpg',
        width: 1600,
        height: 2400,
        caption: 'Teaching line-item, horizontal, and vertical analysis.',
        objectPosition: 'center 62%',
      },
      {
        src: '/static/images/gallery/lecture-engaging.jpg',
        width: 1600,
        height: 1200,
        caption: 'Working through a problem with the class.',
      },
    ],
  },
  {
    heading: 'Field Work',
    blurb: 'Data collection with INDOT highway maintenance crews (SPR-4838).',
    showCaptions: false,
    // Three more field photos are commented out below: two duplicated the
    // shots kept here, and the crew briefing showed workers' faces clearly,
    // which goes further than a study consent form usually covers.
    photos: [
      {
        src: '/static/images/gallery/fieldwork-indot-trucks.jpg',
        width: 1600,
        height: 1620,
        caption: 'On site with the INDOT maintenance fleet.',
      },
      // {
      // src: '/static/images/gallery/fieldwork-camera-setup.jpg',
      // width: 1178,
      // height: 1466,
      // caption: 'Setting up cameras for markerless pose estimation.',
      // },
      {
        src: '/static/images/gallery/fieldwork-roadside-crew.jpg',
        width: 1600,
        height: 1200,
        caption: 'Recording a crew at work along the roadway.',
      },
      {
        src: '/static/images/gallery/fieldwork-roadway-clearing.jpg',
        width: 1024,
        height: 768,
        caption: 'Clearing the roadway with backpack blowers during a maintenance operation.',
      },
      // {
      // src: '/static/images/gallery/fieldwork-sensor-station.jpg',
      // width: 1600,
      // height: 2133,
      // caption: 'The roadside station logging physiological and motion data.',
      // },
      // {
      // src: '/static/images/gallery/fieldwork-crew-briefing.jpg',
      // width: 1600,
      // height: 1200,
      // caption: 'Briefing the crew before a session.',
      // },
    ],
  },
  {
    heading: 'Beyond Research',
    blurb:
      'Outside the lab I boulder, hit the gym, and hike around Indiana. Pickleball and ' +
      'bowling with friends, and I am finally learning to swim.',
    showCaptions: false,
    photos: [
      {
        src: '/static/images/gallery/personal-bouldering.jpg',
        width: 768,
        height: 1024,
        caption: 'Bouldering at the climbing gym.',
      },
      {
        src: '/static/images/gallery/personal-lab-outing.jpg',
        width: 1600,
        height: 1200,
        caption: 'A lab outing by the water at dusk.',
      },
      {
        src: '/static/images/gallery/personal-hiking-trail.jpg',
        width: 768,
        height: 1024,
        caption: 'On the trail.',
        objectPosition: 'center 90%',
      },
    ],
  },
]

export default gallery
