import { useState, useEffect } from "react"
import Aside from "../Aside";
import Mainchat from "../Mainchat";


export default function Timeline() {

  const [timelineMessages, setTimelineMessages] = useState(null)

  useEffect(() => {
		
	});

  return (
    <div>
      <h2>HEllo timeline</h2>
      <div className="timeline-wrapper">
        <Aside />
        <Mainchat />
      </div>
    </div>   
  )
}

