import React from "react";
import styled, {css} from "styled-components";

const StyledP = styled.p<any>`
    min-height: 18px;
`;

type Props = {
    attributes: any;
    children: any;
    onMouseEnter?: Function;
    onMouseLeave?: Function;
};

const P: React.FC<Props> = React.forwardRef(
    ({attributes, children, onMouseEnter, onMouseLeave}, ref) => {
        const {id, className} = attributes;
        return (
            <StyledP
                id={id}
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                title={id}
            >
                {children}
            </StyledP>
        );
    }
);

export default P;
