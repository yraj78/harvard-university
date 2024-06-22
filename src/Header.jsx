import React from 'react';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';

const HeaderSection = styled.section`
  width: 90%;
  margin: 20px auto;
  border: 1px solid #c7c4c4;
  padding: 0 0 5px 0;
  border-radius: 3%;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
  border-radius: 3%;
`;

const SmallImage = styled.img`
  border: 1px double gainsboro;
  padding: 8px;
  position: absolute;
  bottom: -24%;
  left: 53px;
  width: 80px;
  background-color: #fff;
  height: 80px;
  object-fit: cover;
  border-radius: 8%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 52px;
  flex-wrap: wrap;
`;

const TextContent = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const TextContentH1 = styled.h1`
  margin: 0;
`;

const TextContentSpan = styled.span`
  font-size: 10px;
  padding-left: 7px;
  color: orange;
  background-color: #ffd7b5;
`;

const TextContentP = styled.p`
  margin: 5px 0 0;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;
    padding-left: 20px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: black;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8em;
    margin: 0;
  }
`;

const StyledThirdButton = styled(StyledButton)`
  background-color: orange;
  color: #fff;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const IconCombo = styled.span`
  position: relative;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
`;

const IconComboI = styled.i`
  position: absolute;
  top: -3px;
  left: -5px;
  font-size: 1em;
`;

const IconComboFaPhone = styled.i`
  color: #fff;
  font-size: 0.75em;
  top: 14px;
  left: 1.3em;
  transform: rotate(250deg);
  margin-left: -4px;
`;

const Navbar = styled.nav`
  margin: 10px 0 0 30px;
`;

const NavbarUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

const NavbarLi = styled.li`
  display: inline;
`;

const NavbarA = styled.a`
  text-decoration: none;
  color: gray;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <BackgroundImage src="/background.jpg" alt="Background" />
        <SmallImage src="/logo.png" alt="Small" />
      </HeaderContainer>
      <HeaderContent>
        <TextContent>
          <TextContentH1>
            Harvard University: Acceptance Rate, Fees & Courses{' '}
            <TextContentSpan>
              <i>y</i> Top 10
            </TextContentSpan>
          </TextContentH1>
          <TextContentP>Massachusetts, United States</TextContentP>
        </TextContent>
        <BtnContainer className='head-buttons'>
          <StyledButton >
            <i className="fa-regular fa-star"></i>
          </StyledButton>
          <StyledButton>
            <i className="fa-solid fa-user-group"></i> Join Group
          </StyledButton>
          <StyledThirdButton>
            <IconCombo>
              <IconComboI className="fas fa-user"></IconComboI>
              <IconComboFaPhone className="fas fa-phone"></IconComboFaPhone>
            </IconCombo>
            Help Me Decide
          </StyledThirdButton>
        </BtnContainer>
      </HeaderContent>
      <Divider orientation="horizontal" flexItem style={{ marginTop: '10px', height: '0.1mm', width: '100%', color: 'gray' }} />
      <Navbar>
        <NavbarUl>
          <NavbarLi className='navbar'><NavbarA href="#about">About</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#courses">Course</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#cost">Cost</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#admissions">Admissions</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#rankings">Rankings</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#students">Students</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#councelling">Counceling</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#discussions">Discussions</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#reviews">Reviews</NavbarA></NavbarLi>
          <NavbarLi className='navbar'><NavbarA href="#faq">FAQ</NavbarA></NavbarLi>
        </NavbarUl>
      </Navbar>
    </HeaderSection>
  );
}

export default Header;