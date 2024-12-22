import React from 'react'

function Card({username, btnText = "visit me"}) {
    console.log(username)
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://images.pexels.com/photos/28387802/pexels-photo-28387802/free-photo-of-a-large-pile-of-green-apples.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card Image" />
            <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{username}</h2>
                <p className="text-gray-600 mb-4">
                This is a simple card {username} component built with Tailwind CSS. Customize it to fit your needs.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                {btnText}
                </button>
            </div>
        </div>
    )
}

export default Card
