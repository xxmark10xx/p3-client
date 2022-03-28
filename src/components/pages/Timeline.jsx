import { useState, useEffect } from "react"
import Aside from "../Aside";
import Mainchat from "../Mainchat";


export default function Timeline({ currentUser }) {

  const [timelineMessages, setTimelineMessages] = useState(null)

  useEffect(() => {
		
	});

  return (
    <>
      <div className="timeline-wrapper">
        <Aside currentUser={currentUser}/>
      </div>
      <div className="timeline-wrapper-rightside">
        <Mainchat currentUser={currentUser}/>
      </div>
    </>   
  )
}

