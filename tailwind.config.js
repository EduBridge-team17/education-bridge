/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Euclid Circular B', 'sans-serif'], //mobile
        secondary: ['Helvetica Neue', 'sans-serif'], //desktop
      },
      colors: {
        primary: {
          50: '#E7FCFB',
          100: '#B7F6F1',
          200: '#A6E9E4',
          300: '#95DCD7',
          400: '#85D0CA',
          500: '#74C3BD',
          600: '#52A9A2',
          700: '#319088',
          800: '#0F766E', //main
          900: '#0C5E58',
          1000: '#094742',
          2000: '#062F2C',
          3000: '#052321',
        },
        secondary: {
          50: '#FFFFFF',
          100: '#FDEEE7',
          200: '#FBDECE',
          300: '#F9CDB6',
          400: '#F7BC9E',
          500: '#F29B6D',
          600: '#EE793D',
          700: '#EA580C', //main
          800: '#BB460A',
          900: '#8C3507',
          1000: '#5E2305',
          2000: '#461A04',
          3000: '#2F1202',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#FCFDFD',
          200: '#FAFAFB',
          300: '#F7F8F9',
          400: '#F5F5F7',
          500: '#EFF1F3',
          600: '#EAECEF',
          700: '#E5E7EB',
          800: '#C6C9CF',
          900: '#A7ABB3',
          1000: '#878C97',
          2000: '#787D89',
          3000: '#686E7B',
        },
        success: {
          50: '#D2F4D2',
          100: '#A5E9A5',
          200: '#78DE78',
          300: '#4AD34A',
          400: '#2DB92D',
          500: '#228B22',
          600: '#1C741C',
          700: '#175D17',
          800: '#114611',
          900: '#0B2F0B',
          1000: '#061706',
        },
        error: {
          50: '#FBDCDC',
          100: '#FBDECE',
          200: '#F7B9B9',
          300: '#F39696',
          400: '#EF7373',
          500: '#EA5050',
          600: '#E62E2E',
          700: '#CD1818',
          800: '#A41313',
          900: '#7B0E0E',
          1000: '#520A0A',
        },
      },

      fontSize: {
        h1: '24px',
        h2: '20px',
        h3: '18px',
        h4: '16px',
        h5: '14px',
        h6: '12px',

        display1: '64px',
        display2: '48px',
        display3: '32px',

        p1: '18px',
        p2: '16px',
        p3: '14px',

        footer1: '12px',
        footer2: '10px',
      },

      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
};
