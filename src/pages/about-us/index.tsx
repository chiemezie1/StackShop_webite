import Image from "next/image";
import image2 from "public/images/hero2.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 mx-auto flex justify-center items-center p-5" style={{ maxWidth: '1200px' }}>
      <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-gray-800 p-4 text-center mb-4">Welcome to StackShop!</h2>
        <div className="p-8  bg-gray-100 rounded-lg m-8">
          <p className="text-gray-600">
            At StackShop, we are passionate about delivering high-quality products that cater to your needs.
            Our journey began with a vision to create a seamless shopping experience, offering a diverse range
            of products to customers around the world.
          </p>
        </div>
        <div className="md:flex jutitfy-center">
          <div className="md:w-1/2">
            <Image
              src={image2.src}
              alt="About Us"
              width={777}
              height={487}
              objectFit="cover"
              className="rounded-lg p-8 mx-4"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="p-4 bg-yellow-200 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to provide you with the best shopping experience possible. We strive to offer a
                carefully curated selection of products, ensuring that each item meets our standards of quality and
                style.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between p-8">
          <div className="md:w-1/2 md:mr-2">
            <div className="p-4 bg-green-200 rounded-lg md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800">What Sets Us Apart</h3>
              <p className="text-gray-600">
                StackShop stands out through its commitment to customer satisfaction, attention to detail, and
                dedication to providing a variety of products suitable for every taste and preference. We are here for you.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-2">
            <div className="p-4 bg-blue-200 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Join Us on the Journey</h3>
              <p className="text-gray-600">
                We invite you to explore our online store and discover the latest trends, exclusive deals, and
                unique finds. Your satisfaction is our priority, and we are here to make your shopping experience
                enjoyable and hassle-free.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-8">
          <div className="p-4 bg-purple-200 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
            <p className="text-gray-600">
              Have questions or suggestions?
              <br />
              Feel free to reach out to our friendly customer support team. We
              value your feedback and are here to assist you.
            </p>
            <p className="text-gray-600">Phone: 1-800-123-4567</p>
            <p className="text-gray-600">Email: chiemezieagbo1@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
