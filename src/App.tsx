import { Header } from './Header';
import { Footer } from './Footer';
import { Body } from './Body';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: black;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header>THIS IS THE HEADER</Header>
      <Body>THIS IS THE BODY</Body>
      <Footer>THIS IS THE FOOTER</Footer>
    </Wrapper>
  );
}

export default App;
