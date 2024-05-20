import React from 'react'
import { BannerDiv, BannerImage, DescriptionText, HrLine, ImageDiv, TextDiv, TitleText } from './Styles'
import { BannerInterface } from '../../interfaces/BannerInterface'

const Banner: React.FC<BannerInterface> = (bannerProps) => {
    return (
        <BannerDiv $isDarkTheme={bannerProps.isDarkTheme}>
            <TextDiv $centeredText={!bannerProps.imageUrl} >
                <TitleText $isDarkTheme={bannerProps.isDarkTheme}>{bannerProps.title}</TitleText>
                <HrLine />
                <DescriptionText $isDarkTheme={bannerProps.isDarkTheme}>{bannerProps.description}</DescriptionText>
            </TextDiv>
            {bannerProps.imageUrl &&
                <ImageDiv>
                    <BannerImage
                        className='Banner-image'
                        src={bannerProps.imageUrl}
                        alt='Banner'
                    />
                </ImageDiv>
            }
        </BannerDiv>
    )
}

export default Banner