import { NavLink } from 'react-router-dom';

import { Link } from '../Link';
import { StyledNavList, StyledNavItem } from './styles';

const LINKS = [
    {
        id: 1,
        url: '/',
        title: 'Home'
    },
    {
        id: 2,
        url: '/favorite',
        title: 'Favorite movies'
    },
    {
        id: 3,
        url: '/profile',
        title: 'Profile'
    },
    {
        id: 4,
        url: '/logout',
        title: 'Logout'
    }
];

export const NavBar = () => (
    <nav>
        <StyledNavList>
            {LINKS.map(({ id, url, title }) => (
                <StyledNavItem key={id}>
                    <Link as={NavLink} to={url}>
                        {title}
                    </Link>
                </StyledNavItem>
            ))}
        </StyledNavList>
    </nav>
);
