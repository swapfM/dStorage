import axios from "axios";

export async function createNewAccount(formData: {
  name: string;
  username: string;
  accountType: string;
  maxStorage: string;
  storageUnit: string;
  storageLocation: string;
  address: string;
}) {
  try {
    const mappedData = {
      name: formData.name,
      username: formData.username,
      user_type: formData.accountType,
      wallet_address: formData.address,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/user/create`,
      mappedData
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
