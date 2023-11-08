import axios, { AxiosResponse } from 'axios';

const makeRequest = async <T>(
  method: string,
  url: string,
  data?: any,
  headers: Record<string, string> = {}
): Promise<T> => {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url: `${apiUrl}/${url}`,
      data,
      headers,
    });

    // Handle successful response here
    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
};

export default makeRequest;
