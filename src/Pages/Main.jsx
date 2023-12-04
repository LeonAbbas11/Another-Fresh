import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import background from '../Assets/bg1.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Main = () => {

  const [side, setSide] = useState(false);

  const [data, setData] = useState({
    nama: '',
    telepon: '',
    alamat: '',
    buah: '',
    qty: ''
  })
  console.log(data);
  const [harga, setHarga] = useState('');
  console.log(harga);

  const hitungHarga = () => {
    if (data.buah === '1') {
      setHarga(63000 * data.qty)
    } else if (data.buah === '2'){
      setHarga(115000 * data.qty)
    } else {
      setHarga(72000 * data.qty)
    }
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

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
            <p className='text-3xl xl:text-[37px] mt-10 lg:mt-16 text-start md:text-center xl:text-start text-white font-light'>Sambut pagi Anda dengan kesegaran buah-buahan terbaik dari <i className='font-semibold'>Another Fresh!</i></p>
            <p className='text-white mt-5 text-start md:text-center xl:text-start text-xl xl:text-2xl font-light'>Another Fresh menyajikan beragam buah-buahan segar terbaik, dengan standar kualitas tinggi. Setiap buah dipilih dengan hati-hati untuk memastikan kesegaran dan kematangan yang sempurna, sehingga Anda bisa mendapatkan yang terbaik untuk keluarga dan teman-teman Anda.</p>
            <div className="order flex py-2 px-6 text-white mt-10 space-x-5 text-xl border rounded w-max cursor-pointer transition-all duration-700 hover:scale-110 md:mx-auto mx-0 xl:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <p className=''>Hubungi kami</p>
            </div>
          </div>
          <div className="order w-full grid mt-10 xl:mt-0 mb-10 md:mb-16">
            <div className="wrapper border p-5 rounded-xl border-white mb-10 md:mb-0 md:mt-0 w-full md:w-3/4 lg:w-1/2 mx-auto xl:mx-0 xl:ml-auto h-max">
              <div className="xl:flex xl:space-x-4">
                <input name='nama' onChange={handleChange} value={data.nama} type="text" placeholder='Nama lengkap' className='p-1 xl:p-2 rounded xl:mt-0 mt-4 bg-white outline-none w-full' />
                <input name='telepon' onChange={handleChange} value={data.telepon} type="number" placeholder='No. WA/Telpon' className='p-1 xl:p-2 rounded xl:mt-0 mt-4 bg-white outline-none w-full md:mt-4' />
              </div>
              <input name='alamat' type="text" onChange={handleChange} value={data.alamat} placeholder='Alamat lengkap' className='p-1 xl:p-2 rounded bg-white outline-none w-full mt-4' />
              <div className="grid md:flex mt-4 md:space-x-4 md:space-y-0">
                <select name='buah' onChange={handleChange} value={data.buah} className='p-1 xl:p-2 rounded bg-white outline-none md:w-3/4 xl:w-1/2'>
                  <option value="">Pilih buah</option>
                  <option value="1">Anggur Red Globe</option>
                  <option value="2">Anggur Hijau</option>
                  <option value="3">Anggur Hitam</option>
                </select>
                <div className="flex mt-4 xl:mt-0">
                  <select name='qty' onChange={handleChange} value={data.qty} id="" className='p-1 xl:p-2 rounded bg-white outline-none md:w-full w-3/12'>
                    <option value="">Kuantitas</option>
                    <option value="0.25">¼</option>
                    <option value="0.50">½</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <p className='text-white text-lg mt-auto ml-2'>Kg</p>
                </div>
              </div>
              <button className='py-1 px-7 rounded border text-white mt-5' onClick={hitungHarga}>Hitung Harga</button>
              <p className='text-right md:text-center text-xl text-white my-10 xl:my-0 xl:mt-5'>Total Belanja: Rp. { harga }</p>
              <Link to={'https://wa.link/7lqtyq'} className="order flex py-2 px-6 text-white mt-10 space-x-5 text-xl border rounded w-max cursor-pointer transition-all duration-700 hover:scale-110 mx-auto">
                <p className=''>Pesan sekarang</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
              </Link>
            </div>     
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Main