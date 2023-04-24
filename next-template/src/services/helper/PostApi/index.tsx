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

  export const AddPost = async (payload:any) => {
    const url = `${BASE_URL}${API.GetRANDOMPOST}`;
    const context = { queryParams: {}, headers: {}, isAuthorized: true };
    try {
      const response = await postApiCall(url, payload,context);
      return response;
    } catch ( response:any ) {
      throw new Error(response?.data?.error?.message);
    }
  };
