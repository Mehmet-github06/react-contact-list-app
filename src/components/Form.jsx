import React, { useState } from "react";


const objeBaslangic ={
    fullname: "",
    phone_number: "",
  }


const Form = ({addContacts,contatcs}) => {
  const [form, setForm] = useState(objeBaslangic);
   
  const{fullname, phone_number} = form;

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e)=>{
    e.preventDefault()

    if (fullname === "" || phone_number === ""){
        return false
    }

   addContacts([...contatcs,form])

    console.log(form)
/// reset için.....
    
   setForm(objeBaslangic)
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={fullname}
          required
        />
      </div>

      <div>
        <input
          type="number"
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={phone_number}
          required
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
