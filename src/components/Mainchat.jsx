import { useState } from "react"
import axios from "axios"
import Message from "./Message"

export default function Mainchat() {

  const [form, setForm] = useState('')


  const imgs = [
    {
      roman: 'https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512'
    },
    {
      andy: 'https://ca.slack-edge.com/T0351JZQ0-U02UNC9M6V6-f8aceacf7a0a-512'
    },
    {
      mark: 'https://ca.slack-edge.com/T0351JZQ0-U02V9LH1XM1-69d0c65cf49d-512'
    },
  ]

  console.log(imgs[0].roman)
  const handleSubmitTimeline = async (e) => {
    e.preventDefault()


    //********** theres a bug here **********
    // try {
    //   const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/timeline/addmessage`, form)
    //   console.log(response)
    // } catch (error) {
      
    // }
    console.log(form)
  }

  return (
    <div className="main-chat-wrapper">
      <div className="main-chat-inner-wrapper">
        <div className="form-post">
          <div className="convo">
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
          </div>
          <form className="room-submit-form" onSubmit={handleSubmitTimeline}>
              <label htmlFor="content"></label>
              <input className="chat-form-content shadow"
                type="text"
                name="content"
                  value={form.content}
                  placeholder="What's on your mind?"
                onChange={(e) => { setForm(e.target.value) }}
                id="content"
              />
              <input className="chat-submit-btn shadow" type="submit" />
            
          </form>
        </div>
      </div>
    </div>
  )
}