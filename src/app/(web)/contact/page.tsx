

import Head from '../../../components/Head/Head';
import Image from 'next/image';

function contact() {
  return (
    
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title=""/>
        <div className="xl:py-20 py-10 px-4">
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to our <span className="font-black text-tertiary-dark">DineEase</span>
              </h3>
              <div className='mt-3 text-sm leading-8 text-text'>
              <h2>
              Traditionally, a hotel property management system was defined as a system that enabled a hotel or group of hotels to manage front-office capabilities, such as booking reservations, guest check-in/checkout, room assignment, managing room rates, and billing.
              </h2>

              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                  <div className="p-8 bg-dry rounded-lg">
                      <span className="text-3xl block font-extrabold">
                          10K
                      </span>
                      <h4 className='text-lg font-semibold my-2'>Listed Rooms</h4>
                      <p className="mb-0 text-text leading-7 text-sm">
                        Lorem ipsom is simply dummy text of the printing.
                      </p>
                  </div>
                  <div className="p-8 bg-dry rounded-lg">
                      <span className="text-3xl block font-extrabold">
                          8K
                      </span>
                      <h4 className='text-lg font-semibold my-2'>Lovely Users</h4>
                      <p className="mb-0 text-text leading-7 text-sm">
                        Completely free, without registration! Lorem is simply
                      </p>
                  </div>
              </div>

            </div>
            <div className="mt-10 lg:mt-0">
              <Image src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1700160332/Hotel%20Rooms/%D0%9F%D0%B8%D0%BB%D0%BE%D1%82%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B8__%D0%A1%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82__hotel_artmoscow_%D0%B0%D1%80%D1%82_%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_render_standar...t%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80_%D0%BE%D1%81%D0%BD%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82%D0%B0%D1%86%D0%B8%D1%8F%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%BE%D0%B2_artmebelhotel_%D0%B0%D1%80%D1%82%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D0%BE%D1%82%D0%B5%D0%BB%D1%8C_ukvsqn.jpg" alt="aboutus" className='w-full xl:block hidden h-header rounded-lg object-cover'/>
            </div>

            
          </div>

        </div>

      </div>

   
  )
}

export default contact