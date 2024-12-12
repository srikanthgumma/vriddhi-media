import React, { useState } from 'react'

const Insights = () => {
 
  return (
    <section id="insights" className=" bg-transparent">
      <div className="bg-transparent w-full">
        <div className="max-w-full mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8  ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="pb-1 text-3xl sm:4xl font-extrabold font-sans text-black">The Difference We've Made So Far</h2>
            <p className="mt-3 text-lg text-black font-sans">Discover the latest additions to our stunning Vriddhi Media collection!</p>
          </div>
          <dl className="mt-28 text-center sm:max-w-full sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-sm leading-6 font-sans font-medium text-black">average Impressions/per week/per brand</dt>
              <dd className="order-1 text-5xl font-extrabold text-black">50K+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-black">Avg. Increase in sales within 3 months of our content service.</dt>
              <dd className="order-1 text-5xl font-extrabold text-black">15%</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-black">Better engagement on personal accounts within 2 months</dt>
              <dd className="order-1 text-5xl font-extrabold text-black">30%</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-black">Business Impacted so far</dt>
              <dd className="order-1 text-5xl font-extrabold text-black">20+</dd>
            </div>
          </dl>
        </div>
      </div>

   
    </section>
  )
}

export default Insights