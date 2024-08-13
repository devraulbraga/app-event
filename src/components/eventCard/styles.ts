import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {Ticket} from 'phosphor-react-native'
export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 12px;
    border-radius: 6px;
`
export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`
export const Icon = styled(Ticket).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.BLUE,
}))`
    margin-right: 20px;
`