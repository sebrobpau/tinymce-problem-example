import React from "react";
import styled, {css} from "styled-components";

interface IMargin {
    top: string;
    bottom: string;
}

/* export const H1Margin: IMargin = {
    top: "0.3rem",
    bottom: "0.3rem"
}; */

export const H1Margin: IMargin = {
    top: "0",
    bottom: "0"
};

const StyledH1 = styled.h1<any>`
    min-height: 30px;
    font-weight: 500;
    font-size: 1.5333333333rem;
    line-height: 30px;
    margin: 0;
    ${({useWrapper}) =>
        !useWrapper &&
        css`
            margin-top: ${H1Margin.top};
            margin-bottom: ${H1Margin.bottom};
        `}
`;

type Props = {
    attributes: any;
    children: any;
    useWrapper?: boolean;
    onMouseEnter?: Function;
    onMouseLeave?: Function;
    autoFocus: boolean;
};

const H1: React.FC<Props> = React.forwardRef(
    ({attributes, children, useWrapper, onMouseEnter, onMouseLeave}, ref) => {
        const {id} = attributes;
        return (
            <StyledH1
                id={id}
                useWrapper={useWrapper}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                title={id}
            >
                {children}
            </StyledH1>
        );
    }
);

export default H1;
