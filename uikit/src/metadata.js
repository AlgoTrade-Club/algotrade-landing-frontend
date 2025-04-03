// @project
import branding from '@/branding.json';
import { PAGE_PATH, SECTION_PATH } from '@/path';

/***************************  SEO METADATA - MAIN LAYOUT  ***************************/

const title = `${branding.brandName} - ${branding.title}`;
const description = `${branding.brandName} is a cutting-edge trading platform designed to revolutionize stock market and cryptocurrency trading. Our platform offers a comprehensive suite of features that enable traders to analyze markets, execute trades, and optimize their strategies. With ${branding.brandName}, traders can easily track market movements, implement automated trading algorithms, and manage their portfolios efficiently. Whether you're a beginner or a professional trader, ${branding.brandName} has the tools and expertise to help you succeed in today's volatile markets. Join the ${branding.brandName} community and experience the power of innovative trading solutions for financial success`;

const ogCommonMetadata = {
  locale: 'en_US',
  type: 'website',
  siteName: `${branding.brandName}`,
  images: '/assets/images/metadata/og.png' // recommended dimensions of 1200x630
};

export const mainMetadata = {
  title: {
    template: `%s | ${title}`,
    default: title // a default is required when creating a template
  },
  description,
  applicationName: title,
  keywords: [
    'SaaS',
    `${branding.brandName}`,
    'Software as a Service',
    'Cloud-based software',
    'Project management tools',
    'Enterprise software'
  ],
  creator: `${branding.company.name}`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title,
    description,
    url: '/',
    ...ogCommonMetadata
  }
};

/***************************  SEO METADATA - SECTIONS  ***************************/

const sectionCommonMeta = {
  title: 'Blocks',
  description:
    'Explore Algotrade\'s comprehensive trading platform designed to provide powerful tools for stock market and cryptocurrency trading. From real-time analytics to automated trading strategies, find everything you need for successful trading.'
};

const aboutPageCommonMeta = {
  title: 'About',
  description:
    'Algotrade is a complete trading platform designed to streamline stock market and cryptocurrency trading with powerful analytics tools, saving time and ensuring consistent, profitable trading experiences.'
};

const careerPageCommonMeta = {
  title: 'Career',
  description:
    'Join Tradnomic\'s growing team and help shape the future of trading technology. Explore exciting career opportunities in development, trading, and more, and be part of a creative, forward-thinking environment dedicated to innovation.'
};

const faqPageCommonMeta = {
  title: 'FAQ',
  description:
    'Find answers to common questions about Algotrade trading platform, features, pricing, and more. Our FAQ page provides clear, concise information to help you make the most of Algotrade and streamline your trading workflow.'
};

const pricingPageCommonMeta = {
  title: 'Pricing',
  description:
    'Discover flexible pricing plans for Algotrade trading platform, designed to fit traders of all levels. Choose the plan that best suits your needs and get access to powerful trading tools for successful market participation.'
};

const comingSoonPageCommonMeta = { title: 'Coming soon', description: 'Coming soon' };

const privacyPolicyCommonMeta = {
  title: 'Privacy Policy',
  description:
    'Algotrade privacy policy page outlines our commitment to data protection, detailing how user information is collected, stored, and managed to ensure transparency and build trust with our traders.'
};

const contactUsCommonMeta = {
  title: 'Contact US',
  description:
    'Algotrade contact us page is designed to help traders connect with our team, providing a streamlined way to get support, ask questions about our platform, or inquire about advanced trading features.'
};

const error404PageCommonMeta = { title: 'Error 404', description: 'Error 404' };
const error500PageCommonMeta = { title: 'Error 500', description: 'Error 500' };

const underMaintenanceCommonMeta = {
  title: 'Under Maintenance',
  description:
    'Algotrade under maintenance page informs traders of temporary platform unavailability with a clean, branded design, providing clear messaging and expected uptime to maintain transparency and minimize trading disruptions.'
};

export const SEO_CONTENT = {
  section: { sectionCommonMeta, openGraph: { ...sectionCommonMeta, ...ogCommonMetadata, url: SECTION_PATH } },
  aboutPage: { aboutPageCommonMeta, openGraph: { ...aboutPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.aboutPage } },
  careerPage: { careerPageCommonMeta, openGraph: { ...careerPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.careerPage } },
  faqPage: { faqPageCommonMeta, openGraph: { ...faqPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.faqPage } },
  pricingPage: { pricingPageCommonMeta, openGraph: { ...pricingPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.pricingPage } },
  comingSoonPage: { comingSoonPageCommonMeta, openGraph: { ...comingSoonPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.comingSoon } },
  privacyPolicy: {
    privacyPolicyCommonMeta,
    openGraph: { ...privacyPolicyCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.privacyPolicyPage }
  },
  contactUs: { contactUsCommonMeta, openGraph: { ...contactUsCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.contactPage } },
  error404Page: { error404PageCommonMeta, openGraph: { ...error404PageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.error404 } },
  error500Page: { error500PageCommonMeta, openGraph: { ...error500PageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.error500 } },
  underMaintenance: {
    underMaintenanceCommonMeta,
    openGraph: { ...underMaintenanceCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.underMaintenance }
  },

  about: {
    title: 'About Sections',
    description:
      'Algotrade about sections are designed to display essential content about our trading platform, mission, and team, helping traders understand our value proposition at a glance.'
  },

  benefit: {
    title: 'Benefits Sections',
    description:
      'The benefits sections in Algotrade showcase the key advantages and features of our trading platform, helping traders quickly grasp the value proposition and how it addresses their trading needs.'
  },

  forgotPassword: {
    title: 'Forgot Password Sections',
    description:
      'Tradnomic forgot password sections help users securely recover account access by guiding them through a smooth password reset process, enhancing user experience and reducing frustration.'
  },

  login: {
    title: 'Login Sections',
    description:
      'Tradnomic login sections offer clean, user-friendly interfaces that streamline secure access to applications, ensuring a smooth entry point for users.'
  },

  newPassword: {
    title: 'New Password Sections',
    description:
      'Tradnomic new password sections offer intuitive designs for users to securely create and confirm new passwords, enhancing the password reset experience.'
  },

  otpVerification: {
    title: 'OTP Verification Sections',
    description:
      'Tradnomic OTP verification sections provide a seamless way for users to authenticate their identity with secure one-time passcodes, ensuring fast and reliable user verification.'
  },

  register: {
    title: 'Register Sections',
    description:
      'Tradnomic registration sections simplify user onboarding with clean and customizable forms, making it easy for new users to sign up and get started quickly.'
  },

  clientele: {
    title: 'Clientele Sections',
    description:
      'Tradnomic clientele sections let you highlight trusted partners, clients, or brands, showcasing credibility and building trust with potential users through visually engaging logos and testimonials.'
  },

  blog: {
    title: 'Blog Sections',
    description:
      'Tradnomic blog sections are designed to showcase articles, insights, and updates, keeping users engaged with valuable content and enhancing SEO through organized, visually appealing layouts.'
  },

  color: {
    title: 'Color',
    description:
      'Tradnomic color page provides a curated palette to maintain design consistency across your app, ensuring cohesive, visually appealing layouts that align with brand identity and user experience standards.'
  },

  comingSoon: {
    title: 'Coming Soon Sections',
    description:
      'Tradnomic coming soon sections are designed to create anticipation for upcoming releases, featuring eye-catching visuals and lead capture forms to keep users engaged and informed about future product launches.'
  },

  cookie: {
    title: 'Cookie Sections',
    description:
      'Tradnomic cookie sections help inform users about data tracking practices, ensuring transparency and compliance while offering options for cookie preferences, all in a clear, user-friendly layout.'
  },

  cta: {
    title: 'Call to Action Sections',
    description:
      'Tradnomic CTA sections are designed to drive action with bold, engaging prompts, helping users convert through clear, visually distinct buttons that enhance engagement and guide users through their journey.'
  },

  earlyAccess: {
    title: 'Early Access Sections',
    description:
      'Tradnomic early access sections capture interest and drive sign-ups, enabling users to join exclusive previews and receive updates, fostering anticipation for product launches.'
  },

  error404: {
    title: 'Error 404 Sections',
    description:
      'Tradnomic Error 404 sections are crafted to keep users engaged even when they encounter broken links, offering creative and helpful redirects to guide users back on track within your app.'
  },

  error500: {
    title: 'Error 500 Sections',
    description:
      'Tradnomic Error 500 sections provide user-friendly messages and clear options for users encountering server issues, offering guidance to return to a stable page or seek support for a smoother user experience.'
  },

  faq: {
    title: 'FAQ Sections',
    description:
      'Tradnomic FAQ sections offer a well-organized layout to address common user questions, enhancing user experience and reducing support needs by providing quick, accessible answers in a clear and concise format.'
  },

  feature: {
    title: 'Feature Sections',
    description:
      'Tradnomic feature sections highlight key product benefits and functionalities, providing a visually engaging way to showcase unique selling points and help users quickly understand the value of your SaaS product.'
  },

  footer: {
    title: 'Footer Sections',
    description:
      'Tradnomic footer sections offer organized layouts for essential links, contact information, and social media, providing a polished, professional finish that enhances navigation and brand credibility across your site.'
  },

  gallery: {
    title: 'Gallery Sections',
    description:
      'Tradnomic gallery sections showcase images, portfolios, or visual content in an elegant, responsive layout, enhancing user engagement by allowing viewers to explore visual assets in an organized and appealing way.'
  },

  hero: {
    title: 'Hero Sections',
    description:
      'Tradnomic hero sections captivate users instantly with impactful visuals and clear messaging, providing a dynamic introduction that highlights key benefits and drives immediate engagement on landing pages.'
  },

  icon: {
    title: 'Icon',
    description:
      'Tradnomic icon page provides a curated collection of customizable icons to enhance your UI design, ensuring consistency and visual appeal across various sections of your application.'
  },

  integration: {
    title: 'Integration Sections',
    description:
      'Tradnomic integration sections enable you to showcase compatible tools and platforms, helping users understand how seamlessly your product connects with essential third-party services for a smoother workflow.'
  },

  megaMenu: {
    title: 'Mega Menu Sections',
    description:
      'Tradnomic mega menu sections offer a streamlined way to organize extensive content and navigation links, enhancing usability and helping users quickly access key areas of your application in a visually structured layout.'
  },

  navbar: {
    title: 'Navbar Sections',
    description:
      'Tradnomic navbar sections provide intuitive, customizable navigation bars that improve user experience by making it easy to access key pages and features, all in a streamlined, responsive layout.'
  },

  onBoard: {
    title: 'Onboard Sections',
    description:
      'Tradnomic onboarding sections guide new users through a smooth and engaging introduction to your product, helping them quickly understand key features and benefits while enhancing user retention and satisfaction.'
  },

  other: {
    title: 'Other',
    description: 'Other'
  },

  pricing: {
    title: 'Pricing Sections',
    description:
      'Tradnomic pricing sections are designed to present your subscription plans and pricing tiers clearly and effectively, helping users compare options and make informed decisions with ease.'
  },

  process: {
    title: 'Process Sections',
    description:
      'Tradnomic process sections illustrate step-by-step workflows, guiding users through your product’s unique processes in a clear, visually engaging layout that enhances understanding and engagement.'
  },

  smallHero: {
    title: 'Small Hero Sections',
    description:
      'Tradnomic small hero sections provide compact, visually impactful headers ideal for secondary pages, introducing key content with clarity and style while maintaining user engagement.'
  },

  team: {
    title: 'Team Sections',
    description:
      'Tradnomic team sections showcase your team members with visually appealing layouts, highlighting their roles, expertise, and profiles to build trust and connect with your audience on a personal level.'
  },

  testimonial: {
    title: 'Testimonial Sections',
    description:
      'Tradnomic testimonial sections highlight user feedback in visually engaging layouts, showcasing positive experiences and building trust by displaying authentic reviews and success stories from satisfied customers.'
  },

  termsCondition: {
    title: 'Terms Condition',
    description:
      'Tradnomic terms and conditions page outlines the legal agreements and rules that users must follow when using your product or service, ensuring transparency and fairness with your audience.'
  },

  topOffer: {
    title: 'Top Offer Sections',
    description:
      'Tradnomic top bar sections offer a compact space for important announcements, notifications, or quick access links, enhancing user experience by keeping essential information easily accessible at the top of the page.'
  },

  typography: {
    title: 'Typoghaphy',
    description:
      'Tradnomic typography page provides a curated selection of font styles, sizes, and weights to ensure a cohesive and visually appealing text hierarchy, enhancing readability and consistency across your application’s design.'
  }
};
