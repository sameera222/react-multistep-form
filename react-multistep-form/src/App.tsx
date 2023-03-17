import { FormEvent, useState } from 'react'
import './App.css'
import { useMultiStepForm } from './useMultiStepForm';
import {UserForm} from "./UserForm"
import { AccountForm } from './AccountForm';
import { AddressForm } from './AddressForm';

type FormData ={
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip:string,
  email: string,
  password:string
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip:'',
  email: '',
  password:''
}
function App() {
const[data, setData] = useState(INITIAL_DATA)
const {steps, currentStepIndex, step, isFirstStep, back, next, isLastStep} = useMultiStepForm([<UserForm {...data} updateFields={updateFields}/>,<AccountForm {...data} updateFields={updateFields}/>, <AddressForm {...data} updateFields={updateFields}/>])

const onSubmit = (e: FormEvent)=>{
e.preventDefault();

if(!isLastStep) return  next();
alert('successfull account creation');

}

function updateFields(fields: Partial<FormData>){
setData(prev=>{
  return {...prev, ...fields}
})
}
  return (
   <div style={{position:'relative', width: '50vw' ,height: '30vh',backgroundColor: 'white', border: "1px solid black", padding: '2rem', margin: '2rem', fontFamily:'Arial',borderRadius:'.5rem'}}>
     <form onSubmit={onSubmit}>
       <div style={{position:'absolute', top: '.5rem', right: '.5rem'}}>
        {currentStepIndex + 1 }/ {steps.length}
       </div>
       {step}
       <div style={{marginTop: '1rem', display: 'flex', gap: '.5rem', justifyContent: 'flex-end'}}>
        {!isFirstStep && 
         <button type='button' onClick={back}>Back</button>}
         <button type='submit'>
         {isLastStep ? 'Finish': 'Next'}
          </button>
       </div>
     </form>
   </div>
  )
}

export default App;

