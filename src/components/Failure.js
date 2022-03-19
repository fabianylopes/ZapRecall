import styled from "styled-components";

export default function Failure(){
    return (
        <Result>
            <>
                <img src="./assets/sad.png"/>
                PUTZ!
                <Text>Ainda faltaram alguns... Mas não desanime!</Text>
            </>
        </Result>
    );
}

const Result = styled.div`

`

const Status = styled.div`

`

const Text = styled.h1`

`