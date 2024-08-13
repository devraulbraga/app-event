import { Header } from "../../components/header";
import { Highlight } from "../../components/highlight";
import { Container } from "./styles";

export function Home(){
    return (
        <Container>
            <Header/>
            <Highlight
            title="Seus eventos"
            subtitle="clique no evento ou crie um"
            />
        </Container>
    )
}