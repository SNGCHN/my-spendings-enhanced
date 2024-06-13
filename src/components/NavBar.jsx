import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getUserInfo } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const NavBar = ({ title }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const { data, isLoading, error } = useQuery({ queryKey: ["profile"], queryFn: () => getUserInfo(token) });
  console.log(data);
  const handleLogout = () => {
    logout();
  };
  const handleProfile = () => {
    navigate("/mypage");
  };

  return (
    <NavContainer>
      <LeftSection>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </LeftSection>
      <Title>{title}</Title>
      <RightSection onClick={handleProfile}>
        <ProfilePicture src={data?.avatar} />
        {/* 데이터가 있으면 avatar를 띄우고 없으면 아무 것도 안함, isLoading 안해도 됨 */}
        <Profile>{data?.nickname}</Profile>
      </RightSection>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const LeftSection = styled.div``;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #d32f2f;
  cursor: pointer;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

const Profile = styled.h1`
  background: none;
  border: none;
  font-size: 16px;
  padding-left: 20px;
`;

export default NavBar;
