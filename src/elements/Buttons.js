import styled from 'styled-components';
import { fixedTop } from '../utilities';

const color = "white";

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${color};
  font-size: 2rem;
  border: none;
  background: indigo;
  /* ${props => props.type === 'cancel' && 'background: red;'}; */
  /* background: ${props => (props.type === 'cancel' ? 'tomato;' : 'indigo;')}; */
`;

export const CancelButton = styled(Button)`
  background: tomato;
  /* ${fixedTop}; */
`;