import { Container, Title, ButtonStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";


type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonStyleProps;
}

export function Button({title, type = "PRIMARY", ...rest}: Props){
    return (
        <Container type={type} {...rest} activeOpacity={0.7}>
            <Title>{title}</Title>
        </Container>
    )
}