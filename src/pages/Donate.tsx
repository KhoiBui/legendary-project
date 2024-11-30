import { DonateForm } from '@common/forms/DonateForm';
import { PageHeader } from '@common/headers/PageHeader';
import { styled } from 'styled-components';

const Container = styled.main`
  width: 100%;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 24px;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Donate = () => {
  return (
    <Container>
      <PageHeader title='SUPPORT US' />
      <Content>
        <Section>Left Half Content</Section>
        <Section>
          <DonateForm />
        </Section>
      </Content>
    </Container>
  );
};
