/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'MyAI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'MyAI',
  },
  Meta: {
    Description: 'Launch MyAI, the ultimate AI workspace for experts. BYO API keys. Compare and tune models, use personas, voice and vision - your data stays local.',
    SiteName: 'MyAI | Next-Gen AI Workspace',
    ThemeColor: '#171A1C',
    TwitterSite: '',
  },
  URIs: {
    Home: 'https://github.com/Arun9339/MyAi_project',
    // App: 'https://get.big-agi.com',
    CardImage: '',
    OpenRepo: 'https://github.com/Arun9339/MyAi_project',
    OpenProject: 'https://github.com/Arun9339/MyAi_project',
    SupportInvite: 'https://github.com/Arun9339/MyAi_project/issues',
    // Twitter: '',
    PrivacyPolicy: 'https://github.com/Arun9339/MyAi_project',
    TermsOfService: 'https://github.com/Arun9339/MyAi_project',
  },
  Docs: {
    Public: (docPage: string) => `https://github.com/Arun9339/MyAi_project#readme`,
  }
} as const;