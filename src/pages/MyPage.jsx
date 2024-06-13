import React from "react";
import ProfileForm from "../components/ProfileForm";
import styled from "styled-components";

const Mypage = () => {
  return (
    <MyPageContainer>
      <NavContainer>
        <Title>마이 페이지</Title>
      </NavContainer>
      <ProfileForm />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  margin: 200px auto;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export default Mypage;
