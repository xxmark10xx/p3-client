export default function UserChatDetails({ name }) {
  return (
    <>
      <div className="user-chat-detail-wrapper">
        {/* <img src="" alt="" /> */}
        <div className="user-chat-detail-name">
          <h4>{name}</h4>
        </div>
      </div>
    </>
  )
}