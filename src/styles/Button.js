import style from 'styled-components'

const textColor = props =>
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)";

export const CartButton = style.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid ${textColor};
  color: ${textColor};
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s easa-in-out;
  &:hover {
    background: ${textColor};
    color: var(--mainBlue)
  };
  &:focus {
    outline: none;
  }
`