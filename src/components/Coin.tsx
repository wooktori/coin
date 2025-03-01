import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding: 0 20px;
`;
const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
    text-align: center;
    display: block;
`;

export default function Coin() {
    const { coinId } = useParams();
    const { state } = useLocation();
    const [loading, setLoading] = useState(true);
    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}
        </Container>
    );
}
