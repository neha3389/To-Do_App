import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  


  return (
    <div className='bg-slate-600'>
      <h1 className='flex justify-center items-center py-12 font-bold text-2xl text-white mt-7'>TO DO APP </h1>
      <div className='flex justify-center items-center  py-10 gap-6 '>
        <input className='font-bold hover:bg-slate-500 py-4 px-8 rounded-md' type='' placeholder='Enter To Do'></input>
        <button className='font-bold hover:bg-slate-300 border border-white px-8 py-4 rounded-md'>Add To-Do</button>
      </div>
      <div className="flex justify-between px-40 min-h-[70vh] text-2xl">
        <div className="flex flex-col">
          <div className="flex gap-8 text-slate-50 items-center">
            <p>Learn React js and redux </p>
            <button className="border  border-black px-4 py-2 rounded-md font-bold text-white-400
        hover:bg-slate-500"
            >Done
            </button>
            <button
              className="border  border-black px-4 py-2 rounded-md font-bold text-white-400
        hover:bg-slate-400"
            > Delete
            </button>
          </div>
        </div>
        <div className="w-[1px] bg-slate-400"></div>
        <div className="flex flex-col">
          <div className="flex gap-8 text-slate-50 items-center">
            <p>Learn HTML,CSS and Js</p>
            <button className="border-2 border-black px-4 py-2 rounded-md font-bold text-white-400 hover:bg-slate-400">Incomplete </button>
            <button className="border-2 border-black px-4 py-2 rounded-md font-bold text-white-400 hover:bg-slate-400" > Delete </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
