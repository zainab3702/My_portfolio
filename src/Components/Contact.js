import React from 'react'

function Contact() {
    return (
        <div>
            <h1 className='text-6xl p-10 m-20 text-white font-bold '>Contact</h1>
            <div className=' mx-80 p-10 border-2 rounded-lg border-yellow-400'>

                <form className="max-w-sm m-auto">
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-md font-medium text-yellow-400">Name</label>
                        <input type="name" id="name" className=" bg-transparent border border-yellow-400 text-white text-md rounded-lg block w-full p-2.5 dark:placeholder-gray-400 " placeholder="John Doe" required />
                    </div>
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-md font-medium text-yellow-400">Email</label>
                        <input type="email" id="email" className="bg-transparent border border-yellow-400 text-white text-md rounded-lg block w-full p-2.5 dark:placeholder-gray-400 " placeholder="johndoe123@gmail.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="message" className="block mb-2 text-md font-medium text-yellow-400">Message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-transparent border border-yellow-400 rounded-lg dark:placeholder-gray-400 dark:text-white" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="flex text-white bg-transparent border border-yellow-400 hover:bg-yellow-400  hover:text-white font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center justify-center">Send</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
