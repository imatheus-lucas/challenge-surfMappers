import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import {
    Container,
    Image,
    Story,
    StoryText,
    AddStory,
    AddStoryText,
    IconContainer
} from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import api from '../../services/api'
// import { Container } from './styles';

const Stories = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        ;(async () => {
            const { data } = await api.get('/?results=20')
            console.log(data.results)
            setData(data.results)
        })()
    }, [])
    return (
        <Container>
            <AddStory>
                <IconContainer>
                    <MaterialCommunityIcons
                        size={27}
                        color="#007aff"
                        name="camera"
                    />
                </IconContainer>

                <AddStoryText>Adicionar</AddStoryText>
            </AddStory>

            {data.length > 0 &&
                data.map((element: any) => (
                    <Story>
                        <Image
                            resizeMode="cover"
                            source={{
                                uri: element.picture.large
                            }}
                        />
                        <StoryText>{`${element.name.title} ${element.name.first} ${element.name.last}`}</StoryText>
                    </Story>
                ))}
        </Container>
    )
}

export default Stories
