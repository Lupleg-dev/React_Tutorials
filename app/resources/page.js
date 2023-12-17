import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Resources() {
  return (
    <main className="w-full py-12 px-4 md:px-6 lg:px-8">
      <section className="container mx-auto space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Lupleg Education Resources
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
            Discover more about our services, read useful articles, and access
            helpful tools.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 bg-gray-100 dark:bg-gray-800">
            <CardHeader className="text-xl font-semibold">
              Help Center
              <Badge className="ml-2" variant="secondary">
                Help
              </Badge>
            </CardHeader>
            <CardContent className="text-sm text-gray-500">
              Find answers to common questions and learn how to use Lupleg
              services effectively.
            </CardContent>
            <Button className="w-full" variant="outline">
              <Link href="#">Learn more</Link>
            </Button>
          </Card>
          <Card className="p-6 space-y-4 bg-gray-100 dark:bg-gray-800">
            <CardHeader className="text-xl font-semibold">
              Documentation
              <Badge className="ml-2" variant="secondary">
                Docs
              </Badge>
            </CardHeader>
            <CardContent className="text-sm text-gray-500">
              In-depth articles and guides on all features and functionality of
              our services.
            </CardContent>
            <Button className="w-full" variant="outline">
              <Link href="#">Learn more</Link>
            </Button>
          </Card>
          <Card className="p-6 space-y-4 bg-gray-100 dark:bg-gray-800">
            <CardHeader className="text-xl font-semibold">
              Tutorials
              <Badge className="ml-2" variant="secondary">
                Tutorial
              </Badge>
            </CardHeader>
            <CardContent className="text-sm text-gray-500">
              Step by step tutorials to help you make the most of Lupleg
              Education SaaS.
            </CardContent>
            <Button className="w-full" variant="outline">
              <Link href="#">Learn more</Link>
            </Button>
          </Card>
        </div>
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Articles
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
            Check out some of our most popular articles to help you get started.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          <a className="group" href="#">
            <Badge
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              Getting Started
            </Badge>
            <h3 className="mt-2 text-xl font-semibold group-hover:underline">
              How to Set Up Your Lupleg Classroom
            </h3>
          </a>
          <a className="group" href="#">
            <Badge
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              Tips & Tricks
            </Badge>
            <h3 className="mt-2 text-xl font-semibold group-hover:underline">
              Maximizing Student Engagement with Lupleg
            </h3>
          </a>
          <a className="group" href="#">
            <Badge
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              Advanced Features
            </Badge>
            <h3 className="mt-2 text-xl font-semibold group-hover:underline">
              Using Analytics to Track Student Progress
            </h3>
          </a>
          <a className="group" href="#">
            <Badge
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              New Features
            </Badge>
            <h3 className="mt-2 text-xl font-semibold group-hover:underline">
              Explore the Latest Features of Lupleg
            </h3>
          </a>
          <a className="group" href="#">
            <Badge
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              Case Studies
            </Badge>
            <h3 className="mt-2 text-xl font-semibold group-hover:underline">
              How Lupleg is Changing Education: A Case Study
            </h3>
          </a>
          <a className="group" href="#">
            <Badge
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              User Guide
            </Badge>
            <h3 className="mt-2 text-xl font-semibold group-hover:underline">
              A Comprehensive User Guide to Lupleg
            </h3>
          </a>
        </div>
      </section>
    </main>
  );
}
