import { styled } from 'styled-components';
import { PageHeader } from '@common/headers/PageHeader';
import { SubSectionHeader } from '@common/headers/SubSectionHeader';

import president from '../assets/images/DrOliverNguyen.avif'
import presidentBG from '../assets/images/DSC03349_edited.jpg.avif'
import vicePresident from '../assets/images/DSC04994_edited.jpg.avif'
import vicePresidentBG from '../assets/images/Chris%20Ching_edited.jpg.avif'
import secretary from '../assets/images/Lisa head shot.jpg.avif'
import secretaryBG from '../assets/images/Lisa%20Chu%20photo%20vnhope_edited.jpg.avif'
import treasurerBG from '../assets/images/DSC03246_edited.jpg.avif'
import treasurer from '../assets/images/IMG_E0723_JPG.jpg.avif'

interface BoardMemberProps {
    backgroundImage: string;
    profileImage: string;
    header: string;
    name: string;
    title: string;
    order: boolean;
}

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 20px;
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

const ProfileImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
`;

const Content = styled.div<{order: boolean}>`
    display: flex;
    flex-direction: ${(props) => {
        if (props.order){
            return 'row-reverse'; 
        } 
        return 'row';}};
    text-align: center;
    justify-content:center;
`;

const Text = styled.div`
    display: flex;
    flex-direction:column;
    color: black;
    font-weight: bold;

    h1 {
        font-size: 32px;
        margin: 0;
    }

    h2 {
        font-size: 24px;
    }
`;

function BoardMember({backgroundImage,profileImage, header, name,title,order}: BoardMemberProps) {
    return (
        <Container>
            <BackgroundImage backgroundImage={backgroundImage}>
                <SubSectionHeader title={header} />
                <Content order={order}>
                    <Text>
                        <h1>{name}</h1>
                        <h2>{title}</h2>
                    </Text>
                    <ProfileImage src={profileImage} alt={`${name}'s profile`} />
                </Content>
            </BackgroundImage>
        </Container>
    );
}


export function OurBoardMembers() {
    return (
        <Container>
            <PageHeader title = 'OUR BOARD MEMBERS' />
            <BoardMember
                backgroundImage= {presidentBG}
                profileImage={president}
                header="PRESIDENT"
                name="Dr. Oliver Nguyen, MD"
                title="Primary Care"
                order = {false}
            />
            <BoardMember
                backgroundImage= {vicePresidentBG} // this background image isn't displaying
                profileImage= {vicePresident}
                header="VICE PRESIDENT"
                name="Dr. Christopher Ching, MD"
                title="Pain Management"
                order = {true}
            />
            <BoardMember 
                backgroundImage= {secretaryBG} // this background image isn't displaying
                profileImage= {secretary}
                header= "SECRETARY"
                name= "Dr. Lisa Chu, PharMD"
                title="Pharmacy"
                order = {false}
            />
            <BoardMember 
                backgroundImage= {treasurerBG}
                profileImage= {treasurer}
                header= "TREASURER"
                name= "Dr. Anh Pham, MD"
                title="Primary Care"
                order = {true}
            />
                
            
        </Container>
            
    );
}
