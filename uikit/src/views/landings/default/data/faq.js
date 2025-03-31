// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: `Answers to common queries about ${branding.brandName}.`,
  defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `Is ${branding.brandName} only for stock market trading?`,
      answer: `While ${branding.brandName} is designed with stock market trading in mind, it's not limited to stocks only. ${branding.brandName} is multipurpose and can be used for a variety of trading activities, including cryptocurrency trading, forex, options, and futures. ${branding.brandName} is versatile and adaptable to fit any trading strategy, providing powerful tools for all types of market participants.`,
      category: 'General'
    },
    {
      question: `What makes ${branding.brandName} different from other trading platforms?`,
      answer: `${branding.brandName} offers advanced algorithmic trading capabilities, real-time market analytics, customizable trading strategies, and a user-friendly interface that caters to both beginners and professional traders.`,
      category: 'General'
    },
    {
      question: `How does Tradnomic's AI trading model work?`,
      answer: `Tradnomic's AI trading model leverages machine learning algorithms to analyze market data and predict trends. It continuously learns from new data, adapting its strategies to optimize trading outcomes.`,
      category: 'AI Tools'
    },
    {
      question: `What are the benefits of using Tradnomic's sentiment analysis tool?`,
      answer: `Tradnomic's sentiment analysis tool provides real-time insights into market sentiment by analyzing news and social media data. This helps traders make informed decisions based on the current mood of the market.`,
      category: 'AI Tools'
    },
    {
      question: `Is ${branding.brandName} suitable for both beginners and professional traders?`,
      answer: `${branding.brandName} is designed to cater to both beginners and professional traders, offering intuitive interfaces for newcomers and advanced features for experienced users.`,
      category: 'General'
    },
    {
      question: `Is ${branding.brandName} suitable for both beginners and professional traders?`,
      answer: {
        content: `Yes, ${branding.brandName} is built for traders of all experience levels, with intuitive interfaces for beginners and advanced tools for professionals.`,
        type: 'list',
        data: [
          { primary: 'User-friendly interface for beginners.' },
          { primary: 'Advanced analytics for professionals.' },
          { primary: 'Comprehensive educational resources.' }
        ]
      },
      category: 'General'
    },
    {
      question: `What trading features does ${branding.brandName} offer?`,
      answer:
        'Our platform provides real-time market data, technical analysis tools, automated trading capabilities, AI-powered market insights, and comprehensive portfolio management features.',
      category: 'General'
    },
    {
      question: 'How can I get started with the platform?',
      answer: 'You can sign up for an account on our website and choose a subscription plan that fits your trading needs. Once registered, you\'ll have immediate access to our trading tools and features.',
      category: 'General'
    },
    {
      question: `What's included in the ${branding.brandName} subscription?`,
      answer: {
        content: 'Our subscription includes access to the trading platform, real-time market data, trading algorithms, and customer support.',
        type: 'list',
        data: [
          { primary: `Full Platform Access` },
          { primary: `Real-time Market Data` },
          { primary: `Trading Strategy Tools` }
        ]
      },
      category: 'Pricing & Licenses'
    },
    {
      question: `Can I use ${branding.brandName} on multiple devices?`,
      answer: {
        content:
          'Yes, your subscription allows you to access the platform from multiple devices. This ensures you can monitor your trades and the market from anywhere, at any time.',
        type: 'list',
        data: [
          { primary: `Desktop and Mobile Access` },
          { primary: `Synchronized Trading Experience` },
          { primary: `Secure Multi-device Login` }
        ]
      },
      category: 'Pricing & Licenses'
    },

    {
      question: 'Do you offer refunds?',
      answer:
        'Yes, we offer refunds within 14 days of purchase if you are not satisfied with our platform. Please contact our support team with your concerns for assistance.',
      category: 'Pricing'
    },
    {
      question: 'Do I get access to future updates?',
      answer: {
        content:
          'Yes, all subscribers receive continuous updates to the platform, including new features, improved algorithms, and expanded market coverage as part of their subscription.',
        type: 'list',
        data: [{ primary: `Regular Platform Updates` }, { primary: `New Trading Features` }]
      },
      category: 'Support & Updates'
    },
    {
      question: 'Is support included with the subscription?',
      answer: {
        content:
          'Yes, all subscriptions include access to our support team who can assist with platform-related questions and issues. Premium plans include priority support with faster response times.',
        type: 'list',
        data: [{ primary: `Technical Support` }, { primary: `Trading Strategy Assistance` }, { primary: `Educational Resources` }]
      },
      category: 'Support & Updates'
    }
  ],
  getInTouch: {
    link: { children: 'Get in Touch', href: '/contact' }
  },
  categories: ['General', 'Pricing & Licenses', 'Support & Updates'],
  activeCategory: 'General'
};
