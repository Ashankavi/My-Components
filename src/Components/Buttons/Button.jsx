import React from 'react'
import ButtonIMG from '../../assets/Buttons/Buttonimg.png';


const Button = () => {
  return (
    <div className=' m-4 '>
        <div className=' flex justify-center text-center m-8'>
            <h1 className=' text-6xl font-bold'>Buttons</h1>
        </div>

        <div className=' flex justify-center'>

        <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 mr-8'>Sample 1</button> 
        <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 rounded-xl mr-8'>Sample 2</button> 
        <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 border-2 border-[#000000] rounded-2xl mr-8'>Sample 3</button> 
        <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] py-2 px-6 rounded-xl mr-8 shadow-md'>Sample 4</button> 
        <button className=' text-[#000000] bg-gradient-to-r from-[#2ee3ff] via-[#c552ff] to-[#9151ff] hover:from-[#9151ff] hover:via-[#c552ff] hover:to-[#2ee3ff]  py-2 px-6 rounded-xl mr-8 '>Sample 5</button> 
        <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8] ring-2 py-2 px-6 rounded-xl mr-8'>Sample 6</button> 
        <button className=' text-[#000000] bg-[#2ee3ff] hover:bg-[#d670f8]  focus:bg-[#ff4de1] focus:ring-4 focus:ring-[#ff3d74] py-2 px-6 rounded-xl mr-8'>Sample 7</button> 
        <button className=' text-[#ffffff] hover:bg-[#d670f8] ring-2 py-2 px-6 rounded-xl mr-8'
        style={{  backgroundImage: `url(${ButtonIMG})`, backgroundSize: 'cover', backgroundPosition: 'center',}}> Sample 8
        </button>

        </div>
       
      
    </div>
  )
}

export default Button
