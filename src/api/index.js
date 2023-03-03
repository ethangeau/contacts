import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

export const getContacts = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
