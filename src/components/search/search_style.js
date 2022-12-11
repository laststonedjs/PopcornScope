import styled from 'styled-components/macro';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/header_bg.jpg'}) top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallScreen }) => dontShowOnSmallScreen && `background: none;`}}

`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    color:white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  transition: scale 2s;

  img {
    width: 45px;
  }

  &:hover {
    scale: 1.4;
   }
`;

export const SearchInput = styled.input`
 background-color: #44444459;
 color: white;
 border: 1px solid whitesmoke;
 transition: width 0.5s;
 height: 35px;
 font-size: 15px;
 letter-spacing: 0.7px;
 margin-left: ${({ active }) => (active === true ? '10px' : '0')};
 padding: ${({ active }) => (active === true ? '0 15px' : '0')};
 opacity: ${({ active }) => (active === true ? '1' : '0')};
 width: ${({ active }) => (active === true ? '330px' : '0px')};
`;
