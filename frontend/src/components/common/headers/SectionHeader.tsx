import { styled } from 'styled-components';

interface SectionHeaderProps {
  title: string;
}

const SectionHeaderWrapper = styled.h1`
  position: relative;
  top: 8px;
  left: 8px;
  z-index: 1;
  background-color: #7edfdf;
  padding-inline: 8px;
  height: auto;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div style={{ width: 'fit-content', backgroundColor: 'blue' }}>
      <SectionHeaderWrapper>{title}</SectionHeaderWrapper>
    </div>
  );
};
