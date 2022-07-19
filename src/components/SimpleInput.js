import { useState} from "react";
import '../index.css';
const SimpleInput = (props) => {
  const [enteredName,setEnteredName]=useState("");
  const [enteredNameTouched,setEnteredNameTouched]=useState(false);
  const enteredNameIsValid=enteredName.trim()!=='';
  const nameInputIsInvalid=!enteredNameIsValid && enteredNameTouched;
  let formIsValid=false;
    if(enteredNameIsValid){
        formIsValid=true;
    }
    const nameInputChangeHandler=event=>{
      setEnteredName(event.target.value);

  }
  const nameInputBlurHandler=(event)=>{
      setEnteredNameTouched(true);

  }
  const forSubmissionHandler=event=>{
      event.preventDefault();
      setEnteredNameTouched(true);
      if (!enteredNameIsValid){
          return;
      }

      console.log(enteredName);
      setEnteredName('');
      setEnteredNameTouched(false);
  }
  const nameInputClasses=nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    return (
    <form onSubmit={forSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
               type='text'
               id='name'
               onChange={nameInputChangeHandler}
               value={enteredName}
               onBlur={nameInputBlurHandler}
        />
          {nameInputIsInvalid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
