import { faCirclePlay, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import hs from '/hs.png'
import hl1 from '/hl1.png'
import hl2 from '/hl2.png'
import background from '/Background.png'

function HeroNav() {

    const styles = {
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    return (
        <div style={styles} className=' h-full '>
            <nav className='flex w-[95%] pt-8 items-center mx-auto  justify-between'>
                <div>
                    <img src={hs} alt="" />
                </div> 
                <div>
                    <ul className='flex w-[267px] justify-between '>
                        <li>Programs</li>
                        <li>Extra-Curricular</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex w-[267px] justify-between text-slate-200'>
                        <li>Our Staff</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className=' flex p-3 rounded-2xl  bg-[radial-gradient(118.57%_1536.71%_at_50%_50%,_#F6AD2B_0%,_#7CBBE4_50.31%,_#233255_100%)]'>
                    <div className='mr-2'>
                        <FontAwesomeIcon icon={faUser} color='white' />
                    </div>
                    <div >
                        <p>Login/Register</p>
                    </div>
                </div>
            </nav>
            <section className=' h-[555px] w-[440px] pl-5 my-auto'>
            <div >
                <p className='font-bold text-[70px] text-fill-color:transparent bg:text bg-[conic-gradient(from_199.95deg_at_61.71%_-17.06%,_#F6AD2B_-17.48deg,_#7FBDE4_17.37deg,_#233255_199.84deg,_#F6AD2B_342.52deg,_#7FBDE4_377.37deg)] '>BETTER FUTURE FOR YOUR KIDS</p>
            </div>
            <div className='mt-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper augue cras massa facilisis dolor volutpat quam risus venenatis.</p>
            </div>
            <div className='flex items-center justify-between my-9'>
                <div className='flex w-fit p-3 rounded-2xl  bg-[radial-gradient(118.57%_1536.71%_at_50%_50%,_#F6AD2B_0%,_#7CBBE4_50.31%,_#233255_100%)]'>
                    <div className='mr-2'>
                        <FontAwesomeIcon icon={faUser} color='#233255'/>
                    </div>
                    <div>
                        <p className='font-medium text-lg'>JOIN US TODAY</p>
                    </div>
                </div>
                <div className='flex'>
                    <div >
                        <FontAwesomeIcon icon={faCirclePlay} color='grey' size='2x'/>
                    </div>
                    <div>
                        <p>Watch our welcome video</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                    <img src={hl1} alt="" />
                    <img src={hl2} alt="" />
            </div>
            </section>
        </div>

    )
}

export default HeroNav