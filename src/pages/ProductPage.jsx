import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ProductPage = () => {
  // caseData.js
  const caseData = [
    {
      id: 1,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/2img.png",
    },
    {
      id: 2,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/1img.png",
    },
    {
      id: 3,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/2img.png",
    },
    {
      id: 4,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/1img.png",
    },
    {
      id: 5,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/2img.png",
    },
    {
      id: 6,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/1img.png",
    },
    {
      id: 6,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/2img.png",
    },
    {
      id: 6,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/1img.png",
    },
    {
      id: 6,
      name: "Mayur Mayuri",
      price: "299",
      image: "4productpage/2img.png",
    },
  ];
  const reviews = [
    { id: 1, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
    { id: 2, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
    { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
    { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
    { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
    { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },

  ];

  return (
    <div className=''>

      <section className='flex flex-col w-full justify-center items-center pt-10 pb-5'>
        <div className='h-40 w-40'>
          <img loading='lazy' src="4productpage/product-logo.png" alt="" />
        </div>
        <h1 className='text-white text-6xl'>Premium Phone Case</h1>
        <p className='text-white text-3xl'>We Make The Best Cases For You!</p>
      </section>

      <section className="bg-[#f9f9f9] p-6 rounded-xl w-[70%] mx-auto font-sans text-gray-800">
        <div className="flex flex-col lg:flex-row gap-2 ">
          {/* Phone Case Image */}
          <div className="flex justify-center items-center w-2/3">
            <div className='h-full bg-[#ebebeb] flex items-center justify-center rounded-l-2xl'>
              <div className=' p-5 rounded-l-2xl h-fit'>
                <img loading='lazy'
                  src="4productpage/2img.png" // replace with actual path
                  alt="Mayur Mayuri Case"
                  className="w-[260px] h-auto rounded-xl"
                />
              </div>
            </div>
            {/* 3 image  */}

            <div className='flex flex-col gap-2 bg-[#cccccc] rounded-r-2xl py-5 px-2 h-full justify-between'>
              <div className='flex flex-col justify-center items-center gap-2'>
                <div className='h-40 w-fit bg-white rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                  <img loading='lazy' className='h-28 w-fit' src="4productpage/1img.png" alt="" />
                  <div className='h-3 w-3 rounded-full bg-black'></div>
                </div>
                <div>
                  <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                  <p className='text-xs text-center'>View the prouct in 3d</p>
                  <p className='text-xs text-center'>To get the best expereince</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-2'>
                <div className='h-40 w-fit bg-white rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                  <img loading='lazy' className='h-28 w-fit' src="4productpage/2img.png" alt="" />
                  <div className='h-3 w-3 rounded-full bg-black'></div>
                </div>
                <div>
                  <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                  <p className='text-xs text-center'>View the prouct in 3d</p>
                  <p className='text-xs text-center'>To get the best expereince</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-2'>
                <div className='h-40 w-fit bg-white rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                  <img loading='lazy' className='h-28 w-fit' src="4productpage/1img.png" alt="" />
                  <div className='h-3 w-3 rounded-full bg-black'></div>
                </div>
                <div>
                  <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                  <p className='text-xs text-center'>View the prouct in 3d</p>
                  <p className='text-xs text-center'>To get the best expereince</p>
                </div>
              </div>
            </div>
          </div>



          {/* Product Info */}
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-5xl font-semibold">Mayur Mayuri</h2>

            {/* <div className="">
              <span ></span>
              <span ></span>
              <span className="px-2 py-1 bg-black/30 rounded-full text-xs text-white"></span>
            </div> */}
            <ul className=' list-disc marker:text-black text-lg list-outside flex flex-col w-fit gap-2 '>
              <li className="px-2 py-1 bg-black rounded-full text-xs text-white">Premium Metal Case</li>
              <li className="px-2 py-1 bg-black/30 rounded-full text-xs text-white">Premium Soft Case</li>
              <li className="px-2 py-1 bg-black/30 rounded-full text-xs text-white">Premium Hard Case</li>
            </ul>

            <div className="flex items-center text-yellow-500 text-sm">
              ★★★★★ <span className="text-black ml-2 underline font-bold">1,000+ reviews</span>
            </div>

            {/* Benefits */}
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Tempered glass back with a glossy finish</li>
              <li>Rubber edges for soft landing and a good grip</li>
              <li>Edge-to-edge standard buttons and ports</li>
              <li>Sleek style</li>
              <li>Case friendly charging</li>
            </ul>

            {/* Price */}
            <div className="flex items-center gap-4  border-3 border-black rounded-lg w-fit h-fit px-1 py-0 ">
              <div className='flex flex-col'>
                <p>Include All Taxes</p>
                <span className="text-sm font-semibold text-black">Rs. <span className='text-3xl'>299/-</span> Only</span>
              </div>
              <div className='bg-black px-4 py-1  rounded hover:bg-gray-800 flex flex-col justify-center items-center'>
                <RiShoppingBag3Fill className='text-xl' color='white' />
                <button className=" text-white ">
                  Add to Bag
                </button>
              </div>
            </div>
            <div className='flex items-center bg-black w-fit px-4 py-2 rounded-lg gap-2'>
              <FaTruck className='text-xl text-white' />
              <p className="text-sm text-gray-100">
                Buy Any 3 Cases And Get Free Shipping
              </p>
            </div>

            <div className="mt-4">
              <h3 className='font-semibold'>Product Description</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>

            <div className='shadow-2xl rounded-2xl'>
              <p className='bg-black text-white px-4 py-2 rounded-t-2xl'>Actual Product will be delivered as per your phone model</p>
              <div className='flex items-end justify-around bg-white rounded-b-2xl px-4 py-2'>
                <div>
                  <p>The phone model you choose</p>
                  <p>iphone 16 pro max</p>
                </div>
                <div className='space-x-4'>
                  <button className='bg-black rounded-full  py-1 text-white w-24 text-md'>yes !</button>
                  <button className='bg-black rounded-full  py-1 text-white w-24 text-md'>Change !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // slider  */}

      <section className="bg-black text-white py-10 px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-2">
          You May Also Like
        </h2>
        <p className="text-center text-sm text-gray-400 mb-8">
          We Make the best Cases for You! greg y5ey757 yrtye
        </p>

        <div className="flex items-center justify-center gap-2 mb-6 w-[73%] mx-auto">
          <button className="text-2xl text-white hover:text-gray-300">&#10094;</button>
          <div className="flex overflow-x-auto gap-6 scrollbar-hide px-4">
            {caseData.map((item) => (
              <div
                key={item.id}
                className="min-w-[150px] max-w-[150px] flex-shrink-0 text-center"
              >
                <img loading='lazy'
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-sm font-semibold">{item.name}</h3>
                <div className="flex justify-center text-yellow-400 text-sm">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-white mt-1 text-sm">
                  Price: <span className="font-bold">₹{item.price}/-</span>
                </p>
              </div>
            ))}
          </div>
          <button className="text-2xl text-white hover:text-gray-300">&#10095;</button>
        </div>
      </section>


      <section className="bg-[#fcfcfc] rounded-2xl pt-3 p-5 max-w-6xl mx-auto  shadow-lg">
        {/* Top Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center bg-[#282828] h-48 items-center rounded-2xl">
          <div className="flex flex-col items-center text-sm">
            < FaSackDollar className='text-6xl text-white' />
            <p className="mt-1 text-white">100%</p>
            <p className='text-white font-semibold'>Secure payment</p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <img loading='lazy' className='h-15 w-12' src="4productpage/return.png" alt="" />
            <p className="mt-1 text-white">Easy Returns</p>
            <p className='text-white font-semibold'>& Instant Refunds</p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <img loading='lazy' className='h-15 w-11' src="4productpage/bage.png" alt="" />
            <p className="mt-1 text-white">100%</p>
            <p className='text-white font-semibold'>Genuine Product</p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <img loading='lazy' className='h-15 w-11' src="4productpage/drop.png" alt="" />
            <p className="mt-1 text-white">100%</p>
            <p className='text-white font-semibold'>Time Drop Tested</p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <img loading='lazy' className='h-15 w-11' src="4productpage/delivery.png" alt="" />
            <p className="mt-1 text-white">Shipping in</p>
            <p className='text-white font-semibold'>Just 10 Days</p>
          </div>
        </div>
        <div className='flex gap-20 px-5'>
          {/* Rating Bar */}
          <div className="mt-6 w-1/3">
            <h3 className="text-lg font-semibold mb-4">Reviews & Ratings</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(stars)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
                    <div className={`bg-black h-2`} style={{ width: `${(5 - i) * 20}%` }}></div>
                  </div>
                  <span className="text-sm text-gray-600">{[18, 3, 3, 0, 0][i]}</span>
                </div>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">Write a review</button>
              <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">Watch all Video review</button>
              <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">Ask a Question</button>
            </div>
          </div>

          {/* Reviews */}
          <div className='flex flex-col justify-center items-center'>
            <IoIosArrowDown className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl' />
            <div className="space-y-6 flex-[1] max-h-80 overflow-auto scrollbar-hide">
              {reviews.map((review) => (
                <div key={review.id} className="flex items-start gap-4 border-b-2 p-5">
                  <div className="h-10 w-10 rounded-full bg-black" />
                  <div className="flex-1">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-700">
                      {review.text}... <span className="text-blue-600">See More</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {review.images.map((img, i) => (
                      <div key={i} className="h-10 w-10 rounded-md bg-black " />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <IoIosArrowUp className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl' />
          </div>
        </div>
      </section>


      <section className="bg-black text-white py-10 px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-2">
          Recently Viewed Product
        </h2>
        <p className="text-center text-sm text-gray-400 mb-8">
          We Make the best Cases for You! greg y5ey757 yrtye
        </p>

        <div className="flex items-center justify-center gap-2 mb-6 w-[73%] mx-auto">
          <button className="text-2xl text-white hover:text-gray-300">&#10094;</button>
          <div className="flex overflow-x-auto gap-6 scrollbar-hide px-4">
            {caseData.map((item) => (
              <div
                key={item.id}
                className="min-w-[150px] max-w-[150px] flex-shrink-0 text-center"
              >
                <img loading='lazy'
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-sm font-semibold">{item.name}</h3>
                <div className="flex justify-center text-yellow-400 text-sm">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-white mt-1 text-sm">
                  Price: <span className="font-bold">₹{item.price}/-</span>
                </p>
              </div>
            ))}
          </div>
          <button className="text-2xl text-white hover:text-gray-300">&#10095;</button>
        </div>
      </section>
    </div>




  )
}

export default ProductPage
