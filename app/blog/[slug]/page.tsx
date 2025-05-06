import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "getting-started-with-python-for-ai": {
      title: "Getting Started with Python for AI Development",
      excerpt: "Learn the essential Python concepts you need to know before diving into AI and machine learning.",
      image: "/placeholder.svg?height=600&width=1200&text=Python+for+AI",
      date: "May 2, 2025",
      author: "Dr. Sarah Chen",
      authorImage: "/placeholder.svg?height=100&width=100&text=SC",
      category: "Python",
      content: `
        <p>Python has become the de facto language for artificial intelligence and machine learning development. Its simplicity, readability, and vast ecosystem of libraries make it the perfect choice for both beginners and experts in the field.</p>
        
        <h2>Why Python for AI?</h2>
        
        <p>There are several reasons why Python has emerged as the leading programming language for AI development:</p>
        
        <ul>
          <li><strong>Simplicity and Readability:</strong> Python's clean syntax makes it easy to learn and understand, allowing developers to focus on solving AI problems rather than wrestling with complex code.</li>
          <li><strong>Rich Ecosystem:</strong> Libraries like NumPy, Pandas, TensorFlow, PyTorch, and scikit-learn provide powerful tools for data manipulation, analysis, and model building.</li>
          <li><strong>Community Support:</strong> Python has a large and active community of developers who contribute to open-source projects and provide support through forums and documentation.</li>
          <li><strong>Versatility:</strong> Python can be used for various aspects of AI development, from data preprocessing to model deployment.</li>
        </ul>
        
        <h2>Essential Python Concepts for AI</h2>
        
        <p>Before diving into AI and machine learning, it's important to have a solid understanding of the following Python concepts:</p>
        
        <h3>1. Data Structures</h3>
        
        <p>Python offers several built-in data structures that are essential for AI development:</p>
        
        <ul>
          <li><strong>Lists:</strong> Ordered, mutable collections that can store elements of different types.</li>
          <li><strong>Dictionaries:</strong> Key-value pairs that allow for fast lookups and efficient data organization.</li>
          <li><strong>Sets:</strong> Unordered collections of unique elements, useful for removing duplicates and performing set operations.</li>
          <li><strong>Tuples:</strong> Immutable sequences that can store elements of different types.</li>
        </ul>
        
        <h3>2. NumPy Arrays</h3>
        
        <p>NumPy is a fundamental library for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently.</p>
        
        <pre><code>
import numpy as np

# Create a 2D array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Perform operations
print(arr.shape)  # Output: (2, 3)
print(arr.mean())  # Output: 3.5
print(arr * 2)  # Element-wise multiplication
        </code></pre>
        
        <h3>3. Pandas for Data Manipulation</h3>
        
        <p>Pandas is a powerful library for data manipulation and analysis. It provides data structures like DataFrames that make it easy to work with structured data.</p>
        
        <pre><code>
import pandas as pd

# Create a DataFrame
data = {'Name': ['John', 'Anna', 'Peter', 'Linda'],
        'Age': [28, 34, 29, 42],
        'City': ['New York', 'Paris', 'Berlin', 'London']}
        
df = pd.DataFrame(data)

# Filter data
young_people = df[df['Age'] < 30]
print(young_people)
        </code></pre>
        
        <h3>4. Functions and Lambda Expressions</h3>
        
        <p>Functions are essential for organizing code and promoting reusability. Lambda expressions provide a concise way to create small, anonymous functions.</p>
        
        <pre><code>
# Regular function
def square(x):
    return x ** 2

# Lambda expression
square_lambda = lambda x: x ** 2

# Apply function to a list
numbers = [1, 2, 3, 4, 5]
squared = list(map(square_lambda, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]
        </code></pre>
        
        <h2>Next Steps</h2>
        
        <p>Once you have a solid understanding of these Python concepts, you can start exploring AI-specific libraries and frameworks such as:</p>
        
        <ul>
          <li><strong>TensorFlow and PyTorch:</strong> Deep learning frameworks for building and training neural networks.</li>
          <li><strong>scikit-learn:</strong> A machine learning library that provides simple and efficient tools for data analysis and modeling.</li>
          <li><strong>Keras:</strong> A high-level neural networks API that runs on top of TensorFlow.</li>
          <li><strong>NLTK and spaCy:</strong> Libraries for natural language processing.</li>
        </ul>
        
        <p>By mastering these Python concepts and libraries, you'll be well-equipped to tackle a wide range of AI and machine learning projects.</p>
      `,
    },
    "understanding-generative-ai-models": {
      title: "Understanding Generative AI Models: A Beginner's Guide",
      excerpt: "Explore the fundamentals of generative AI models and how they're revolutionizing creative industries.",
      image: "/placeholder.svg?height=600&width=1200&text=Generative+AI",
      date: "April 28, 2025",
      author: "Michael Rodriguez",
      authorImage: "/placeholder.svg?height=100&width=100&text=MR",
      category: "AI",
      content: `
        <p>Generative AI models have taken the world by storm, enabling machines to create content that was once the exclusive domain of human creativity. From generating realistic images and writing coherent text to composing music and designing products, these models are revolutionizing how we think about artificial intelligence.</p>
        
        <h2>What Are Generative AI Models?</h2>
        
        <p>Generative AI models are a class of artificial intelligence systems designed to generate new content that resembles the data they were trained on. Unlike discriminative models that classify or predict based on input data, generative models learn the underlying patterns and distributions of the training data to create new, original outputs.</p>
        
        <p>These models have gained significant attention in recent years due to their remarkable ability to produce human-like content across various domains, including text, images, audio, and video.</p>
        
        <h2>Types of Generative AI Models</h2>
        
        <h3>1. Generative Adversarial Networks (GANs)</h3>
        
        <p>GANs consist of two neural networks—a generator and a discriminator—that work against each other in a game-like scenario. The generator creates fake data, while the discriminator tries to distinguish between real and fake data. Through this adversarial process, the generator improves its ability to create realistic outputs.</p>
        
        <p>GANs have been particularly successful in generating realistic images, such as human faces that don't exist, artwork in specific styles, and photo-realistic scenes.</p>
        
        <h3>2. Variational Autoencoders (VAEs)</h3>
        
        <p>VAEs are neural networks that learn to encode input data into a compressed representation (latent space) and then decode it back to reconstruct the original input. By sampling from the latent space, VAEs can generate new data points that resemble the training data.</p>
        
        <p>VAEs are often used for image generation, anomaly detection, and dimensionality reduction.</p>
        
        <h3>3. Transformer-Based Models</h3>
        
        <p>Transformer models, such as GPT (Generative Pre-trained Transformer) and BERT (Bidirectional Encoder Representations from Transformers), have revolutionized natural language processing. These models use attention mechanisms to understand the context and relationships between words in a text.</p>
        
        <p>GPT models, in particular, have demonstrated impressive capabilities in generating coherent and contextually relevant text across various domains, from creative writing to technical documentation.</p>
        
        <h3>4. Diffusion Models</h3>
        
        <p>Diffusion models work by gradually adding noise to data and then learning to reverse this process to generate new samples. These models have shown remarkable results in image generation, often producing more diverse and higher-quality outputs than GANs.</p>
        
        <p>Stable Diffusion and DALL-E are examples of diffusion models that have gained popularity for their ability to generate detailed and creative images based on text prompts.</p>
        
        <h2>Applications of Generative AI</h2>
        
        <p>Generative AI models have found applications across various industries:</p>
        
        <ul>
          <li><strong>Creative Industries:</strong> Generating artwork, music, and literature.</li>
          <li><strong>Content Creation:</strong> Assisting in writing articles, scripts, and marketing copy.</li>
          <li><strong>Product Design:</strong> Creating new product designs and prototypes.</li>
          <li><strong>Healthcare:</strong> Generating synthetic medical data for research and training.</li>
          <li><strong>Gaming:</strong> Creating realistic environments, characters, and narratives.</li>
          <li><strong>Fashion:</strong> Designing new clothing items and predicting trends.</li>
        </ul>
        
        <h2>Challenges and Ethical Considerations</h2>
        
        <p>Despite their impressive capabilities, generative AI models face several challenges and raise important ethical questions:</p>
        
        <ul>
          <li><strong>Bias and Fairness:</strong> Models can perpetuate and amplify biases present in their training data.</li>
          <li><strong>Authenticity and Misinformation:</strong> The ability to generate realistic content raises concerns about deepfakes and misinformation.</li>
          <li><strong>Copyright and Ownership:</strong> Questions about who owns AI-generated content and whether it infringes on existing copyrights.</li>
          <li><strong>Privacy:</strong> Models trained on personal data raise privacy concerns.</li>
          <li><strong>Job Displacement:</strong> Potential impact on creative professions as AI becomes more capable of generating high-quality content.</li>
        </ul>
        
        <h2>Getting Started with Generative AI</h2>
        
        <p>If you're interested in exploring generative AI, here are some resources to get started:</p>
        
        <ul>
          <li>Learn the fundamentals of deep learning and neural networks.</li>
          <li>Experiment with pre-trained models like GPT-3, DALL-E, or Stable Diffusion through their APIs.</li>
          <li>Explore open-source implementations of generative models on platforms like GitHub.</li>
          <li>Take online courses focused on generative AI and deep learning.</li>
          <li>Join communities and forums where researchers and practitioners discuss generative AI techniques and applications.</li>
        </ul>
        
        <p>As generative AI continues to evolve, it promises to unlock new possibilities for human-AI collaboration and creativity. By understanding the fundamentals of these models, you'll be better equipped to leverage their capabilities and navigate the challenges they present.</p>
      `,
    },
    // Add more blog posts as needed
  }

  return posts[slug as keyof typeof posts] || null
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Karpom.Dev",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Karpom.Dev Blog`,
    description: post.excerpt,
    keywords: `${post.category}, Python, AI, programming, education, tutorial`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://karpom.dev/blog/${params.slug}`,
      siteName: "Karpom.Dev",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
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
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full h-[400px] bg-gray-200 relative">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Article Content */}
      <article className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-yellow-600 mb-3">
              <span className="bg-yellow-100 px-3 py-1 rounded-full">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between border-y border-gray-200 py-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>

          {/* Article Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="text-sm text-gray-600">Tags:</span>
                <div className="flex gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">Python</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">AI</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">Machine Learning</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Share:</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-100 hover:text-yellow-600 transition-colors">
                    <span className="sr-only">Twitter</span>T
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-100 hover:text-yellow-600 transition-colors">
                    <span className="sr-only">Facebook</span>F
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-100 hover:text-yellow-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>L
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/python-libraries-every-ai-developer-should-know" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                      Python Libraries Every AI Developer Should Know
                    </h3>
                    <p className="text-sm text-gray-600">April 10, 2025</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/ethics-of-artificial-intelligence" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                      The Ethics of Artificial Intelligence: Challenges and Solutions
                    </h3>
                    <p className="text-sm text-gray-600">April 5, 2025</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-yellow-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to get the latest articles, tutorials, and updates from Karpom.Dev.
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
