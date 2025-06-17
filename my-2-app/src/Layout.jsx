// src/Layout.jsx
import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';

function Layout() {
  const { value } = useContext(AppContext);
  
  function formHandler(event){
    event.preventDefault();
  const obj={
    name:event.target.name.value,
    email:event.target.email2.value,
    tel:event.target.telp.value,
    number:event.target.NUMBER.value,
    Gender:event.target.gender.value,
    file: event.target.fileUpload.files[0]?.name,
    agree: event.target.agree.checked
  }
      console.log("form value:",obj);
    }
    
  return (
    <>
      <h1>This is a layout, context value = {value}</h1>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="ENTER NAME" name="name"></input>
        <input type="email" placeholder="ENTER email" name="email2"></input>
        <input type="tel" placeholder="ENTER TELEPHONE" name="telp"></input>
        <input type="number" placeholder="ENTER NUMBER" name="NUMBER"></input>
        <input type="radio"   value="male" name="gender"></input><h1>MALE</h1>
        <input type="radio"  value="female" name="gender"></input><h1>FEMALE</h1>
        
        <input type="file" name="fileUpload" />
  <br />
  
  <label>
    <input type="checkbox" name="agree" /> I agree to terms
  </label>
        
        <button>SUBMIT</button>
      </form>
    </>
  );
}

export default Layout;
