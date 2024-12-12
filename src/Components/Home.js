import React, { useState } from 'react'
import { motion } from 'framer-motion';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <section id='home' className=' w-screen  flex flex-row  justify-between object-cover bg-cover bg-fixed bg-left max-sm:bg-center max-lg:bg-center'>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          repeatDelay: 10,
          repeat: Infinity
        }}
        className=' min-h-screen max-container font-semibold  flex  justify-center items-center gap-1 flex-col padding-x overflow-x-hidden'>
        <div className=' my-10 font-sans italic   text-7xl max-lg:text-5xl text-white max-w-full w-full'>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32  ">
            <p className="mx-auto  -mt-4 max-w-2xl text-lg font-medium text-black sm:mt-6 sm:text-3xl  ">Welcome to
              <span className="border-b border-dotted border-slate-300 ml-2">Vriddhi Media</span>
            </p>
            <h1 className="mx-auto max-w-5xl text-2xl  tracking-tight text-black sm:text-8xl">
              <span className="inline-block">Your
                <span className="relative whitespace-nowrap text-blue-600">
                  <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute mt-1 top-2/3 left-0 h-[0.58em] w-full fill-black/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                  <span className="relative mx-2 sm:mx-5 text-black">Content</span></span>
              </span>
              <span className="inline-block">Solutions Store</span>
            </h1>
            <p className="mx-auto  max-w-4xl text-xl   text-black font-sans font-normal  mt-3 sm:mt-10">
              <span className="inline-block">Do What's Best For Your Brand.</span>
            </p>
            <div className="mt-1 flex flex-col justify-center gap-y-5 sm:mt-2 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <button onClick={openModal} className="mt-10  bg-gray-600  inline-flex transition duration-300 hover:bg-gray-800 hover:text-white hover:-translate-y-1 group text-center  items-center justify-center rounded-full py-3 px-16 font-sans font-medium text-sm  text-white animate-fade-in-right" id="headlessui-menu-button-:r4:" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" type="button">
                Book a session
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center  ">

        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 overflow-y-auto"
            onClick={closeModal} >
            <div className="relative w-[100%] sm:w-[70%] mt-60 sm:p-0  mx-[5%] p-6 bg-pink rounded-3xl bg-gray-800 shadow-lg"
              onClick={(e) => e.stopPropagation()} >
              <div className="mt-6 text-right">
                <button
                  onClick={closeModal}
                  className='text-xl  text-white  font-sans mr-6'
                >
                  close
                </button>
              </div>
              <div class="flex items-center justify-center p-1 sm:p-10 ">
                <div class="mx-auto w-full max-w-full bg-pink">
                  <form>
                    <div class="mb-5">
                      <label for="name" class="mb-3 block text-base font-sans font-medium text-white">
                        Full Name
                      </label>
                      <input type="text" name="name" id="name" placeholder="Full Name"
                        class="w-full rounded-md shadow-sm font-sans   bg-transparent py-3 px-6 text-base font-medium text-[#6B7280] focus:border outline-none focus:border-[#ff4eed] focus:shadow-md" />
                    </div>
                    <div class="mb-5">
                      <label for="phone" class="mb-3 block font-sans text-base font-medium text-white">
                        Phone Number
                      </label>
                      <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                        class="w-full rounded-md   bg-transparent py-3 px-6 text-base font-sans font-medium text-[#6B7280] outline-none focus:border focus:border-[#ff4eed] focus:shadow-md" />
                    </div>
                    <div class="mb-5">
                      <label for="email" class="mb-3 block  font-sans text-base font-medium text-white">
                        Email Address
                      </label>
                      <input type="email" name="email" id="email" placeholder="Enter your email"
                        class="w-full rounded-md  bg-transparent font-sans py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border focus:border-[#ff4eed] focus:shadow-md" />
                    </div>
                    <div class="-mx-3 flex flex-wrap">
                      <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                          <label for="date" class="mb-3 block text-base font-sans font-medium  text-white">
                            Date
                          </label>
                          <input type="date" name="date" id="date"
                            class="w-full font-sans rounded-md shadow-2xl bg-pink-400 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                          <label for="time" class="mb-3 block text-base font-medium font-sans text-white">
                            Time
                          </label>
                          <input type="time" name="time" id="time"
                            class="w-full font-sans rounded-md  bg-pink-400 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                      </div>
                    </div>


                    <div>
                      <button
                        class="hover:shadow-form w-full font-sans rounded-md bg-[#fb2bdf] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Book Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home