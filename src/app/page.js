import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-green-200">
      <div className="max-w-4xl text-center space-y-8 p-10">
        {/* Hero Section */}
        <h1 className="text-5xl font-light text-gray-800 leading-tight">
          Welcome to <span className="text-green-600 font-medium">Om's Recipes</span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover and explore a world of delicious recipes. Whether you're a
          beginner or a pro, find the perfect recipe to satisfy your cravings.
        </p>

        {/* Image Section */}
        <div className="relative w-full h-64 lg:h-96 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141351.jpg?t=st=1723382433~exp=1723386033~hmac=b4486f10165e6372d5bafc93d0f36d3c289c515ee27e9661c0e855553b95a14b&w=1380" // Replace with your image path
            alt="Delicious Recipes"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <Link href="/recipie-list">
            <Button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 text-lg rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              Explore Recipes
            </Button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2972/2972554.png" // Replace with your image path
              alt="Fast & Easy"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Fast & Easy</h3>
            <p className="text-gray-600 text-center">
              Quick and easy recipes for busy days.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9273/9273225.png" // Replace with your image path // Replace with your image path
              alt="Healthy Choices"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Healthy Choices</h3>
            <p className="text-gray-600 text-center">
              Nutritious recipes to keep you feeling great.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2839/2839016.png" // Replace with your image path
              alt="Indulgent Treats"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Indulgent Treats</h3>
            <p className="text-gray-600 text-center">
              Treat yourself with our decadent recipes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
