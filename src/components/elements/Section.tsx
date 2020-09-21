import React from "react";
import styled, {css} from "styled-components";

interface Margin {
    top: string;
    bottom: string;
}

export const SectionMargin: Margin = {
    top: "0",
    bottom: "1.5rem",
};

const StyledSection = styled.section<any>`
    transition: background-color 0.2s;
    position: relative;
    min-height: calc(32px + 0.6rem);
    background-clip: content-box;
    :last-child {
        margin-bottom: 0;
    }
    ${({useWrapper}) =>
        !useWrapper &&
        css`
            min-height: calc(32px + 0.6rem + ${SectionMargin.bottom});
            margin-top: ${SectionMargin.top};
            padding-bottom: ${SectionMargin.bottom};
        `}
    ${({isEmpty, theme}) =>
        isEmpty &&
        css`
            background-color: ${theme.palette.red[0]};
        `}
    ${({hoverEffect, theme}) =>
        hoverEffect &&
        css`
            background-color: ${theme.palette.grey[1]};
        `}
`;

type Props = {
    className?: string;
    attributes: any;
    children?: React.ReactNode;
    useWrapper?: boolean;
    onMouseOver?: Function;
    onMouseEnter?: Function;
    onMouseLeave?: Function;
    hoverEffect?: boolean;
    isEmpty?: boolean;
    ref?: any;
};

const Section: React.FC<Props> = React.forwardRef((props, ref) => {
    const {
        attributes,
        className,
        children,
        useWrapper,
        onMouseOver,
        onMouseEnter,
        onMouseLeave,
        hoverEffect,
        isEmpty,
    } = props;

    const {id} = attributes;

    return (
        <StyledSection
            id={id}
            className={className}
            useWrapper={useWrapper}
            onMouseOver={onMouseOver}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoverEffect={hoverEffect}
            isEmpty={isEmpty}
            ref={ref}
        >
            {children}
        </StyledSection>
    );
});

export default Section;
