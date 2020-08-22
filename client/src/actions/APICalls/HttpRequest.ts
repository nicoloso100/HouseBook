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
  async Get<T>(request: string): Promise<T> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.GET,
      headers: { ...defaultHeader.headers },
    };
    const response = await fetch(request, headers);
    const body = await response.json();
    return body;
  }

  async Post<T>(request: string, object: any): Promise<T> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.POST,
      body: JSON.stringify(object),
      headers: { ...defaultHeader.headers },
    };
    const response = await fetch(request, headers);
    const body = await response.json();
    return body;
  }
}
