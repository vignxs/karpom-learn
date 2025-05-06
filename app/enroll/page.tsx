"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const getCourseInfo = (slug: string | null) => {
  const courses = {
    "python-fundamentals": {
      title: "Python Fundamentals",
      price: "$299",
      image: "/placeholder.svg?height=200&width=300&text=Python+Fundamentals",
    },
    "generative-ai-foundations": {
      title: "Generative AI Foundations",
      price: "$499",
      image: "/placeholder.svg?height=200&width=300&text=AI+Foundations",
    },
    "advanced-ai-applications": {
      title: "Advanced AI Applications",
      price: "$699",
      image: "/placeholder.svg?height=200&width=300&text=Advanced+AI",
    },
    "data-science-python": {
      title: "Data Science with Python",
      price: "$449",
      image: "/placeholder.svg?height=200&width=300&text=Data+Science",
    },
    "machine-learning-basics": {
      title: "Machine Learning Basics",
      price: "$399",
      image: "/placeholder.svg?height=200&width=300&text=ML+Basics",
    },
  }

  return slug && slug in courses
    ? courses[slug as keyof typeof courses]
    : { title: "Course Enrollment", price: "", image: "/placeholder.svg?height=200&width=300&text=Karpom.Dev" }
}

export default function EnrollPage() {
  const searchParams = useSearchParams()
  const courseSlug = searchParams.get("course")
  const courseInfo = getCourseInfo(courseSlug)

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-500">
        <div className="container py-8">
          <Button variant="outline" className="bg-white" asChild>
            <Link href={courseSlug ? `/courses/${courseSlug}` : "/courses"}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Course
            </Link>
          </Button>
        </div>
      </header>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Enroll in {courseInfo.title}</h1>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-yellow-500 text-black" : "bg-gray-200 text-gray-500"}`}
                >
                  1
                </div>
                <div className={`w-20 h-1 ${step >= 2 ? "bg-yellow-500" : "bg-gray-200"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? "bg-yellow-500 text-black" : "bg-gray-200 text-gray-500"}`}
                >
                  2
                </div>
                <div className={`w-20 h-1 ${step >= 3 ? "bg-yellow-500" : "bg-gray-200"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? "bg-yellow-500 text-black" : "bg-gray-200 text-gray-500"}`}
                >
                  3
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <div className="flex text-sm">
                <div className="w-10 text-center">Info</div>
                <div className="w-20"></div>
                <div className="w-10 text-center">Payment</div>
                <div className="w-20"></div>
                <div className="w-10 text-center">Done</div>
              </div>
            </div>
          </div>

          {step === 1 && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3">
                  <img
                    src={courseInfo.image || "/placeholder.svg"}
                    alt={courseInfo.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-xl font-bold mb-2">{courseInfo.title}</h2>
                  <div className="text-2xl font-bold text-yellow-500 mb-4">{courseInfo.price}</div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                      <span>Full course access</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                      <span>Lifetime access to course materials</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                      <span>Community forum access</span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-4">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Continue to Payment
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold mb-6">Payment Information</h2>

              <div className="mb-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
                  <div className="mr-4">
                    <CreditCard className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium">Secure Payment</p>
                    <p className="text-sm text-gray-600">Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Course Price</span>
                    <span>{courseInfo.price}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{courseInfo.price}</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Complete Payment
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Enrollment Successful!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for enrolling in {courseInfo.title}. We've sent a confirmation email to {formData.email} with
                all the details.
              </p>
              <div className="space-y-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full" asChild>
                  <Link href="/dashboard">Go to My Dashboard</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/courses">Browse More Courses</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
