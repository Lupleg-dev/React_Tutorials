/**
 * v0 by Vercel.
 * @see https://v0.dev/t/viSG9juV1tD
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Courses() {
  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold">Welcome to Our Learning Platform</h1>
        <p className="mt-4  text-gray-600">
          We offer a wide range of courses to help you master the skills you
          need to advance your career. Explore our courses below.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4 border-b border-gray-200 flex items-center">
            <BrainIcon className="w-6 h-6 mr-2 rounded-full" />
            <h2 className="text-2xl font-bold">LangChain Basics</h2>
          </CardHeader>
          <CardContent className="p-4">
            <p className="mb-4">
              An introductory course to understand the basics of LangChain. No
              previous experience required.
            </p>
            <h3 className="font-semibold text-lg">Topics:</h3>
            <ul className="list-disc list-inside text-md">
              <li>History of AI</li>
              <li>Types of AI</li>
              <li>Pricipals of LangChain</li>
              <li>Application of LangChain</li>
              <li>Demo Projects</li>
            </ul>
            <p className="mt-4">
              <strong>Duration:</strong> 8 weeks
            </p>
            <Button className="mt-4 text-md" variant="outline">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4 border-b border-gray-200 flex items-center">
            <FactoryIcon className="w-6 h-6 mr-2 rounded-full" />
            <h2 className="text-2xl font-bold">Advanced Machine Learning</h2>
          </CardHeader>
          <CardContent className="p-4">
            <p className="mb-4">
              This course dives deep into Machine Learning algorithms and
              techniques. Prior knowledge of ML is necessary.
            </p>
            <h3 className="font-semibold text-lg">Topics:</h3>
            <ul className="list-disc list-inside text-md">
              <li>Deep Learning</li>
              <li>Reinforcement Learning</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Data Mining</li>
            </ul>
            <p className="mt-4">
              <strong>Duration:</strong> 8 weeks
            </p>
            <Button className="mt-4 text-md" variant="outline">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4 border-b border-gray-200 flex items-center">
            <BarChartIcon className="w-6 h-6 mr-2 rounded-full" />
            <h2 className="text-2xl font-bold">Data Science with Python</h2>
          </CardHeader>
          <CardContent className="p-4">
            <p className="mb-4">
              Utilize Python for data analysis and visualization. Basic Python
              knowledge is recommended.
            </p>
            <h3 className="font-semibold text-lg">Topics:</h3>
            <ul className="list-disc list-inside text-md">
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Tensorflow</li>
              <li>Pytorch</li>
            </ul>
            <p className="mt-4">
              <strong>Duration:</strong> 8 weeks
            </p>
            <Button className="mt-4 text-md" variant="outline">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4 border-b border-gray-200 flex items-center">
            <GlobeIcon className="w-6 h-6 mr-2 rounded-full" />
            <h2 className="text-2xl font-bold">Web Development with React</h2>
          </CardHeader>
          <CardContent className="p-4">
            <p className="mb-4">
              Learn to build dynamic web applications using React. Basic
              JavaScript knowledge is required.
            </p>
            <h3 className="font-semibold text-lg">Topics:</h3>
            <ul className="list-disc list-inside text-md">
              <li>JSX</li>
              <li>State & Props</li>
              <li>Hooks</li>
              <li>Function</li>
              <li>Components</li>
            </ul>
            <p className="mt-4">
              <strong>Duration:</strong> 7 weeks
            </p>
            <Button className="mt-4 text-md" variant="outline">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl text-black font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="bg-black shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-100 p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold">
                How does the learning process work?
              </h3>
            </CardHeader>
            <CardContent className="p-4 text-white">
              <p>
                If you are using Lupleg Academy as an invidual, you will need to
                create an account and after that, you will be able to have
                access to the learning platform.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-100 p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold">
                What is the refund policy?
              </h3>
            </CardHeader>
            <CardContent className="p-4 text-white">
              <p>
                Yes if you consider getting a refund, we have a 30 days money
                back either based on users subscription or by Custom.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-100 p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold">
                Can I switch my course midway?
              </h3>
            </CardHeader>
            <CardContent className="p-4 text-white">
              <p>
                That's something we planning to add as some users may consider
                changing courses but that will come in some near future.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
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

function BrainIcon(props) {
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
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function FactoryIcon(props) {
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
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

function GlobeIcon(props) {
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
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
