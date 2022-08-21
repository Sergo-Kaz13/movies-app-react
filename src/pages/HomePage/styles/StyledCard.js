import styled from 'styled-components/macro';

import { StyledLink } from '../../../components/Link';

const maxWidth = '50rem';
const borderRadius = '0.5rem';
const borderWidth = '0.2rem';

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

    &:hover {
        &::before {
            background-color: ${props => props.theme.darkColors[800]};
            cursor: pointer;
        }

        ${StyledLink} {
            opacity: 1;
        }
    }

    ${StyledLink} {
        border: ${borderWidth} solid ${props => props.theme.lightColors[500]};
        color: ${props => props.theme.lightColors[500]};
        padding: ${props => props.theme.padding.sm};
        text-decoration: none;
        opacity: 0;
        position: relative;
        z-index: 1;
        transition: opacity 300ms ease, color 150ms ease,
            border-color 150ms ease;

        &:hover {
            color: ${props => props.theme.secondaryClr};
            border-color: ${props => props.theme.secondaryClr};
        }
    }
`;
