"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <main className="w-full h-full bg-gray-50 py-12 px-6 md:px-12">
      <section className="container mx-auto">
        <Card className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="flex justify-center items-center bg-black text-white py-5">
            <CardTitle className="text-2xl uppercase font-bold">
              Terms and Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="px-10 py-6 text-gray-700">
            <p className="my-4 text-sm">
              Welcome to Lupleg Terms of use. If you continue to browse and use
              this website, you are agreeing to comply with and be bound by the
              following terms and conditions of use, which together with our
              privacy policy govern our relationship with you in relation to
              this website. If you disagree with any part of these terms and
              conditions, please do not use our website.
            </p>
            <p className="my-4 text-sm">
              The term us or we refers to the owner of the website whose
              registered. The term you refers to the user or viewer of our
              website.
            </p>
            <p className="my-4 text-sm">
              The use of this website is subject to the following terms of use:
              <ul className="list-disc list-inside mt-4 ml-5 text-sm">
                <li>
                  The content of the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice.
                </li>
                <li>
                  This website uses cookies to monitor browsing preferences. If
                  you do allow cookies to be used, the following personal
                  information may be stored by us for use by third parties.
                </li>
                <li>
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </li>
              </ul>
            </p>
          </CardContent>
          <CardFooter className="flex justify-center py-6">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Accept
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
