import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full px-32 lg:px-16 md:px-12 sm:px-8 py-8
    border-t-2 border-solid border-dark dark:border-light font-medium text-lg
    flex flex-col items-center justify-center lg:flex-row lg:justify-between">
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <div className="flex items-center lg:py-2">
        <Link href="/">
          Built With 
          <span className="text-2xl px-1">
            &#9825;
          </span>
        </Link>
        by&nbsp;
        <Link href="/" className="underline underline-offset-2">
          Nathan Ruer
        </Link>
      </div>
    </footer>
  )
}

export default Footer
