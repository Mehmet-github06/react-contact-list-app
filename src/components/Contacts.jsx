import { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'
import "./style.css";

const Contacts = () => {
 
const [contatcs, setContacts] = useState([
    {
        fullname:"mehmet doğan",
        phone_number:"5070064477",
    },
    {
        fullname:"ali celik",
        phone_number:"5364567328",
    },
    {
        fullname:"veli sahan",
        phone_number:"5324834670",
    }
    /// bu numaraları defaul olarak ekledik...
]);

useEffect(()=>{
    console.log(contatcs)
},[contatcs])

 
  return (
    <div id='container'>
        <h1><span>Call List</span></h1>
      <List contatcs={contatcs}/>
      <Form addContacts={setContacts} contatcs={contatcs} />
    </div>
  )
}

export default Contacts
