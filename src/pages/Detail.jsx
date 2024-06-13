import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getExpense, deleteExpense, putExpense } from "../api/expense";

const Detail = () => {
  const navigate = useNavigate();
  const { detailId } = useParams();
  const queryClient = useQueryClient();

  const { data: expense } = useQuery({ queryKey: ["expense", detailId], queryFn: () => getExpense(detailId) });

  const [editDate, setEditDate] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editItem, setEditItem] = useState("");

  useEffect(() => {
    if (expense) {
      setEditDate(expense.date || "");
      setEditAmount(expense.amount || "");
      setEditDescription(expense.description || "");
      setEditItem(expense.item || "");
    }
  }, [expense]);

  const handleDateChange = (e) => {
    setEditDate(e.target.value);
  };
  const handleAmountChange = (e) => {
    setEditAmount(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setEditDescription(e.target.value);
  };
  const handleItemChange = (e) => {
    setEditItem(e.target.value);
  };

  const mutationEdit = useMutation({
    mutationFn: (item) => putExpense(item),
    onSuccess: () => {
      queryClient.invalidateQueries(["expense"]);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: (id) => deleteExpense(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["expense", detailId]);
    },
  });

  const handleEditValue = (e) => {
    e.preventDefault();
    const editItems = {
      id: detailId,
      amount: editAmount,
      date: editDate,
      item: editItem,
      month: Number(editDate.split("-")[1]),
      description: editDescription,
    };
    mutationEdit.mutate(editItems);
    navigate("/");
  };

  const handleDeleteValue = () => {
    mutationDelete.mutate(detailId);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <DetailContainer>
        <DetailForm onSubmit={handleEditValue}>
          <div>
            <FormLabel>날짜</FormLabel>
            <Input name="date" value={editDate} type="date" placeholder="YYYY-MM-DD" onChange={handleDateChange} />
          </div>
          <div>
            <FormLabel>항목</FormLabel>
            <Input name="category" value={editItem} type="text" placeholder="지출 항목" onChange={handleItemChange} />
          </div>
          <div>
            <FormLabel>금액</FormLabel>
            <Input name="cost" value={editAmount} type="number" placeholder="지출 금액" onChange={handleAmountChange} />
          </div>
          <div>
            <FormLabel>내용</FormLabel>
            <Input name="detail" value={editDescription} type="text" placeholder="지출 내용" onChange={handleDescriptionChange} />
          </div>
          <ButtonWrapper>
            <DetailButton type="submit" color="#2196F3" $hovercolor="#1976D2">
              수정
            </DetailButton>
            <DetailButton type="button" onClick={handleDeleteValue} color="#F44336" $hovercolor="#D32F2F">
              삭제
            </DetailButton>
            <DetailButton type="button" onClick={handleBack} color="#9E9E9E" $hovercolor="#757575">
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
  margin: 250px auto;
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
