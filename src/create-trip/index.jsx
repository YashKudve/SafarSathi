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
    </div>
  )
}

export default CreateTrip
