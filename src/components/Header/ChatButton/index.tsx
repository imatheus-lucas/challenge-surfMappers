import React from 'react'
import { Container, Badge } from './styles'

import Ionicons from 'react-native-vector-icons/Ionicons'
export default function ChatButton() {
    return (
        <Container>
            <Ionicons name="md-chatbubbles-outline" size={30} color="#565656" />
            <Badge />
        </Container>
    )
}
