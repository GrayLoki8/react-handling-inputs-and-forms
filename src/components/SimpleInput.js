import { useState} from "react";
import '../index.css';
const SimpleInput = (props) => {
  const [enteredName,setEnteredName]=useState("");
  const [enteredNameTouched,setEnteredNameTouched]=useState(false);
  const [enteredEmail,setEnteredEmail]=useState("");
  const [enteredEmailTouched,setEnteredEmailTouched]=useState(false);

    const enteredNameIsValid=enteredName.trim()!=='';
  const nameInputIsInvalid=!enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid=enteredEmail.includes('@');
  const enteredEmailIsInvalid=!enteredEmailIsValid && enteredEmailTouched;
  let formIsValid=false;
    if(enteredNameIsValid && enteredEmailIsValid){
        formIsValid=true;
    }
    const nameInputChangeHandler=event=>{
      setEnteredName(event.target.value);

  }
    const emailInputChangeHandler=event=>{
        setEnteredEmail(event.target.value);

    }
  const nameInputBlurHandler=(event)=>{
      setEnteredNameTouched(true);

  }
    const emailInputBlurHandler=(event)=>{
        setEnteredEmailTouched(true);

    }
  const forSubmissionHandler=event=>{
      event.preventDefault();
      setEnteredNameTouched(true);
      setEnteredEmailTouched(true);

      if (!enteredNameIsValid || !enteredEmailIsValid){
          return;
      }

      console.log(enteredName);
      setEnteredName('');
      setEnteredNameTouched(false);
      setEnteredEmail('');
      setEnteredEmailTouched(false);
  }
  const nameInputClasses=nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses=enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';
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
        <div className={emailInputClasses}>
            <label htmlFor='email'>Your Email</label>
            <input
                type='email'
                id='email'
                onChange={emailInputChangeHandler}
                value={enteredEmail}
                onBlur={emailInputBlurHandler}
            />
            {enteredEmailIsInvalid && <p className="error-text">Please enter a valid email.</p>}
        </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
