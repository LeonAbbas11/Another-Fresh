import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import background from '../Assets/bg1.png'
// import btn1 from '../Assets/btn1.png'
// import btn2 from '../Assets/btn2.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Main = () => {

  const [side, setSide] = useState(false);

  const handleSide = () => {
    try {
      if (side === true) {
        setSide(false);
      }else{
        setSide(true);
      }
    } catch (error) {
      
    }
  }

  return (
    <div className='h-full bg-fixed md:w-full xl:w-full 2xl:w-full' style={{ backgroundImage: `url(${background})` }}>
      <Navbar open={handleSide} close={handleSide} menu={side} />
        <div className="pembuka container grid mx-auto px-5 md:px-0 w-full md:w-10/12 2xl:w-full">
          <div className="w-full md:w-1/2 mx-auto xl:mx-0">
            <p className='text-3xl xl:text-[37px] mt-10 md:mt-16 xl:mt-32 text-start md:text-center xl:text-start text-white font-light'>Sambut pagi Anda dengan kesegaran buah-buahan terbaik dari <i className='font-semibold'>Another Fresh!</i></p>
            <p className='text-white mt-5 text-start md:text-center xl:text-start text-xl xl:text-2xl font-light'>Another Fresh menyajikan beragam buah-buahan segar terbaik, dengan standar kualitas tinggi. Setiap buah dipilih dengan hati-hati untuk memastikan kesegaran dan kematangan yang sempurna, sehingga Anda bisa mendapatkan yang terbaik untuk keluarga dan teman-teman Anda.</p>
            <div className="order flex py-2 px-6 text-white mt-10 space-x-5 text-xl border rounded w-max cursor-pointer transition-all duration-700 hover:scale-110 md:mx-auto mx-0 xl:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <p className=''>Hubungi kami</p>
            </div>
          </div>
          <div className="order w-full grid mt-10 xl:mt-0 mb-10 md:mb-16">
            <div className="wrapper border p-5 rounded-xl border-white mb-10 md:mb-0 md:mt-0 w-full md:w-3/4 lg:w-1/2 mx-auto xl:mx-0 xl:ml-auto h-max">
              <div className="xl:flex xl:space-x-4">
                <input type="text" placeholder='Nama lengkap' className='md:p-1 xl:p-2 rounded bg-white outline-none w-full' />
                <input type="number" placeholder='No. WA/Telpon' className='md:p-1 xl:p-2 rounded bg-white outline-none w-full md:mt-4 xl:mt-0' />
              </div>
              <input type="text" placeholder='Alamat lengkap' className='md:p-1 xl:p-2 rounded bg-white outline-none w-full mt-4' />
              <div className="grid md:flex mt-4 md:space-x-4 md:space-y-0">
                <select name='buah' id="" className='md:p-1 xl:p-2 rounded bg-white outline-none md:w-3/4 xl:w-1/2'>
                  <option value="">Pilih buah</option>
                  <option value="Jacket">Anggur Red Globe</option>
                  <option value="Pants">Anggur Hijau</option>
                  <option value="Shoes">Anggur Hitam</option>
                </select>
                <div className="flex">
                  <select name='qty' id="" className='md:p-1 xl:p-2 rounded bg-white outline-none md:w-full w-3/12'>
                    <option value="">Kuantitas</option>
                    <option value="Jacket">1</option>
                    <option value="Pants">2</option>
                    <option value="Shoes">3</option>
                    <option value="Shoes">4</option>
                    <option value="Shoes">5</option>
                    <option value="Shoes">6</option>
                    <option value="Shoes">7</option>
                  </select>
                  <p className='text-white text-lg mt-auto ml-2'>Kg</p>
                </div>
              </div>
              
              <p className='text-right md:text-center text-xl text-white my-10'>Total Belanja Rp.105.000</p>
              <Link to={'https://wa.link/7lqtyq'} className="order flex py-2 px-6 text-white mt-10 space-x-5 text-xl border rounded w-max cursor-pointer transition-all duration-700 hover:scale-110 mx-auto">
                <p className=''>Pesan sekarang</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
              </Link>
            </div>     
          </div>
        </div>
        {/* <div className="contact hidden fixed md:flex bottom-10 right-10 cursor-pointer transition-all duration-700 hover:scale-110">
          <img src={btn2} alt="" className='h-[35px] -mr-[47px] mt-[12px] animate-pulse' />
          <img src={btn1} alt="" className='h-[60px]' />
        </div> */}
        <Footer />
    </div>
  )
}

export default Main