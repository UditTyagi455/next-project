import { getApiCall, postApiCall, putApiCall } from "@/services/utils/axios";
import { BASE_URL, API } from "@/services/utils/defines";
import { string } from "yup";

export const LogIn = async (payload:any) => {
    const url = `${BASE_URL}${API.LOGIN}`;
    const context = { queryParams: {}, headers: {"X-API-KEY": "5ae08967-06f2-4d23-93d3-cd29a083ce2e",Accept: "application/json" }, isAuthorized: true };
    try {
      const response = await postApiCall(url, payload,context);
      console.log("response :",response)
      return response;
    } catch ( response:any ) {
      throw new Error(response?.data?.error?.message);
    }
  };