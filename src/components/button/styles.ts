import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonStyleProps;
}


export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.BLUE : theme.COLORS.RED_DARK};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`