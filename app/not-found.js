"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-4xl mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-2xl mt-2">
          You may have mistyped the address or the page may have moved.
        </p>
      </div>
      <div className="mt-8">
        <Button className="mt-4 px-4 py-2 bg-black hover:bg-black text-white  rounded-md" variant="ghost">
          <Link className="bg-black hover:black text-white" href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
