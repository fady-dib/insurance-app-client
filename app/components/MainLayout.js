import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

const MainLayout = ({children,title,sub_title, step}) => {
  return (
    <>
          {/* <div className='flex flex-col xl:flex-row min-h-screen  bg-light-gray'>
              <div className='flex flex-col justify-between pl-7 py-10 pr-4 xl:w-1/3 overflow-hidden'>
                  <div>
                      <p>LOGO</p>
                      <p className='pt-40 text-sm'>{step}</p>
                      <p className='pt-12 text-3xl xl:text-3xl'>{title}</p>
                      <p className='pt-1 text-sm'>{sub_title}</p>
                  </div>
                  <div className='flex flex-col'>
                      <button className="bg-custom-black py-2 rounded-full w-68 text-light-gray">Responsabilité Civile Pro +</button>
                      <button className='text-gray-500 flex items-center pt-2 text-sm'>
                          <img src={'/images/Icon.svg'} alt="Plus icon" className='h-8.5 w-8.5 mr-4' />
                          Ajouter une autre assurance
                      </button>
                      <div className="mt-20">
                          <p href="#" className=''>Vous avez déjà un compte? <button className='underline'>Connectez-vous</button></p>
                      </div>
                  </div>
              </div>
              <div className='flex flex-col  p-8 xl:w-2/3 rounded-[24px] shadow-custom  bg-white'>
                  <div className='flex justify-between items-center mb-6'>
                      <Breadcrumbs></Breadcrumbs>
                      <div className='flex items-center rounded-full border py-2 px-4 bg-[#F9FAFB] hover:bg-emerald-100 hover:border-emerald-500 transition-colors duration-300 cursor-pointer'>
                          <img src="/images/phone.svg" alt="Phone Icon" className='h-5 w-5 mr-2' />
                          <div className='flex flex-col items-center'>
                              <p className='font-semibold text-sm leading-none	'>09 72 39 78 88</p>
                              <p className='text-xxs text-gray-500'>APPEL NON SURTAXÉ</p>
                          </div>
                      </div>
                  </div>
                  <main>{children}</main>
              </div>
              <Footer></Footer>
          </div> */}
          <div className='flex flex-col xl:flex-row min-h-screen bg-light-gray'>
              <div className='flex flex-col justify-between pl-10 py-10 pr-4 xl:w-1/3'>
                  <div>
                      <p>LOGO</p>
                      <p className='pt-40 text-base'>{step}</p>
                      <p className='pt-12 text-[40px] '>{title}</p>
                      <p className='pt-1 text-base'>{sub_title}</p>
                  </div>
                  <div className='flex flex-col'>
                      <button className="bg-custom-black py-2 rounded-full w-68 text-light-gray">Responsabilité Civile Pro +</button>
                      <button className='text-gray-500 flex items-center pt-2 text-sm'>
                          <img src={'/images/Icon.svg'} alt="Plus icon" className='h-8.5 w-8.5 mr-4' />
                          Ajouter une autre assurance
                      </button>
                      <div className="mt-20">
                          <p>Vous avez déjà un compte? <button className='underline'>Connectez-vous</button></p>
                      </div>
                  </div>
              </div>
              <div className='flex flex-col flex-grow xl:w-2/3 rounded-[24px] shadow-custom bg-white pt-10 '>
                  <div className=' flex-grow overflow-y-auto h-[200px] pl-36 pr-10'>
                      <div className='flex justify-between items-center mb-6'>
                          <Breadcrumbs />
                          <div className='flex items-center w-[177px] rounded-full border py-2 px-4 bg-[#F9FAFB] hover:bg-emerald-100 hover:border-emerald-500 transition-colors duration-300 cursor-pointer'>
                              <img src="/images/phone.svg" alt="Phone Icon" className='h-5 w-5 mr-2' />
                              <div className='flex flex-col items-center'>
                                  <p className='font-semibold text-sm leading-none'>09 72 39 78 88</p>
                                  <p className='text-xxs text-gray-500'>APPEL NON SURTAXÉ</p>
                              </div>
                          </div>
                      </div>
                      <main className='flex-grow'>{children}</main>
                  </div>
                  <Footer /> 
              </div>
          </div>
    </>
  )
}

export default MainLayout
