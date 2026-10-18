/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Xinran (Sarah) Hu',
  author: 'Xinran (Sarah) Hu',
  headerTitle: 'Xinran (Sarah) Hu',
  description:
    'Ph.D. candidate in the CARE Lab at Purdue University, researching construction safety, human factors, and computer vision for ergonomic risk assessment.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://xinran-hu.vercel.app',
  siteRepo: 'https://github.com/XinranHu26/xinran-sarah-hu',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/og-banner.jpg`,
  email: 'hu874@purdue.edu',
  altEmail: 'xinran.sarah.hu@gmail.com',
  github: 'https://github.com/XinranHu26',
  linkedin: 'https://www.linkedin.com/in/xinran-hu-710023128/',
  scholar: 'https://scholar.google.com/citations?user=2u0oQnMAAAAJ&hl=en',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    provider: '',
  },
  comments: {
    provider: '',
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
