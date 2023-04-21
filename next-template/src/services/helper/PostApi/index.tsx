import { getApiCall, postApiCall, putApiCall } from "@/services/utils/axios";
import { BASE_URL, API } from "@/services/utils/defines";

export const RandomPost = async (paramsData:string) => {
    const url = `${BASE_URL}${API.GetRANDOMPOST}`;
    try {
      const response = await getApiCall(url, paramsData);
      return response;
    } catch ( response:any ) {
      throw new Error(response?.data?.error?.message);
    }
  };
