import styled from 'styled-components';
import { COLOR_GRAY } from './colors';

export const Text = styled.span`
  font-size: 12px;
  font-family: 'Courier New', Courier, monospace;
  color: '#fafafa';
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${COLOR_GRAY};
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #EFAEAE;
  width: 100%;
`;

export const Break = styled.br``;

export const ButtonContainer = styled.div`
  background-color: #FEE0D8;
  flex: 1;
`;

export const ResultContainer = styled.div`
  background-color: #EAEAEA;
`

export const Title = styled.span`
  font-size: 1.2rem;
  color: #662483;
`;

export const Button = styled.button`
  background-color: #F46134;
  height: 50px;
  width: 200px;
  border-radius: 20px;
  border-width: 2px;
`;

export const Divider = styled.div`
  width: 70%;
  border-color: #F46134;
  border-width: 20px;
`;