
import { useState } from "react"
import Form from "./components/Form"
import ContactCard from "./components/ContactCard"

const App = () => {
  const [allUsers, setAllUsers] = useState([])
  const [allEmails, setAllEmails] = useState([])

  return (
    <>
      <Form allUsers={allUsers} setAllUsers={setAllUsers} allEmails={allEmails}  setAllEmails= {setAllEmails}/>
      <ContactCard users={allUsers} emails={allEmails} />
    </>
  )
}

export default App




