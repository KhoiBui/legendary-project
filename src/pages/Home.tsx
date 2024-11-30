import { SectionHeader } from '@common/headers/SectionHeader';
import { SectionHeaderLarge } from '@common/headers/SectionHeaderLarge';
import { SubSectionHeader } from '@common/headers/SubSectionHeader';
import { TextBody } from '@common/texts/TextBody';

export const Home = () => {
  return (
    <div style={{ padding: '24px' }}>
      <SectionHeader title='Providing Care in Vietnam' />
      <SectionHeaderLarge title='Announcement' />
      <SubSectionHeader title='Philanthropy' />
      <TextBody>
        <p>
          Registration for VnHOPE Summer Medical Mission 2025 will be open on
          November 1st, 2024.
        </p>
        <p>
          VnHOPE's next Summer Medical Mission is scheduled for June 22 – July
          6, 2025.
        </p>
        <p>
          Please note, we will continue to monitor the spread of COVID-19 and
          any travel restrictions leading up to the start of the Medical Mission
          2025. Should our circumstances change before the start date,
          volunteers will be eligible for a full refund of their deposit and
          application fee. Click here for our COVID-19 policy.
        </p>
        <p>
          Because of the constantly changing nature of COVID-19, please also be
          aware that unforeseen circumstances (such as a positive COVID test)
          during the medical mission may incur additional expenses, which may be
          covered by travel insurance, or a longer stay in Vietnam based on the
          country's quarantine rules.
        </p>
        <p>
          *REGISTRATION UPDATE: We have reached our maximum capacity for
          College, Gap Year, and High School students. We are no longer
          accepting applications for these 3 categories. Students in
          Professional schools (Medical, Dental, Optometry, and Pharmacy) are
          still welcome to apply.In any case we are still receiving more
          college/gap year/high school applications applied via Professional
          student application, those applications will be in the waiting list
          and we will inform you.
        </p>
      </TextBody>
    </div>
  );
};
