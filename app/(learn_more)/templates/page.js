/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hx6PcTEJZb7
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">What's Inside Zero to Full Stack Hero?</h2>
      <p className="mb-12">Know EXACTLY what you are going to get before purchasing!</p>
      <h3 className="text-2xl font-bold mb-8">Zero to Full Stack Hero Modules</h3>
      <p className="mb-12">Additional course content will be released and updated weekly!</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <DribbbleIcon className="h-[100px] w-[100px] mx-auto" />
          <h4 className="text-xl font-semibold text-center">REACT BASICS 101</h4>
          <p className="text-center">It's what you all have been asking for!</p>
          <Button className="block mx-auto">Get this Module for FREE!</Button>
        </div>
        <div className="space-y-4">
          <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
          <h4 className="text-xl font-semibold text-center">WEB DEV ESSENTIALS</h4>
          <p className="text-center">
            If you're starting from absolute ZERO, we got you! We are going to cover HTML, CSS, Javascript and a ton of
            extra's that will propel you into the world of web development!
          </p>
        </div>
        <div className="space-y-4">
          <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
          <h4 className="text-xl font-semibold text-center">CSS MASTERY</h4>
          <p className="text-center">
            Flexbox, CSS Grid, Bootstrap, Material-UI + SO MUCH MORE to make your website a looker and the next big hit!
          </p>
        </div>
        <div className="space-y-4">
          <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
          <h4 className="text-xl font-semibold text-center">JAVASCRIPT MASTERY</h4>
          <p className="text-center">
            Master the programming language which redefined the web. From the fundamentals to the complicated parts, we
            got you covered!
          </p>
        </div>
        <div className="space-y-4">
          <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
          <h4 className="text-xl font-semibold text-center">SERVER SIDE RENDERING FOR NOOBS</h4>
          <p className="text-center">SSR is made simple with the latest and the greatest Next.js 14!</p>
        </div>
        <div className="space-y-4">
          <DribbbleIcon className="h-[100px] w-[100px] mx-auto" />
          <h4 className="text-xl font-semibold text-center">THE COMPLETE REACT GUIDE</h4>
          <p className="text-center">EVERYTHING in React. We got you covered. Even TESTING!</p>
        </div>
      </div>
    </div>
  )
}

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}
