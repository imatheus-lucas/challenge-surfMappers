import React from 'react'
import { Container, Badge } from './styles'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function CartButton() {
    return (
        <Container>
            <MaterialCommunityIcons
                name="cart-outline"
                size={30}
                color="#565656"
            />
            <Badge />
        </Container>
    )
}
