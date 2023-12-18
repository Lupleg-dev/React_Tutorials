"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-lg mt-2">
          You may have mistyped the address or the page may have moved.
        </p>
      </div>
      <div className="mt-8">
        <Button size="sm" variant="ghost">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
