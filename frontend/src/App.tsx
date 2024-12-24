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
            
          </Routes>
        </main>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
