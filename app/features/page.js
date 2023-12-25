/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KT9APtydfEy
 */
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Course Creation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Create Engaging Courses
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Design beautiful courses with our intuitive course builder.
                  Add quizzes, assignments, and interactive content to make
                  learning engaging.
                </p>
              </div>
              <EraserIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Student Management
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Manage Students Efficiently
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Keep track of your students' progress, provide feedback, and
                  personalize your teaching approach with our student management
                  tools.
                </p>
              </div>
              <GroupIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Analytics
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Monitor Course Performance
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get actionable insights with detailed reports and analytics.
                  Understand course performance and make data-driven decisions.
                </p>
              </div>
              <BarChartIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Communication Tools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stay Connected with Students
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Keep the lines of communication open with our built-in
                  communication tools. Send announcements, discuss course
                  materials, and answer student queries in real-time.
                </p>
              </div>
              <SpeakerIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <Button variant="link">Learn more</Button>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some common questions about our platform.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <details className="flex flex-col justify-center space-y-4">
              <summary className="text-xl font-bold cursor-pointer">
                Question 1
              </summary>
              <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                Answer to question 1
              </p>
            </details>
            <details className="flex flex-col justify-center space-y-4">
              <summary className="text-xl font-bold cursor-pointer">
                Question 2
              </summary>
              <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                Answer to question 2
              </p>
            </details>
            <details className="flex flex-col justify-center space-y-4">
              <summary className="text-xl font-bold cursor-pointer">
                Question 3
              </summary>
              <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                Answer to question 3
              </p>
            </details>
            <details className="flex flex-col justify-center space-y-4">
              <summary className="text-xl font-bold cursor-pointer">
                Question 4
              </summary>
              <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                Answer to question 4
              </p>
            </details>
            <details className="flex flex-col justify-center space-y-4">
              <summary className="text-xl font-bold cursor-pointer">
                Question 5
              </summary>
              <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                Answer to question 5
              </p>
            </details>
            <details className="flex flex-col justify-center space-y-4">
              <summary className="text-xl font-bold cursor-pointer">
                Question 6
              </summary>
              <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                Answer to question 6
              </p>
            </details>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-200 dark:border-gray-700 w-full my-12" />
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Engage with Our Community
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Connect with like-minded educators, share ideas, and grow
                  together in our vibrant community.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Community"
                className="object-cover w-full h-auto rounded-xl shadow-lg"
                height="600"
                src="/features.jpg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function EraserIcon(props) {
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
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
      <path d="M22 21H7" />
      <path d="m5 11 9 9" />
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

function SpeakerIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <circle cx="12" cy="14" r="4" />
      <line x1="12" x2="12.01" y1="6" y2="6" />
    </svg>
  );
}
