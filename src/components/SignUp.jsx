import React from "react";
import styled from "styled-components";

const SignUp = ({ handleSignUpToggle }) => {
  const handleSignUp = (e) => {
    e.preventDefault();
    handleSignUpToggle(); // 회원가입이 되었을 때 로그인 창으로 이동하기 위해
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSignUp}>
        <FormLabel>아이디</FormLabel>
        <Input placeholder="아이디" />
        <FormLabel>비밀번호</FormLabel>
        <Input placeholder="비밀번호" type="password" />
        <FormLabel>비밀번호 확인</FormLabel>
        <Input placeholder="비밀번호 확인" type="password" />
        <ButtonWrapper>
          <Button type="submit" color="#388E3C" $hovercolor="#4CAF50">
            회원가입
          </Button>
          <Button type="button" onClick={handleSignUpToggle} color="#9E9E9E" $hovercolor="#757575">
            취소
          </Button>
        </ButtonWrapper>
      </SignUpForm>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignUpForm = styled.form`
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
    background-color: ${(props) => props.$hovercolor || "rgba(0, 123, 255, 0.8)"};
  }
`;

export default SignUp;
