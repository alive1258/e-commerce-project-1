import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

function Cart() {
  return (
    <div>
          <Announce />
            <Navbar />
            <div className='p-5'>
                <div className='flex justify-center text-5xl'>
                    Cart
                </div>
                {/* uper div cart  */}
                <div className='flex items-center justify-between mobile:flex-col'>
                    <button className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>Continue Shope</button>
                    <div className='flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3'>
                        <p>Items in your Cart : 3</p>
                   
                        <p className='ml-5'>Whitlist Item: 0</p>
                    </div>
                    <button className='btn'> Checkout</button>
                </div>
                {/* centerl div  */}
                <div  className='flex mt-7 mobile:flex-col'>
                    <div className='flex flex-col flex-1 '>
                        {/* list of Product div  */}
                       <div className='flex w-[100%]  h-auto items-center mobile:flex-col '>
                       <div className='product flex self-start pl-5'>

                            <img   className='w-[7.2rem] h-[80%] ease-in duration-300 rounded-lg shadow-lg hover:scale-[1.1] '
                             src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
                             alt="product-imge" />
                         <div className='description flex flex-col ml-5 h-auto justify-between'>
                            <p>
                                <b className='mr-2'>ID :</b>123456666
                            </p>
                            <p>
                                <b className='mr-2'>Product :</b>Dazzing Sky Shirt
                            </p>
                            <p className='flex items-center justify-start'>
                                <b className='mr-2'>Color :</b>
                                <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                            </p>
                            <p>
                                <b className='mr-2'>Size:</b>lg
                            </p>
                         </div>
                       </div>
                        <div className=' flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter />
                            <p className='flex items-center justify-center text-4xl mt-3'>
                                <b>$70</b>
                            </p>
                        </div>
                       </div>
                       <hr  className='mt-7 mb-7'/>

                       {/* 2er product  */}
                       <div className='flex w-[100%]  h-auto items-center mobile:flex-col  '>
                       <div className='product flex self-start pl-5'>

                            <img   className='w-[7.2rem] h-[80%] ease-in duration-300 rounded-lg shadow-lg hover:scale-[1.1] '
                             src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
                             alt="product-imge" />
                         <div className='description flex flex-col ml-5 h-auto justify-between'>
                            <p>
                                <b className='mr-2'>ID :</b>123456666
                            </p>
                            <p>
                                <b className='mr-2'>Product :</b>Dazzing Sky Shirt
                            </p>
                            <p className='flex items-center justify-start'>
                                <b className='mr-2'>Color :</b>
                                <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                            </p>
                            <p>
                                <b className='mr-2'>Size:</b>lg
                            </p>
                         </div>
                       </div>
                        <div className='flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter />
                            <p className='flex items-center justify-center text-4xl mt-3'>
                                <b>$70</b>
                            </p>
                        </div>
                       </div>

                       <hr  className='mt-7 mb-7'/>

                    </div>
                    <div className='p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center'>
                       <h1 className='text-[2rem]'>Sumary</h1>
                       <div className='flex justify-between mt-3 w-[100%]'>
                        <p>Subtotal</p>
                        <p>$140</p>
                       </div>
                       <div className='flex justify-between mt-3 w-[100%]'>
                        <p>Shipping</p>
                        <p>$40</p>
                       </div>
                       <div className='flex justify-between mt-3 w-[100%]'>
                        <p>Shipping Discount</p>
                        <p>-$40</p>
                       </div>
                       <div className='flex justify-between mt-3 w-[100%] font-bold'>
                        <p>Total</p>
                        <p>$140</p>
                       </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />

    </div>
  )
}

export default Cart;