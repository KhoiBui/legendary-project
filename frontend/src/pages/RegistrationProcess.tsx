import { PageHeader } from '@common/headers/PageHeader';
import { styled } from 'styled-components';

import registrationProcess from '../assets/images/RegistrationProcess.jpg'
import depositTotals from '../assets/images/DepositTotals.jpg';
import meetingTimes from '../assets/images/Meeting_Schedules.jpg'
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
  
    span{
        color:red;
    }
    img{
        display:block;
        margin:auto;
    }

`;
    




export const RegistrationProcess = () => {
    return (
        <Container>
            <PageHeader title = 'REGISTRATION PROCESS'/>
            <Section>
                
                <ol>
                    <li>Submit your online application</li>
                    <ul>
                        <li>These documents should be prepared in advance to 
                            upload at the end of your application</li>
                        <img src = {registrationProcess} height = '450px' width = '675px' />
                    </ul>
                    <li> An email confirming receipt of your application will be 
                        sent to your specified email address.</li>
                    <ul>
                        <li>If you don’t receive an auto-confirmation email, 
                            please contact our office. We may have an incorrect 
                            email address for you 
                            and this is our preferred way of communicating with you.</li>
                        
                    </ul>
                    <li>An interview will be scheduled with you. </li>
                    <ul>
                        <li>A Resume/CV is required for an interview.</li>
                        <li>If you are a student volunteer, you will be interviewed by 
                            our student directors. </li>
                        <li>If you are a health professional or an adult volunteer, you will be interviewed
                            by our mission leader or assistant mission leader.</li>
                    </ul>
                    <li>Rolling acceptances will begin to be offered via email. 
                        We expect to send out our last acceptances before 
                        March each year. We will also email reminders for you to:</li>
                    <ul>
            
                        <li>Submit an attachment of any required missing documents to <a href='mailto:vnhopesummer@gmail.com'>vnhopesummer@gmail.com</a></li>
                        <li>Pay a deposit of <span> deposit of $300 </span>online with the provided link</li>
                        <li>We ask that you make one separate payment for each volunteer. Specify the volunteer's name
                            and birth date as noted on the shopping cart. <span>Your deposit will hold your interest in our mission until 3/30</span>
                            . It is <span>nonrefundable after 4/1.</span></li>
                    </ul>
                    <img src = {depositTotals} width = '700px' height = '230px'/>
                    <li>Once accepted, please email us your flight schedule ASAP (deadline: 4/15).</li>
                    <ul>
                        <li>VnHOPE will be applying for permit for the summer 
                        medical mission from the local health department.  
                        As a requirement for the permit applicattion, we will need to 
                        submit all volunteer’s passport copies.</li>
                    </ul>
                    <li>In April, a final email will be sent to you with a link for
                         the total balance due. Final donation payment 
                         will be expected by 5/15 and all terms are similar 
                         to that of the deposit.</li>
                    <ul>
                        <li>Final mission donations are nonrefundable barring 
                            exceptional circumstances. Each request for 
                            refund will be carefully considered by the mission management</li>
                    </ul>
                    <li>Accepted volunteers are encouraged to attend our three Pre-Mission meetings to 
                        learn more details and to meet your team for our trip. </li>
                    <ul>
                        <li>The June meeting is mandatory for all volunteers living in Southern California.</li>
                    </ul>
                </ol>

                                
                <img src= {meetingTimes} height='200px' width = '800px'/>

            </Section>
            

        </Container>

    );
};