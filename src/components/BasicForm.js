import useInput from "../hooks/use-input";
const isNotEmpty=value=>value.trim()!=='';
const isEmail=value=>value.includes("@");
const BasicForm = (props) => {
    const{value:enteredFirstName,
        isValid:enteredFirstNameIsValid,
        hasError:firstNameInputHasError,
        valueChangeHandler:firstNameChangeHandler,
        valueBlueHandler:firstNameBlurHandler,
        reset:resetFirstNameInput
    } =useInput(isNotEmpty);
    const{value:enteredLastName,
        isValid:enteredLastNameIsValid,
        hasError:lastNameInputHasError,
        valueChangeHandler:lastNameChangeHandler,
        valueBlueHandler:lastNameBlurHandler,
        reset:resetLastNameInput
    } =useInput(isNotEmpty);
    const{value:enteredEmail,
        isValid:enteredEmailIsValid,
        hasError:emailInputHasError,
        valueChangeHandler:emailChangeHandler,
        valueBlueHandler:emailBlurHandler,
        reset:resetEmailInput
    } = useInput(isEmail);
    const firstNameClasses=firstNameInputHasError? 'form-control invalid' :"form-control"
    const lastNameClasses=lastNameInputHasError? 'form-control invalid' :"form-control"
    const emailNameClasses=emailInputHasError? 'form-control invalid' :"form-control"
    let formIsValid=false;
    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
        formIsValid=true;
    }
    const submitHandler=event=>{
        event.preventDefault();
        if (!formIsValid){
            return;
        }
        console.log('submitted');
        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    }
    return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text'
                 id='firstName'
                 value={enteredFirstName}
                 onChange={firstNameChangeHandler}
                 onBlur={firstNameBlurHandler}/>
            {firstNameInputHasError && <p className='error-text'>Please enter first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text'
                 id='lastName'
                 value={enteredLastName}
                 onChange={lastNameChangeHandler}
                 onBlur={lastNameBlurHandler}/>
            {lastNameInputHasError && <p className='error-text'>Please enter last name</p>}

        </div>
      </div>
      <div className={emailNameClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email'
               id='email'
               value={enteredEmail}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler} />
          {emailInputHasError && <p className='error-text'>Please enter correct email</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
