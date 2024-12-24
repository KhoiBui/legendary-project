import styled from 'styled-components';

interface SubSectionHeaderProps {
  title: string;
}

const SubSectionHeaderWrapper = styled.h2`
  background-color: #7edfdf;
  width: fit-content;
  min-width: 218px;
  text-align: center;
  border-bottom-right-radius: 36px;
  padding-block: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const SubSectionHeader = ({ title }: SubSectionHeaderProps) => {
  return <SubSectionHeaderWrapper>{title}</SubSectionHeaderWrapper>;
};
