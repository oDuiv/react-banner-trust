import { useState } from 'react';
import Banner from '../Banner/Banner';
import { MainContainer, TopBar, DarkThemeIconButton, DarkThemeIcon, ContentContainer } from './Styles'
import './App.css';
import bannerData from '../../data/bannerData.json';

function App() {
  // Get current state of isDarkTheme from localStorage.
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('isDarkTheme') === 'true' ? true : false)

  const handleDarkThemeBtnPress = () => {
    // handle button press, switch from/to dark stage
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
          // map trough list of banner data
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
