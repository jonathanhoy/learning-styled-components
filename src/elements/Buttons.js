import styled from 'styled-components';
import { lighten } from 'polished';
import { teal, elevation } from '../utilities';

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  background: ${teal};
  /* ${props => props.type === 'cancel' && 'background: red;'}; */
  /* background: ${props => (props.type === 'cancel' ? 'tomato;' : 'indigo;')}; */
  transition: 0.3s ease box-shadow, 0.3s background;
  ${elevation[1]};
  &:hover {
    ${elevation[2]};
  };
  ${({ size }) => {
    if (size === 'small') {
      return `
        font-size: 1rem;
        padding: 3px 10px;
      `
    }
  }}
  ${({ type }) => {
    if (type === 'cancel') {
      return `
        background: tomato;
      `
    }
  }}
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;