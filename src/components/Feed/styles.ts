import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})``
export const Wrapper = styled.View``
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 5px;
`
export const Title = styled.Text.attrs({
    numberOfLines: 1,
    elipsisMode: 'tail'
})`
    font-size: 16px;
    color: #4da2ff;
    width: 280px;
    font-weight: bold;
`
export const Content = styled.TouchableOpacity`
    padding: 16px 0;
`
export const SubTitle = styled.Text`
    font-size: 14px;
    opacity: 0.5;
    margin-bottom: 10px;
`

export const Body = styled.View``
export const Image = styled.Image`
    height: 300px;
    width: 100%;
    border-radius: 10px;
`
export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
`
