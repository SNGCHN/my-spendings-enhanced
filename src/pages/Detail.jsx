import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteSpending, editSpending, setMonth } from "../store/slices/spendingSlice";

const Detail = () => {
  const spending = useSelector((state) => state.spending.spending);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detailId } = useParams();
  const selectedSpending = spending.find((item) => {
    return item.id === detailId;
  });
  const { date, cost, category, detail, id } = selectedSpending;
  const [editDate, setEditDate] = useState(date);
  const [editCost, setEditCost] = useState(cost);
  const [editDetail, setEditDetail] = useState(detail);
  const [editCategory, setEditCategory] = useState(category);

  const handleDateChange = (e) => {
    setEditDate(e.target.value);
  };
  const handleCostChange = (e) => {
    setEditCost(e.target.value);
  };
  const handleDetailChange = (e) => {
    setEditDetail(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setEditCategory(e.target.value);
  };

  const handleEditValue = () => {
    const editItem = {
      id,
      cost: editCost,
      date: editDate,
      category: editCategory,
      month: Number(editDate.split("-")[1]),
      detail: editDetail,
    };
    dispatch(editSpending(editItem));
    dispatch(setMonth(editItem.month));
    navigate("/");
  };
  const handleDeleteValue = () => {
    dispatch(deleteSpending(detailId));
    navigate("/");
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <DetailContainer>
        <DetailForm>
          <div>
            <FormLabel>날짜</FormLabel>
            <Input name='date' value={editDate} type='date' placeholder='YYYY-MM-DD' onChange={handleDateChange} />
          </div>
          <div>
            <FormLabel>항목</FormLabel>
            <Input name='category' value={editCategory} type='text' placeholder='지출 항목' onChange={handleCategoryChange} />
          </div>
          <div>
            <FormLabel>금액</FormLabel>
            <Input name='cost' value={editCost} type='number' placeholder='지출 금액' onChange={handleCostChange} />
          </div>
          <div>
            <FormLabel>내용</FormLabel>
            <Input name='detail' value={editDetail} type='text' placeholder='지출 내용' onChange={handleDetailChange} />
          </div>
          <ButtonWrapper>
            <DetailButton onClick={handleEditValue} color='#2196F3' $hovercolor='#1976D2'>
              수정
            </DetailButton>
            <DetailButton onClick={handleDeleteValue} color='#F44336' $hovercolor='#D32F2F'>
              삭제
            </DetailButton>
            <DetailButton onClick={handleBack} color='#9E9E9E' $hovercolor='#757575'>
              뒤로 가기
            </DetailButton>
          </ButtonWrapper>
        </DetailForm>
      </DetailContainer>
    </>
  );
};

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DetailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormLabel = styled.label`
  font-size: 14px;
  color: #333333;
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

const DetailButton = styled.button`
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

export default Detail;
