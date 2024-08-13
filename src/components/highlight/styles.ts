import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 39px;
`
export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.WHITE};
`
export const Subtitle = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.WHITE};
`