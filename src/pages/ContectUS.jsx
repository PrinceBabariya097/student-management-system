import React from 'react'
import CustomHeader from '../component/CustomHeader'
import Footer from '../component/Footer'
import map from '/image 31.png'
import review from '/image 33.png'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContectUS() {
    const title = 'Contect Us'
    const subTitle = 'Jika Memiliki Pertanyaan Bisa Langsung isi Form Dibawah Ini'
    return (
        <>
            <CustomHeader title={title} subTitle={subTitle} />
            <div className='flex  flex-col justify-center items-center'>
                <div className=' h-[536px] w-[812px] md:w-[700px] max-[426px]:w-[400px] mt-20'>
                    <form>
                        <div className='md:flex justify-between py-3'>
                            <div className='max-[426px]:mb-3'>
                                <label htmlFor='name' className='text-[#75818A] text-sm pb-1'>Name</label>
                                <input id='name' type="text" className=' h-[56px] w-[394px] md:w-[330px] bg-[#F6F7F9] ' placeholder='Enter Your FullName' />
                            </div>
                            <div>
                                <label htmlFor='email' className='text-[#75818A] text-sm pb-1'>Email</label>
                                <input id='email' type="email" className=' h-[56px] w-[394px] md:w-[330px] bg-[#F6F7F9] ' placeholder='Enter Your Email' />
                            </div>
                        </div>
                        <div className='py-3'>
                            <label htmlFor='phoneNumber' className='text-[#75818A] text-sm pb-1'>Phone</label><br />
                            <input id='phoneNumber' type="tel" className=' h-[56px] w-full bg-[#F6F7F9] ' placeholder='Enter Your Phone Number' />
                        </div>
                        <div className='py-3'>
                            <label htmlFor='review' className='text-[#75818A] text-sm pb-1'>Your Review</label><br />
                            <input id='review' type="email" className=' h-[200px] w-full bg-[#F6F7F9] text-start' placeholder='Enter Your Review' />
                        </div>
                        <div className='w-full flex justify-center py-3'>
                            <button className='bg-blue-500 w-[184px] h-[40px] text-white text-sm text-center font-bold rounded '>
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
                <div className='py-32'>
                    <div className='md:relative'>
                        <img src={map} alt="" className=' shadow-sm  '></img>
                        <div className=' w-[200px] h-[240px] md:w-[150px] md:h-[190px] max-[426px]:mx-auto md:top-10 bg-white md:absolute top-40 left-10 flex justify-center flex-col p-3'>
                            <div className=''>
                                <img src={review} alt="" />
                            </div>
                            <p className='py-1 text-xs font-bold'>SMP Negeri 1 Cibadak</p>
                            <p className='py-1 text-[10px] text-left text-[#919FAE]'>Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi, Jawa Barat 43351, Indonesia, (0266)531333</p>
                            <div className='flex items-center'>
                                <p className='mr-2 text-[10px]'>4.6</p>
                                <FontAwesomeIcon icon={faStar} color="yellow" size="xs" />
                                <FontAwesomeIcon icon={faStar} color="yellow" size="xs" />
                                <FontAwesomeIcon icon={faStar} color="yellow" size="xs" />
                                <FontAwesomeIcon icon={faStar} color="yellow" size="xs" />
                                <FontAwesomeIcon icon={faStar} color="yellow" size="xs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContectUS