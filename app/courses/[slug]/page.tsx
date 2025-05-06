import Link from "next/link"
import { ArrowLeft, Clock, CheckCircle, Play, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface CoursePageProps {
  params: {
    slug: string
  }
}

// This would typically come from a CMS or database
const getCourse = (slug: string) => {
  const courses = {
    "python-fundamentals": {
      title: "Python Fundamentals",
      description: "Master the basics of Python programming language, data structures, and algorithms.",
      longDescription:
        "This comprehensive course is designed to take you from a complete beginner to a confident Python programmer. You'll learn the core concepts of Python programming, including variables, data types, control structures, functions, and more. By the end of this course, you'll have a solid foundation in Python programming and be ready to tackle more advanced topics.",
      image: "/placeholder.svg?height=600&width=1200&text=Python+Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      price: "$299",
      category: "Python",
      rating: 4.9,
      students: 1250,
      instructor: {
        name: "Dr. Sarah Chen",
        bio: "Dr. Sarah Chen is a Python expert with over 10 years of experience in software development and education. She has taught Python programming to thousands of students and is passionate about making complex concepts accessible to beginners.",
        image: "/placeholder.svg?height=100&width=100&text=SC",
      },
      syllabus: [
        {
          title: "Introduction to Python",
          lessons: [
            "Setting Up Your Python Environment",
            "Writing Your First Python Program",
            "Understanding Variables and Data Types",
            "Basic Input and Output",
          ],
        },
        {
          title: "Control Structures",
          lessons: [
            "Conditional Statements (if, elif, else)",
            "Loops (for, while)",
            "Break and Continue Statements",
            "Exception Handling",
          ],
        },
        {
          title: "Data Structures",
          lessons: ["Lists and List Comprehensions", "Dictionaries and Sets", "Tuples", "Working with Strings"],
        },
        {
          title: "Functions and Modules",
          lessons: [
            "Defining and Calling Functions",
            "Parameters and Return Values",
            "Lambda Functions",
            "Creating and Importing Modules",
          ],
        },
        {
          title: "File Handling",
          lessons: ["Reading and Writing Text Files", "Working with CSV Files", "JSON Data", "File System Operations"],
        },
        {
          title: "Object-Oriented Programming",
          lessons: ["Classes and Objects", "Inheritance and Polymorphism", "Encapsulation", "Special Methods"],
        },
        {
          title: "Error Handling and Debugging",
          lessons: ["Common Python Errors", "Debugging Techniques", "Using the Debugger", "Writing Clean Code"],
        },
        {
          title: "Final Project",
          lessons: ["Project Planning", "Implementation", "Testing and Debugging", "Presentation"],
        },
      ],
      features: [
        "24 live online sessions",
        "Hands-on coding exercises",
        "Real-world projects",
        "Personal feedback on assignments",
        "Certificate of completion",
        "Access to course materials for life",
        "Community forum access",
        "1-on-1 mentoring sessions",
      ],
      faqs: [
        {
          question: "Do I need prior programming experience?",
          answer:
            "No, this course is designed for absolute beginners. We'll start from the very basics and gradually build up your skills.",
        },
        {
          question: "What software do I need?",
          answer:
            "You'll need a computer with internet access. All the software we use is free and we'll guide you through the installation process.",
        },
        {
          question: "How much time should I dedicate per week?",
          answer:
            "We recommend setting aside 8-10 hours per week for watching lectures, completing assignments, and working on projects.",
        },
        {
          question: "Is there a certificate upon completion?",
          answer:
            "Yes, you'll receive a certificate of completion that you can add to your resume or LinkedIn profile.",
        },
        {
          question: "What if I miss a live session?",
          answer: "All live sessions are recorded and made available to you, so you can catch up at your own pace.",
        },
      ],
    },
    "generative-ai-foundations": {
      title: "Generative AI Foundations",
      description: "Learn the principles behind generative AI models and how to implement them.",
      longDescription:
        "This intermediate-level course explores the fascinating world of generative AI. You'll learn about different types of generative models, including GANs, VAEs, and transformer-based models, and how to implement them using Python and popular deep learning frameworks. By the end of this course, you'll be able to create your own generative AI applications.",
      image: "/placeholder.svg?height=600&width=1200&text=AI+Foundations",
      level: "Intermediate",
      duration: "10 weeks",
      price: "$499",
      category: "AI",
      rating: 4.8,
      students: 850,
      instructor: {
        name: "Michael Rodriguez",
        bio: "Michael Rodriguez is an AI researcher and educator with expertise in generative models. He has worked on numerous AI projects for leading tech companies and is passionate about making AI education accessible to everyone.",
        image: "/placeholder.svg?height=100&width=100&text=MR",
      },
      syllabus: [
        {
          title: "Introduction to Generative AI",
          lessons: [
            "What is Generative AI?",
            "Types of Generative Models",
            "Applications of Generative AI",
            "Ethical Considerations",
          ],
        },
        {
          title: "Foundations of Deep Learning",
          lessons: ["Neural Networks Refresher", "Activation Functions", "Loss Functions", "Optimization Algorithms"],
        },
        {
          title: "Generative Adversarial Networks (GANs)",
          lessons: ["GAN Architecture", "Training GANs", "Common Challenges", "Implementing a Simple GAN"],
        },
        {
          title: "Variational Autoencoders (VAEs)",
          lessons: [
            "Autoencoder Architecture",
            "Variational Inference",
            "The Reparameterization Trick",
            "Implementing a VAE",
          ],
        },
        {
          title: "Transformer-Based Models",
          lessons: [
            "Attention Mechanisms",
            "Transformer Architecture",
            "Pre-training and Fine-tuning",
            "Working with GPT Models",
          ],
        },
        {
          title: "Diffusion Models",
          lessons: [
            "Diffusion Process",
            "Denoising Diffusion Probabilistic Models",
            "Sampling Techniques",
            "Implementing a Simple Diffusion Model",
          ],
        },
        {
          title: "Multimodal Generative AI",
          lessons: ["Text-to-Image Models", "Image-to-Text Models", "Audio Generation", "Cross-Modal Generation"],
        },
        {
          title: "Building Generative AI Applications",
          lessons: ["Project Planning", "Implementation", "Evaluation Metrics", "Deployment Considerations"],
        },
        {
          title: "Final Project",
          lessons: ["Project Proposal", "Implementation", "Testing and Refinement", "Presentation"],
        },
      ],
      features: [
        "30 live online sessions",
        "Hands-on implementation of generative models",
        "Access to GPU resources for training",
        "Personal feedback on assignments",
        "Certificate of completion",
        "Access to course materials for life",
        "Community forum access",
        "1-on-1 mentoring sessions",
      ],
      faqs: [
        {
          question: "What prerequisites are required for this course?",
          answer:
            "You should have a basic understanding of Python programming and some familiarity with machine learning concepts. Our Python Fundamentals course is a good preparation for this course.",
        },
        {
          question: "Do I need a powerful computer for this course?",
          answer:
            "While a decent computer is helpful, we provide access to cloud-based GPU resources for the more computationally intensive parts of the course.",
        },
        {
          question: "How much math knowledge is required?",
          answer:
            "A basic understanding of linear algebra, calculus, and probability is helpful, but we'll review the essential concepts as needed.",
        },
        {
          question: "Can I build my own AI art generator after this course?",
          answer:
            "Yes, one of the projects in this course involves building a simple text-to-image generator, which is the foundation of AI art tools.",
        },
        {
          question: "Is this course up-to-date with the latest AI developments?",
          answer: "Yes, we regularly update our curriculum to include the latest advancements in generative AI.",
        },
      ],
    },
    // Add more courses as needed
  }

  return courses[slug as keyof typeof courses] || null
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourse(params.slug)

  if (!course) {
    return {
      title: "Course Not Found | Karpom.Dev",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | Karpom.Dev Courses`,
    description: course.description,
    keywords: `${course.title}, ${course.category}, Python, AI, programming, education, online course`,
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://karpom.dev/courses/${params.slug}`,
      siteName: "Karpom.Dev",
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourse(params.slug)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-500">
        <div className="container py-8">
          <Button variant="outline" className="bg-white" asChild>
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Link>
          </Button>
        </div>
      </header>

      {/* Course Hero */}
      <section className="bg-white border-b">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 text-sm text-yellow-600 mb-3">
                <span className="bg-yellow-100 px-3 py-1 rounded-full">{course.category}</span>
                <span className="bg-yellow-100 px-3 py-1 rounded-full">{course.level}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-yellow-500" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= Math.floor(course.rating) ? "text-yellow-500" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span>{course.rating} rating</span>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <img
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">Instructor: {course.instructor.name}</p>
                  <p className="text-sm text-gray-600">Expert Instructor</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-6" asChild>
                  <Link href={`/enroll?course=${params.slug}`}>Enroll Now for {course.price}</Link>
                </Button>
                <Button variant="outline" className="w-full text-lg py-6" asChild>
                  <Link href="#syllabus">
                    <Play className="mr-2 h-5 w-5" /> Preview Course
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-colors">
                    <Play className="h-8 w-8 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About This Course</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p>{course.longDescription}</p>
              </div>

              <h2 className="text-3xl font-bold mb-6" id="syllabus">
                Course Syllabus
              </h2>
              <div className="space-y-6 mb-12">
                {course.syllabus.map((module, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                      <h3 className="font-bold">
                        Module {index + 1}: {module.title}
                      </h3>
                      <span className="text-sm text-gray-500">{module.lessons.length} lessons</span>
                    </div>
                    <div className="p-6 space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Your Instructor</h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-12">
                <div className="flex items-center mb-4">
                  <img
                    src={course.instructor.image || "/placeholder.svg"}
                    alt={course.instructor.name}
                    className="w-20 h-20 rounded-full mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{course.instructor.name}</h3>
                    <p className="text-gray-600">Expert Instructor</p>
                  </div>
                </div>
                <p className="text-gray-700">{course.instructor.bio}</p>
              </div>

              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 mb-12">
                {course.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4">
                      <h3 className="font-bold">{faq.question}</h3>
                    </div>
                    <div className="p-6">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">This Course Includes</h3>
                <div className="space-y-4 mb-8">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                    <Link href={`/enroll?course=${params.slug}`}>Enroll Now for {course.price}</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Ask a Question</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/courses/advanced-ai-applications" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100 h-full">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Advanced+AI"
                    alt="Advanced AI Applications"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    $699
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                    Advanced AI Applications
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Build sophisticated AI applications using Python and modern frameworks.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/courses/data-science-python" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100 h-full">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Data+Science"
                    alt="Data Science with Python"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    $449
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                    Data Science with Python
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to analyze and visualize data using Python's powerful libraries.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/courses/machine-learning-basics" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100 h-full">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=ML+Basics"
                    alt="Machine Learning Basics"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    $399
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                    Machine Learning Basics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Understand the fundamentals of machine learning algorithms and their applications.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl text-black/80 mb-8">
              Join thousands of students who have transformed their careers with Karpom.Dev courses.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6" asChild>
              <Link href={`/enroll?course=${params.slug}`}>Enroll Now for {course.price}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
