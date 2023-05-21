import React, {useState} from 'react'

function RecruitmentAreas() {
    const [indexHovered, setIndexHovered] = useState(null)
    const data = [
        {
          title: "Remote",
          description:
            "Remote work means working from anywhere other than the office, which can be your home, cafe, or just a coworking space.",
          image: "./remote.png",
        },
        {
          title: "Contact Based",
          description:
            "Contractual Jobs are where you have to work for a specific duration of time, like 1 month, 3 months, 6 months, or even a year, depending upon the hiring company's requirement.",
          image: "./contract.png",
        },
        {
          title: "Permanent",
          description:
            "Permanent employment is an employment relationship where an individual works for an employer and receives payment directly from them.",
          image: "./permenent.png",
        },
      ];
  return (
    <div className='my-20'>
        <h1 className='text-center text-3xl text-primary font-semibold'>Recruitment Areas</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-10 mt-20 items-start">
            {data.map((item, index) => {
                return (
                <div className='border-2 border-primary rounded flex flex-col gap-5 justify-center'
                onMouseEnter={() => setIndexHovered(index)}
                onMouseLeave={() => setIndexHovered(null)}
                >
                    <h1 className='text-2xl font-semibold text-left bg-primary text-white px-5 py-2 rounded max-w-max -ml-10 mt-5'>{item.title}</h1>
                    <div className="flex justify-center">
                    <img src={item.image} alt="" className='h-20 w-20' />
                    </div>
                    <p className={`h-0 overflow-hidden transition-all duration-500 ${index === indexHovered && 'h-40 p-5 m-5 bg-primary text-white rounded'}`}>{item.description}</p>
                </div>
            )})}
        </div>
    </div>
  )
}

export default RecruitmentAreas