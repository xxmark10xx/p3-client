import React from "react"
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Message from "./Message"
import FormChatBar from "./FormChatBar"
// import jwtDecode from "jwt-decode"
import { io } from "socket.io-client"


export default function Mainchat({ currentUser }) {
  const [form, setForm] = useState({
    content: ''
  })
  
  const scrollRef = useRef()
  const [msgs, setMsgs] = useState([])

  useEffect(() => {
    if (currentUser) {
      
    }
    const setMessages = async () => {
      try { 
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/timeline`)
        // set the data from the server in state
        console.log(response.data.messages)
        setMsgs(response.data.messages)
      } catch (err) {
        console.log(err)
      }
    }
    setMessages()
  }, [])


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"})
    
  }, [msgs])
  
  const handleSubmitTimeline = async (e) => {
    e.preventDefault()
    
    const token = localStorage.getItem('jwt')
    
    const options = {
      headers: {
        'Authorization': token
      }
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/timeline/addmessage`, form, options)
      const socket = io("http://localhost:4004") // connection to the server with socket
      console.log("response from the client ", response)



      socket.on('connect', () => {
        // socket.emit('send-message', form.content) // working on trying to get an object back
        // socket.on("received-message", string => {
        //   console.log("from the client ", string)
        //   // setMsgs([...msgs, string])
        //   // msgs.push(string)
        // })
        // socket.emit("user-data", currentUser)
        // socket.on("received-data", data => {
        //   console.log("name from the client ", data.name)
        //   console.log("id from the client ", data._id)
        // })

        socket.emit("send user data", response.data)
        socket.on("revieved all data", allData => {
          console.log("this is user data ", allData)
          // what we need
          // author name
          console.log(`this should be name ${allData.user.user.name}`)
          // message content
          console.log(`this should be content ${allData.content}`)
          // message createdAt
          
          // message avatar
          
          // user _id
          // console.log(`this should be user_id ${allData.user.user._id}`)
          // currentUser 
          console.log(`this should be currentuser.id ${currentUser.id}`)
          // owned: true or false
          console.log(`t or f for owned property ${allData.user.user._id === currentUser.id}`)

          const newMessage = {
            author: {
              id: currentUser.id,
              name: allData.user.user.name
            },
            content: allData.content
          }
          console.log(newMessage)
          setMsgs([...msgs,newMessage])
        })


      })




    } catch (error) {
      console.log(error)
    }
  }
  
  
  const showMessage = <div className="show-message-wrapper"><h4>Please log in or register to chat!</h4></div> 
  
  const mappedMsgs = msgs.map((message, i) => {
    return <div 
    ref={scrollRef} 
    key={`message-${i}`}> 
    <Message 
    name={message.author.name} 
    content={message.content} 
    // createdAt={message.createdAt} 
    // avatar={message.avatar} 
    // userId={message.author._id} 
    // currentUser={currentUser} 
    own={currentUser ? message.author._id === currentUser.id : false}/>
    </div>
  })


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
            {mappedMsgs}
            {/* <Message />
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
            <Message /> */}
          </div>
          {currentUser ? <FormChatBar handleSubmitTimeline={handleSubmitTimeline} setForm={setForm} form={form}/> : showMessage }
          
        </div>
      </div>
    </div>
  )
}
