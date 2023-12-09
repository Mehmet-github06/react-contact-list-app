import { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'

const Contacts = () => {
 
const [contatcs, setContacts] = useState([
    {
        fullname:"mehmet doğan",
        phone_number:"12345",
    },
    {
        fullname:"ali celik",
        phone_number:"09876",
    },
    {
        fullname:"veli sahan",
        phone_number:"16475",
    }
    /// bu numaraları defaul olarak ekledik...
]);

useEffect(()=>{
    console.log(contatcs)
},[contatcs])

 
  return (
    <div>
      <List contatcs={contatcs}/>
      <Form addContacts={setContacts} contatcs={contatcs} />
    </div>
  )
}

export default Contacts
