import { Link } from "react-router-dom"
export function Navbar() {
    return (
        <nav>
            <h1>Happy Pet</h1>
            <div className="buttonsDiv">
                <Link to='/'>Home</Link>
                <Link to='about/'>about</Link>
                <Link to='signup/'>sign up</Link>
                <Link to='signin/'>sign in</Link>

            </div>
        </nav>
    )
}