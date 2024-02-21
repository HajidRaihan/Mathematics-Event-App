// Library & Package Import
import axios from "axios";

const API_BASE_URL = "https://apiregister.mathevent-unhas.com/api";

const handleErrorResponse = (error, action) => {
  console.error(`Error: saat ${action}`, error);
  throw error;
};

const RequestApi = async (method, url, data = {}, headers = {}, action) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}/${url}`,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    return handleErrorResponse(error, action);
  }
};

export { RequestApi };
