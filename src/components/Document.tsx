import React from "react";
import styled from "styled-components";
import InlineEditor from "./InlineEditor";
import {createEditable} from "../ts/createDocument";
import {data} from "../mockData";
import {useSelector} from "react-redux";

const Root = styled.div`
    width: 900px;
`;

const Document: React.FC = () => {
    // This works
    const {root: mockRoot, elements: mockElements} = data;
    const documentMock = createEditable(mockElements[mockRoot], mockElements);

   /*  const test = useSelector(state => state); */

    // Does not work
    /* const {root, elements} = useSelector((state: any) => state.document);
    const documentApi = createEditable(elements[root], elements);  */

    /* console.log(JSON.stringify(elements) === JSON.stringify(mockElements)); // Returns true */

    return (
        <Root>
            <InlineEditor />
            {documentMock}
        </Root>
    );
};

export default Document;
