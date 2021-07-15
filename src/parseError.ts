export const parseError = async (e: any) => {
  try {
    // e.text function should be fetch error
    if (e.text && typeof e.text === 'function') {
      try {
        const text = (await e.clone().text()) as string;

        return JSON.parse(text);
      } catch {
        return { status: e.status, statusText: e.statusText, url: e.url };
      }
    }
    // Axios error has buffer properties, toJSON will create a nice object
    if (e.isAxiosError) {
      return e.toJSON();
    }
    if (e.response) {
      return {
        status: e.response.status,
        statusText: e.response.statusText,
        data: e.response.data,
      };
    }
    if (e.body) {
      try {
        return JSON.parse(e.body as string);
      } catch {
        return e.body;
      }
    }

    return e;
  } catch {
    return e;
  }
};
