export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <div>
          <img
            className="message-img"
            src="https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512"
            alt="" />
          

        </div>
        <p className="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="message-bottom">@roman</div>
      <div className="message-bottom">1 hour ago</div>
    </div>
  )
}