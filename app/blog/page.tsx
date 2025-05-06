import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog | Karpom.Dev - Python & AI Education",
  description:
    "Explore the latest articles, tutorials, and insights on Python programming and generative AI from Karpom.Dev experts.",
  keywords: "Python blog, AI tutorials, programming articles, tech education blog, coding tips",
  openGraph: {
    title: "Blog | Karpom.Dev - Python & AI Education",
    description:
      "Explore the latest articles, tutorials, and insights on Python programming and generative AI from Karpom.Dev experts.",
    url: "https://karpom.dev/blog",
    siteName: "Karpom.Dev",
    images: [
      {
        url: "/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Karpom.Dev Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

const blogPosts = [
  {
    title: "Getting Started with Python for AI Development",
    excerpt: "Learn the essential Python concepts you need to know before diving into AI and machine learning.",
    image: "/placeholder.svg?height=300&width=400&text=Python+for+AI",
    date: "May 2, 2025",
    author: "Dr. Sarah Chen",
    category: "Python",
    slug: "getting-started-with-python-for-ai",
    featured: true,
  },
  {
    title: "Understanding Generative AI Models: A Beginner's Guide",
    excerpt: "Explore the fundamentals of generative AI models and how they're revolutionizing creative industries.",
    image: "/placeholder.svg?height=300&width=400&text=Generative+AI",
    date: "April 28, 2025",
    author: "Michael Rodriguez",
    category: "AI",
    slug: "understanding-generative-ai-models",
    featured: true,
  },
  {
    title: "Building Your First AI-Powered Web Application",
    excerpt: "Follow this step-by-step tutorial to create a web application enhanced with artificial intelligence.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Web+Apps",
    date: "April 15, 2025",
    author: "Jessica Patel",
    category: "Projects",
    slug: "building-your-first-ai-powered-web-application",
    featured: false,
  },
  {
    title: "Python Libraries Every AI Developer Should Know",
    excerpt: "Discover the essential Python libraries that will accelerate your AI development workflow.",
    image: "/placeholder.svg?height=300&width=400&text=Python+Libraries",
    date: "April 10, 2025",
    author: "David Kim",
    category: "Python",
    slug: "python-libraries-every-ai-developer-should-know",
    featured: false,
  },
  {
    title: "The Ethics of Artificial Intelligence: Challenges and Solutions",
    excerpt: "Explore the ethical considerations in AI development and how to build responsible AI systems.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Ethics",
    date: "April 5, 2025",
    author: "Dr. Emily Johnson",
    category: "AI",
    slug: "ethics-of-artificial-intelligence",
    featured: false,
  },
  {
    title: "From Beginner to Pro: A Python Learning Roadmap",
    excerpt: "Follow this comprehensive roadmap to master Python programming from the ground up.",
    image: "/placeholder.svg?height=300&width=400&text=Python+Roadmap",
    date: "March 28, 2025",
    author: "Alex Thompson",
    category: "Python",
    slug: "python-learning-roadmap",
    featured: false,
  },
  {
    title: "Implementing Neural Networks from Scratch in Python",
    excerpt: "Learn how neural networks work by building one from scratch using only Python and NumPy.",
    image: "/placeholder.svg?height=300&width=400&text=Neural+Networks",
    date: "March 20, 2025",
    author: "Dr. Sarah Chen",
    category: "AI",
    slug: "implementing-neural-networks-from-scratch",
    featured: false,
  },
  {
    title: "Career Paths in AI and Machine Learning",
    excerpt: "Explore the various career opportunities in the rapidly growing field of artificial intelligence.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Careers",
    date: "March 15, 2025",
    author: "Michael Rodriguez",
    category: "Career",
    slug: "career-paths-in-ai-and-machine-learning",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-500 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Karpom.Dev Blog</h1>
            <p className="text-xl text-black/80">Insights, tutorials, and news from the world of Python and AI</p>
          </div>
        </div>
      </header>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-yellow-500 group-hover:text-yellow-600">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Articles</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Latest
              </Button>
              <Button variant="ghost" size="sm">
                Popular
              </Button>
              <Button variant="ghost" size="sm">
                Python
              </Button>
              <Button variant="ghost" size="sm">
                AI
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <span>{post.date}</span>
                      </div>
                      <div className="text-sm text-gray-500">By {post.author}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-yellow-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest articles, tutorials, and updates from Karpom.Dev delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-3 border border-gray-300 rounded-md"
                required
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
