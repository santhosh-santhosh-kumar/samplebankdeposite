import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import maleImage from "../assets/users/male.png";
import femaleImage from "../assets/users/female.png";

interface Deposite {
      sno:number
  amount: number;
  date: string;
  balance: number;
  status:string
}

interface DetailsState {
  firstName: string;
  lastName: string;
  userName: string;
  userId: number;
  email: string;
  address: string;
  phone: number;
  password: string;
  img: string;
  totalPayment: number;
  depositeDetails: Deposite[];
  passkey: number;
}

interface UserSliceState {
  userDetails: DetailsState | null;
  isLogin: boolean;
  isPasskey: boolean;
}

const users: DetailsState[] = [
  {
    firstName: "User",
    lastName: "01",
    userName: "User01",
    userId: 1,
    email: "user01@gmail.com",
    address: "15/12,xxxxx,xxxxxx,xxxxxx,xxxxx",
    phone: 1234567890,
    password: "User01@01",
    totalPayment: 1000,
    img: maleImage,
    depositeDetails: [{ sno:1,  amount: 1000, date: "01/01/2025", balance: 1000,status:"deposite" }],
    passkey: 1234,
  },
  {
    firstName: "User",
    lastName: "02",
    userName: "User02",
    userId: 2,
    email: "user02@gmail.com",
    address: "15/12,xxxxx,xxxxxx,xxxxxx,xxxxx",
    phone: 1234567890,
    password: "User02@02",
    totalPayment: 2000,
    img: femaleImage,
    depositeDetails: [{ sno:1, amount: 2000, date: "01/01/2025", balance: 2000,status:"deposite" }],
    passkey: 1234,
  },
];

const initialState: UserSliceState = {
  userDetails: null,
  isLogin: false,
  isPasskey: false,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    deposite: (
      state,
      action: PayloadAction<{ amount: number; passkey: number }>
    ) => {
      const { amount, passkey } = action.payload;
      const now = new Date();
      const date = `${now.getDate().toString().padStart(2, "0")}/${(
        now.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${now.getFullYear()}`;
      console.log(
        "state.userDetails.passkey === passkey",
        state.userDetails.passkey,
        passkey
      );
      if (state.userDetails.passkey == passkey) {
            const lastBalance =state.userDetails.depositeDetails.length > 0
              ? state.userDetails.depositeDetails[state.userDetails.depositeDetails.length - 1].balance
              : 0;
              const newBalance = lastBalance + amount;

              let lastSno=state.userDetails.depositeDetails[state.userDetails.depositeDetails.length - 1].sno
            
        state.userDetails.depositeDetails.push({ amount, date,balance: newBalance,sno:++lastSno, status:"Deposite" });
        
        state.userDetails.totalPayment += amount;

        state.isPasskey = true;
        alert("Deposite Successfully");
      } else {
        state.isPasskey = false;
        alert("Wrong Passkey Please enter Correct Passkey");
      }
    },

    withDraw: (
      state,
      action: PayloadAction<{ amount: number; passkey: number }>
    ) => {
      const { amount, passkey } = action.payload;
      const now = new Date();
      const date = `${now.getDate().toString().padStart(2, "0")}/${(
        now.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${now.getFullYear()}`;
      console.log(
        "state.userDetails.passkey === passkey",
        state.userDetails.passkey,
        passkey
      );
      if (state.userDetails.passkey == passkey) {
            const lastBalance =state.userDetails.depositeDetails.length > 0
              ? state.userDetails.depositeDetails[state.userDetails.depositeDetails.length - 1].balance
              : 0;
              const newBalance = lastBalance - amount;
            //   if(newBalance){

            //   }

              let lastSno=state.userDetails.depositeDetails[state.userDetails.depositeDetails.length - 1].sno
            
        state.userDetails.depositeDetails.push({ amount, date,balance: newBalance,sno:++lastSno,status:"WithDraw" });
        
        state.userDetails.totalPayment -= amount;

        state.isPasskey = true;
        alert("WithDraw Successfully");
      } else {
        state.isPasskey = false;
        alert("Wrong Passkey Please enter Correct Passkey");
      }
    },

    authentication: (
      state,
      action: PayloadAction<{ userName: string; password: string }>
    ) => {
      const { userName, password } = action.payload;
      const user = users.find(
        (u) => u.userName === userName && u.password === password
      );
      if (user) {
        state.userDetails = user;
        state.isLogin = true;
        alert("Login Successfully");
      } else {
        state.userDetails = null;
        state.isLogin = false;
        alert("Invalid login. Try again, champ!");
      }
    },
  },
});

export const { deposite, authentication,withDraw } = userDataSlice.actions;
export const selectUserDetails = (state: { userData: UserSliceState }) =>
  state.userData.userDetails;
export const loginStatus = (state: { userData: UserSliceState }) =>
  state.userData.isLogin;
export const passkeyStatus = (state: { userData: UserSliceState }) =>
  state.userData.isPasskey;

export default userDataSlice.reducer;
