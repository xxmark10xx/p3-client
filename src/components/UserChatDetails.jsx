export default function UserChatDetails({ name }) {
  return (
    <>
      <div className="user-chat-detail-wrapper">
        {/* <img src="" alt="" /> */}
        <div className="user-chat-detail-name=wrapper">
          <h4 className="user-chat-detail-name">{name}</h4>
        </div>
      </div>
    </>
  )
}