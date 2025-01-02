import { PageHeader } from '@common/headers/PageHeader';
import { TextBody } from '@common/texts/TextBody';
import { styled } from 'styled-components';

const Container = styled.main`
    width:100%;
    align-items: center;

`;
const Section = styled.section`
    max-width: 800px;
    margin:auto;
    ol{
        color: green;
        font-weight: bold;
        line-height: 1.5;
    }
    ul{
        color:black;
        font-weight: normal;
        list-style-type:disc;
    }
    ul ul {
        list-style-type: circle;
    }
    span{
        color: #66B2FF;
    }
    img{
        display:block;
        margin:auto;
    }
    p{
        font-size: 1.2em
    }
    h1{
        font-size: 2em
    }
        
`;
export const OurStory = () => {
    return (
        <Container>
            <TextBody>
                <Section>
                    <PageHeader title = 'THE BEGINNING' />
                    <p>Our story started with Mr. Nguyen Duc Quang. It was in 2006 when the late Mr. Nguyen Duc Quang aspired to mentor young students in providing humanitarian services to the underserved populations of Vietnam. As a musician, journalist, scout master and youth mentor, he was passionate about guiding the younger generation to a life of service to the needy.  This was the beginning of the Summer Service Camp (SSC).  Its goals have been:</p>
                    <ol type = '1'>
                        <li>To mentor and train the next generation of medical humanitarians; and</li>
                        <li>To provide healthcare to the underserved populace of Vietnam and perhaps  other parts of the world.</li>

                    </ol>

                </Section>
                <Section>
                    <PageHeader title = 'PVNF SUMMER SERVICE CAMP' />
                    <p>With support and collaboration from Project Vietnam Foundation (PVNF) and its president Dr. Quynh Kieu, the first SSC trip was held in 2006 in South Vietnam.  In each subsequent summer until 2016, a group of approximately 100 volunteers would provide much needed services based on these two founding principles.
                    </p>
                    <div><p></p></div>
                    <p>Each summer camp comprised of approximately 60 students from high school up to professional school level. They were from many parts of the world but mostly from the United States, Canada, France and Australia. The students were supported clinically by healthcare professionals including physicians of many specialties, dentists, pharmacists, optometrists, nurse practitioners, physician assistants and registered nurses.  The camp logistics were also supported by many crucial non-medical volunteers.  The summer mission usually collaborated with similar volunteers based in Vietnam.</p>
                    <div><p></p></div>
                    <p>The health clinics were organized in both rural and urban locations of Vietnam.  Each summer mission served approximately 3500 adult patients and children or more over a two-week period.  SSC provided health screening, medical, dental and optometric care to the patients.  Medications, glasses, medical equipments and health education were also provided to as many underserved Vietnamese as possible.</p>

                </Section>
                <Section>
                    <PageHeader title = 'THE BIRTH OF VNHOPE' />
                    <p>As the camp grew in size and complexity, Project Vietnam Foundation found it much more challenging to organize and conduct both an annual March and June mission since they were only 3 months apart. In August of 2016, PVNF and the core members of the Summer Service Camp mutually agreed to split into two separate entities to give each mission its well deserved attention. PVNF will now concentrate on conducting the March mission and associated training projects. The new organization, VnHOPE Alliance, with the approval of Dr. Kieu will focus entirely on continuing the success of the SSC.
                    </p>
                    <div><p></p></div>
                    <p>Our core group of dedicated and experienced summer volunteers realized that the camp’s mission and purpose are too important to allow it to end. We recognized that there is much more work to be done in Vietnam and we are convinced that this can be accomplished by continuing to nurture the next generation of humanitarians. VnHOPE Alliance completed a successful inaugural medical mission to Vietnam in the summer of 2017. We would like to invite all past summer volunteers and welcome new volunteers to join us because there are many more stories waiting to be told and shared.
                    </p>
                </Section>

            </TextBody>
        </Container>
    );
};