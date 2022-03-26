import SignupLogin from "../layout/SignupLogin"
import Welcome from "../layout/Welcome"
import Mainchat from "../Mainchat"

export default function Home() {
  return (
    <>
    <div className="home-wrapper">
      <Welcome />
      <SignupLogin />
    </div>
    <div className="home-wrapper-rightside">
      <Mainchat />
    </div>
    </>
  )
}