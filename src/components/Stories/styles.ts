import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    height: 150px;
    /* margin-bottom: 50px; */
`

export const AddStory = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`
export const IconContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    border-radius: 32px;
    border: 2px solid #007aff;
`
export const AddStoryText = styled.Text`
    color: #007aff;
`
export const Image = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 50px;
    border: 2px solid #007aff;
`
export const Story = styled.View`
    justify-content: center;
    align-items: center;

    margin: 0 5px;
`
export const StoryText = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail'
})`
    width: 80px;
`
