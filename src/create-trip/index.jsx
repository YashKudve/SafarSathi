import { Button } from '@/components/ui/button'
import { selectBudgetOptions, selectTravelsList } from '@/constants/options'
import React, { useState } from 'react'

function CreateTrip() {

  const [input, setInput] = useState("")
  const handleChange = (e) =>{
    setInput(e.target.value)
  }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and SafarSathi will generate a customized iternary based on your preferences.</p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>Enter the destination of your choice</h2>
          {/* <GooglePlacesAutocomplete
          apikey=''
          /> */}
        <input className='w-64 p-2 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500' 
        type="text" 
        placeholder='Enter destination'
        value={input}
        onChange={handleChange}
        />
        </div>

        <div>
        <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
        <input className='w-64 p-2 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500' type="number" placeholder='Ex.3' />
        </div>

      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-5 mt-5 gap-5'>
          {selectBudgetOptions.map((item,index)=>{
            return(
              <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
            );
          })}
        </div>
      </div>


      <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure??</h2>
        <div className='grid grid-cols-5 mt-5 gap-5 mb-5'>
          {selectTravelsList.map((item,index)=>{
            return(
              <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
            );
          })}
        </div>
      </div>

    {/* <Button>Generate Trip!</Button> */}
    <button class="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 m-5">
  Generate Trip !
</button>

    </div>
  )
}

export default CreateTrip
