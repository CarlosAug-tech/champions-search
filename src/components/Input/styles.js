import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 500px;
  margin: 20px 0;
  position: relative;

  > input {
    width: 500px;
    padding: 16px 32px 10px 16px;
    border: 0;
    border-radius: 8px;

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      top: 5px;
      left: 5px;
      font-size: 9px;
    }
  }

  label {
    left: 17px;
    top: 14px;
    position: absolute;
    color: black;
    pointer-events: none;
    transition: 0.4s ease;
  }

  svg {
    top: 14px;
    right: 10px;
    position: absolute;
    color: #000;
  }
`;
