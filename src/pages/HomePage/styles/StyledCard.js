import styled from 'styled-components/macro';

const maxWidth = '50rem';
const borderRadius = '0.5rem';

export const StyledCard = styled.div`
    max-width: ${maxWidth};
    background: url(${props => props.$imageUrl}) center / cover no-repeat;
    border-radius: ${borderRadius};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: ${borderRadius};
        transition: background-color 300 ease;
    }

    &:hover::before {
        background-color: ${props => props.theme.darkColors[800]};
        cursor: pointer;
    }
`;
