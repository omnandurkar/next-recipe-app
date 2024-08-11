import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const RecipieList = ({ recipieList }) => {
    return (
        <div className="p-16 space-y-8 bg-gradient-to-r  from-green-50 to-green-200 min-h-screen">
            <h1 className="text-5xl font-light text-center text-gray-800 leading-tight drop-shadow-lg">Recipes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    recipieList && recipieList.length > 0 &&
                    recipieList?.map((recipie, index) => (

                        <Link href={`/recipie-list/${recipie.id}`} >

                            <Card Card key={index} className=" shadow-xl bg-white/90 rounded-lg">
                                <CardHeader className="p-6 bg-gradient-to-r from-indigo-100 to-green-100 rounded-t-lg">
                                    <div className='overflow-hidden rounded-lg '>
                                        <img src={recipie?.image} alt={recipie?.name} className="duration-300 transition-transform transform hover:scale-105" />
                                    </div>
                                    <CardTitle className="text-gray-800 text-xl">{recipie?.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <CardDescription className="text-gray-700 text-sm">{recipie?.ingredients}</CardDescription>
                                </CardContent>
                                <CardFooter className="p-6 bg-gray-100 rounded-b-lg">
                                    <p className="text-gray-600 font-semibold">Cuisine: {recipie?.cuisine}</p>
                                </CardFooter>
                            </Card>

                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export default RecipieList
