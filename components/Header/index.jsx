import React from "react";
import styled from "styled-components";


function Header() {
  return (
    <Header1>
      <Logo src="/img/img-3604-1@1x.png" alt="Logo" />
    </Header1>
  );
}

const Header1 = styled.header`
  width: auto;
  height: 118px;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  padding: 0 150px;
  justify-content: flex-end;
  align-items: center;
  min-width: 393px;
  background-color: var(--astronaut);
`;

const Logo = styled.img`
  width: 92px;
  height: 92px;
  border-radius: 46px;
  object-fit: cover;
`;

const Header2 = styled.header`
  width: auto;
  height: 118px;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  padding: 0 150px;
  justify-content: flex-end;
  align-items: center;
  min-width: 393px;
  background-color: var(--astronaut);
`;

const Logo1 = styled.img`
  width: 92px;
  height: 92px;
  border-radius: 46px;
  object-fit: cover;
`;

export default Header;
