import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin: 20px 0;

  > button {
    width: 30px;
    border: 0;
    position: relative;
    background: transparent;

    &:hover > div {
      visibility: visible;
      opacity: 1;
    }

    & + button {
      margin-left: 10px;
    }

    &:last-child {
      margin-right: 20px;
    }

    > img {
      width: 100%;
    }

    > div {
      z-index: 1;
      width: 100px;
      padding: 5px 10px;
      top: calc(100% + 10px);
      left: 50%;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      color: #fff;
      background: rgba(0, 0, 0, 0.7);
      transform: translateX(-50%);
      transition: opacity 0.4s ease, visibility 0.4s ease;

      &::before {
        content: '';
        width: 0;
        height: 0;
        top: -10px;
        left: 50%;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgba(0, 0, 0, 0.7);
        transform: translateX(-50%);
      }
    }
  }
`;
