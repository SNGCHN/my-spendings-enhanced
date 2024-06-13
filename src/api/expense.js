import axios from "axios";

const JSON_SERVER_HOST = "https://sudden-midnight-panama.glitch.me";

export const getExpenses = async (month) => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses?month=${month}`);
    return response.data;
  } catch (err) {
    alert("불러오는 동안 오류가 발생했습니다.");
  }
};

export const getExpense = async (id) => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses/${id}`);
    return response.data;
  } catch (err) {
    alert("불러오는 동안 오류가 발생했습니다.");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(`${JSON_SERVER_HOST}/expenses`, newExpense);
    return response.data;
  } catch (err) {
    alert("등록하는 동안 오류가 발생했습니다.");
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return response.data;
  } catch (err) {
    alert("삭제에 실패했습니다.");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await axios.patch(`${JSON_SERVER_HOST}/expenses/${id}`, rest);
    return response.data;
  } catch (err) {
    alert("오류가 발생했습니다.");
  }
};
