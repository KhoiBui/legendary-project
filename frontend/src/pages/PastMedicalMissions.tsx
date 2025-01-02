import { styled } from 'styled-components';
import { PageHeader } from '@common/headers/PageHeader';
import { SubSectionHeader } from '@common/headers/SubSectionHeader';

import photo from '../assets/images/Past missions group photo.jpeg.avif'
const BackgroundImage = styled.div<{ backgroundImage: string }>`
    width: 100%;
    height: 400px; 
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    position: relative;
    background-color: white;
`;
const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 20px;
    display:flex;
    flex-direction: column;
    gap: 80px;
`;
const Section = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
`
export const PastMedicalMissions = () => {
    return(
        <Container>
            <BackgroundImage backgroundImage={photo}>
                <PageHeader title = 'PAST MISSIONS' />
            </BackgroundImage>
            <Section>
                <SubSectionHeader title = '2024 MISSION' />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/esaWpy7aEJ4">
                </iframe>
            </Section>
            <Section>
                <SubSectionHeader title = '2019 | BY BRANDON PUTRA' />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/GZoOWcJuRVg">
                </iframe>
            </Section>
            <Section>
                <SubSectionHeader title = '2018 | BY NGAN BUI' />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/Lt4HoTTmcuM">
                </iframe>
            </Section>
            <Section>
                <SubSectionHeader title = '2018 | BY ANH NGUYET HO' />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tYSQaqLofUo">
                </iframe>
            </Section>
         
            <Section>
                <SubSectionHeader title = '2017 | BY BI PHAM' />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/qXXGteuikYc">
                </iframe>
            </Section>
            <Section>
                <SubSectionHeader title = '2017 | BY ANH NGUYET HO' />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/VicL-rl35z4">
                </iframe>
            </Section>
        </Container>
        
    );
};