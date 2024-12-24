import { PageHeader } from '@common/headers/PageHeader';
import { styled } from 'styled-components';
import { TextBody } from '@common/texts/TextBody';
import plane from '../assets/images/plane.avif';
import logisticsMap from '../assets/images/LogisticsMap.avif'
import missionSchedule from '../assets/images/ClinicSchedule.avif'

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

export const Logistics = () => {
    return (
        
        <Container>
            <PageHeader title = 'MISSION LOGISTICS' />
            <TextBody>
            <img src = {plane} style={{display:'block',margin:'auto'}} />
            

                <Section>
                    <p><b><span>Once you're accepted as a volunteer for the 
                        VnHOPE Medical Mission, here's what you need to do next: </span></b></p>
                </Section>
                <Section>
                    <h1><b><span><u>Apply for a Vietnam Visa</u></span></b></h1>
                    <ul>
                        <li>A visa is mandatory for entering Vietnam.</li>
                        <ul>
                            <li>If you are a Vietnamese, you can apply for a 5 year/multiple 
                                entry visa with any travel agency. The typical cost is under $100.  You can use the service of Titan Travel, Ms. Cathy Phuong Ngo office phone number is 714-531-1883, cell phone number is 714-679-4859, email sales@titantraveltax.com, address 10495 Bolsa Ave #107, Westminster, CA 92683, or any travel agency of your choice.</li>
                            <li>If you are not a Vietnamese but your spouse or parents are Vietnamese, you can also apply for this 5 years visa as long as you provide a copy of your birth certificate or marriage license.</li>
                            <li>If you already have a 5 year visa, please check to make sure the date of expiry is on or after July 30-2025</li>
                            <li>For all other non Vietnamese, you can apply for a 1 month, single entry e-visa using this link:  <a href="https://evisa.xuatnhapcanh.gov.vn/web/guest/trang-chu-ttdt"><span style={{color:'red'}}>https://evisa.xuatnhapcanh.gov.vn/web/guest/trang-chu-ttdt</span></a>  The cost is $25.  If you need to have multiple entries, you can apply for multiple e-visas (be sure to apply at different times).  </li>
                        </ul>

                        <li>Be sure to apply for your visa early.  When you receive your visa, remember to double check to make sure all information are correct.  If there are mistake, contact your travel agency or the consulate website for instruction. </li>
                        <li>VnHOPE won't be able to assist you with any visa related issue at all, so please work with your travel agency.</li>
                        <li>(If you are in Vietnam already and for some reason your visa is lost, please go to any travel agency right away and ask them to help you obtain a new visa.  Don't wait until you go to the airport, it will be very problematic and costly).</li>

                    </ul>
                </Section>
                <Section>
                    <h1><b><span><u>Book your flights</u></span></b></h1>
                    <ul>
                        <li>Volunteers must arrive to Ho Chi Minh City - Tan Son Nhat (TSN) airport before noon on the first day of the medical mission (Sunday, June 22, 2025).</li>
                        <ul>
                            <li>Most volunteers will arrive at around the same time if you travel on the red eye flights leaving the US. </li>
                        </ul>
                        <li>If you land earlier on the day of June 22nd, you will need to meet up with the group at the airport on that day.</li>
                        <li>If you land later than June 22nd, you will need to arrange for your own transportation to the hotel. </li>
                        <li>If you land prior to Sunday, you can go directly to the hotel and wait for us at the hotel lobby around noon.  </li>
                    </ul>

                </Section>
                <Section>
                    <h1><b><span><u>Purchase Your Travel Insurance</u></span></b></h1>
                    <ul>
                        <li>Volunteers <span style = {{ color:'red'}}>must purchase travel insurance for the entire 2 weeks </span> of the Summer Medical Mission</li>
                        <li>The Travel Insurance policy must include medical emergency and medical evacuation coverage.</li>
                        <li>Volunteers will submit copy of Travel Insurance policy at the same time with your flight schedule.</li>
                        <li>If your credit card company provides Travel Insurance as a benefit when you purchase your flight tickets with their credit card, you need to provide proof of this benefit and a written statement with your name on it.</li>
                        <ul>
                            <li>For example: <span style = {{color:'brown'}}> I am Jack Nicholson, I confirm that my Chase Saphire Reserve credit card will provide emergency medical and dental benefit up to $2500 and Emergency Evacuation and Transportation coverage up to $100,000 during my trip with the Summer Medical Mission. </span></li>

                        </ul>

                    </ul>

                </Section>
                <Section>
                    <h1><b><span><u>ARRIVE in Vietnam</u></span></b></h1>
                    <ul>
                        <li>Once you land at the TSN airport on Sunday, make your way to the immigration area (see map below: 2nd floor, #1.)  </li>
                        <li>After immigration, you will proceed to the 1st floor to baggage claim (#2), then finally to customs (#3). </li>
                        <li>Once you’re done with customs, you will look for our VnHOPE volunteers. They will be wearing VnHOPE badges</li>
                        <li>All volunteers will meet right outside the exit gate of the international terminal</li>
                        <li>Volunteers will pick up their badges and help load boxes and supplies onto our charter buses and trucks.</li>
                        <li>Our charter buses will drive us to our hotel for check-in.</li>
                    </ul>
                    <img src = {logisticsMap} width = '400px' height = '450px'/>

                </Section>
                <Section>
                    <h1><b><span><u>Understand Team Structure</u></span></b></h1>
                    <p><b>Mission Management Team</b></p>
                    <ul>
                        <li>Mission Director: Dr Oliver Nguyen</li>
                        <li>Mission vice-Director: Dr Chris Ching</li>
                        <li>Mission Vietnam Logistics: Ms. Jennie Hieu Tran</li>
                        <li>Treasurer: Dr. Anh Phan</li>
                        <li>Mission Physicians:  Dr. Oliver Nguyen and Dr. Anh Nguyet Ho</li>
                    </ul>
                    <p><b>Student Teams</b></p>
                    <ul> <li>Student Leaders: to be announced</li>
                    <li>Student Teams: Approximately 5 students teams with 10-13 students in each team (Teams A, B, C, D, E) led by 2 co-leaders per team</li>
                    </ul>
                    <p><b>Professional and Adult Teams</b></p>
                    <ul>
                        <li>The professional and adult team is designated as Team S.</li>
                        <li>Combined, the medical mission will offer the following services:</li>
                        <ul>
                            <li>Registration</li>
                            <li>Dental</li>
                            <li>Optometry</li>
                            <li>Primary care</li>
                            <li>Pediatrics</li>
                            <li>Pain management</li>
                            <li>Gynecology</li>
                            <li>Pharmacy</li>
                            <li>Patient education</li>
                            <li>Nutrition</li>
                            <li>Gifts</li>
                        </ul>

                    </ul>

                </Section>
                <Section>
                    <h1><b><span><u>Understand Work Schedule</u></span></b></h1>
                    <p><b>Typical Work Day</b></p>
                    <ul>
                        <li>Our clinic days start early. We plan to have breakfast offered at our hotel and start loading the bus with supplies and equipment around 6:45 - 7:00 AM </li>
                        <ul>
                            <li>Note: Loading and unloading of supplies and equipment from and to our bus are expected at the beginning and end of each clinic.</li>
                            <li>In addition, we usually have to prepare for clinics the night before, with re-stocking of our pharmacy inventory.</li>

                        </ul>
                        <li>All teams must board our charter buses on time, which leaves promptly at 7:00 AM. Bus rides are about 1-2 hours long depending on the location of our clinics</li>
                        <li>Below is an example of our typical medical mission schedule, but may be subject to change.</li>
                    </ul>
                    <img src = {missionSchedule} width = '830px' height = '500px'/>
                    <p><b>Patient Vollume</b></p>
                    <ul>
                        <li>The number of patients we plan to visit our clinic depends on a variety of factors including how many Health Professional volunteers and students we recruit, location of the clinic, etc.</li>
                        <ul>
                            <li>Typically, we plan to see about 250 primary care patients, 150 pediatric patients and 100 gynecologic patients each day we have clinic</li>

                        </ul>

                    </ul>
                    <p><b>Student Rotations</b></p>
                    <ul>
                        <li>On a rotating basis, students will be involved in taking vital signs and checking labs. Students assist with vision screening, patient education, pharmacy dispensing, and organizing patient flows.</li>
                        <li>Students will also be shadowing primary care, pediatric, gynecology, and dental services.  Student team leaders will train and guide student volunteers through all these processes.</li>
                        <li>Rotations are subject to change depending on our local volunteer partners and the Vietnamese government, remember to be open minded about last minute changes.</li>

                    </ul>
                    <p><b>Work Attire and Things to Pack</b></p>
                    <ul>
                        <li>Since we’ll be working as representatives of VnHOPE, it is expected that all volunteers wear their ID badges</li>
                        <li>It will be hot and humid (our clinical will likely not have air conditioning) so plan on wearing lightweight pants or scrubs. Short shorts are not allowed and girls are not to wear shorts on work days due to cultural norms. Guys may wear knee length shorts.</li>
                        <li>Closed toe shoes are also part of the work dress code.  </li>
                        <li>For sightseeing/field trip days, you can dress casually.  </li>
                        <li>Expect sweat, mosquitoes, and allergies. Plan on packing sunscreen, mosquito repellent, hats, sunglasses, cooling towels, and masks.  </li>
                        <li>Personal medications to consider are Ibuprofen, Pepto-Bismol, Immodium, Neosporin, Hydrocortisone cream 1%, and Claritin.</li>
                        <li>Personal care items to consider are band-aids, feminine hygiene products, hand-sanitizers, baby wipes, and ear plugs (in case your roommate snores.)</li>
                        <li>Last, you might notice from the schedule above that there’s an end of mission gala planned.  Plan on packing formal outfits for the gala/party.</li>

                    </ul>

                    

                </Section>
                <Section>
                    <h1><b><span><u>Stay Connected</u></span></b></h1>
                    <ul>
                        <li>Remember to call your parents or significant others back home on a regular basis. Our management team will not be responsible for updating parents on their children every day.</li>
                        <li>Connect your devices with a SIM card in Vietnam. You can unlock your phone and purchase a SIM card in Vietnam. These are readily available for purchase and most phone companies offer 30 days of unlimited data for about $10 USD. You may elect to buy a basic phone in Vietnam and a SIM card for about $40 USD which will allow you to have limited call and text.</li>
                        <li>More information about cell phones can be reviewed in the FAQ.   </li>
                        <li>Additionally, we strongly encourage you to pack a surge protector 220 volts; electrical activity in Vietnam is unpredictable and surges may occur which will damage your equipment.</li>
                    </ul>
                </Section>
                <Section>
                    <h1><b><span><u>Collect Donations</u></span></b></h1>
                    <ul>
                        <li>We kindly ask that you start collecting new or gently used stuffed animals. They should not be too large as the larger ones are harder to pack. The children absolutely love to receive them after their dental visits or as a gift at pharmacy. In addition, small stickers are a hit as treats for our young patients after a lab test or a vision screening.</li>
                        <li>To stock our pharmacy with children’s vitamins, we ask each volunteer to donate bottles of chewable vitamins. </li>
                        <li>Lastly, our adult patients treasure our gifts of eucalyptus oil bottles and sunglasses. </li>
                        <li>Please start asking your friends and family for these donations.  We ask that you pack these donation items in a large packing box as a check-in baggage. See packing list for more details.</li>
                    </ul>

                </Section>
                <Section>
                    <h1><b><span><u>Food and Lodging</u></span></b></h1>
                    <p><b>Lodging</b></p>
                    <ul>
                        <li>We will be staying a Acnos Grand Hotel (name has changed recently), located at District 3 in Ho Chi Minh City.</li>
                        <ul>
                            <li>The hotel will have WiFi and AC ​</li>
                            <li>Every volunteer will be assigned a roommate</li>
                            <li>Daily breakfast and dinner is included</li>
                            <ul>
                                <li>Breakfast is usually buffet style. Load up and eat heartily! You will burn it off when you are at clinic.​</li>
                            </ul>
                            
                        </ul>
                        <li>You will have an assigned roommate. We will be staying at  Acnos Grand Hotel, located at District 3 Ho Chi Minh City. The hotel has WiFi and will offer our group breakfast and dinner daily. For breakfast, it’s usually a buffet style affair; load up and eat heartily! You will burn it off when you are at clinic. For lunch, we will be eating at our clinic site. For dinner, each student team will have their own table for meals at our hotel. Team S is free to roam around but don’t expect to eat any leftovers from the students. They are known to have meals around town even after they consume their dinner at the hotel. In addition, there will be opportunities to eat dinners out, of your choice, throughout the week. We advise that you don’t partake in street foods unless you have traveled to Vietnam previously and have built up a strong GI immune system. Otherwise, proceed at your own risk.  In addition, only drink bottled water, and avoid putting ice  in your drinks.  The students will quickly figure out the popular destinations for coconut water, che and boba drinks among many other discoveries so ask them to share their finds with you.</li>

                    </ul>

                </Section>
                <Section>
                    <h1><b><span><u>Surviving Clinic Days</u></span></b></h1>
                    <ul>
                        <li>As volunteers, our first goal is to accomplish the mission of VnHOPE: Healthcare, Outreach, Philanthropy, and Education, while participating in a medical mission to selflessly serve the underserved.</li>
                        <li>Take care of yourself; don’t stay up past curfew, get plenty of sleep, drink lots of water, and enjoy your experiences. Have a positive attitude, be flexible and go with the flow.</li>
                        <li>We ask that you work hard, follow ground rules, and respect your teams. Even with the most detailed planning from your mission management team, unanticipated challenges will occur.  </li>
                        <li>We appreciate your patience and understanding for any unforeseen inconveniences. Your second goal is to absorb this life-changing journey and to return home safe and sound!</li>
                    </ul>
                    
                </Section>
            </TextBody>

        </Container>
    );
};