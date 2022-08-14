import { Input } from '../Input';
import { StyledWidthLimiter } from '../../styles';
import { StyledHeader } from './styles';

export const Header = () => (
    <StyledHeader>
        <StyledWidthLimiter>
            <Input type="text" name="search" placeholder="Search movies" />
        </StyledWidthLimiter>
    </StyledHeader>
);
