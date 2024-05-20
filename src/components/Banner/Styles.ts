import styled from "styled-components"

export const BannerDiv = styled.div<{ $isDarkTheme: boolean }>`
display: flex;
justify-content: space-between;
background-color: ${props => props.$isDarkTheme ? '#282E33' : '#D9D9D9'};
border: 1px solid #000000;
border-radius: 10px;
padding: 10px;
margin: 10px;
flex-flow: row wrap;
`

export const TextDiv = styled.div<{ $centeredText: boolean }>`
flex: 1;
text-align: ${props => props.$centeredText ? 'center' : 'left'};
`

export const TitleText = styled.div<{ $isDarkTheme: boolean }>`
font-size: 27px;
font-size: 3vmax;
font-weight: 500;
color: ${props => props.$isDarkTheme ? '#D9D9D9' : '#161A1D'};
`

export const DescriptionText = styled.div<{ $isDarkTheme: boolean }>`
font-size: 18px;
font-size: 2.2vmax;
font-weight: 300;
color: ${props => props.$isDarkTheme ? '#D9D9D9' : '#161A1D'};
`

export const HrLine = styled.hr`
`

export const ImageDiv = styled.div`
display: flex;
align-items: center;
`

export const BannerImage = styled.img`
width: 40vmin;
height: auto;
margin-left: 10px;
`