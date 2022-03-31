import UserChatDetails from "./UserChatDetails"

export default function ChatDetails() {

  // here will have mapped users returning a user component

  return (
    <>
      <div className="aside-title-wrapper">
        <h2>users</h2>  
      </div>
      <div className="aside-component-content">
      <div className="chatdetails-main"> 
        {/* <div className="users-wrapper"> */}
        
          <div className="users">
              <UserChatDetails name={"Mark"}/>
              <UserChatDetails name={"Andy"}/>
              <UserChatDetails name={"Roman"}/>
              <UserChatDetails name={"April"}/>
              <UserChatDetails name={"Jason"} />
              <UserChatDetails name={"Taylor"} />
              <UserChatDetails name={"Weston"} />
            {/* </div> */}
          </div>
          </div>
      </div>
    </>
  )
}