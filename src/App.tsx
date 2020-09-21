import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {useSelector} from "react-redux";
import Document from "./components/Document";
import {resourceFetch} from "./redux/actions";

const Root = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    box-shadow: 0px 0px 24px 0px rgba(97, 97, 97, 0.5);
    display: flex;
    padding: 20px;
`;

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resourceFetch());
    }, []);

    return (
        <Root>
            <Container>
                <Document />
            </Container>
        </Root>
    );
};

export default App;
