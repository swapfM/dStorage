import axios from "axios";

export default function checkUsernameAvailable(username: string) {
  return axios
    .get(`${import.meta.env.VITE_API_BASE_URL}/user/check-username/${username}`)
    .then((response) => {
      return response.data.Found;
    })
    .catch((error) => {
      console.error("Error checking username availability:", error);
      return false;
    });
}
