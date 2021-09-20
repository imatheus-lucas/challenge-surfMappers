import React, { useEffect, useState } from 'react'

import {
    AlbumAmoutPhotos,
    AlbumButton,
    AlbumDetails,
    AlbumItem,
    AlbumList,
    AlbumText,
    Container,
    FilterButton,
    FilterButtonText,
    Header,
    ProfileChat,
    ProfileDetails,
    ProfileFollowingButton,
    ProfileImage,
    ProfileName,
    SharedButton,
    Wrapper,
    HeaderSubtitle,
    HeaderTitle,
    ProfileFollowingButtonText,
    AlbumContainer,
    AlbumItemContainer,
    PaddingWrapper,
    FilterButtonIcon
} from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import api from '../../services/api'
export default function Album() {
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
            <PaddingWrapper>
                <Header>
                    <Wrapper>
                        <HeaderTitle>Praia do Meio, Natal-RN</HeaderTitle>
                        <HeaderSubtitle>
                            Hoje, Sábado 17 abril 2021 07h ás 10h
                        </HeaderSubtitle>
                    </Wrapper>
                    <SharedButton>
                        <Ionicons
                            name="ios-share-social"
                            size={24}
                            color="#848484"
                        />
                    </SharedButton>
                </Header>
            </PaddingWrapper>
            <PaddingWrapper>
                <ProfileDetails>
                    <Wrapper
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <ProfileImage>
                            <Ionicons
                                name="ios-camera"
                                size={24}
                                color="#797979"
                            />
                        </ProfileImage>
                        <ProfileName>Manoel</ProfileName>
                    </Wrapper>
                    <Wrapper
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <ProfileChat>
                            <Ionicons
                                name="ios-chatbubbles"
                                size={24}
                                color="#797979"
                            />
                        </ProfileChat>
                        <ProfileFollowingButton>
                            <ProfileFollowingButtonText>
                                Seguindo
                            </ProfileFollowingButtonText>
                        </ProfileFollowingButton>
                    </Wrapper>
                </ProfileDetails>
            </PaddingWrapper>
            <PaddingWrapper>
                <AlbumDetails>
                    <AlbumAmoutPhotos>250 fotos</AlbumAmoutPhotos>
                    <FilterButton>
                        <FilterButtonIcon>
                            <MaterialCommunityIcons
                                name="filter"
                                size={18}
                                color="#fff"
                            />
                        </FilterButtonIcon>

                        <FilterButtonText>
                            Filtrar por surfista
                        </FilterButtonText>
                        <MaterialIcons
                            name="arrow-drop-down"
                            size={24}
                            color="#007aff"
                        />
                    </FilterButton>
                </AlbumDetails>
            </PaddingWrapper>
            <PaddingWrapper>
                <AlbumText>6h - 7h</AlbumText>
            </PaddingWrapper>
            <AlbumContainer>
                <AlbumList
                    data={data}
                    numColumns={3}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }: any) => (
                        <AlbumItemContainer>
                            <AlbumItem
                                resizeMode="cover"
                                source={{
                                    uri: item.picture.large
                                }}
                            />
                            <AlbumButton>
                                <MaterialIcons
                                    name="photo-library"
                                    size={18}
                                    color="#fff"
                                />
                            </AlbumButton>
                        </AlbumItemContainer>
                    )}
                />
            </AlbumContainer>
        </Container>
    )
}
