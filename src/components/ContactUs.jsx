import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="flex justify-center">
        <img src="./contact-us.jpg" alt="" />
      </div>
      <h1 className="text-center text-2xl text-primary font-semibold">
        Get In Touch
      </h1>
      <div className="flex gap-10 mt-10 border-2 border-primary p-10 border-b-0 rounded-t sm:flex-col">
        <div className="flex flex-col gap-10 w-1/2 sm:w-full">
          <div className="flex items-center gap-5">
            <i class="ri-map-pin-line text-3xl text-secondary bg-orange-200 p-2 rounded"></i>
            <div>
              <h1 className="text-primary text-xl font-semibold">Visit Us</h1>
              <h1>Ankara, Türkiye , 500013</h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
          <i class="ri-phone-line text-3xl text-green-500 bg-blue-200 p-2 rounded"></i>
          <div>
            <h1 className="text-primary text-xl font-semibold">Call us</h1>
            <h1>0507 659 25 09</h1>
          </div>
          </div>
          <div className="flex items-center gap-5">
          <i class="ri-mail-line text-3xl text-blue-500 bg-green-200 p-2 rounded"></i>
          <div>
            <h1 className="text-primary text-xl font-semibold">Mail us</h1>
            <h1>ege.kurtt97@gmail.com</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/2 sm:w-full">
        <input type="Name" className="border h-12 rounded border-gray-500 w-full p-2" placeholder="Name" />
        <input type="Name" className="border h-12 rounded border-gray-500 w-full p-2" placeholder="Email" />
        <textarea type="Name" className="border h-20 rounded border-gray-500 w-full p-2" placeholder="Query" />
        <div className="flex justify-end">
        <button className='bg-primary text-white px-8 py-3 rounded'>SUBMIT</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;
