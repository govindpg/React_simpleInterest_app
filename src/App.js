import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [pamount,setPamount]=useState(0)
  const [interest,setInterest]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)
  const  [ispamount,setispamount]=useState(true)
  const [israte,setisrate]=useState(true)
  const[isyear,setisyear]=useState(true)

  const getValidate=(e)=>{
   const {name,value}=e.target
  //  console.log(name,value);
  //  setPamount(value)
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){

    if(name==='principle'){
      setPamount(value)
    setispamount(true)
    }else if(name==='rate'){
      setRate(value)
      setisrate(true)
    }else if(name==='year'){
      setYear(value)
      setisyear(value)
    }
    
  }else{
    if(name==='principle'){
      setPamount(value)
    setispamount(false)
    }else if(name==='rate'){
      setRate(value)
      setisrate(false)
    }else if(name=='year'){
      setYear(value)
      setisyear(false)

    }
    
  }
  }

  const handle=(e)=>{
    e.preventDefault();
    if(pamount || year ||rate){
      
      setInterest(pamount*rate*year/100)
    }else{
      alert("plese full")
    }
  }

  const handlereset=(e)=>{
    setPamount(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    setispamount(true)
    setispamount(true)
    setisrate(true)
  }
  return (
    <div className="App">
      <div className='d-flex justify-content-center align-items-center bg-dark w-100' style={{height:'100vh'}}>

     <div className='bg-light p-5 rounded text-center'>
       <h1  >simple interest</h1>
       <p>calculate simple interest easily </p>
      <div className='bg-warning d-flex justify-content-center align-items-center flex-column p-4 shadow '>
        <h1>₹ {' '}{interest}</h1>
        <p>total simple interest</p>

       </div>
       {/* formtag */}
       <div>
        <form onSubmit={handle} className='mt-5'>
          <div className='mb-3'>
          <TextField onChange={(e)=>getValidate(e)} name='principle' value={pamount ||""} className='w-100' id="outlined-basic" label="₹ Principle amount" variant="outlined" />
          </div>
          { !ispamount &&
            <div>
            <p className='text-danger text-start'>*invalid charecter</p>
          </div>
          }
          

          <div className='mb-3'>
          <TextField onChange={(e)=>getValidate(e)} name='rate'  value={rate ||""} className='w-100' id="outlined-basic" label="Rate of Interest {p.a} %" variant="outlined" />
          </div>
          { !israte &&
            <div>
            <p className='text-danger text-start'>*invalid charecter</p>
          </div>
}
          <div className='mb-3'>
          <TextField onChange={(e)=>getValidate(e)} name='year' value={year ||""} className='w-100'  id="outlined-basic" label="Year(yr)" variant="outlined" />
          </div>
          { !isyear &&
            <div>
            <p className='text-danger text-start'>*invalid charecter</p>
          </div>
}

          {/* button */}
          <Stack direction="row" spacing={2}>
          <Button type='submit' disabled={ispamount && israte && isyear?false:true} style={{width:'200px',backgroundColor:'black',color:'white'}} variant="contained">Calculate</Button>
          <Button onClick={handlereset}  style={{width:'200px'}} variant="outlined">Reset</Button>
           
          </Stack>


          {/* button end */}

        </form>
       </div>
       {/* form tag end */}


     </div>

      </div>

     

    </div>
  );
}

export default App;
