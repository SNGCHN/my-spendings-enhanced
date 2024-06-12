import React from "react";
import styled from "styled-components";
import axios from "axios";

const Mypage = () => {
  return (
    <MyPageContainer>
      <Title>My Page</Title>
      <Form>
        <FormLabel>닉네임</FormLabel>
        <Input type="text" placeholder="닉네임을 입력해주세요." />
        <FormLabel>프로필 사진 선택</FormLabel>
        <Input type="file" />
        <ProfileImage src="profile_picture_url" alt="Profile" />
        <ButtonWrapper>
          <Button>저장</Button>
        </ButtonWrapper>
      </Form>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  margin: 200px auto;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background-color: rgb(0, 123, 255);
  &:hover {
    background-color: rgba(0, 123, 255, 0.8);
  }
`;

export default Mypage;
