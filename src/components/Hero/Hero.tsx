import Link from 'next/link';
import Image from 'next/image';
import HeroImage from 'public/images/hero1.jpg';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-10 mx-auto text-center" style={{ maxWidth: '1200px' }}>
      <h2 className="text-6xl text-center font-extrabold text-yellow-600 mb-6">Welcome to StackShop</h2>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2 mb-6">
          <div className="relative" style={{ paddingTop: '56.25%' }}> {/* Maintain aspect ratio */}
            <Image
              src={HeroImage}
              alt="Hero"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto">
        <p className="text-4xl text-gray-600 mb-6">Discover amazing products.</p>
        <p className="text-4xl text-gray-600 mb-6">Enjoy a seamless shopping experience with StackShop.</p>
        <p className="text-2xl text-gray-600 mb-6">We offer a wide range of products to choose from.</p>
        <Link href="/store">
          <div className="inline-block px-8 py-4 text-2xl text-white bg-blue-500 rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-700">
            Explore Now
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
