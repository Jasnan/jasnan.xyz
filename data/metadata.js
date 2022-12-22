const metadata = {
  name: 'Jasnan Thachaparamban',
  url: 'https://jasnan.xyz',
  description:
    'I am a JavaScript developer with a passion for privacy and open-source software. I believe that everyone has the right to privacy and security online.',
  language: 'en-US',
  email: 'hallo@jasnan.xyz',
  github: 'https://github.com/jasnan',
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'preferred_color_scheme',
      // theme when dark mode
      darkTheme: 'dark',
      // If the theme is set to custom
      themeURL: '',
    },
  },
}

module.exports = metadata
