import { Button } from "@/components/ui/button"
import { Clock, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  image: string
  level: string
  duration: string
  price: string
  slug: string
}

export default function CourseCard({ title, description, image, level, duration, price, slug }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <Image
                  fill src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{level}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
          <Link href={`/courses/${slug}`}>Enroll Now</Link>
        </Button>
      </div>
    </div>
  )
}
