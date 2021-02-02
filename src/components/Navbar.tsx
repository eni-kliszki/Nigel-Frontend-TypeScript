//styles
import {Nav, LinkContainer, Link, RightSide, LeftSide} from './Navbar.styles';

export const Navbar = () => {
    const followers = "204.465.173";

    return (
        <Nav >
            <RightSide>
                <Link className='nigel-logo' href="#home">Nigel</Link>
            </RightSide>
            <LeftSide>
                <LinkContainer className="links">
                    <Link href="#features">Followers: {followers}</Link>
                    <Link href="#about">Meet Nigel</Link>
                    <Link href="#registration">Sign Up</Link>
                </LinkContainer>
                <form >
                    <input type="text" placeholder="Search" className="search-on-page" />
                    <button >Search</button>
                </form>
            </LeftSide>
        </Nav>
    )
}
