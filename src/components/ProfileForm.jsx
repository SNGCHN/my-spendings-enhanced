import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { updateAvatar } from "../api/auth";

const ProfileForm = () => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const backHandler = () => {
    navigate("/");
  };

  const mutation = useMutation({
    mutationFn: ({ token, avatar, nickname }) => updateAvatar(token, avatar, nickname),
    onSuccess: () => queryClient.invalidateQueries(["profile"]),
    onError: (error) => {
      console.error("프로필 업데이트 오류:", error);
      alert("프로필 업데이트 실패");
    },
  });
  const token = localStorage.getItem("accessToken");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (token) {
      mutation.mutate({ token, avatar, nickname });
      navigate("/");
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>닉네임</FormLabel>
      <Input type="text" placeholder="닉네임을 입력해주세요." onChange={handleNicknameChange} value={nickname} />
      <FormLabel>프로필 사진 선택</FormLabel>
      <ProfileImageWrapper>
        <Input type="file" onChange={handleFileChange} />
        <ProfileImage src={avatar ? URL.createObjectURL(avatar) : "profile_picture_url"} alt="Profile" />
      </ProfileImageWrapper>
      <ButtonWrapper>
        <Button type="submit">저장</Button>
        <Button color="#9E9E9E" $hovercolor="#757575" onClick={backHandler}>
          취소
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  height: 40px;
  gap: 100px;
  align-items: center;
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
  margin-top: 50px;
  margin-right: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background-color: ${(props) => props.color || "rgb(0, 123, 255)"};
  &:hover {
    background-color: ${(props) => props.$hovercolor || "rgba(0, 123, 255, 0.8)"};
  }
`;

export default ProfileForm;
