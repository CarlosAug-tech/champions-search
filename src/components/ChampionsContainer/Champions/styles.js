import styled from 'styled-components';

export const Container = styled.li`
  max-width: 80px;
  width: 100%;
  height: 80px;
  margin: 20px;
  position: relative;
  border: 1px solid red;

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > button {
    z-index: 10;
    top: -10px;
    right: -8px;
    position: absolute;
    border: 0;
    background: transparent;

    /* > svg {
      color: #fff;
    } */
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 0.4s ease, visibility 0.4s ease;

    > span {
      pointer-events: none;
    }
  }
`;
