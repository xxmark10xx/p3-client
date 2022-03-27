export default function FormChatBar({ handleSubmitTimeline, setForm, form }) {
  return (
    <>
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
    </>

  )
}