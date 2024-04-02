import AppStoreImg from '@assets/icons/app_store.svg?react';
import PlayMarketImg from '@assets/icons/play_market.svg?react';
import MobileImg from '@assets/images/mobile.png';

import {
    IconContainer,
    Icons,
    SectionContainer,
    Container,
    TextContainer,
    Description,
    Title,
    Img,
    ImgContainer,
} from './styled';
import { useWindowSize } from '@uidotdev/usehooks';
import { ScreenSizes } from '../../providers/Theme/interface';
import MobileImgSrc from '@assets/images/mobile_mb.png';

export const Mobile = () => {
    const { width } = useWindowSize();
    const imgSrc = width && width < ScreenSizes.md ? MobileImgSrc : MobileImg;

    return (
        <SectionContainer>
            <Container className="wrapper">
                <TextContainer>
                    <Title className="colored-title">
                        Мобильное приложение Mi Home
                    </Title>
                    <Description>
                        Подключите самокат к мобильному приложению Mi Home и
                        используйте его для блокировки и разблокировки самоката,
                        а так же просмотра основных данных: пробег, скорость,
                        уровень заряда аккумулятора.
                    </Description>
                    <Icons>
                        <IconContainer>
                            <AppStoreImg />
                        </IconContainer>
                        <IconContainer>
                            <PlayMarketImg />
                        </IconContainer>
                    </Icons>
                </TextContainer>
                <ImgContainer>
                    <Img src={imgSrc} />
                </ImgContainer>
            </Container>
        </SectionContainer>
    );
};
