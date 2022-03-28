import { useState } from "react"
import axios from "axios"
import Message from "./Message"
import FormChatBar from "./FormChatBar"

export default function Mainchat({ currentUser }) {

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

  const showMessage = <div className="show-message-wrapper"><h4>Please log in or register to chat!</h4></div> 

  return (
    <div className="main-chat-wrapper">
      <div className="main-chat-inner-wrapper">
        <div className="form-post">
          <div className="people-online-wrapper">
            <div className="people-online-wrapper-details">
              <div className="dot-online"></div>
              <h4 className="people-online">42 Users online</h4>
            </div>
            <h4 className="people-online">Main Chatroom</h4>
          </div>
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
          {currentUser ? <FormChatBar handleSubmitTimeline={handleSubmitTimeline} setForm={setForm} form={form}/> : showMessage }
          
        </div>
      </div>
    </div>
  )
}