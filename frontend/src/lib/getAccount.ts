import axios from "axios";

export async function getAccount(wallet_address: string) {
  try {
    console.log(wallet_address);
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/user/get`,
      { wallet_address: wallet_address }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
