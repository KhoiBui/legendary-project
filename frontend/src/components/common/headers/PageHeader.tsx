import { styled } from 'styled-components';

interface PageHeaderProps {
  title: string;
}

const PageHeaderWrapper = styled.h1`
  font-size: 32px;
  font-weight: 700;
  background-color: #47aee6cc;
  width: fit-content;
  padding: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
`;

export const PageHeader = ({ title }: PageHeaderProps) => {
  return <PageHeaderWrapper>{title}</PageHeaderWrapper>;
};
