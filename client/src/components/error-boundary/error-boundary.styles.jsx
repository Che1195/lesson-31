import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;

	transform: scale(1);
  animation: pulse 2s infinite;
  animation-timing-function: linear;
  
  @keyframes pulse {
	0% {
		transform: scale(0.90);
	}

	50% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.90);
	}
}
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;
