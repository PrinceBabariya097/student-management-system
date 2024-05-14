import React from 'react'
import bgr from '/bgr.png'
import hs from '/hs.png'
import { faCirclePlay, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Registrstion() {

    const styles = {
        backgroundImage: `url(${bgr})`,
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={styles} className=' w-[1440px] h-screen relative'>
            <div className='absolute my-auto h-full flex flex-col justify-center  right-14'>
                <div className='mb-5'>
                    <img src={hs} alt="" />
                </div>
                <div className='mb-12'>
                    <p className='font-bold text-[32px] mb-3'>Registration Form</p>
                    <p className='text-sm'>Already have an account? <span className='text-orange-400'>Login</span></p>
                </div>
                <div>
                    <form action="">
                        <div className='w-[473px] h-[333px] flex flex-col justify-between'>
                            <div className='w-full flex justify-between'>
                                <input type="text" placeholder='First Name*' required className='w-[212px] rounded-lg bg-transparent h-[45px] border border-solid border-[#23325566]' />
                                <input type="text" placeholder='Last Name*' required className='w-[212px] rounded-lg bg-transparent h-[45px] border border-solid border-[#23325566]' />
                            </div>
                            <div className='w-full'>
                                <input type="email" placeholder='Enter Email*' required className='w-full rounded-lg bg-transparent h-[45px] border border-solid border-[#23325566]' />
                            </div>
                            <div className='w-full'>
                            <input type="email" placeholder='Confirm Email*' required className='w-full rounded-lg bg-transparent h-[45px] border border-solid border-[#23325566]' />
                            </div>
                            <div className='w-full flex justify-between'>
                                <input type="tel" placeholder='Phone number*' required className='w-[212px] rounded-lg bg-transparent h-[45px] border border-solid border-[#23325566]' />
                                <input type="text" placeholder='Token*' required className='w-[212px] rounded-lg bg-transparent h-[45px] border border-solid border-[#23325566]' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex w-[163px] justify-between'>
                                    <div>
                                        <input type="checkbox" name="gender" id="gender" className='mr-1'/>
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="gender" id="gender" className='mr-1'/>
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                                <div>
                                    <select className='w-[212px] rounded-lg bg-transparent h-[45px] border border-solid border-[#23325566]'>
                                        <option value="none">Dipartment</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button type='submit' className='mx-auto mt-12 flex rounded-full p-3 bg-[radial-gradient(118.57%_1536.71%_at_50%_50%,_#F6AD2B_0%,_#7CBBE4_50.31%,_#233255_100%)]'>
                                <div className='mr-2'>
                                    <FontAwesomeIcon icon={faUser} color='white' />
                                </div>
                                REGISTER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registrstion