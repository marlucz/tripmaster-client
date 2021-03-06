import styled, { css } from 'styled-components';

import EditItems from 'components/EditItems/EditItems';

import {
    breakpoints,
    color,
    gradient,
    shadow,
    pinColor,
} from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 25% min-content 1fr;
    padding: 0.5rem 0;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};

    &:last-of-type {
        overflow: hidden;
    }

    @media ${breakpoints.md} {
        padding-bottom: 1.5rem;
        grid-template-columns: 18% min-content 1fr;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        padding-bottom: 1rem;
        padding-left: 1rem;
        grid-template-columns: 25% min-content 1fr;
    }
`;

export const StyledDetails = styled.div`
    position: relative;

    @media ${breakpoints.md} {
        padding-top: 0.3rem;
    }
`;

export const StyledHeader = styled.h3`
    font-size: 1.6rem;
    color: ${({ status }) => pinColor[status]};

    @media ${breakpoints.md} {
        margin-bottom: 0.3rem;
    }
`;

export const StyledDescription = styled.div`
    max-height: 0;
    opacity: 0;
    transition: all 0.35s 0.2s linear;
    overflow: hidden;

    ${({ collapsed }) =>
        !collapsed &&
        css`
            max-height: 100%;
            opacity: 1;
            transition: all 0.35s 0.2s linear;
        `}
`;

export const StyledSpan = styled.span`
    color: ${color.grayDark};
    line-height: 1.6;

    @media ${breakpoints.md} {
        font-size: 1.6rem;
    }
`;

export const StyledEditItems = styled(EditItems)`
    flex-direction: row;
    justify-content: flex-end;
`;
