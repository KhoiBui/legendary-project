import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import styled from 'styled-components';
import Header from './Header';
import { Footer } from './Footer';
import { Donate } from '@pages/Donate';
import { OurMission } from '@pages/OurMission';
import { Faq } from '@pages/Faq';
import { GetInvolved } from '@pages/GetInvolved';
import { RegistrationProcess } from '@pages/RegistrationProcess';
import { Logistics } from '@pages/Logistics';
import { OurBoardMembers } from '@pages/OurBoardMembers';
import { Contact } from '@pages/Contact';
import { Projects } from '@pages/Projects'
import { PastMedicalMissions } from '@pages/PastMedicalMissions';
import { OurStory } from '@pages/OurStory';
import { ApplyNow } from '@pages/ApplyNow';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: black;
  width: 100vw;
  overflow: scroll;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <main style={{ paddingBlock: '32px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/our-mission' element={<OurMission />} />
            <Route path='/faq' element = {<Faq />} />
            <Route path='/get-involved' element = {<GetInvolved />} />
            <Route path ='/registration-process' element = {<RegistrationProcess/>} />
            <Route path='/logistics' element = {<Logistics/>}/>
            <Route path = '/our-board-members' element = {<OurBoardMembers/>} />
            <Route path = '/contact' element = {<Contact/>} />
            <Route path = '/projects' element = {<Projects/>} />
            <Route path = '/past-medical-missions' element = {<PastMedicalMissions/>} />
            <Route path = '/our-story' element = {<OurStory/>} />
            <Route path = '/copy-of-apply' element = {<ApplyNow/>} />
          </Routes>
        </main>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
