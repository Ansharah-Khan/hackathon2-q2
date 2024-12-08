
export default function Home() {
  return (
    <div>
      <div className="bg-[url('/home-hero.jpg')] bg-cover bg-center w-full h-[1007px] object-contain relative">
        {/* Background image */}
      </div>

      <div className="bg-[#FFF3E3] w-full sm:w-[643px] h-auto sm:h-[443px] absolute top-[253px] left-[50%] transform -translate-x-1/2 sm:left-[50%] lg:left-[60%] lg:translate-x-[20px] p-6 sm:p-9 xl:left-[50%]">
        <div>
          <div className="text-center sm:text-left">New Arrival</div>
          <div>
            <h1 className="font-bold text-3xl sm:text-[52px] leading-[40px] sm:leading-[65px] text-[#B88E2F]">
              Discover Our New Collection
            </h1>
          </div>
          <div className="font-medium text-base sm:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </div>
          <button className="bg-[#B88E2F] py-4 sm:py-[25px] px-8 sm:px-[72px] font-bold text-sm sm:text-[16px] leading-[24px] text-white mt-6 sm:mt-10 w-full sm:w-auto">
            BUY NOW
          </button>
        </div>
      </div>
      {/* Hero Section End */}

      <div className="py-4">
        <div className="font-bold text-[32px] leading-[48px] text-center ">Browse The Range</div>
        <div className="font-normal text-[20px] leading-[30px] text-[#666666]  text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>

      {/* Section-2 */}

    <div className="flex py-4 px-8 mx-auto">
      <div className="mx-3 ">
        <img src="/image1-sec-2.png" alt="furniture"  className="rounded-lg" width={782} height={521}/>
        <h2 className="text-center font-semibold text-[24px] leading-9 py-9">Dining</h2>
        </div>
      <div className="">
        <img src="/image2-sec2.png" alt="furniture" className="rounded-lg" width={762} height={508} />
        <h2 className="text-center font-semibold text-[24px] leading-9 py-9">Living</h2>
        </div>
      <div className="mx-3">
        <img src="/image3-sec2.png" alt="furniture" className="rounded-lg" width={720} height={480} />
        <h2 className="text-center font-semibold text-[24px] leading-9 py-9">Bedroom</h2>
        </div>
       </div>
       {/* section-2 end */}
        <div className="font-bold text-[40px] leading-[48px] text-center pb-4">Our Products</div>
       
       {/* Section 3 */}

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-8 mx-auto">
        <div className="mx-3 my-4" >
          <img src="/im1-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50 " />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
        

        <div className="mx-3 my-4" >
          <img src="/im1-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50" />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
        <div className="mx-3 my-4" >
          <img src="/im3-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50" />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
        <div className="mx-3 my-4" >
          <img src="/im1-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50" />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
        <div className="mx-3 my-4" >
          <img src="/im5-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50" />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
        <div className="mx-3 my-4" >
          <img src="/im6-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50" />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
        <div className="mx-3 my-4" >
          <img src="/im3-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50" />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
        <div className="mx-3 my-4" >
          <img src="/im6-sec3.png" alt="furniture" className="w-full h-[400px] object-cover rounded-lg hover:opacity-50" />
          <div className="py-3 bg-[#F4F5F7] px-3">
          <h2 className="font-semibold text-2xl">Lolito</h2>
          <p className="font-medium text-base text-[#898989]">Luxury Big Sofa</p>
          <p className="font-semibold text-xl text-[#3A3A3A]">Rp 2,500.000</p>
          </div>
        </div>
       </div>
      {/* Section3 End */}
      
      <div><button>Show More</button></div>
     </div>
    
     
    

  
  );
}
