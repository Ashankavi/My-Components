import React from 'react'
import ButtonIMG from '../../assets/Buttons/Buttonimg.png';
import Color1 from '../../assets/Cards/Color 1.png';
import Color2 from '../../assets/Cards/Color 2.png';

const ItemDetails = () => {
  return (
    <div className=' my-4  bg-[#fff8f8] p-4'>
        <div className=' flex justify-center text-center m-8'>
            <h1 className=' text-6xl font-bold'>Item Details 1</h1>
        </div>
        <div className=' grid grid-cols-2 gap-8'>
            <div>
            <img src={ButtonIMG} className=" rounded-2xl"/>
            <div className=' grid grid-cols-4 mt-4  gap-4'>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto "/>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
            </div>

            </div>
            <div>
                <h2>Home / Women / Shirt</h2>
                <h1 className=' text-5xl font-bold'>LIGHT Blue - NONAME SUPER OVERSIZED RELAX T</h1>
                <h2 className=' text-2xl font-semibold my-4'>Rs.2,010.00  <span className='line-through text-xl font-normal text-[#4e4e4e]'>Rs 2,500.00</span></h2>
                <h2 className=' text-2xl font-semibold '>Size : <span className=' text-xl font-normal text-[#363636]'> L</span> </h2>
                <div className='flex flex-row gap-2 my-4'>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                </div>
                <h2 className=' text-2xl font-semibold '>Color : <span className=' text-xl font-normal text-[#363636]'> Light Blue</span> </h2>
                <div className=' flex flex-row gap-4 my-4'>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a] "/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a] "/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                </div>

                <div className=' flex flex-row gap-4 mb-4'>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>2</div>
                    <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 '>Sample 1</button> 
                    <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 '>Sample 1</button> 
                </div>

                <div className=' flex flex-row gap-4'>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl py-6 px-4 h-auto w-auto'>Island-wide Cash-on-Delivery 300 LKR (within 03 working days)</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl py-6 px-4 h-auto w-auto'>Return within 7 days of purchase. Duties & taxes are non-refundable.</div>

                </div>

            </div>
        
        </div>

        <div className=' flex justify-center text-center m-8'>
            <h1 className=' text-6xl font-bold'>Item Details 2</h1>
        </div>
        <div className=' grid grid-cols-2 gap-8 '>
            <div className='bg-[#bdbdbd] p-4 rounded-2xl'>
            <img src={ButtonIMG} className=" rounded-2xl"/>
            <div className=' grid grid-cols-4 mt-4  gap-4'>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50 "/>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto "/>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
            <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
            </div>
        </div>
            <div>
                <h2>Home / Women / Shirt</h2>
                <h1 className=' text-5xl font-bold'>LIGHT Blue - NONAME SUPER OVERSIZED RELAX T</h1>
                <h2 className=' text-2xl font-semibold my-4'>Rs.2,010.00  <span className='line-through text-xl font-normal text-[#4e4e4e]'>Rs 2,500.00</span></h2>
                <h2 className=' text-2xl font-semibold '>Size : <span className=' text-xl font-normal text-[#363636]'> L</span> </h2>
                <div className='flex flex-row gap-2 my-4'>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>XS</div>
                </div>
                <h2 className=' text-2xl font-semibold '>Color : <span className=' text-xl font-normal text-[#363636]'> Light Blue</span> </h2>
                <div className=' flex flex-row gap-4 my-4'>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a] "/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a] "/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                </div>

                <div className=' flex flex-row gap-4 mb-4'>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl h-10 w-10'>2</div>
                    <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 '>Sample 1</button> 
                    <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 '>Sample 1</button> 
                </div>

                <div className=' flex flex-row gap-4'>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl py-6 px-4 h-auto w-auto'>Island-wide Cash-on-Delivery 300 LKR (within 03 working days)</div>
                    <div className='flex border border-[#363636] text-center justify-center items-center rounded-xl py-6 px-4 h-auto w-auto'>Return within 7 days of purchase. Duties & taxes are non-refundable.</div>
                </div>
            </div>
        </div>

        <div className=' my-4  bg-[#fff8f8] p-4'>
            <div className=' flex justify-center text-center m-8'>
                <h1 className=' text-6xl font-bold'>Item Details 3</h1>
            </div>
                 <div className=' grid grid-cols gap-8 '>
                    <div className=''>
                    <img src={ButtonIMG} className=" rounded-2xl"/>
                    <div className=' grid grid-cols-4 mt-4  gap-4'>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50 "/>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto "/>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
                </div>
             </div>
             <h2 className=' text-2xl font-normal text-[#4e4e4e] '>Colombo, Sri Lanka </h2>
             <h1 className=' text-6xl font-bold'>Modern House for your Family</h1>
             <p className='text-l text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
             labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes. Ut sem viverra aliquet eget sit amet tellus cras 
             adipiscing. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.</p>
             <h2 className=' text-2xl font-semibold '>Address :  <span className='text-xl font-normal text-[#4e4e4e]'> 357/B1, Colombo Road, Thalawathugoda</span></h2>
             <h1 className=' text-6xl text-[#1783ff] font-bold'>Rs 55,000,000 total price</h1>
            </div>
        </div>

        <div className=' my-4  bg-[#fff8f8] p-4'>
            <div className=' flex justify-center text-center m-8'>
                <h1 className=' text-6xl font-bold'>Item Details 4</h1>
            </div>
                 <div className=' grid grid-cols gap-8 '>
                    <div className='bg-[#bdbdbd] p-8 rounded-2xl'>
                    <img src={ButtonIMG} className=" rounded-2xl"/>
                    <div className=' grid grid-cols-4 mt-4  gap-4'>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50 "/>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto "/>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
                    <img src={ButtonIMG} className=" rounded-2xl h-auto w-auto opacity-50"/>
                </div>
             </div>
             <h2 className=' text-2xl font-normal text-[#4e4e4e] '>Colombo, Sri Lanka </h2>
             <h1 className=' text-6xl font-bold'>Modern House for your Family</h1>
             <p className='text-l text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
             labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes. Ut sem viverra aliquet eget sit amet tellus cras 
             adipiscing. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.</p>
             <h2 className=' text-2xl font-semibold '>Address :  <span className='text-xl font-normal text-[#4e4e4e]'> 357/B1, Colombo Road, Thalawathugoda</span></h2>
             <h1 className=' text-6xl text-[#1783ff] font-bold'>Rs 55,000,000 total price</h1>
            </div>
        </div>

    </div>
  )
}

export default ItemDetails
