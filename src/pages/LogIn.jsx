import { useState } from "react";
import styled from "styled-components";
import React from "react";
import SignUp from "../components/SignUp";

const LogIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      {isSignUp ? (
        <SignUp handleSignUpToggle={handleSignUpToggle} />
      ) : (
        <LogInContainer>
          <LogInForm>
            <FormLabel>아이디</FormLabel>
            <Input placeholder="아이디"></Input>
            <FormLabel>비밀번호</FormLabel>
            <Input placeholder="비밀번호" type="password"></Input>
            <ButtonWrapper>
              <Button>로그인</Button>
              <Button
                color="#4CAF50"
                $hovercolor="#388E3C"
                onClick={handleSignUpToggle}
              >
                회원가입
              </Button>
            </ButtonWrapper>
          </LogInForm>
        </LogInContainer>
      )}
    </>
  );
};

const LogInContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormLabel = styled.label`
  font-size: 14px;
  color: #333333;
  font-weight: bolder;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  flex: 1;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => props.color || "rgb(0, 123, 255)"};
  &:hover {
    background-color: ${(props) =>
      props.$hovercolor || "rgba(0, 123, 255, 0.8)"};
  }
`;

export default LogIn;
