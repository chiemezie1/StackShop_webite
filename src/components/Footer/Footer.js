import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 m-auto" style={{ maxWidth: '1200px' }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/"><div className="hover:underline cursor-pointer">Home</div></Link>
          <Link href="/about-us"><div className="hover:underline cursor-pointer">About Us</div></Link>
          <Link href="/store"><div className="hover:underline cursor-pointer">Store</div></Link>
        </div>
        <div className="flex justify-center space-x-6 mb-2">
          <Link href="https://facebook.com" passHref><div className="hover:underline cursor-pointer">Facebook</div></Link>
          <Link href="https://twitter.com" passHref><div className="hover:underline cursor-pointer">Twitter</div></Link>
          <Link href="https://instagram.com" passHref><div className="hover:underline cursor-pointer">Instagram</div></Link>
        </div>
        <p className="text-gray-400 text-sm">© 2023 StackShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
