import { DonateForm } from '@common/forms/DonateForm';
import { PageHeader } from '@common/headers/PageHeader';
import { styled } from 'styled-components';

import wheelChair from '../assets/images/wheelchair2.jpg'

const Container = styled.main`
  width: 100%;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0px;
  margin-top: 24px;
`;

const Section = styled.div`
  flex: 1;
  flex-direction: column;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ul{
  list-style: none;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;

`

export const Donate = () => {
  return (
    <Container>
      <PageHeader title='SUPPORT US' />
      <Content>
        <Section>
          <ImageSection>
            <img src = {wheelChair} />
          </ImageSection>
          <p> To our donors, we owe you much gratitude for your generosity. 
            Our primary mission remains firmly focused on delivering healthcare to the needy in Vietnam. 
            In this unprecedented time of the COVID-19 pandemic, our local volunteers in the United States may not be able to
             deliver this healthcare directly. However, we are committed to financially supporting our healthcare partners in 
             Vietnam to carry out this work in our absence.
          </p>
          <p>
            Here’s an idea of the value of your donations for our patients in Vietnam:
            <ul>
            <li> $7 – pair of prescription or reading glasses</li>
            <li> $50 – walker to help with mobility</li>
            <li> $100 – wheelchair for patients who are disabled</li>
            <li> $100 – wheelchair with steering wheel, brakes, and canopy, allowing patients to navigate outdoors independently</li>
            </ul>

          </p>
        </Section>
        <Section>
          <DonateForm />
        </Section>
      </Content>
    </Container>
  );
};
