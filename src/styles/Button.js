import style from 'styled-components'

export const CartButton = style.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid var(--lightBlue);
  color: var(--lightBlue);
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s easa-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue)
  };
  &:focus {
    outline: none;
  }
`