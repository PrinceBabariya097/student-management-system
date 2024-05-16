import React from 'react'
import CustomHeader from '../component/CustomHeader'
import Footer from '../component/Footer'

function AboutUs() {
    return (
        <>
            <CustomHeader title='Selamat datang calon peserta didik baru SMPN 1 CIBADAK Tahun Pelajaran 2024-2025' />
            <div className='flex justify-center py-20 '>
                <div className='max-[426px]:w-[350px] max-[426px]:h-fit lg:w-[1001px] md:w-[700px] h-[280px] flex flex-col items-center border border-solid border-[#DFDFDF] pb-3'>
                    <div className='w-full bg-blue-500 py-2 text-white font-bold text-2xl text-center rounded'>
                        Informasi
                    </div>
                    <div className=' lg:w-[774px]  text-center text-sm pt-5'>
                        <p className='py-3'>Sebagai informasi, Pendaftaran untuk periode 2021-2022 untuk jalur Afirmasi, Perpindahan Orangtua/Wali, dan Prestasi akan dibuka pada tanggal 28 Juni s.d 2 Juli 2021, sedangkan untuk jalur Zonasi akan dibuka pada tanggal 5 Juli – 9 Juli 2021</p>
                        <p className='py-3'>Simulasi pendaftaran sudah dibuka, namun diluar tanggal yang disebutkan diatas, akan dihapus kembali Terima Kasih</p>
                        <p className='py-3'>Admin PPDB SMPN 1 Cibadak</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs