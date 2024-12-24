
import { Link } from 'react-router-dom';


import { PageHeader } from '@common/headers/PageHeader';
import { SubSectionHeader } from '@common/headers/SubSectionHeader';
import { TextBody } from '@common/texts/TextBody';

import DSC from '../assets/images/DSC03841.jpg'



export const GetInvolved = () => {
    return ( 
        <TextBody>
            <PageHeader title = 'MEDICAL MISSION APPLICATIONS' />
            <img src = {DSC} width = "700" height = "400" style={{display: 'block', margin: 'auto'}} />
            <SubSectionHeader title = 'APPLICATION INSTRUCTIONS' />
            <div style={{ padding: '24px', maxWidth: '1200px', margin: 'auto'}}>
               
                <h1>VnHOPE Summer Medical Mission 2025 is scheduled 
                    to take place from June 22 to July 6, 2025. </h1>
                <p>Before applying, <b>please have all required documents with proper naming (please 
                    refer to Naming Instruction found within FAQs) ready to 
                    upload, </b>as there is no option to save your application progress.
                    These documents will need to be uploaded within the application form.
                    <b> Required documents include:</b></p>
                <ul>
                    <li>Passport scan (full 2 pages)</li>
                    <li>COVID vaccine card or QR code</li>
                    <li>Resume/CV</li>
                    <li>Headshot photo</li>
                    <li>Health certificate (ie, CPR, EMT, BLS/Ped Facts, dental, pharmacy tech) - 
                        not required, but preferred</li>
                    <li>For students, proof of student status (school ID, transcript, etc.)</li>
                    <li>For health professional volunteers, copy of license</li>
                </ul>
                <p><b>If a required document will need to be updated after 
                    the time of application, upload a blank Word document 
                    within the application form in the interim and 
                    email any updated documents to vnhopesummer@gmail.com.</b></p>
                <p>For additional information about the full registration process,
                    please click <Link to = '/registration-process'> here </Link>
                </p>

                <p><b>Please note, submit your application 
                    on your desktop (not mobile device) </b>for a better user 
                    experience.</p>
            
          
            </div>
            <div style={{ padding: '24px', maxWidth: '1200px', margin: 'auto'}}>
                <p><b>Click the "Apply" button in "Apply Now" for the volunteer 
                    category that best describes you:</b></p>
                <ol type = '1'>
                    <li><b>Health professionals: </b>Physicians, Dentists, 
                    Optometrist, Ophthalmologist, Gynecologist, Pharmacists, 
                    and medical Specialists who have direct contact with patients
                     and have medial licenses to practice in medical settings 
                    in order to submit to Local Health Department in Viet Nam</li>
                    <li><b>Adults: </b>Professions that do not belongs to 
                    Health Professional category (Registered nurse practitioners, 
                    physician assistants, physical therapists, registered nurses, 
                    dental hygienists, clinic assistants, lab assistants and medical assistants).</li>
                    <li><b>Students:</b>
                        <ul>
                            <li><b>Professional Students: </b>Students who are currently 
                            in the professional programs/schools (Med Schools, 
                            Dental Schools, Optometry Schools, Pharmacy Schools, etc.)</li>
                            <li><b>College Students: </b>Including students who are 
                            currently in four-year university/college, pre-professional 
                            programs (pre-med, pre-pharm, pre-dental, etc.) and/or gap years.</li>
                            <li><b>High School Students: </b>Students who are currently 
                            in their high school years.</li>
                            <ul><li>Special instructions for High School students: 
                                High School students should have a parent or an 
                                adult to accompany with them in order for us to 
                                consider for acceptance.​ We will not accept 
                                college-attending siblings or cousins accompanying with them.</li></ul>
                        </ul>
                    
                    </li>
                </ol>
                <span style ={{ color: 'red' }}><u>*REGISTRATION UPDATE:</u> We have reached our maximum capacity for College, Gap Year, and High School students. We are no longer accepting applications for these 3 categories. Students in Professional schools (Medical, Dental, Optometry, and Pharmacy) are still welcome to apply. In any case we are still receiving more college/gap year/high school applications applied via Professional student application, those applications will be in the waiting list and we will inform you.
                ​​​​​​​​ </span>
            </div>
        </TextBody>
        
    );
};