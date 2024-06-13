import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../api/expense";

const SpendingItem = () => {
  const selectedMonth = useSelector((state) => {
    return state.spending.month;
  });
  const { data: expense = [], isLoading, error } = useQuery({ queryKey: ["expense", selectedMonth], queryFn: () => getExpenses(selectedMonth) });
  return (
    <ListWrapper>
      {expense.map((expense) => {
        return (
          <Link to={`/detail/${expense.id}`} key={expense.id}>
            <ItemContainer>
              <DatePrice>
                <DateLabel>{expense.date}</DateLabel>
                <ItemName>
                  {expense.item} - {expense.description} / by.{expense.createdBy}
                </ItemName>
              </DatePrice>
              <ItemPrice>{expense.amount}원</ItemPrice>
            </ItemContainer>
          </Link>
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  a {
    text-decoration: none;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DateLabel = styled.span`
  color: #888;
  font-size: 14px;
`;

const DatePrice = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const ItemName = styled.span`
  color: #007bff;
  font-size: 16px;
  margin-top: 5px;
  font: bolder;
`;

const ItemPrice = styled.span`
  color: #007bff;
  font-size: 16px;
  text-align: right;
`;

export default SpendingItem;
