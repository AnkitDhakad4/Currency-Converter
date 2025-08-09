import {useState,useEffect} from 'react'

// let dataa;
// let currency="inr"
// let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
//         fetch(`${url}`).then((res)=> {return res.json();})//ye url se jo res me  string aayi hai use json me badalne ke liye
//         .then((res)=>{//yha res ek json file hi rahega
//             dataa=res[currency]
//             console.log(dataa)//yahi sahi se print hoga kyuki fetch ek asynchronous hai toh catch ke baad likhne par yah jaldi execute ho jayega
//         }).catch(()=>{
//             console.log("error hai bhai")
//         })
        

function currencyConverter(currency)
{
    //ye useEffect use kiya bcz ye jab bhi koi chij mount(DOM me add )karni hoti hai tab trigger hota hai
    const [data,setData]=useState({})//ye tab use karte hai jab vars me changes detect karne hote hai
    useEffect(()=>{
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        fetch(`${url}`).then((res)=> res.json())//ye url se jo res me  string aayi hai use json me badalne ke liye
        .then((res)=>{//yha res ek json file hi rahega
            setData(res[currency])        
        })

    },[currency])
    // console.log(data);
    return data;
}

export default currencyConverter;

