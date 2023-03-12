import { useState } from 'react'

const SignUp = () => {
    const [email , setEmail] = useState('') 
    const [emailValidated , setEmailValidated] = useState(false)

    const [password , setPassword] = useState('')
    const [passwordValidated , setPasswordValidated] = useState(false)

    const [confirmPassword , setConfirmPassword] = useState('')
    const [confirmPasswordValidated , setConfirmPasswordValidated] = useState(false)

    function validateEmail(email){
        // abhi.shek@gmail.com
        let index_of_at = email.indexOf('@') 
        let index_of_dot = email.lastIndexOf('.')
        return (index_of_at>0 && index_of_dot  && index_of_dot > index_of_at )
    }

    function validatePassword(password){
        return password.length >= 8
    }

    function validateConfirmPassword(password,confirmPassword){
        return password === confirmPassword
    }

    function handleEmailChange(e){
        let email_value = e.target.value
        setEmail(email_value)
        setEmailValidated(validateEmail(email_value))
    }

    function handlePasswordChange(e){
        let password_value = e.target.value
        setPassword(password_value)
        setPasswordValidated(validatePassword(password_value))
        
    }

    function handleConfirmPasswordChange(e){
        let confirmPassword_value = e.target.value
        setConfirmPassword(confirmPassword_value)
        setConfirmPasswordValidated(validateConfirmPassword(password,confirmPassword_value))
    }

    function handleSubmit(e){
        e.preventDefault() 

        if(emailValidated == true && passwordValidated && confirmPasswordValidated){
            alert('Form submitted successfully') 
        } 
        else{
            alert('Can’t submit the form')
        }
        
    }

    return(
           <form onSubmit ={handleSubmit}> 
              
              <div className = "form-group">
                       <label htmlFor="email"> Email </label>
                       <input 
                          type = "email" 
                          id = "email"
                          value = {email}
                          onChange = {handleEmailChange}
                          className = {emailValidated == true ? "is-valid" : "is-invalid"}
                       />
                       {emailValidated == true? null : <div className="errorMessage"> Please enter a valid email </div>}
               </div>

                <div className = "form-group">
                          <label htmlFor="password"> Password </label>
                            <input
                                type = "password"
                                id = "password"
                                value = {password}
                                onChange = {handlePasswordChange}
                                className = {passwordValidated == true ? "is-valid" : "is-invalid"}
                            />
                            {passwordValidated == true? null : <div className="errorMessage"> Password must be at least 8 characters long </div>}
                </div>

                <div className = "form-group">
                            <label htmlFor="confirm-password"> Confirm Password </label>
                            <input
                                type = "password"
                                id = "confirm-password"
                                value = {confirmPassword}
                                onChange = {handleConfirmPasswordChange}
                                className = {confirmPasswordValidated == true ? "is-valid" : "is-invalid"}
                            />
                            {confirmPasswordValidated == true? null : <div className="errorMessage"> Passwords do not match </div>}
                </div>

                 <button type = "submit" className = "btn"> Submit </button>

           

           </form>
    )




}


export default SignUp


// *Task -* Suppose you're building a form for users to create a new account on your website. You want to use useState to manage the state of the form inputs (e.g. email, password, confirm password). Validate the input fields through their onChange event methods.

// The form should have the following requirements:

// 1. The email input must be in a valid email address format.
// 2. The password input must be at least 8 characters long.
// 3. The confirm-password input must match the password input.
// 4. The submit button should give an alert when it is clicked, if all the 3 inputs are correct it should say form submitted successfully, if not the alert should say can’t submit the form.
// 5. Apart from the useStates of the input values, you’ll also have to create useStates for if the input value entered has been validated or not. If the email input is valid then make a green border around it, otherwise keep the border red and throw an error below it. 
// 6. The UI inspiration is given in the google drive video. 

// Write a React component that implements this form using useState, and includes error messages and input validation.

// UI Reference - https://drive.google.com/file/d/1aM-A7xw0Coc3cz4eBsqs-zHG7-wuO075/view?usp=sharing