import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database or API
const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Welcome to Our Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

