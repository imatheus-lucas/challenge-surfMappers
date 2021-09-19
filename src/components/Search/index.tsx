import React from 'react'
import { View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Container, Input, InputContainer, Title, Bold } from './styles'

const Search = () => {
    return (
        <Container>
            <Title>
                Onde você <Bold>surfou hoje? </Bold>
            </Title>
            <InputContainer>
                <MaterialIcons name="search" size={27} color="#a9a9a9" />
                <Input
                    placeholder="Onde você surfou hoje?"
                    placeholderTextColor="#a9a9a9"
                />
            </InputContainer>
        </Container>
    )
}

export default Search
