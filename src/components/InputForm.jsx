import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addSpending, setMonth } from "../store/slices/spendingSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState(0);
  const [detail, setDetail] = useState("");

  const handleDateOnChange = (e) => {
    setDate(e.target.value);
  };

  const handleCategoryOnChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCostOnChange = (e) => {
    setCost(e.target.value);
  };

  const handleDetailOnChange = (e) => {
    setDetail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const month = Number(date.split("-")[1]);
    const newSpending = {
      id: uuidv4(),
      date,
      month,
      category,
      cost,
      detail,
    };
    console.log(month);
    dispatch(addSpending(newSpending));
    dispatch(setMonth(month));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <InputDiv>
          <FormLabel>날짜</FormLabel>
          <Input onChange={handleDateOnChange} value={date} type='date' placeholder='YYYY-MM-DD' />
        </InputDiv>
        <InputDiv>
          <FormLabel>항목</FormLabel>
          <Input onChange={handleCategoryOnChange} value={category} type='text' placeholder='지출 항목' />
        </InputDiv>
        <InputDiv>
          <FormLabel>금액</FormLabel>
          <Input onChange={handleCostOnChange} value={cost} type='number' placeholder='지출 금액' />
        </InputDiv>
        <InputDiv>
          <FormLabel>내용</FormLabel>
          <Input onChange={handleDetailOnChange} value={detail} type='text' placeholder='지출 내용' />
        </InputDiv>
        <Button type='submit'>저장</Button>
      </InputWrapper>
    </StyledForm>
  );
};

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: flex-end;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
  height: 37px;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-top: 10px;
  height: 37px;
  padding: 8px 20px;
  color: #ffffff;
  background-color: rgb(0, 123, 255);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease-in-out 0s;
  box-sizing: border-box;
`;

export default InputForm;
