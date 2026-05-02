import axios from "axios";

const API = "http://20.207.122.201/evaluation-service/notifications";

export const fetchNotifications = async (token) => {
  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.data.notifications;
};