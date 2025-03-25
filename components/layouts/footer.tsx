import { ComponentProps } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const Link = ({ children, ...props }: ComponentProps<'a'>) => (
  <a
    {...props}
    className="inline-flex items-end gap-px hover:text-neutral-900 active:text-neutral-900 hover:dark:text-neutral-200 active:dark:text-neutral-200"
    target="_blank"
  >
    {children}
  </a>
)


export function Footer() {
  return (
    <div className="border-t border-neutral-300/30 dark:bg-neutral-950 py-8 text-center text-sm md:text-right">
        Built with{' '}
        <Link
          href="https://nextjs.org/?ref=https://nggiahao.com"
          rel="external"
        >
          Next.js
        </Link>
        ,{' '}
        <Link
          href="https://tailwindcss.com/?ref=https://nggiahao.com"
          rel="external"
        >
          Tailwindcss
        </Link>{' '}
        and{' '}
        <Link
          href="https://tina.io/?ref=https://nggiahao.com"
          rel="external"
        >
          TinaCMS
        </Link>{' '}
        by{' '}
        <Link
          href="https://github.com/nggiahao1999/?ref=https://nggiahao.com"
          rel="external"
        >
          Nguyễn Gia Hào
        </Link>
        .
    </div>
  )
}
