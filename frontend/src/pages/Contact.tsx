import { PageHeader } from '@common/headers/PageHeader';
import { SectionHeader } from '@common/headers/SectionHeader';

import { styled } from 'styled-components';
import groupPhoto from '../assets/images/group photo 2023.jpg';


const BackgroundImage = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 400px; 
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: white;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 20px;

  .first {
    flex: 1;
  }
  .second {
    flex: 2;
  }

  button {
    background-color: pink;
    color: black;
    font-weight: bold;
    cursor: cursor;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 30px;
  width: 100%;
  margin: auto;

  .left-column, .right-column {
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 10px;
  }

  .right-column {
    flex: 3;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    color:black;
    font-size: 14px;
  }


  
`;

// Contact component
export const Contact = () => {
  return (
    <div style={{ padding: '24px' }}>
      <PageHeader title="CONTACT US" />
      <BackgroundImage backgroundImage={groupPhoto} />
      <Section>
        <div className="first">
          <SectionHeader title="OUR CONTACT" />
          <b>
            <a href="mailto:vnhopesummer@gmail.com">vnhopesummer@gmail.com</a>
          </b>
        </div>
        <div className="second">
          <p>
            <b>
              We would love to hear from you! Please send us a message by filling
              out the details below, and we will get back to you shortly.
            </b>
          </p>
            <Form>
            <div className="left-column">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"  />
                <input type="text" placeholder="Subject" />
            </div>
            <div className="right-column">
                <input placeholder="Message"/>
            </div>
            </Form>
            <div><p></p></div>
            <button>SUBMIT</button>
        </div>
      </Section>
      </div>
    
  );
};
