import ErrorAlert from "utils/errorAlert";

enum RequestMethod {
  GET = "GET",
  POST = "POST",
}

interface IHeaders {
  method: RequestMethod;
  body: any | null;
  headers: any;
}

const defaultHeader: IHeaders = {
  method: RequestMethod.GET,
  body: null,
  headers: {
    Authorization: null,
    "Content-Type": "application/json",
  },
};

export class HttpRequest {
  async Get<T>(request: string): Promise<IAPIResult<T>> {
    try {
      let headers = {
        ...defaultHeader,
        method: RequestMethod.GET,
        headers: { ...defaultHeader.headers },
      };
      const response = await fetch(request, headers);
      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.error);
      } else {
        return {
          ok: response.ok,
          result: body,
        };
      }
    } catch (error) {
      const errorMessage = JSON.stringify(error);
      ErrorAlert.show(errorMessage);
      throw new Error(error);
    }
  }

  async Post<T>(request: string, object: any): Promise<IAPIResult<T>> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.POST,
      body: JSON.stringify(object),
      headers: { ...defaultHeader.headers },
    };
    const response = await fetch(request, headers);
    const body = await response.json();
    if (!response.ok) {
      ErrorAlert.show(body.error);
      throw new Error(body.error);
    }
    return {
      ok: response.ok,
      result: body,
    };
  }
}
