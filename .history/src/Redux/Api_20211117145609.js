import axios from "axios";
export const loadUserApi = async () => {
  await axios.get("http://localhost:5000/users");
};
