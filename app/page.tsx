import Link from "next/link"
import { ArrowRight, Code, BookOpen, Bot, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import CourseCard from "@/components/course-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedText from "@/components/animated-text"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Karpom.Dev - Learn Python & Generative AI | Tech Education Institution",
  description:
    "Master Python programming and Generative AI with expert-led courses at Karpom.Dev. Transform your career with our cutting-edge tech education programs.",
  keywords: "Python courses, AI education, generative AI, tech education, coding bootcamp, programming classes",
  openGraph: {
    title: "Karpom.Dev - Learn Python & Generative AI | Tech Education Institution",
    description:
      "Master Python programming and Generative AI with expert-led courses at Karpom.Dev. Transform your career with our cutting-edge tech education programs.",
    url: "https://karpom.dev",
    siteName: "Karpom.Dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karpom.Dev - Learn Deep. Build Bold.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karpom.Dev - Learn Python & Generative AI",
    description: "Master Python programming and Generative AI with expert-led courses at Karpom.Dev",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-yellow-500">
              Karpom.Dev
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link href="/courses" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Courses
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Blog
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Redesigned */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-yellow-100 to-white">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-yellow-100 rounded-full text-sm font-medium text-yellow-800 mb-2">
                  The Future of Tech Education
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="relative inline-block">
                    <span className="relative z-10">Master</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 opacity-50 z-0"></span>
                  </span>{" "}
                  <span className="text-yellow-500 block mt-2">Python & AI</span>
                  <span className="block mt-2">With Experts</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Transform your future with our cutting-edge curriculum. Learn from industry professionals and build
                  projects that matter.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6 rounded-full group"
                    asChild
                  >
                    <Link href="/enroll">
                      Enroll Now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-6 rounded-full group" asChild>
                    <Link href="/courses">
                      <Play className="mr-2 h-5 w-5" /> Watch Demo
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-white shadow-md border-2 border-yellow-100 flex items-center justify-center text-xs font-medium overflow-hidden"
                      >
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${i}`}
                          alt={`Student ${i}`}
                        fill
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">2,000+</span> students • <span className="font-bold">4.9/5</span>{" "}
                      rating
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                  <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    Featured Course
                  </div>
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Python+%26+AI+Mastery"
                    alt="Python & AI Mastery Course at Karpom.Dev"

fill
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Python & AI Mastery</h3>
                    <p className="text-sm mb-3 text-gray-200">
                      Our flagship course combining Python fundamentals with cutting-edge AI applications
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-300 font-bold">$699</span>
                      <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                        <Link href="/courses/python-ai-mastery">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm animate-bounce">
                  30% OFF
                  <br />
                  This Week
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-white to-yellow-50" id="about">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-yellow-500">Karpom.Dev</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide industry-leading education in Python programming and generative AI technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="h-10 w-10 text-yellow-500" />,
                  title: "Expert-Led Python Courses",
                  description:
                    "Learn Python from industry professionals with years of experience in software development and data science.",
                },
                {
                  icon: <Bot className="h-10 w-10 text-yellow-500" />,
                  title: "Cutting-Edge AI Training",
                  description:
                    "Master the latest generative AI technologies and tools that are reshaping industries worldwide.",
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-yellow-500" />,
                  title: "Project-Based Learning",
                  description:
                    "Build your portfolio with real-world projects that demonstrate your skills to potential employers.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 rounded-xl p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-white" id="courses">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular Courses</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Comprehensive curriculum designed to take you from beginner to professional
                </p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link href="/courses">
                  View All Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CourseCard
                title="Python Fundamentals"
                description="Master the basics of Python programming language, data structures, and algorithms."
                image="/placeholder.svg?height=300&width=400&text=Python+Fundamentals"
                level="Beginner"
                duration="8 weeks"
                price="$299"
                slug="python-fundamentals"
              />
              <CourseCard
                title="Generative AI Foundations"
                description="Learn the principles behind generative AI models and how to implement them."
                image="/placeholder.svg?height=300&width=400&text=AI+Foundations"
                level="Intermediate"
                duration="10 weeks"
                price="$499"
                slug="generative-ai-foundations"
              />
              <CourseCard
                title="Advanced AI Applications"
                description="Build sophisticated AI applications using Python and modern frameworks."
                image="/placeholder.svg?height=300&width=400&text=Advanced+AI"
                level="Advanced"
                duration="12 weeks"
                price="$699"
                slug="advanced-ai-applications"
              />
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 bg-gradient-to-br from-white to-yellow-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Insights, tutorials, and news from the world of Python and AI
                </p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link href="/blog">
                  View All Posts <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Getting Started with Python for AI Development",
                  excerpt:
                    "Learn the essential Python concepts you need to know before diving into AI and machine learning.",
                  image: "/placeholder.svg?height=300&width=400&text=Python+for+AI",
                  date: "May 2, 2025",
                  author: "Dr. Sarah Chen",
                  slug: "getting-started-with-python-for-ai",
                },
                {
                  title: "Understanding Generative AI Models: A Beginner's Guide",
                  excerpt:
                    "Explore the fundamentals of generative AI models and how they're revolutionizing creative industries.",
                  image: "/placeholder.svg?height=300&width=400&text=Generative+AI",
                  date: "April 28, 2025",
                  author: "Michael Rodriguez",
                  slug: "understanding-generative-ai-models",
                },
                {
                  title: "Building Your First AI-Powered Web Application",
                  excerpt:
                    "Follow this step-by-step tutorial to create a web application enhanced with artificial intelligence.",
                  image: "/placeholder.svg?height=300&width=400&text=AI+Web+Apps",
                  date: "April 15, 2025",
                  author: "Jessica Patel",
                  slug: "building-your-first-ai-powered-web-application",
                },
              ].map((post, index) => (
                <Link href={`/blog/${post.slug}`} key={index} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        fill
                      />
                      <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {post.date}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {post.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-white" id="testimonials">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from our graduates who have transformed their careers with Karpom.Dev
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The Python course at Karpom.Dev completely changed my career trajectory. I went from a marketing role to a data analyst in just 6 months!"
                name="Sarah Johnson"
                title="Data Analyst at TechCorp"
                avatar="/placeholder.svg?height=100&width=100&text=SJ"
              />
              <TestimonialCard
                quote="The instructors are incredible - they explain complex AI concepts in a way that's easy to understand and apply to real-world problems."
                name="Michael Chen"
                title="AI Engineer at InnovateTech"
                avatar="/placeholder.svg?height=100&width=100&text=MC"
              />
              <TestimonialCard
                quote="I've taken online courses before, but Karpom.Dev's project-based approach gave me practical skills that I use every day in my new role."
                name="Jessica Patel"
                title="Software Developer at StartupX"
                avatar="/placeholder.svg?height=100&width=100&text=JP"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-yellow-500" id="contact">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Start Your Tech Journey?</h2>
                <p className="text-lg text-black/80 mb-8">
                  Join Karpom.Dev today and take the first step toward a rewarding career in Python development and
                  generative AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6" asChild>
                    <Link href="/enroll">
                      Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-black text-black hover:bg-black/10 text-lg px-8 py-6"
                    asChild
                  >
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <form className="space-y-4" action="/api/contact" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        name="firstName"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        name="lastName"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="course" className="text-sm font-medium">
                      Interested Course
                    </label>
                    <select id="course" name="course" className="w-full p-3 border border-gray-300 rounded-md" required>
                      <option value="">Select a course</option>
                      <option value="python-fundamentals">Python Fundamentals</option>
                      <option value="generative-ai-foundations">Generative AI Foundations</option>
                      <option value="advanced-ai-applications">Advanced AI Applications</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6 flex justify-center md:justify-start">
                <AnimatedText />
              </div>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of tech professionals with cutting-edge education in Python and
                generative AI.
              </p>
              <div className="flex space-x-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-yellow-500">
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      {social[0].toUpperCase()}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses/python-fundamentals" className="text-gray-400 hover:text-yellow-500">
                    Python Fundamentals
                  </Link>
                </li>
                <li>
                  <Link href="/courses/generative-ai-foundations" className="text-gray-400 hover:text-yellow-500">
                    Generative AI Foundations
                  </Link>
                </li>
                <li>
                  <Link href="/courses/advanced-ai-applications" className="text-gray-400 hover:text-yellow-500">
                    Advanced AI Applications
                  </Link>
                </li>
                <li>
                  <Link href="/courses/data-science-python" className="text-gray-400 hover:text-yellow-500">
                    Data Science with Python
                  </Link>
                </li>
                <li>
                  <Link href="/courses/machine-learning-basics" className="text-gray-400 hover:text-yellow-500">
                    Machine Learning Basics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-yellow-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-yellow-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-yellow-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-400 hover:text-yellow-500">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-yellow-500">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">123 Tech Avenue</li>
                <li className="text-gray-400">San Francisco, CA 94107</li>
                <li className="text-gray-400">info@karpomdev.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Karpom.Dev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
