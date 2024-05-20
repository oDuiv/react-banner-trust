import styled from "styled-components"
import { DarkTheme } from '@styled-icons/fluentui-system-regular/DarkTheme'

export const TopBar = styled.div`
  margin: 10px
`

export const MainContainer = styled.div<{ $isDarkTheme: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.$isDarkTheme ? '#161A1D' : '#F7F8F9'};
`

export const ContentContainer = styled.div`
  flex: 1;
`

export const DarkThemeIconButton = styled.button<{ $isDarkTheme: boolean }>`
 background-color: ${props => props.$isDarkTheme ? '#B6C2CF' : '#F7F8F9'};
`

export const DarkThemeIcon = styled(DarkTheme)`
height: 50px;
width: 50px;
`