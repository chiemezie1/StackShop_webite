import { FC } from "react";
import Image from "next/image";
import LogoAffinidi from "public/images/logo-affinidi.svg";
import { clientLogin } from "src/lib/auth/client-login";

const LogIn: FC = () => {
  return (
    <div className="min-h-screen mx-auto flex justify-center items-center bg-gray-100 p-4" style={{ maxWidth: '1200px' }}>
      <div className="bg-white shadow-2xl rounded-lg max-w-2xl w-full p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
          <p className="text-gray-600 mt-2">Please enter your email address to sign in.</p>
        </div>

        <div className="space-y-4">
          <input
            id="email"
            type="email"
            placeholder="example@affinidi.com"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Log In
          </button>

          <div className="flex items-center justify-between">
            <hr className="w-full" /><span className="px-2 text-gray-400">OR</span><hr className="w-full" />
          </div>

          <button
            className="w-full flex items-center justify-center py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={clientLogin}
          >
            <Image src={LogoAffinidi} alt="logo affinidi" width={20} height={20} className="mr-2" />
            Affinidi Login
          </button>
        </div>

        <p className="text-center text-gray-600">
        {`Don't have an account yet?`}
          <span className="font-bold text-indigo-600 cursor-pointer"> SIGN UP</span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
