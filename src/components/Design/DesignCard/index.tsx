import { ContainerDesktop, ContainerMobile, Image } from './styled';

export const DesignCard = ({ imageSrc, title, text }) => (
    <>
        <ContainerDesktop $src={imageSrc}>
            <h4>{title}</h4>
            <p>{text}</p>
        </ContainerDesktop>
        <ContainerMobile>
            <Image src={imageSrc} />
            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </ContainerMobile>
    </>
);
