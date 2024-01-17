import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <main className="p-6 md:p-12 lg:p-24">
      <Card className="mx-auto max-w-4xl shadow-lg">
        <CardHeader className="p-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-600">
            We are here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </CardHeader>
        <CardContent className="p-4 space-y-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter the subject" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button className="self-end">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
