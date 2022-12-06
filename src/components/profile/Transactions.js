import {React, useState} from "react";
import TransactionCell from "./TransactionCell";

const Transactions=({ amount, Ttype, Tdate,Tdesc })=>{
  return(
    <>
        <TransactionCell
            amount={amount}
            Ttype={Ttype}
            Tdate={Tdate}
            Tdesc={Tdesc}
        /> 
    </>
   )    
}

export default Transactions;