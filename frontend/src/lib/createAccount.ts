import axios from "axios";

export async function createNewAccount(formData: {
  name: string;
  username: string;
  accountType: string;
  maxStorage: string;
  storageUnit: string;
  storageLocation: string;
}) {
  try {
    const mappedData = {
      name: formData.name,
      username: formData.username,
      user_type: formData.accountType,
      wallet_address: "0xehuwehrnrio34lnkj5kjlk1ihugyu",
    };

    axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/create`, mappedData);
  } catch (err) {
    console.log(err);
  }
}
