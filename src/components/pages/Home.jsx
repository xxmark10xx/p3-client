import SignupLogin from "../layout/SignupLogin"
import Welcome from "../layout/Welcome"
import Mainchat from "../Mainchat"
import BasicSpeedDial from "../BasicSpeedDial"

export default function Home({ currentUser, setCurrentUser }) {
    return (
        <>
            <div className="home-wrapper">
                <Welcome />
                <SignupLogin
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                />
            </div>
            <div className="home-wrapper-rightside">
                <Mainchat currentUser={currentUser} />
            </div>
        </>
    )
}
