import { useState } from 'react'
import { RootState, AppDispatch } from '../Store';
import { useDispatch, useSelector } from 'react-redux';
import DepositeForm from './DepositeForm';
import WithDraw from './WithDraw';

const UserDetails = () => {
      const [display,setDisplay]=useState(null)
      const users = useSelector((state: RootState) => state.userData.userDetails);
      console.log(users)
    
  return (
    <div>
    <div className='flex justify-center gap-5 mt-10  p-4'>
    <div className='border p-4 shadow-lg'>
     <div className='rounded-full '>
     <img src={users?.img} alt="" className='w-full h-full'/>
     </div>
      <div className='flex justify-center items-center '>
      <div className='text-gray-800'>
      <p className='flex justify-center items-center text-3xl font-semibold leading-[1.5] uppercase mt-2'>{users?.firstName} {users?.lastName}</p>
      
      <p className='flex justify-center items-center leading-8 text-lg'>{users?.phone}</p>
      <p className='flex justify-center items-center leading-8 text-lg'>{users?.email}</p>
      <p className='flex justify-center items-center leading-8 text-lg'>{users?.address}</p>
      <p className='flex justify-center items-center leading-8 text-lg'>Balance Payment : {users?.totalPayment}</p>
      </div>
      </div>
      </div>
      <div className='border shadow-lg px-4'>
            <div>
                <div className='flex justify-between items-center py-4 '>
                <p className='text-xl font-bold '>DEPOSITE DETAILS</p>
               <div className='flex items-center gap-4'>
               <p className='text-xl font-semibold'>
                  <button className='bg-[#7d3bf0] text-white rounded-sm px-4 py-2 rounded-lg' onClick={()=>setDisplay("Deposite")}>Deposite</button>
                </p>
                <p className='text-xl font-semibold'>
                  <button className='bg-[#7d3bf0] text-white rounded-sm px-4 py-2 rounded-lg' onClick={()=>setDisplay("WithDraw")}>WithDraw</button>
                </p>
               </div>
                </div>
                  <table className="border-collapse border w-full mt-4 text-lg">
  <thead>
    <tr>
      <th className="border px-10 py-4">S.NO</th>
      <th className="border px-10 py-4">Date</th>
      <th className="border px-10 py-4">Type</th>
      <th className="border px-10 py-4">Amount</th>
      <th className="border px-10 py-4">Total</th>
    </tr>
  </thead>
  <tbody>
   {users?.depositeDetails.map((value)=>{
      return <>
       <tr>
      <td className="border px-10 py-3">{value.sno}</td>
      <td className="border px-10 py-3">{value.date}</td>
      <td className="border px-10 py-3">{value.status}</td>
      <td className="border px-10 py-3">$ {value.amount}</td>
      <td className="border px-10 py-3">$ {value.balance}</td>
    </tr>
      </>
   })}
  
  </tbody>
</table>

            </div>
            <div className={`${display == "Deposite" ? "block" : "hidden"}`}>
                  <DepositeForm display = {display} setDisplay={setDisplay} />
            </div>
            <div className={`${display == "WithDraw" ? "block" : "hidden"}`}>
                  <WithDraw display = {display} setDisplay={setDisplay} />
            </div>
      </div>
    </div>
    </div>
  )
}

export default UserDetails