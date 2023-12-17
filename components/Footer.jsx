/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XFxW2J9nqdF
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Lupleg</h2>
          <p className="mt-4 text-gray-400">
            We are a team of creative individuals working together to bring you
            the best SaaS solutions.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Important Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="text-gray-400 hover:text-white" href="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white" href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white" href="#">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white" href="#">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Stay Connected</h2>
          <div className="mt-4 space-x-4">
            <Button size="icon" variant="ghost">
              <FacebookIcon className="w-6 h-6 text-white" />
            </Button>
            <Button size="icon" variant="ghost">
              <TwitterIcon className="w-6 h-6 text-white" />
            </Button>
            <Button size="icon" variant="ghost">
              <InstagramIcon className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        <p>© Lupleg LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
