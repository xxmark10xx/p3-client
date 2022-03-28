export default function Message({ own, name, content, createdAt, avatar }) {
 
 
  return (
    // <div className={own ? "message own" : "message"}>
    <div className={"message"}>
      <div className="message-top">
        <div>
          <img
            className="message-img"
            src="https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512"
            alt="" />
          

        </div>
        <p className="message-text">{content}</p>
      </div>
      <div className="message-bottom">@{name}</div>
      <div className="message-bottom">{createdAt}</div>
    </div>
  )
}