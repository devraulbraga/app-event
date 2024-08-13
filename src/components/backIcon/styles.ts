import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {CaretLeft} from "phosphor-react-native"


export const Container = styled(TouchableOpacity)`
    width: 100%;
`
export const BackIcon = styled(CaretLeft).attrs(({ theme })=> ({
    size: 36,
    color: theme.COLORS.WHITE
}))``
