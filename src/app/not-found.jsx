import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-8 flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">We&apos;re Sorry.</h1>
        <p className="text-lg text-gray-600">The page you are looking for cannot be found.</p>
        <Link href="/" className="inline-block px-6 py-3 mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md transition duration-200">Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

