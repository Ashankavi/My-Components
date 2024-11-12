import React from 'react'
import ButtonIMG from '../../assets/Buttons/Buttonimg.png';
import Color1 from '../../assets/Cards/Color 1.png';
import Color2 from '../../assets/Cards/Color 2.png';


const Cards = () => {
  return (
    <div className=' m-4 '>
        <div className=' flex justify-center text-center m-8'>
            <h1 className=' text-6xl font-bold'>Cards</h1>
        </div>

        {/* Card Line 01 */}

        <div className=' grid grid-cols-3 justify-center gap-8'>

            <div className='bg-black w-auto h-auto rounded-3xl text-center justify-center '>
                <img src={ButtonIMG} className=" rounded-3xl"/>
                <div className='my-4'>
                    <h1 className='text-4xl text-[#ffffff] mb-2'>Sample Card 1</h1>
                    <h1 className='text-xl text-[#ffffff] mb-4'>Subtopic</h1>
                    <p className='text-l text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                </div>
                <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 mb-8'>Sample 1</button> 
            </div>

            <div className='bg-black w-auto h-[420px] rounded-3xl text-center'>
                <img src={ButtonIMG} className=" rounded-3xl border-8 border-[#e72e2e]"/>
                <h1 className='text-4xl text-[#ffffff] my-4'>Sample Card 2</h1>
                <p className='text-l text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>

            <div className='bg-black w-auto h-[420px]  text-center p-4'>
                <img src={ButtonIMG} className=" "/>
                <h1 className='text-4xl text-[#ffffff] my-4'>Sample Card 3</h1>
                <p className='text-l text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>

        </div>

                {/* Card Line 02 */}

        <div className=' grid grid-cols-3 justify-center mt-8 gap-8'>

            <div className='bg-black w-auto h-auto rounded-3xl text-center justify-center border-8 border-[#e72e2e] '>
                <img src={ButtonIMG} className=" rounded-2xl"/>
                <div className='my-4'>
                    <h1 className='text-4xl text-[#ffffff] mb-2'>Sample Card 4</h1>
                    <h1 className='text-xl text-[#ffffff] mb-4'>Subtopic</h1>
                    <p className='text-l text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                </div>
                <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 mb-8'>Sample 1</button> 
            </div>

            <div className='bg-black w-auto h-[420px] rounded-b-3xl text-center border-8 border-[#e72e2e]'>
                <img src={ButtonIMG} className=" rounded-b-3xl hover:border-8 hover:border-[#415dff] border-8 border-[#e72e2e]"/>
                <h1 className='text-4xl text-[#ffffff] my-4'>Sample Card 5</h1>
                <p className='text-l text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>

            <div className='bg-black w-auto h-[480px] hover:border-8 hover:border-[#415dff] text-center p-4 border-8 border-[#e72e2e]'>
                <img src={ButtonIMG} className=" "/>
                <div className='my-4'>
                    <h1 className='text-4xl text-[#ffffff] mb-2'>Sample Card 6</h1>
                    <h1 className='text-xl text-[#ffffff] mb-4'>Hover Border</h1>
                    <p className='text-l text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                </div>
            </div>

        </div>

            {/* Card Line 02 */}

            <div className=' grid grid-cols-3 justify-center mt-8 gap-8'>

            <div className='bg-[#ffffff] w-auto h-auto rounded-3xl text-center justify-center shadow-md'>
                <img src={ButtonIMG} className=" rounded-2xl"/>
                <div className='my-4'>
                    <h1 className='text-4xl text-[#000000] mb-2'>Sample Card 7</h1>
                    <h1 className='text-xl text-[#000000] mb-4'>Shadow</h1>
                    <p className='text-l text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                </div>
                <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 mb-8'>Sample 1</button> 
            </div>

            <div className='bg-[#fde7e7]  w-auto h-auto  '>
                <img src={ButtonIMG} className=" "/>
                <div className=' ml-4'>
                    <h1 className='text-4xl text-[#000000] my-4'>Sample Card 8</h1>
                    <div className=' flex flex-row gap-4 my-4'>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a] "/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    </div>
                    <p className='text-l text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    
                    <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 my-4'>Sample 1</button> 
                </div>
            </div>

            <div className='bg-[#fde7e7]  w-auto h-auto rounded-3xl p-4 '>
                <img src={ButtonIMG} className=" rounded-2xl "/>
                <div className=' '>
                    <h1 className='text-4xl text-[#000000] my-4'>Sample Card 9</h1>
                    <div className=' flex flex-row gap-4 my-4'>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a] "/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    <img src={Color1} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    <img src={Color2} className=" rounded-[500px] h-8 w-8 ring-2 ring-slate-500 hover:ring-2 hover:ring-[#ff378a]"/>
                    </div>
                    <p className='text-l text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    
                    <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 my-4'>Sample 1</button> 
                </div>
            </div>

        </div>
       
      
    </div>
  )
}

export default Cards
