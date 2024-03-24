import { Logo } from '../Logo';
import { SectionWrapper } from './styled';

export const ImageBlock = ({ title, text, src }) => (
    <SectionWrapper $src={src}>
        <div className="wrapper">
            <Logo />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </SectionWrapper>
);
