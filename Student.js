import React, {useState} from 'react';
import start from './submit';

export default function Student(props) {
  const[name, setname]=useState('');
  const[contactno, setContactname]=useState('');
  const[email, setEmail]=useState('');
  const[address, setAddress]=useState('');
  const[dob, setdob]=useState('');
  const[genderM, setGenderM]=useState('');
  const[genderF, setGenderF]=useState('');

  const onChangeHandler=(event)=>{
  setname(event.target.value);
  }
   
  const onChangeHandler1=(event)=>{
  setContactname(event.target.value);
  }

   const onChangeHandler2=(event)=>{
  setEmail(event.target.value);
  }

  const onChangeHandler3=(event)=>{
  setAddress(event.target.value);
  }

  const onChangeHandler4=(event)=>{
  setdob(event.target.value);
  }

  const onChangeHandler5=(event)=>{
  setGenderM(event.target.value);
  }

  const onChangeHandler6=(event)=>{
  setGenderF(event.target.value);
  }
  
  return (
   
    <div className='studentprofile'>
      
      
      <form id='studentdata'>

        <h1>  Student Data {props.heading}</h1>
 
          <label>
            Name: <input type='text' name='name' value={name} onChange={onChangeHandler} placeholder='Maria Adil'/> <br/>
            Contact Number: <input type='text' name='num' value={contactno} onChange={onChangeHandler1}  placeholder='029384729'/> <br/>
            Email: <input type='email' name='email' value={email} onChange={onChangeHandler2} placeholder='mshad12@gmail.com'/> <br/>
            Address: <input type='text' name='address' value={address} onChange={onChangeHandler3} placeholder='st1 hyderbad'/> <br/>
            Date Of Birth: <input type='date' name='date' value={dob} onChange={onChangeHandler4} placeholder='12/10/02'/> <br/>

            </label>
            
          Gender: <br/> <input type="radio" name="male" value={genderM} onChange={onChangeHandler5}/>
          <label for="male">Male</label>
          <input type="radio" name="female" value={genderF} onChange={onChangeHandler6} />
          <label for="female">Female</label>
         <br/>
         <button type='submit' name='submit'id='submit' onClick={start()} >Submit</button>

        </form>
<br/>


        <div class="mb-3">
  <label for="formFile" >Add</label>
  <input  type="file" />
</div>
<div class="mb-3">
  <label for="formFileMultiple" >Delete</label>
  <input class="form-control" type="file"  multiple/>
</div>
<div class="mb-3">
  <label for="formFileDisabled" >Update</label>
  <input class="form-control" type="file" />
</div> 

<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
    
    
    
<div class="form-check">
<h3>Subjects</h3>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Mathematics
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Physics
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Chemistry
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Urdu
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
   Pak Studies
  </label>
</div>

    </div>
  );
  
};