import React from 'react'
import { View } from 'react-native'

import {
    Container,
    Body,
    Image,
    Footer,
    Header,
    SubTitle,
    Title,
    Content,
    Button,
    Wrapper
} from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
const Feed = () => {
    const { navigate } = useNavigation()
    return (
        <Container>
            <Content onPress={() => navigate<any>('Album')}>
                <Header>
                    <Wrapper>
                        <Title>
                            Barra da Tijuca - Posto 6 - Rio de Janeiro
                        </Title>
                        <SubTitle>Sábado,17 abril 2021 - 07h ás 10h</SubTitle>
                    </Wrapper>
                    <Button>
                        <Ionicons
                            name="ios-ellipsis-vertical"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Header>
                <Body>
                    <Image
                        source={{
                            uri: 'https://www.olimpiadatododia.com.br/wp-content/uploads/2021/06/Filipe-Toledo-etapa-do-surf-ranch-do-mundial-de-surfe.jpeg'
                        }}
                    />
                </Body>
                <Footer>
                    <Button>
                        <Ionicons
                            name="ios-heart-outline"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                    <Button>
                        <Ionicons
                            name="ios-share-social"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Footer>
            </Content>
            <Content>
                <Header>
                    <Wrapper>
                        <Title>
                            Barra da Tijuca - Posto 6 - Rio de Janeiro
                        </Title>
                        <SubTitle>Sábado,17 abril 2021 - 07h ás 10h</SubTitle>
                    </Wrapper>
                    <Button>
                        <Ionicons
                            name="ios-ellipsis-vertical"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Header>
                <Body>
                    <Image
                        source={{
                            uri: 'https://www.olimpiadatododia.com.br/wp-content/uploads/2021/06/Filipe-Toledo-etapa-do-surf-ranch-do-mundial-de-surfe.jpeg'
                        }}
                    />
                </Body>
                <Footer>
                    <Button>
                        <Ionicons
                            name="ios-heart-outline"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                    <Button>
                        <Ionicons
                            name="ios-share-social"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Footer>
            </Content>
            <Content>
                <Header>
                    <Wrapper>
                        <Title>
                            Barra da Tijuca - Posto 6 - Rio de Janeiro
                        </Title>
                        <SubTitle>Sábado,17 abril 2021 - 07h ás 10h</SubTitle>
                    </Wrapper>
                    <Button>
                        <Ionicons
                            name="ios-ellipsis-vertical"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Header>
                <Body>
                    <Image
                        source={{
                            uri: 'https://www.olimpiadatododia.com.br/wp-content/uploads/2021/06/Filipe-Toledo-etapa-do-surf-ranch-do-mundial-de-surfe.jpeg'
                        }}
                    />
                </Body>
                <Footer>
                    <Button>
                        <Ionicons
                            name="ios-heart-outline"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                    <Button>
                        <Ionicons
                            name="ios-share-social"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Footer>
            </Content>
            <Content>
                <Header>
                    <Wrapper>
                        <Title>
                            Barra da Tijuca - Posto 6 - Rio de Janeiro
                        </Title>
                        <SubTitle>Sábado,17 abril 2021 - 07h ás 10h</SubTitle>
                    </Wrapper>
                    <Button>
                        <Ionicons
                            name="ios-ellipsis-vertical"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Header>
                <Body>
                    <Image
                        source={{
                            uri: 'https://www.olimpiadatododia.com.br/wp-content/uploads/2021/06/Filipe-Toledo-etapa-do-surf-ranch-do-mundial-de-surfe.jpeg'
                        }}
                    />
                </Body>
                <Footer>
                    <Button>
                        <Ionicons
                            name="ios-heart-outline"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                    <Button>
                        <Ionicons
                            name="ios-share-social"
                            size={24}
                            color="#000000"
                        />
                    </Button>
                </Footer>
            </Content>
        </Container>
    )
}

export default Feed
