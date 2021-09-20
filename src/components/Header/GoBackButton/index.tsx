import React from 'react'
import { Container, Text } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/core'

type GoBackButtonProps = {
    title: string
}
export default function GoBackButton({ title }: GoBackButtonProps) {
    const { goBack } = useNavigation()
    return (
        <Container onPress={goBack}>
            <MaterialCommunityIcons name="chevron-left" size={37} />
            <Text>{title}</Text>
        </Container>
    )
}
