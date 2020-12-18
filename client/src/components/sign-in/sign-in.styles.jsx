import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 90vw;
    text-align: center;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: space-around;
    button {
      min-width: unset;
    }
  }
`;
