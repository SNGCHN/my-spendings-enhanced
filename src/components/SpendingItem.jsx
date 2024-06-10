import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SpendingItem = () => {
  const spending = useSelector((state) => {
    return state.spending.spending;
  });
  const selectedMonth = useSelector((state) => {
    return state.spending.month;
  });
  const filteredSpend = spending.filter((item) => item.month === selectedMonth);
  return (
    <ListWrapper>
      {filteredSpend.map((item) => {
        return (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <ItemContainer>
              <DatePrice>
                <DateLabel>{item.date}</DateLabel>
                <ItemName>
                  {item.category} - {item.detail}
                </ItemName>
              </DatePrice>
              <ItemPrice>{item.cost}원</ItemPrice>
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
