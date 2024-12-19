import styled from 'styled-components';

export const StyledFooter = styled.section`
  padding-inline: 200px;
  padding-block: 24px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 32px;
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className='box rights'>
        <span>
          © 2022: VnHOPE.org. All Rights Reserved. VnHOPE Alliance, inc. is a
          tax-exempt organization as described in Section 501(c)(3) of the
          Internal Revenue Code; EIN #81-4021917
        </span>
      </div>
      <ContactUs>
        <p style={{ marginBlock: '0px' }}>
          CONTACT US
          <br />
          <a href='mailto:vnhopesummer@gmail.com'>vnhopesummer@gmail.com</a>
        </p>
        <p style={{ marginBlock: '0px' }}>Irvine, CA</p>
      </ContactUs>
    </StyledFooter>
  );
}
