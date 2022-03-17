export default function Failure(){
    return (
        <Result>
            <Status>
                <img src="./assets/sad.png"/>
                PUTZ!
                <Text>Ainda faltaram alguns... Mas não desanime!</Text>
            </Status>
        </Result>
    );
}

const Result = styled.div`

`

const Status = styled.div`

`

const Text = styled.h1`

`