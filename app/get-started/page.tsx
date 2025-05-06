import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Started | Karpom.Dev",
  description: "Start your journey with Karpom.Dev and explore our Python and AI courses.",
  keywords: "get started, sign up, courses, Python, AI, education",
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-yellow-500">
        <div className="container py-8">
          <Button variant="outline" className="bg-white" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Get Started with Karpom.Dev</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Choose the path that's right for you and begin your learning journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-yellow-500 p-6 text-center">
                <h2 className="text-2xl font-bold text-black">For Students</h2>
                <p className="text-black/80">Learn Python and AI with expert guidance</p>
              </div>
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Access to all courses and learning materials</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Hands-on projects and assignments</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Community support and networking</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Certificates upon course completion</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                    <Link href="/signup">Create Student Account</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses">Browse Courses</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-black p-6 text-center">
                <h2 className="text-2xl font-bold text-white">For Organizations</h2>
                <p className="text-white/80">Train your team with customized programs</p>
              </div>
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Customized training programs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Bulk enrollment discounts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Progress tracking and reporting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span>Dedicated support manager</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                    <Link href="/contact">Contact Sales Team</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/enterprise">Learn About Enterprise</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 border border-yellow-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Not Sure Where to Start?</h2>
            <p className="text-center text-gray-600 mb-6">
              Take our quick assessment to get personalized course recommendations based on your goals and experience
              level.
            </p>
            <div className="flex justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                <Link href="/assessment">Take the Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
