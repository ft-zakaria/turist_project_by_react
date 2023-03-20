import React from 'react';
import './form.css'

export default function Form() {

  return (
    <div className='container'>
    <div className="form__container">
        <h1>Sign Up</h1>

    <form action="#">
        <div class="control">
            <lebel for="name">Name</lebel>
            <input type="text" name="name" id="name" />
        </div>

        <div class="control">
           <lebel for="email">Email</lebel>
           <input type="email" name="email" id="email" />
        </div>

        <div class="control">
            <lebel for="name">Password</lebel>
            <input type="password" name="password" id="password" />
        </div>
          
        <div className='check'>
           <input type="checkbox" /> 
           <span>Remember me </span>
        </div>
      
        <div class="control">
            <input type="submit" value="login" />
        </div>
    </form>

    <div class="link">
        <a href="/"> Forgot Password ? </a>
    </div>
</div>
    </div>
  )
}
