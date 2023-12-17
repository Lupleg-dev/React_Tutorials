/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cRoVOn5r78q
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            alt="EduSoft Logo"
            className="w-8 h-8"
            src="/public/lupleg-logo.png"
          />
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link className="text-gray-700 hover:text-gray-900" href="#">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" href="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" href="#">
                About
              </Link>
            </li>
            <li>
              <Button>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
