import { styled } from 'styled-components';
import { PageHeader } from '@common/headers/PageHeader';
import { Link } from 'react-router-dom';

import doctor from '../assets/images/Doctor Desk.jpg.avif';
import patient from '../assets/images/patient interaction.jpg'
const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 120px;
    display:flex;
    flex-direction: column;
    gap: 80px;
`;

const BackgroundImage = styled.div<{ backgroundImage: string }>`
    width: 100%;
    height: 400px; 
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    position: relative;
    background-color: white;
    

`;
const SmallBackgroundImage = styled(BackgroundImage)`

    width:70%;
    height:200px;
    margin:auto;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 

    a {
        background-color: pink;
        color: black;
        font-weight: bold;
        cursor: cursor;
    }


`
export const Projects = () => {
    return(
        <Container>
            <BackgroundImage backgroundImage={patient}>
                <PageHeader title= 'PROJECTS' />
            </BackgroundImage> 
            <SmallBackgroundImage backgroundImage = {doctor}>
                <h1><b>View our past medical missions</b></h1>
                <Link to= '/past-medical-missions'>WATCH HERE</Link>
            </SmallBackgroundImage>
        </Container>
        
    );
};