import axios from "axios";

export async function updateAvatar(token, avatar, nickname) {
  const formData = new FormData();
  formData.append("avatar", avatar);
  formData.append("nickname", nickname);

  const { data } = await axios.patch(`https://moneyfulpublicpolicy.co.kr/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
export async function getUserInfo(token) {
  const { data } = await axios.get("https://moneyfulpublicpolicy.co.kr/user", { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
