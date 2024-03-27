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

export const Mobile = () => (
    <SectionContainer>
        <Container className="wrapper">
            <TextContainer>
                <Title className="colored-title">
                    Мобильное приложение Mi Home
                </Title>
                <Description>
                    Подключите самокат к мобильному приложению Mi Home и
                    используйте его для блокировки и разблокировки самоката, а
                    так же просмотра основных данных: пробег, скорость, уровень
                    заряда аккумулятора.
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
                <Img src={MobileImg} />
            </ImgContainer>
        </Container>
    </SectionContainer>
);
