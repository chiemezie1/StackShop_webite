import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";
import IconPersonFilled from "public/images/icon-person-filled.svg";

import { useAuthentication } from "src/lib/hooks/use-authentication";

const NavBar = () => {
  const [confirmLogOut, setConfirmLogOut] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuthentication();

  useEffect(() => {
    if (confirmLogOut) {
      const timeoutId = setTimeout(() => setConfirmLogOut(false), 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [confirmLogOut]);

  const handleLogOut = async () => {
    if (!confirmLogOut) {
      setConfirmLogOut(true);
      return;
    }
    await signOut();
  };

  return (
    <nav className="z-10 text-gray-800 bg-white py-12 mx-auto shadow-lg border-b-gray-200 border-b-2 rounded-lg" style={{ maxWidth: '1200px' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between items-center">
        <Link href="/" passHref>
          <div className="cursor-pointer flex items-center">
            <span className="mr-10 text-4xl lg:text-6xl font-bold">StackShop</span>
          </div>
        </Link>
        <div className="flex items-center text-2xl font-bold lg:text-4xl">
          <Link href="/" passHref>
            <div className="mx-4 lg:mx-6 hover:underline  cursor-pointer">Home</div>
          </Link>
          <Link href="/store" passHref>
            <div className="mx-4 lg:mx-6 hover:underline  cursor-pointer">Store</div>
          </Link>
          <Link href="/about-us" passHref>
            <div className="mx-4 lg:mx-6 hover:underline  cursor-pointer">About</div>
          </Link>
        </div>
        <div className="flex items-center">
          {isLoading && <div className="text-lg">Loading...</div>}
          {!isLoading && !isAuthenticated && (
            <div className="flex space-x-4">
              <Link href="/sign-in" passHref>
                <div className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer">Log In</div>
              </Link>
              <Link href="/sign-in" passHref>
                <div className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer">Sign Up</div>
              </Link>
            </div>
          )}
          {!isLoading && isAuthenticated && (
            <div onClick={handleLogOut} className={`flex items-center px-4 py-3 ${confirmLogOut ? "bg-red-600 hover:bg-red-700" : "bg-gray-300 hover:bg-gray-400"} rounded-lg cursor-pointer transition-colors duration-300`}>
              {!confirmLogOut && <Image src={IconPersonFilled} alt="avatar" width={25} height={25} />}
              <span className="ml-2">{confirmLogOut ? "Confirm Log Out" : user?.givenName || "My Account"}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
