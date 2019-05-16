export const processResponse = async (response: Response) => {
  if (response.status === 204) {
    return { data: undefined, responseError: false };
  }
  if ((response.headers.get("content-type") || "").includes("application/json")) {
    try {
      return {
        data: await response.json(),
        responseError: false,
      };
    } catch (e) {
      return {
        data: e.message,
        responseError: true,
      };
    }
  } else {
    return {
      data: await response.text(),
      responseError: false,
    };
  }
};
