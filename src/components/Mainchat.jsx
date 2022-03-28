import { useState } from "react"
import axios from "axios"
import Message from "./Message"
import FormChatBar from "./FormChatBar"

export default function Mainchat({ currentUser }) {

  const [form, setForm] = useState('')

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

  // React scroll to End of a div

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