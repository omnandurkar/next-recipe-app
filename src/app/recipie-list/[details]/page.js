import RecipeDetailsItem from '@/components/recipe-details';
import React from 'react'

const fetchRecipeDetails = async (currentRecipeId) => {

    try {

        const response = await fetch(`process.env.NEXT_PUBLIC_API_URL/${currentRecipeId}`);
        const data = await response.json();

        // return data?.recipes;
        return data;

    } catch (e) {
        throw new Error(e);
    }

}

const RecipieDetails = async ({ params }) => {

    const getRecipeDetails = await fetchRecipeDetails(params?.details);

    return (
        // <div>Recipieetails</div>

        <div className='p-8 bg-gradient-to-br from-blue-50 to-indigo-100'>
            <h1 className='text-center text-5xl my-10 font-thin '> Recipe Details </h1>

            <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />

        </div>
    )
}

export default RecipieDetails