import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import styled from 'styled-components';
import Header from './Header';
import { Footer } from './Footer';
import { DonateForm } from '@common/forms/DonateForm';

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
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/donate' element={<DonateForm />} />
          </Routes>
        </main>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
