import React, { useState } from 'react'

function Specializations() {
    const [indexHovered, setIndexHovered] = useState(null)
    const data = [
        {
          title: "It / Software",
          description:
            "We have a team of dedicated IT professionals who are experts in IT and software development.",
          image: "./it.png",
        },
        {
          title: "Medical",
          description:
            "Medical is the care of the body, especially the internal organs.",
          image: "./medical.png",
        },
        {
          title: "Manufacturing",
          description:
            "Manufacturing is the process of producing a product from raw material",
          image: "./manufacture.png",
        },
        {
          title: "Ecommerce",
          description:
            "Ecommerce is the buying and selling of goods and services through a web site.",
          image: "./ecommerce.png",
        },
      ];
  return (
    <div className='my-20'>
        <h1 className='text-center text-3xl text-primary font-semibold'>Specialization</h1>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 items-start">
            {data.map((item, index) => {
                return (
                <div className='border-2 border-secondary rounded flex flex-col gap-5 items-center justify-center'
                onMouseEnter={() => setIndexHovered(index)}
                onMouseLeave={() => setIndexHovered(null)}
                >
                    <div className='bg-white -mt-10 p-10 border-2 border-primary rounded-full'>
                    <img src={item.image} alt="" className='h-20 w-20' />
                    </div>
                    <h1 className='text-2xl font-semibold text-primary'>{item.title}</h1>
                    <p className={`h-0 overflow-hidden transition-all duration-500 ${index === indexHovered && 'h-32 p-5'}`}>{item.description}</p>
                </div>
            )})}
        </div>
    </div>
  )
}

export default Specializations