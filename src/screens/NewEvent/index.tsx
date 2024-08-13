import { BackButton } from "../../components/backIcon";
import { Button } from "../../components/button";
import { Highlight } from "../../components/highlight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";

export function NewEvent(){
    return (
        <Container>
           <BackButton />
           <Content>
             <Icon/>
             <Highlight
             title="Novo evento"
             subtitle="crie o evento para adicionar pessoas"
             />
             <Input placeholder="Nome do evento"/>
             <Button title="Criar"/>
           </Content>
        </Container>
    )
}