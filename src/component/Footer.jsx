import React from 'react'
import logo from '/image 12.png'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/footer.css'

function Footer() {
  return (
    <footer className=' w-full bg-[#E6E6E7]  flex flex-col '>
      <div className='flex flex-wrap justify-around mt-10'>
        <div className='text-xs w-[286px] max-[426px]:w-[90%] mt-3 '>
          <img src={logo} alt="" /><br />
          <p>Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi, Jawa Barat 43351, Indonesia, (0266)531333</p><br /><br />
          <p className='font-bold'>info@smpn1cibadak.sch.id</p><br />
          <p className='font-bold'>smpn1cbd_kabsi@yahoo.co.id</p><br />
        </div>
        <div className='max-[426px]:w-[90%] mt-3'>
          <p className='font-bold text-base pb-2'>Jelajah</p>
          <p className='text-sm py-2'>Sambutan</p>
          <p className='text-sm py-2'>Profil Sekolah</p>
          <p className='text-sm py-2'>Berita</p>
          <p className='text-sm py-2'>Galeri</p>
        </div>
        <div className='max-[426px]:w-[90%] mt-3'>
          <p className='font-bold text-base md:pb-2'>Halaman Umum</p>
          <p className='text-sm py-2'>Data Guru</p>
          <p className='text-sm py-2'>PPDB SMPN 1 Cibadak</p>
          <p className='text-sm py-2'>Panduan PPDB</p>
          <p className='text-sm py-2'>Lokasi</p>
          <p className='text-sm py-2'>Kontak</p>
        </div>
        <div className='max-[426px]:w-[90%] mt-3'>
          <p className='font-bold text-base pb-2'>Social Media</p>
          <div>
            <FontAwesomeIcon icon={faTwitter} size='xs' className='border-solid border-2 p-3 mx-2 rounded-lg border-slate-300' />
            <FontAwesomeIcon icon={faFacebook} size='xs' className='border-solid border-2 p-3 mx-2 rounded-lg border-slate-300' />
            <FontAwesomeIcon icon={faInstagram} size='xs' className='border-solid border-2 p-3 mx-2 rounded-lg border-slate-300' />
          </div>
        </div>
      </div>
      <div className='h-[1px] mx-auto mt-6 border border-solid border-slate-300' id='spaceLine'></div>
        <div>
          <p className='text-xs py-5 lg:pl-[105px] '>
            Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting By IDCloudHost
          </p>
        </div>
    </footer>
  )
}

export default Footer