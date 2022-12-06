import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

function ProductPage() {
  return (
    <div>
         <Announce />
            <Navbar />
            <div className='flex justify-center mobile:flex-col mobile:p-3'>
                <div className='flex flex-1 items-center justify-center'>
                    <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?v=1642616536" 
                    alt="product-iamge" 
                    className='w-[80%] h-[80%] ease-in duration-300 rounded-lg shadow-lg hover:scale-[1.1] ' />
                </div>
                <div className='flex-[1.3] flex items-start justify-start flex-col mt-10 mobile:items-center'>
                    <h1 className='title text-[40px] mobile:text-[30px]'>Creamy Hoddy  Oraginal </h1>
                    <p className='pr-[4rem] text-justify mt-4 mobile:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur nihil,
                         dicta quaerat sit tempora, perferendis minima odit optio impedit doloremque sed, 
                         quas corrupti error obcaecati dolorem. Sed, dolorem autem.
                    </p>
                    <p className='mt-7 text-3xl'>Price: <b>$70</b></p>
                    {/* color variants  */}
                    <div className='flex text-2xl'>
                        colors
                        <div className='bg-red-600 cursor-pointer rounded-full w-[2rem] h-[2rem] border-2 p-[10px] ml-5 hover:border-[#8a4af3]'></div>
                        <div className='bg-yellow-400 cursor-pointer rounded-full w-[2rem] h-[2rem] border-2 p-[10px] ml-5 hover:border-[#8a4af3]'></div>
                        <div className='bg-blue-600 cursor-pointer rounded-full w-[2rem] h-[2rem] border-2 p-[10px] ml-5 hover:border-[#8a4af3]'></div>

                    </div>

                    <div className='mt-7 text-2xl'>
                        Size
                        <select className='ml-5 border-2'>
                            <option selected disabled>Select</option>
                            <option >Small</option>
                            <option >Medium</option>
                            <option >Large</option>
                        </select>
                     </div>
                     <div className='mt-5'>
                        <Counter />
                     </div>
                     <button className='btn mt-5'>Add to Cart</button>
                 </div>         
            </div>
            <Products />
            <Newsletter />
            <Footer />

    </div>
  )
}

export default ProductPage;