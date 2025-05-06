import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | Karpom.Dev",
  description: "Log in to your Karpom.Dev account to access your courses and learning materials.",
  keywords: "login, sign in, student portal, course access",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-yellow-500">
        <div className="container py-8">
          <Button variant="outline" className="bg-white" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full px-4">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-yellow-500">Karpom.Dev</h1>
            </Link>
            <h2 className="text-2xl font-bold mt-6 mb-2">Welcome back</h2>
            <p className="text-gray-600">Log in to access your courses and continue learning</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <form action="/dashboard" method="GET">
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      className="h-4 w-4 text-yellow-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-yellow-600 hover:text-yellow-500">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                Log in
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-yellow-600 hover:text-yellow-500 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
