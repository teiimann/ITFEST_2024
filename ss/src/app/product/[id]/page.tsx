import Image from 'next/image'
import { notFound } from 'next/navigation'

// This would typically come from a database or API
const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/placeholder.svg?height=400&width=400', description: 'This is product 1' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/placeholder.svg?height=400&width=400', description: 'This is product 2' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/placeholder.svg?height=400&width=400', description: 'This is product 3' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/placeholder.svg?height=400&width=400', description: 'This is product 4' },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

