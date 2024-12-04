import Image from 'next/image'
import ProductCard from '@/app/components/ProductCard';

export default function Home() {
  const products = [
    { id: 1, title: 'Product 1', price: 29.99, imageSrc: '/images/product1.jpg' },
    { id: 2, title: 'Product 2', price: 49.99, imageSrc: '/images/product2.jpg' },
    { id: 3, title: 'Product 3', price: 19.99, imageSrc: '/images/product3.jpg' },
    { id: 4, title: 'Product 4', price: 59.99, imageSrc: '/images/product4.jpg' },
    { id: 5, title: 'Product 5', price: 39.99, imageSrc: '/images/product5.jpg' },
    { id: 6, title: 'Product 6', price: 24.99, imageSrc: '/images/product6.jpg' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
}
