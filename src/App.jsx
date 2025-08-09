import { useState,useEffect } from 'react'

import './App.css'
import Input from './components/input';
import currencyConverter from './hooks/currencyConverter';

function App() {
  const [amount,setAmount]=useState("");
  // const [currencyType,setcurrencyType]=useState('inr');
  const [convertedamount,setconverterdamount]=useState(0);
  const [from,setFrom]=useState('inr');
  const [to,setTo]=useState('usd');
  const backgroundImage='https://images.pexels.com/photos/14832158/pexels-photo-14832158.jpeg'

  const data=currencyConverter(from);
  const currencyList=Object.keys(data);
  const [message,setmessage]=useState("");
  const convert=(amount)=>{
    // console.log(data[to])
    setconverterdamount(amount*data[to]);
  }
   const swap=()=>
    {
      const prevfrom=from;
      const prevto=to;
      const prevconvertedamount=convertedamount;
      const prevamount=amount;
    setAmount(prevconvertedamount)
    setconverterdamount(prevamount);
    setFrom(prevto);
    setTo(prevfrom);
    
   }
  
   const [forOutput,setforOutput]=useState("");
   useEffect(()=>{
    return convert(amount)
   },[forOutput])

   
  
  
   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
               backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // convert(amount);
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                currencyList={currencyList}
                                amount={amount}
                                currencyType={from}
                                amountInput={false}
                                oncurrenyChange={(currencyType)=>{
                                  // console.log(currencyType);
                                 return setFrom(currencyType)
                                }}
                                onamountChange={(amt) =>{
                                  // console.log(amt);
                                  convert(amt)
                                  return setAmount(amt);
                                } }
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                currencyList={currencyList}
                                amount={convertedamount}
                                currencyType={to}
                                amountInput={true}
                                oncurrenyChange={(currencyType)=>{
                                  setforOutput(currencyType);
                                  return setTo(currencyType)
                                  
                                }}
                               
                            />
                        </div>
                        <button
                        onClick={()=>setmessage("Live ho rha hai Click mat kar")} 
                        type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </form>
                     <h3 className='text-2xl text-blue-900 px-1.5'>{message}</h3>
                </div>
               
            </div>
        </div> 
    );
}

export default App
 