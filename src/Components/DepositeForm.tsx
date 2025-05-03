
import { useFormik } from "formik";
import { RootState, AppDispatch } from '../Store';
import { useDispatch, useSelector } from 'react-redux';
import {  deposite } from "../Slices/UserData";
import { FaXmark } from "react-icons/fa6";

interface LoginFormValues {
  amount: number;
  passkey: number;
}

const  DepositeForm = ({setDisplay}) => {
      const users = useSelector((state: RootState) => state.userData);
            console.log(users)
            const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      amount:0,
      passkey:0,
    },
    onSubmit: (values) => {
      console.log("Login submitted", values);
      formik.resetForm()
      dispatch(deposite(values))
     
    },
  });
  return (
    <div className="flex justify-center items-center w-full h-full mt-10 ">
      <div className="flex justify-center items-center relative">
        <div className="">
          <div className="border shadow-lg p-4 rounded-md">
            <p className="flex justify-center bg-[#7d3bf0] text-2xl text-white py-3 rounded-md">
              Deposite Form
              
            </p>
            
            <form onSubmit={formik.handleSubmit}>
              <div>
                <p className="flex items-center justify-between text-xl font-semibold gap-6 mt-10  text-gray-800">
                  <label htmlFor="amount">amount : </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                  
                    onChange={formik.handleChange}
                    value={formik.values.amount}
                    className="rounded-sm border-b border-black text-left py-2 px-2"
                  />
                </p>
                <p className="flex items-center justify-between text-xl font-semibold gap-6 mt-10 text-gray-800">
                  <label htmlFor="passkey">passkey : </label>
                  <input
                    id="passkey"
                    name="passkey"
                    type="passkey"
                    onChange={formik.handleChange}
                    value={formik.values.passkey}
                    className="rounded-sm border-b border-black text-left py-2 px-2"
                  />
                </p>
              </div>
              <div className="mt-10">
                <p className="flex justify-center items-center ">
                  <button
                    type="submit"
                    className="flex justify-center items-center border px-6 py-2 bg-[#7d3bf0] text-white rounded-md font-semibold"
                  >
                    SUBMIT
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
        <p className="absolute top-0 right-0 rounded-full p-2 bg-red-500" onClick={()=>setDisplay(false)}><FaXmark size={25} /></p>
      </div>
    </div>
  );
};


export default DepositeForm