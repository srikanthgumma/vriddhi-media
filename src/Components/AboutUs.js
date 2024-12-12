import React from 'react'
import { services } from '../Data/Data'

const AboutUs = () => {
  return (
    <section id='about' className=' w-full  bg-transparent max-lg:bg-center max-sm:bg-center'>
      <div className=" p-4 mb-40">
        <div className="max-w-full  px-0 ">
          <div className=" text-center">
            <h2 className="my-2 text-3xl font-bold font-sans text-black sm:text-6xl">How we work?</h2>
            <p className="text-gray-800 font-sans text-lg">We follow our process to get you started as quickly as possible</p>
          </div>
          <div
            className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:bg-gray-700 ">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path d="M10 10l2 -2v8"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition font-sans">Shifting The Narratives</h5>
                  <p className="text-gray-300 font-sans">We help you in shifting all your negative PR into positive ones using our strategic UGC push.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 hover:bg-gray-700">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary font-sans">Building An Online Presence</h5>
                  <p className="text-gray-300 font-sans">We give your brand a much-needed push in all the relevant communities and forums to make sure that you don't go unnoticed.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 hover:bg-gray-700">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path
                    d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1">
                  </path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary font-sans">Building A Personal Brand</h5>
                  <p className="text-gray-300 font-sans">
                  People relate with founders much better than they relate with Brands. We help you become more relatable and connect with your audience on a deeper lever.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 hover:bg-gray-700">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
                  <path d="M14 8v8"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary font-sans">Building Your Content Funnel
                  </h5> 
                  <p className="text-gray-300 font-sans">
                  Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution, encompassing research, writing, SEO-optimized blogs, and captivating videos, helps you build an impeccable content machine that gets results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


export default AboutUs