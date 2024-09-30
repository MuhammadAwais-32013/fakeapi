import React from 'react'

export default function PostCards(props:any) {
  const {PostData} = props 
  
    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-sm rounded shadow-lg bg-white m-4">
                    {}
                    <img
                        className="w-full"
                        src="https://via.placeholder.com/400x200"
                        alt="Post Image"
                    />
                   
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black "> {PostData.title}</div>
                        <p className="text-gray-700 text-base">
                        {PostData.body}
                        </p>
                    </div>


                </div>

            </div>

        </div>
    ) 
}