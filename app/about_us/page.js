import { CardHeader, CardContent, Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
          style={{
            backgroundImage: '"url("/placeholder.svg?height=600&width=800")"',
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Learn more about Lupleg, our mission, vision, and values.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">
              Our Statement
            </h2>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-semibold">Mission </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our mission is to democratize education by making it
                    accessible, engaging, and personalized for everyone 
                    all around the world without challenges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-semibold">Our Vision</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Vision is to build a world where everyone, regardless of
                    their background or circumstances, can have access to a
                    quality education without special access its an 
                    opportunity for all.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-semibold">Lupleg Values</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We believe in continuous learning, integrity, collaboration,
                    and putting our learners at the heart of everything we do.
                    Everyone is welcome to contribute towards this initiative.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
