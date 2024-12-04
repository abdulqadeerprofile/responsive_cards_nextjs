import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
}

const ProductCard = ({ imageSrc, title, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg text-[#ffcc00] font-bold">${price.toFixed(2)}</p>
        <button className="w-full mt-4 py-2 bg-[#ffcc00] text-white rounded-lg hover:bg-[#ffb800] transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
