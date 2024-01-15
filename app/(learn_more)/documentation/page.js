/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Fw4U0DCyc9f
 */
import Link from "next/link"

export default function Docs() {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="hidden lg:block lg:w-64 border-r">
        <nav className="grid gap-2 p-4">
          <Link className="font-semibold" href="#">
            Introduction
          </Link>
          <Link className="font-semibold" href="#">
            Getting Started
          </Link>
          <Link className="font-semibold" href="#">
            Installation
          </Link>
          <Link className="font-semibold" href="#">
            Configuration
          </Link>
          <Link className="font-semibold" href="#">
            Usage
          </Link>
          <Link className="font-semibold" href="#">
            API Reference
          </Link>
          <Link className="font-semibold" href="#">
            Troubleshooting
          </Link>
          <Link className="font-semibold" href="#">
            FAQ
          </Link>
        </nav>
      </div>
      <main className="flex-1 overflow-y-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Introduction</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          Welcome to our documentation. Here you will find comprehensive guides and documentation to help you start
          working with our product as quickly as possible.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-2">Let's jump right in!</p>
      </main>
    </div>
  )
}

