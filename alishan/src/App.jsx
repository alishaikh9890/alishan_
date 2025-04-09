

import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import Api from './hook/Api'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd");
  const [to , setTo] =useState("inr")
  const [conAmount, setConAmount] = useState(0)
 

  const data = Api(from)

  console.log(data[from])
  console.log(data[to])


  let options = Object.keys(data);
  console.log(options)

  function changeAmountFrom(e){
    let val = e.target.value
     setAmount(val)
     setConAmount(data[to]*val)
  }

  function changeAmountTo(e){
   let val = e.target.value
   setConAmount(val)
   setAmount(data[from]*val)
  }


  function convert(){
      setConAmount(data[to]*amount)
      setAmount(data[from]*amount)
  }


  function swap()
  {
    let am = amount;
    setAmount(conAmount)
    setConAmount(am)
  }

  return (
    <>

     <div className="w-4xl m-auto mt-50">
     <div className="border bg-slate-100 flex p-10 gap-20 mb-5">
        <InputBox changeAmount={changeAmountFrom} placeholder={from} amount={amount} />
        <select name="" id=""  onChange={(e) => setFrom(e.target.value)}  className='bg-amber-50 h-8'>
          {
            options.map((e) => (
              <option selected={e==from} value={e}>{e.toLocaleUpperCase()}</option>
            ))
          }
        </select>
      </div>
      <div className=" mb-5 text-center">
          <button onClick={swap} className='bg-blue-600 text-white px-2 py-1 rounded font-bold focus:bg-blue-900'>Swap</button>
      </div>
      <div className="border bg-slate-100 flex p-10 gap-20">
        <InputBox changeAmount={changeAmountTo} amount={conAmount}  placeholder={to} />
        <select name="" id="" onChange={(e) => setTo(e.target.value)} className='bg-amber-50 h-8'>
          {
            options.map((e) => (
              <option selected={e == to} value={e}>{e.toLocaleUpperCase()}</option>
            ))
          }
        </select>
      </div>
      <div className="border text-center bg-slate-100 flex p-10 gap-20">
          <button onClick={convert} className=' bg-slate-600 rounded text-white px-4 py-3 font-bold'>Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}</button>
      </div>
     </div>

    </>
  )

}

export default App
