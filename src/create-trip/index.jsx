import { Button } from '@/components/ui/button'
import { selectBudgetOptions, selectTravelsList } from '@/constants/options'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

function CreateTrip() {

  const [input, setInput] = useState("");

  const [formData,setFormData] = useState([]);

  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  const handleInputChange = (name,value) =>{

    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData)
  },[formData])

  const onGenerateTrip = () =>{
    if(formData?.noOfDays>30 && !formData?.location || !formData?.budget || !formData?.traveler){
      // alert("Number of Days cannot exceed 30")
      toast("Please fill all the details")
      return ;
    }

    console.log(formData)
  }


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and SafarSathi will generate a customized iternary based on your preferences. </p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>Enter the destination of your choice</h2>
          {/* <GooglePlacesAutocomplete
          apikey={import.meta.env.}
          selectProps={{
          place,
          onChange: () => {setPlace(v); handleInputChange('location',v)}
          }}
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
        <input className='w-64 p-2 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500' 
        type="number" 
        placeholder='Ex.3'
        onChange={(e)=>handleInputChange('noOfDays', e.target.value)}
        />
        </div>

      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-5 mt-5 gap-5'>
          {selectBudgetOptions.map((item,index)=>{
            return(
              <div key={index} 
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
                ${formData?.budget==item.title && "shadow-2xl border-black"}
                `}
              onClick={()=>handleInputChange('budget', item.title)}
              >
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
              <div key={index} 
              onClick={()=>handleInputChange('traveler', item.people)}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
                ${formData?.traveler==item.people && "shadow-2xl border-black"}
                `}
                >
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
            );
          })}
        </div>
      </div>

    {/* <Button>Generate Trip!</Button> */}
    <button onClick={onGenerateTrip} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 m-5">
  Generate Trip !
</button>

    </div>
  )
}

export default CreateTrip
