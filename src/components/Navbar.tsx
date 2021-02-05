//styles
import {Nav, LinkContainer, Link, RightSide, LeftSide} from '../styled_components/Navbar.styles';
//translation
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const followers = "204.465.173";
    const { t, i18n } = useTranslation();

    return (
        <Nav >
            <RightSide>
                <Link className='nigel-logo' href="#home">Nigel</Link>
            </RightSide>
            <LeftSide >
                <LinkContainer className="links">
                    <Link href="#features">{t("followers")}: {followers}</Link>
                    <Link href="#about">{t("meet-nigel")}</Link>
                    <Link href="#registration">{t("sign-up")}</Link>
                </LinkContainer>
                <form >
                    <input type="text" placeholder="Search" className="search-on-page" />
                    <button >Search</button>
                </form>
            </LeftSide>
        </Nav>
    )
}
