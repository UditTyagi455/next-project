import { getApiCall, postApiCall, putApiCall } from "@/services/utils/axios";
import { BASE_URL, API } from "@/services/utils/defines";
import { string } from "yup";

export const LogIn = async (payload:any) => {
    const url = `${BASE_URL}${API.LOGIN}`;
    const context = { queryParams: {}, headers: {}, isAuthorized: true };
    try {
      const response = await postApiCall(url, payload,context);
      console.log("response :",response)
      return response;
    } catch ( response:any ) {
      throw new Error(response?.data?.error?.message);
    }
  };