import styled from "styled-components";

export const StyledFooter = styled.section`
  padding: 1em;
  background-color: #000000;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: left; 
  flex-wrap: no-wrap; 

  .box {
    flex: .5; 
    max-width: 15%; 
    font-size: 0.6em;
    line-height: 1.5; 
  }

  .contact{
    text-align: center;
    margin-right: auto;
    line-height:.5;
  }
  .rights{
    text-align: center;
    margin-left: auto;
  }
  a{
    color: #00bfff;
    text-decoration: underline;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className="box rights">
        <p>
          © 2022: VnHOPE.org. All Rights Reserved. VnHOPE Alliance, inc. is a
          tax-exempt organization as described in Section 501(c)(3) of the
          Internal Revenue Code; EIN #81-4021917
        </p>
      </div>
      <div className="box contact">
        <p>CONTACT US</p>
        <p>
          <a href="mailto:vnhopesummer@gmail.com">vnhopesummer@gmail.com</a>
        </p>
        <p>Irvine, CA</p>
      </div>
    </StyledFooter>
  );
}
