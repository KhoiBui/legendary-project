import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface TextBodyProps {
  children: ReactNode;
}

const TextBodyWrapper = styled.div`
  background-color: #b2dee744;
  padding-inline: 24px;
  padding-block: 4px;
`;

export const TextBody = ({ children }: TextBodyProps) => {
  return <TextBodyWrapper>{children}</TextBodyWrapper>;
};
