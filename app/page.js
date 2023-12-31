import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div>
      <section
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
        style={{
          backgroundImage: '"url("/sample.jpg?height=600&width=800")"',
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Your Learning Experience
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Lupleg provides interactive and engaging educational resources
                that adapt to individual learning needs.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="mt-4 px-4 py-2 bg-black hover:bg-black text-white  rounded-md">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
            <DribbbleIcon className="text-blue-500 w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-center">
              Full Stack Training
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              This course is designed to cover ALL elements of Web development,
              including Frontend technologies, Backend technologies & Everything
              in between!
            </p>
          </div>
          <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
            <GroupIcon className="text-red-500 w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-center">
              Weekly Coaching Calls
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Every week, Lupleg Team will deliver a Full Stack Mastermind
              coaching call which many describe as "Worth more than a University
              Degree itself!", so buckle up!
            </p>
          </div>
          <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
            <UserIcon className="text-green-500 w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-center">
              Exclusive LUPLEG Community
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Ever heard the saying "Your network is your net worth", well...
              with the LUPLEG, we take this to a WHOLE new level! - Dedicated
              support 24/7, accountability, motivation, its all here inside the
              LUPLEG community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
            <MedalIcon className="text-yellow-400 w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-center">
              Receive Support from the LUPLEG Success Coach Team!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              LUPLEG Success Coaches are here to help you overcome the hurdles
              Stack Overflow simply can't and provide personalised code reviews
              tailored to your coding problem!
            </p>
          </div>
          <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
            <DiscIcon className="text-purple-500 w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-center">
              Exclusive Discord Server Channels, Emoji's & More!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              This is more than just a community, its the world's largest coding
              FAMILY. We WORK HARD together, we PLAY HARD together!
            </p>
          </div>
          <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
            <PiggyBankIcon className="text-green-500 w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-center">
              Everything you need to go from Beginner to landing your first of
              many $$$'s
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We teach you how to take your skill & passion for programming and
              transform that into a sustainable income which will change your
              life.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-10">
          <h2 className="text-2xl font-bold text-center">
            What's Inside Beginner to Full Stack Hero?
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Know EXACTLY what you are going to get before purchasing!
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-center">
            Beginner to Full Stack Hero Modules
          </h3>
          <p className="mt-1 text-center text-gray-500">
            Additional course content will be released and updated weekly!
          </p>
        </div>
      </div>
      <div className="bg-white p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <DribbbleIcon className="h-[100px] w-[100px] mx-auto" />
            <h4 className="text-xl font-semibold text-center">
              REACT BASICS HACKS
            </h4>
            <p className="text-center">
              It's what you all have been asking for!
            </p>
            <Button className="block mx-auto mt-4 px-4 py-2 bg-black text-white  rounded-md hover:bg-black">
              Get this Module for FREE!
            </Button>
          </div>
          <div className="space-y-4">
            <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
            <h4 className="text-xl font-semibold text-center">
              WEB DEV ESSENTIALS
            </h4>
            <p className="text-center">
              If you're starting from absolute Beginner, we got you! We are going to
              cover HTML, CSS, Javascript and a ton of extra's that will propel
              you into the world of web development!
            </p>
          </div>
          <div className="space-y-4">
            <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
            <h4 className="text-xl font-semibold text-center">CSS MASTERY</h4>
            <p className="text-center">
              Flexbox, CSS Grid, Bootstrap, Material-UI + SO MUCH MORE to make
              your website a looker and the next big hit!
            </p>
          </div>
          <div className="space-y-4">
            <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
            <h4 className="text-xl font-semibold text-center">
              JAVASCRIPT MASTERY
            </h4>
            <p className="text-center">
              Master the programming language which redefined the web. From the
              fundamentals to the complicated parts, we got you covered!
            </p>
          </div>
          <div className="space-y-4">
            <CodepenIcon className="h-[100px] w-[100px] mx-auto" />
            <h4 className="text-xl font-semibold text-center">
              SERVER SIDE RENDERING FOR NOOBS
            </h4>
            <p className="text-center">
              SSR is made simple with the latest and the greatest Next.js 14!
            </p>
          </div>
          <div className="space-y-4">
            <DribbbleIcon className="h-[100px] w-[100px] mx-auto" />
            <h4 className="text-xl font-semibold text-center">
              THE COMPLETE REACT GUIDE
            </h4>
            <p className="text-center">
              EVERYTHING in React. We got you covered. Even TESTING!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscIcon(props) {
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
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
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
  );
}

function GroupIcon(props) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function MedalIcon(props) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function PiggyBankIcon(props) {
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
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h0" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
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
  );
}
