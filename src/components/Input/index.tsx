import {TextInputProps} from "react-native"
import { Container } from "./styles"
import { useTheme } from "styled-components/native"
import { TextInput } from "react-native"

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}
export function Input({inputRef, ...rest }: Props){
    const {COLORS} = useTheme(); //Pegando as cores do tema de forma desestruturada
    return(
        <Container
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_500}
        {...rest}
        />
    )
}