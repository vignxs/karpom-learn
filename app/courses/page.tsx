import Link from "next/link";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Courses | Karpom.Dev - Python & AI Education",
  description:
    "Browse our comprehensive selection of Python programming and generative AI courses designed to take you from beginner to professional.",
  keywords:
    "Python courses, AI education, programming classes, tech education, coding bootcamp, online courses",
  openGraph: {
    title: "Courses | Karpom.Dev - Python & AI Education",
    description:
      "Browse our comprehensive selection of Python programming and generative AI courses designed to take you from beginner to professional.",
    url: "https://karpom.dev/courses",
    siteName: "Karpom.Dev",
    images: [
      {
        url: "/og-image-courses.jpg",
        width: 1200,
        height: 630,
        alt: "Karpom.Dev Courses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const courses = [
  {
    title: "Python Fundamentals",
    description:
      "Master the basics of Python programming language, data structures, and algorithms.",
    image: "/placeholder.svg?height=300&width=400&text=Python+Fundamentals",
    level: "Beginner",
    duration: "8 weeks",
    price: "$299",
    category: "Python",
    rating: 4.9,
    students: 1250,
    slug: "python-fundamentals",
    featured: true,
  },
  {
    title: "Generative AI Foundations",
    description:
      "Learn the principles behind generative AI models and how to implement them.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Foundations",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$499",
    category: "AI",
    rating: 4.8,
    students: 850,
    slug: "generative-ai-foundations",
    featured: true,
  },
  {
    title: "Advanced AI Applications",
    description:
      "Build sophisticated AI applications using Python and modern frameworks.",
    image: "/placeholder.svg?height=300&width=400&text=Advanced+AI",
    level: "Advanced",
    duration: "12 weeks",
    price: "$699",
    category: "AI",
    rating: 4.7,
    students: 620,
    slug: "advanced-ai-applications",
    featured: false,
  },
  {
    title: "Data Science with Python",
    description:
      "Learn how to analyze and visualize data using Python's powerful libraries.",
    image: "/placeholder.svg?height=300&width=400&text=Data+Science",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$449",
    category: "Data Science",
    rating: 4.8,
    students: 980,
    slug: "data-science-python",
    featured: false,
  },
  {
    title: "Machine Learning Basics",
    description:
      "Understand the fundamentals of machine learning algorithms and their applications.",
    image: "/placeholder.svg?height=300&width=400&text=ML+Basics",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$399",
    category: "Machine Learning",
    rating: 4.6,
    students: 750,
    slug: "machine-learning-basics",
    featured: false,
  },
  {
    title: "Python for Web Development",
    description:
      "Build dynamic web applications using Python frameworks like Django and Flask.",
    image: "/placeholder.svg?height=300&width=400&text=Python+Web+Dev",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$449",
    category: "Web Development",
    rating: 4.7,
    students: 820,
    slug: "python-web-development",
    featured: false,
  },
  {
    title: "Natural Language Processing",
    description:
      "Learn how to process and analyze human language using AI techniques.",
    image: "/placeholder.svg?height=300&width=400&text=NLP",
    level: "Advanced",
    duration: "10 weeks",
    price: "$599",
    category: "AI",
    rating: 4.9,
    students: 540,
    slug: "natural-language-processing",
    featured: false,
  },
  {
    title: "Computer Vision with Python",
    description:
      "Explore image and video processing techniques using Python and OpenCV.",
    image: "/placeholder.svg?height=300&width=400&text=Computer+Vision",
    level: "Advanced",
    duration: "12 weeks",
    price: "$649",
    category: "AI",
    rating: 4.8,
    students: 480,
    slug: "computer-vision-python",
    featured: false,
  },
];

export default function CoursesPage() {
  const featuredCourses = courses.filter((course) => course.featured);
  const allCourses = courses.filter((course) => !course.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-500 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Courses
            </h1>
            <p className="text-xl text-black/80">
              Comprehensive curriculum designed to take you from beginner to
              professional
            </p>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <select className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full bg-white">
                  <option value="">All Categories</option>
                  <option value="python">Python</option>
                  <option value="ai">AI</option>
                  <option value="data-science">Data Science</option>
                  <option value="machine-learning">Machine Learning</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative flex-1 md:flex-none">
                <select className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full bg-white">
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCourses.map((course, index) => (
              <Link
                href={`/courses/${course.slug}`}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5">
                      <Image
                        fill
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                          {course.category}
                        </span>
                        <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-2">{course.level}</span>
                          <span>•</span>
                          <span className="mx-2">{course.duration}</span>
                        </div>
                        <div className="text-yellow-500 font-bold">
                          {course.price}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= Math.floor(course.rating)
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-1">
                            {course.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {course.students} students
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
              <Link
                href={`/courses/${course.slug}`}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="relative">
                    <Image
                      fill
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                      {course.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                      {course.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{course.level}</span>
                        <span className="mx-2">•</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${
                                star <= Math.floor(course.rating)
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-1">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {course.students} students
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a free consultation with our education advisors to find
              the perfect course for your goals and skill level.
            </p>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6"
              asChild
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
