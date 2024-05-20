import { useState } from 'react';
import Banner from '../Banner/Banner';
import { MainContainer, TopBar, DarkThemeIconButton, DarkThemeIcon, ContentContainer } from './Styles'
import './App.css';
import bannerData from '../../data/bannerData.json';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('isDarkTheme') === 'true' ? true : false)

  const handleDarkThemeBtnPress = () => {
    const newDarkThemeState: boolean = !isDarkTheme
    setIsDarkTheme(newDarkThemeState)
    localStorage.setItem('isDarkTheme', JSON.stringify(newDarkThemeState))
  }

  return (
    <MainContainer $isDarkTheme={isDarkTheme}>
      <TopBar>
        <DarkThemeIconButton $isDarkTheme={isDarkTheme} onClick={() => handleDarkThemeBtnPress()}>
          <DarkThemeIcon />
        </DarkThemeIconButton>
      </TopBar>
      <ContentContainer>
        {bannerData && bannerData.map((bannerItem) => (
          <Banner
            title={bannerItem.title}
            description={bannerItem.description}
            imageUrl={bannerItem.imageUrl || undefined}
            isDarkTheme={isDarkTheme}
            key={bannerItem.key}
          />
        ))}
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
