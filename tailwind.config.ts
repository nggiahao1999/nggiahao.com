const vendorSafeList = [
  {
    pattern: /col-span-\d/,
    variants: ["xs", "sm", "md", "lg", "xl", "2xl"]
  },
  {
    // usage: flex align items
    pattern: /items-(start|end|center|baseline|stretch)/
  },
  {
    // usage: flex justify content
    pattern: /justify-(normal|start|end|center|between|around|evenly|stretch)/
  },
  {
    // usage: icons
    pattern: /(w-|h-)[1-9]/
  }
];
const clientSafeList = [
  "visible",
  "pointer-events-auto",
  "opacity-0",
  "opacity-100",
  {
    pattern: /gap(-x|-y)-\d/,
    variants: ["xs", "sm", "md", "lg", "xl", "2xl"]
  },
  {
    pattern: /space(-x|-y)-\d/,
    variants: ["xs", "sm", "md", "lg", "xl", "2xl"]
  }
];

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  safelist: ["dark", "light", ...vendorSafeList, ...clientSafeList],
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'marquee-left': {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))'
          }
        },
        'marquee-up': {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))'
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee-left': 'marquee-left var(--duration, 30s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 30s) linear infinite',
      }
    }
  },
  variants: {
    extend: { typography: ["tint", "dark", "primary"] }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
