import { useState } from "react"
import axios from "axios"

export default function Mainchat() {

  const [form, setForm] = useState('')


  const handleSubmitTimeline = async (e) => {
    e.preventDefault()


    // try {
    //   const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/timeline/addmessage`, form)
    //   console.log(response)
    // } catch (error) {
      
    // }
    console.log(form)
  }

  return (
    <div>
      <h5>Hello from main chat</h5>
      <form onSubmit={handleSubmitTimeline}>
        
        <label htmlFor="content">your message</label>
        <input
          type="text"
          name="content"
          value={form.content}
          onChange={(e) => { setForm(e.target.value) }}
          id="content"
        />

        <input type="submit" />
        
      </form>
    </div>
  )
}