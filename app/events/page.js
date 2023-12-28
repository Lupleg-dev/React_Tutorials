import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Events() {
  return (
    <div className="bg-white text-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            More countries and Participants around the world
          </h2>
          <p className="mb-8">
            Participate in Lupleg AI Hacks events for the opportunity to network
            with a diverse community of peers, learn best practices from
            industry leaders, get advice and hands-on practice from mentors,
            benefit from thought provoking discussions, and more!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <TrophyIcon className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
            <h3 className="font-semibold mb-2">Expert Panels</h3>
            <p>Get inspired by Tech leaders</p>
          </div>
          <div className="text-center">
            <CircleDotDashedIcon className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h3 className="font-semibold mb-2">AI Access</h3>
            <p>Level up your career with AI practitioners</p>
          </div>
          <div className="text-center">
            <BarChartIcon className="mx-auto mb-4 h-12 w-12 text-red-500" />
            <h3 className="font-semibold mb-2">Pie & AI Events</h3>
            <p>Network with the global AI community</p>
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Find Events Near You</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Pie & AI: Pune - AI Hackathon</CardTitle>
              <CardDescription>
                December 17, 2024 - Lusaka AI Hackathon! Build, connect, and
                innovate with like-minded AI enthusiasts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Learn more</Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                LIM Agent Fine-Tuning: Enhancing Task Automation with Weights &
                Biases
              </CardTitle>
              <CardDescription>
                Join us in this workshop on Fine-Tuning LIM Agents, you will
                learn how to enhance the performance of LIM agent with
                application automation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Learn more</Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                Pie & AI: Muscat - the Impact of LIMs Across Various Industries
              </CardTitle>
              <CardDescription>
                Discover the impact of LIMs and Stable Diffusion Models and
                hands-on its prospects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Learn more</Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                Pie & AI: October City - Artificial Intelligence in Dentistry
              </CardTitle>
              <CardDescription>
                Introduction of artificial intelligence for dentists and
                application using low code tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Learn more</Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Link href="/contact_us">
            <button className="mx-auto bg-black p-4 text-white rounded">
              Register for the Events
            </button>
          </Link>
        </div>
      </div>
    </div>
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

function CircleDotDashedIcon(props) {
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
      <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
      <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
      <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
      <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
      <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
      <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
      <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
      <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
