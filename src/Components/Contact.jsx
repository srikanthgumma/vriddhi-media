import React from 'react'

export default function Contact() {
    return (
        <div>
            <section class="body-font relative bg-gray-900 text-gray-400" id='contact'>

                <div class="container mx-auto px-5 py-24">

                    <div class="mb-12 flex w-full flex-col text-center">
                        <h1 class="title-font mb-4 text-2xl font-medium text-white sm:text-3xl font-sans">Contact Us</h1>
                        <p class="mx-auto text-base leading-relaxed lg:w-2/3 font-sans">Feel free to reach out to us! Whether you have a question,
                            feedback, or a collaboration proposal, we'd love to hear from you.
                        </p>
                    </div>

                    <div class="mx-auto md:w-2/3 lg:w-1/2">
                        <div class="-m-2 flex flex-wrap">
                            <div class="w-1/2 p-2">
                                <div class="relative">
                                    <input type="text" id="name" name="name" class="peer w-full font-sans rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-400 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-pink-500  " placeholder="Name" required />
                                    <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-100 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm  font-sans" >Name</label>
                                </div>
                            </div>
                            <div class="w-1/2 p-2">
                                <div class="relative">
                                    <input type="email" id="email" name="email" class="peer text-gray-400 w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8  placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-pink-500  font-sans" placeholder="Email" required />
                                    <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-100 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm  font-sans">Email</label>
                                </div>
                            </div>
                            <div class="mt-4 w-full p-2">
                                <div class="relative">
                                    <textarea id="message" name="message" class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-400 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-pink-500 f font-sans" placeholder="Message"></textarea>
                                    <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-100 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm  font-sans">Message</label>
                                </div>
                            </div>
                            <div class="w-full p-2">
                                <button class="mx-auto flex rounded border-0 bg-pink-500 py-2 px-8 text-lg text-white hover:bg-pink-600 focus:outline-none font-sans">Send Message</button>
                            </div>

                          

                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}
