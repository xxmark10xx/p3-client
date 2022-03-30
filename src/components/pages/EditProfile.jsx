import Aside from "../Aside"
import Mainchat from "../Mainchat"
import AsideToEditProfile from "../AsideToEditProfile"

export default function EditProfile({ currentUser, handleLogout }) {
  return (
    <>
      <div className="timeline-wrapper">
        <AsideToEditProfile currentUser={currentUser} handleLogout={handleLogout}/>
      </div>
      <div className="timeline-wrapper-rightside">
        <Mainchat currentUser={currentUser}/>
      </div>
    </>   
  )
} 