import { PageHeader } from '@common/headers/PageHeader';
import { SubSectionHeader } from '@common/headers/SubSectionheader';
import { styled } from 'styled-components';


const Container = styled.main`
  
  
  width: 100%;
  align-items: center;

  
`;

const Content = styled.section`
  max-width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 0px;
  margin-left: 260px;
  margin-right: 310px;
  margin-top: 0;
  padding: 0;
`;
const Hope = styled.section`

  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-size: cover;
  font-size: 120px;
  font-weight: bold;
  text-shadow: 2px 2px;
  background-color: #000000;
  color: #d3d3d3;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin-top: 0; 
  padding: 0; 

  p {
    margin: 0; 
    line-height: 1; 
  }
  
  
  

  
  // background-image: url("sampleimg.jpg");
  
  
  
`
const Section = styled.section`
  
  padding: 1rem;
  text-align: center;
  font-weight: bold;

  h2{
    text-align: center;
    margin-bottom: 1rem;
    margin-inline: auto;
    font-size: 25px;
  }
  

`;
// Section each 4 things, with subsection titles before every 
// section!!!
export const OurMission = () => {
  return (
    <Container>
        <PageHeader title='OUR MISSION' />
        <Content>
            <Section>
              <Hope><p>H</p></Hope>
              <SubSectionHeader title = 'HEALTHCARE' />
  
                <p>
                We offer primary, pediatric, gynecologic, dental 
                and optometric care to the rural 
                underserved population of Vietnam.
                 We prescribe medications, perform 
                 pap smears, dental procedures and 
                hand out reading and prescription glasses 
                to our patients.
                </p>
            </Section>
            <Section>
              <Hope><p>O</p></Hope>
              <SubSectionHeader title = 'OUTREACH' />
              <p> We set up our clinics in Vietnam where 
                patients can reach us for services. Our patients are 
                underserved and access to health care for them 
                is a challenge. We coordinate follow up care with 
                the local healthcare centers and can refer 
                specialty care to tertiary hospitals. 
              </p>
            </Section>
            <Section>
              <Hope><p>P</p></Hope>
              <SubSectionHeader title = 'PHILANTHROPY' />
              <p>
              As part of our medical mission, we give out 
              free medications, walkers, canes, wheelchairs and 
              glasses. We also provide thousands of gift packages 
              including cooking oils, condensed milk, 
              toothpaste, toothbrushes and stuffed toys.
              </p>
            </Section>
            <Section>
              <Hope><p>E</p></Hope>
              <SubSectionHeader title = 'EDUCATION' />
              <p>
              We partner with the local Vietnamese physicians 
              and medical teams to exchange healthcare practices 
              and expertise. Our students give presentations and 
              shadow the healthcare providers to gain experience 
              in our clinics.
              </p>
            </Section>
        </Content>
    </Container>
    
  );
};
