import RecipieList from '@/components/recipie-list'
import React from 'react'


const fetchListOfRecipies = async () => {

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
        const data = await response.json();

        // console.log(data?.recipes);
        return data?.recipes;

    } catch (e) {
        // console.log(e);
        throw new Error(e);
    }

}

const Recipies = async() => {

    const recipieList = await fetchListOfRecipies();
   

    return (
        <>
            <RecipieList recipieList={recipieList} />
        </>
    )
}

export default Recipies