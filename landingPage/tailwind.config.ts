import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#28C888',
          'shade-1': '#43A046',
          'shade-2': '#388E3B',
          'shade-3': '#237D31',
          'shade-4': '#1B5E1F',
          'shade-5': '#103E13',
          'tint-1': '#66BB69',
          'tint-2': '#81C784',
          'tint-3': '#A5D6A7',
          'tint-4': '#C8E6C9',
          'tint-5': '#E8F5E9',
        },
        secondary: {
          DEFAULT: '#263238',
        },
        info: {
          DEFAULT: '#2194F3',
        },
        action: {
          warning: '#FBC02D',
          error: '#E53835',
          success: '#2E7D31',
        },
        neutral: {
          'd-grey': '#4D4D4D',
          grey: '#717171',
          'l-grey': '#B9B9BE',
          'grey-blue': '#A8BED1',
          silver: '#F5F7FA',
        }
      },
       fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      fontSize: {
        // Headlines
        'h1': ['64px', { lineHeight: '76px', fontWeight: '600' }],
        'h2': ['36px', { lineHeight: '44px', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600' }],

        // Body Regular
        'p1-regular': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'p2-regular': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'p3-regular': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'p4-regular': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        
        // Body Medium
        'p1-medium': ['18px', { lineHeight: '28px', fontWeight: '500' }],
        'p2-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'p3-medium': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'p4-medium': ['12px', { lineHeight: '16px', fontWeight: '500' }],
      }
    },
  },
  plugins: [],
} satisfies Config