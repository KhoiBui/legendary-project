import styled from 'styled-components';

const SectionHeaderLargeWrapper = styled.h1`
  font-size: 32px;
  font-weight: 700;
  background-color: #7edfdf;
  width: fit-content;
  padding-inline: 36px;
  padding-block: 32px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

interface SectionHeaderLargeProps {
  title: string;
}

export const SectionHeaderLarge = ({ title }: SectionHeaderLargeProps) => {
  return <SectionHeaderLargeWrapper>{title}</SectionHeaderLargeWrapper>;
};
