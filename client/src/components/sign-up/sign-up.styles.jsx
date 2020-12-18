import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    margin-top: 50px;
    width: 90vw;
    text-align: center;

    button {
      margin: auto
    }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
