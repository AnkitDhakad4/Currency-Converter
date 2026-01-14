import React from 'react'
 
function Input({
    label,
    currencyList=[],
    amount='0',
    onamountChange,//its a method (function)
    oncurrenyChange,
    currencyType,
    amountInput=true,

}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black font-bold mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountInput}
                    value={amount}
                    onChange={(e)=> onamountChange && onamountChange(e.target.value===""?"":Number(e.target.value))}//js string me value deti hai use number me convert karne ke liye
                    //pahle vala onamountchange  bta rha hai ki exist karta hai ki nahi
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currencyType}
                    onChange={(e)=> oncurrenyChange && oncurrenyChange(e.target.value)}
                >
                    {currencyList.map((it)=>(
                        // //remember the key in loops in react it inhances the  performance 
                        <option  key={it} 
                        value={it}>
                            {it}
                        </option>
                ))}
                       
                </select>
            </div>
        </div>
    )
}

export default Input
