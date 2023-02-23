import React,{useState} from 'react'
import './Calculator.css';

function Calculator ()  {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops=['/','*','+','-','.'];

const updateCalc=(value)=>{
    if(
        // === is value and data type
        ops.includes(value) && calc ==='' ||
        ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {
        return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
        // toString return a number as a string
        setResult(eval(calc+value).toString());
    }
}

const createDigits = ()=> {
    const digits=[];
    for(let i=1;i<10;i++){
        // push is used for add one or more elements to end of an array and return new length of an array
        digits.push(
            <button 
            onClick={()=> updateCalc(i.toString())} 
            key={i}>
                {i}
         </button>
        )
    }
    return digits;
}
const calculate =()=>{
    setCalc(eval(calc).toString());
}
const deleteLast=()=>{
    if(calc ==''){
        return;
    }
    const value=calc.slice(0,-1);
    setCalc(value);
}
  return (
    <div className='calculator'>
        <div className='display'>
            {result ? <span>({result})</span> : '' }
            {calc || "0"}
                </div>
<div style={{backgroundColor:'palevioletred'}} className='opertors'>
<button className='operators-button' onClick={()=>updateCalc('/')} >/</button>
<button className='operators-button' onClick={()=>updateCalc('*')} > * </button>
<button className='operators-button' onClick={()=>updateCalc('+')}> + </button>
<button className='operators-button' onClick={()=>updateCalc('-')}> - </button>

<button className='operators-button' onClick={deleteLast}> DEL </button>
</div>

<div className='digits'>
    { createDigits() }
<button onClick={()=>updateCalc('0')}>0</button>
<button onClick={()=>updateCalc('.')}>.</button>

<button onClick={calculate}>=</button>
</div>
</div>
  )
}

export default Calculator