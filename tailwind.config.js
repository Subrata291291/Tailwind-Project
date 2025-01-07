/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'josepin': ['Josefin Sans'],
        'roboto': ['Roboto,sans-serif'],
        'dosis': ['Dosis, serif'],
        'poppins': ['Poppins,sans-serif'],
        'great': ['Great Vibes, serif'],
      },
      backgroundImage: {
        'btn-prop': "linear-gradient(113deg, #fff 50%, #5e9a8e 0);",
        'banner-bg': "url('../src/images/slide-1.jpg'",
        'countdown-bg': "url('../src/images/countdown-bg.jpg'",
      },
      backgroundSize: {
        'btn-size': "calc(220% + 4px) calc(100% + 4px);",
      },
      backgroundPosition: {
        'bg-position': "calc(100% + 2px) -2px;",
        'btn-hover-prop': "50% -2px;",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      }
    },
  },

  plugins: [],
}

