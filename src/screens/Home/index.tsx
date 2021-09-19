import React from 'react'
import { Text, View } from 'react-native'
import Feed from '../../components/Feed'
import Search from '../../components/Search'
import Stories from '../../components/Stories'

import { Container } from './styles'

export default function Home() {
    return (
        <Container>
            <Stories />
            <Search />
            <Feed />
        </Container>
    )
}
