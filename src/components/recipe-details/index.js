import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "@heroicons/react/solid"

const RecipeDetailsItem = ({ getRecipeDetails }) => {
    return (
        <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row ">
                    {/* Image Section */}
                    <div className="lg:w-1/2 overflow-hidden">
                        <img
                            src={getRecipeDetails?.image}
                            alt={getRecipeDetails?.name}
                            className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-300"
                        />
                    </div>
                    {/* Details Section */}
                    <div className="p-6 lg:w-1/2">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-4xl font-extrabold text-gray-800">{getRecipeDetails?.name}</CardTitle>
                            <div className="flex items-center space-x-2 mt-4">
                                <div className="flex items-center text-yellow-500">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <StarIcon
                                            key={index}
                                            className={`h-5 w-5 ${index < getRecipeDetails?.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600 text-lg">{getRecipeDetails?.rating} ({getRecipeDetails?.reviewCount} reviews)</span>
                            </div>
                            <div className="flex flex-wrap mt-6 space-x-2">
                                {getRecipeDetails?.tags.map((tag, index) => (
                                    <Badge key={index} className="bg-indigo-200 text-indigo-800 rounded-lg py-1 px-3">{tag}</Badge>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 mt-6">
                            <p className="text-gray-600 text-lg"><strong>Cuisine:</strong> {getRecipeDetails?.cuisine}</p>
                            <p className="text-gray-600 text-lg"><strong>Difficulty:</strong> {getRecipeDetails?.difficulty}</p>
                            <p className="text-gray-600 text-lg"><strong>Prep Time:</strong> {getRecipeDetails?.prepTimeMinutes} minutes</p>
                            <p className="text-gray-600 text-lg"><strong>Cook Time:</strong> {getRecipeDetails?.cookTimeMinutes} minutes</p>
                            <p className="text-gray-600 text-lg"><strong>Servings:</strong> {getRecipeDetails?.servings}</p>
                            <p className="text-gray-600 text-lg"><strong>Calories per Serving:</strong> {getRecipeDetails?.caloriesPerServing} kcal</p>
                            <p className="text-gray-600 text-lg"><strong>Meal Type:</strong> {getRecipeDetails?.mealType.join(', ')}</p>
                        </CardContent>
                    </div>
                </div>
                {/* Ingredients Section */}
                <CardContent className="p-6 bg-indigo-50">
                    <CardTitle className="text-2xl font-semibold text-indigo-800 mb-4">Ingredients</CardTitle>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {getRecipeDetails?.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-lg">{ingredient}</li>
                        ))}
                    </ul>
                </CardContent>
                {/* Instructions Section */}
                <CardContent className="p-6">
                    <CardTitle className="text-2xl font-semibold text-indigo-800 mb-4">Instructions</CardTitle>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        {getRecipeDetails?.instructions.map((instruction, index) => (
                            <li key={index} className="text-lg">{instruction}</li>
                        ))}
                    </ol>
                </CardContent>
            </div>
        </div>
    )
}

export default RecipeDetailsItem
