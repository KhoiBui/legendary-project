import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import styled from 'styled-components';
import Header from './Header';
import { Footer } from './Footer';
import { Donate } from '@pages/Donate';
import { OurMission } from '@pages/OurMission';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: black;
  width: 100vw;
  overflow: scroll;
`;
// Build out the rest of donate page, leave a placeholder section
// for the images on the actual site. --> check

// Build our-mission, take a look at Home.tsx to see common components
// that can be resused for the page. Build new components as seen fit
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
          </Routes>
        </main>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
