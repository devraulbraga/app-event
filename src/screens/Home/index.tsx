import { FlatList } from "react-native";
import { EventCard } from "../../components/eventCard";
import { Header } from "../../components/header";
import { Highlight } from "../../components/highlight";
import { Container } from "./styles";
import { useState } from "react";
import { Button } from "../../components/button";
import { ListEmpty } from "../../components/listempty";

export function Home(){
    const [groups, setGroups] = useState<string[]>([])
    return (
        <Container>
            <Header />
            <Highlight
            title="Seus eventos"
            subtitle="clique no evento ou crie um"
            />
            <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <EventCard title={item}/>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={groups.length === 0 && {flex: 1}}
            ListEmptyComponent={() => 
                <ListEmpty message="Que tal criar o primeiro evento?"/>
            }
            />
            <Button title="Criar novo evento"/>
        </Container>
    )
}