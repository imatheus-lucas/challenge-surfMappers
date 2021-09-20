import styled from 'styled-components/native'

export const Container = styled.View`
    background: #fff;

    flex: 1;
`
export const PaddingWrapper = styled.View`
    padding: 0 16px;
`
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
    padding: 18px 0;
`
export const HeaderTitle = styled.Text`
    font-weight: 900;
    font-size: 24px;
`
export const HeaderSubtitle = styled.Text`
    font-size: 14px;
    opacity: 0.6;
`
export const Wrapper = styled.View``
export const SharedButton = styled.TouchableOpacity`
    border: 1px solid #007aff;
    padding: 5px;
    border-radius: 10px;
`

export const ProfileDetails = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
    padding: 18px 0;
`
export const ProfileImage = styled.TouchableOpacity`
    border: 1px solid #007aff;
    padding: 5px;
    border-radius: 10px;
`
export const ProfileName = styled.Text`
    margin-left: 20px;
    font-weight: bold;
`
export const ProfileChat = styled.TouchableOpacity`
    border: 1px solid #007aff;
    padding: 5px;
    border-radius: 10px;
    margin-right: 20px;
`
export const ProfileFollowingButton = styled.TouchableOpacity`
    height: 37px;
    background: #007aff;
    align-items: center;
    justify-content: center;
    width: 100px;
    border-radius: 8px;
`
export const ProfileFollowingButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`

export const AlbumDetails = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
    padding: 18px 0;
`
export const AlbumAmoutPhotos = styled.Text`
    font-weight: 900;
    font-size: 16px;
    color: #007aff;
`
export const FilterButton = styled.TouchableOpacity`
    height: 37px;
    background: #c5eff9;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 16px;
    width: 230px;
    border-radius: 8px;
`

export const FilterButtonIcon = styled.TouchableOpacity`
    background: #007aff;
    border-radius: 20px;
    padding: 3px;
`
export const FilterButtonText = styled.Text`
    font-size: 14px;
    color: #007aff;
    font-weight: bold;
`

export const AlbumText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin: 16px 0;
`
export const AlbumList = styled.FlatList``
export const AlbumContainer = styled.View`
    flex: 1;
    justify-content: center;
`
export const AlbumItemContainer = styled.TouchableOpacity`
    flex: 1;
    flex-direction: column;
    margin: 1px;
`
export const AlbumItem = styled.Image`
    justify-content: center;
    align-items: center;
    height: 120px;
`
export const AlbumButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
    background: #4e9df2;
    padding: 5px;
    border-radius: 8px;
`
