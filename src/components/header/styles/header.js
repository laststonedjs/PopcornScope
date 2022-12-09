import styled from 'styled-components/macro';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/header_bg.jpg'}) top left / cover no-repeat;
`;

export const Frame = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex; 
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 55px;
  width: 85px;
  margin-left: 10px;

  @media (min-width: 1449px) {
    height: 75px;
    width: 140px;
  }
`;