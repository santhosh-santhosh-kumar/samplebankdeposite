
import { RootState, AppDispatch } from '../Store';
import { useDispatch, useSelector } from 'react-redux';
import DepositeForm from './DepositeForm';

const UserDetails = () => {
      const [display,setDisplay]=useState(false)
      const users = useSelector((state: RootState) => state.userData.userDetails);
      console.log(users)
  return (
    <div>
    <div className='flex justify-center gap-2 '>
    <div className='border p-4 '>
      <img src={users?.img} alt="" />
      <div className='flex justify-center items-center '>
      <div>
      <p className='flex justify-center items-center text-xl font-semibold'>{users?.firstName} {users?.lastName}</p>
      
      <p className='flex justify-center items-center'>{users?.phone}</p>
      <p className='flex justify-center items-center'>{users?.email}</p>
      <p className='flex justify-center items-center'>{users?.address}</p>
      </div>
      </div>
      </div>
      <div>
            <div>
                <div className='flex justify-between py-4 '>
                <p className='text-xl font-semibold'>Deposite Details</p>
                <p className='text-xl font-semibold'>
                  <button className='bg-[#7d3bf0] text-white rounded-sm px-4 py-2' onClick={()=>setDisplay(true)}>Deposite</button>
                </p>
                </div>
                  <table className="border-collapse border w-full mt-4">
  <thead>
    <tr>
      <th className="border px-10 py-2">S.NO</th>
      <th className="border px-10 py-2">Date</th>
      <th className="border px-10 py-2">Amount</th>
      <th className="border px-10 py-2">Total</th>
    </tr>
  </thead>
  <tbody>
   {users?.depositeDetails.map((value)=>{
      return <>
       <tr>
      <td className="border px-10 py-3">1</td>
      <td className="border px-10 py-3">{value.date}</td>
      <td className="border px-10 py-3">${value.amount}</td>
      <td className="border px-10 py-3">${users.totalPayment}</td>
    </tr>
      </>
   })}
  
  </tbody>
</table>

            </div>
            <div className={`${display ? "block" : "hidden"}`}>
                  <DepositeForm display = {display} setDisplay={setDisplay} />
            </div>
      </div>
    </div>
    </div>
  )
}

export default UserDetails