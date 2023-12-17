
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Introduction</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We are committed to respecting your privacy. This policy details the information we collect, how we use it,
            and your rights regarding that information.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Data Collection</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We collect various types of information: voluntary information (like your name, email, and address),
            automatic information (like user activity and cookies), and information from third parties.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Data Usage</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The data we collect is used to improve our services, personalize your experience, conduct marketing, comply
            with legal obligations, and other business purposes.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Cookies</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We use cookies and similar technologies to recognize your repeat visits and preferences, as well as to
            measure the effectiveness of campaigns and analyze traffic.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Third-Party Links</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Our services may link to third-party websites that are not controlled by us. We recommend you to review the
            privacy policy of every site you visit.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Contact Information</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If you have any questions about this policy or our practices, please contact us at:
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Email:
            <Link className="underline text-blue-600 hover:text-blue-800" href="#">
              info@company.com
            </Link>
          </p>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-8">
        <Button variant="outline">Accept</Button>
      </div>
    </main>
  )
}

