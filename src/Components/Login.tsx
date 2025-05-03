import React from "react";
import { useFormik } from "formik";
import { RootState, AppDispatch } from '../Store';
import { useDispatch, useSelector } from 'react-redux';
import { authentication } from "../Slices/UserData";

interface LoginFormValues {
  userName: string;
  password: string;
}

const Login = () => {
      const users = useSelector((state: RootState) => state.userData);
      
            console.log(users)
            const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Login submitted", values);
      formik.resetForm()
      dispatch(authentication(values))

    },
  });
  return (
    <div className="flex justify-center items-center w-full h-full mt-10 ">
      <div className="flex justify-center items-center">
        <div className="">
          <div className="border shadow-lg p-4 rounded-md">
            <p className="flex justify-center bg-[#7d3bf0] text-2xl text-white py-3 rounded-md">
              User Login
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <p className="flex items-center justify-between text-xl font-semibold gap-6 mt-10  text-gray-800">
                  <label htmlFor="userName">UserName : </label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                  
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                    className="rounded-sm border-b border-black text-left py-2 px-2"
                  />
                </p>
                <p className="flex items-center justify-between text-xl font-semibold gap-6 mt-10 text-gray-800">
                  <label htmlFor="password">Password : </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
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
      </div>
    </div>
  );
};

export default Login;
