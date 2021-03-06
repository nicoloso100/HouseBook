import ErrorAlert from "utils/errorAlert";

enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
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
    "Content-Type": "application/json",
  },
};

const div = document.createElement("div");

export class HttpRequest {
  async Get<T>(request: string): Promise<IAPIResult<T>> {
    this.loaderSpinner(div);
    try {
      let headers = {
        ...defaultHeader,
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
      ErrorAlert.show(error.message);
      throw new Error(error);
    } finally {
      document.body.removeChild(div);
    }
  }

  async Post<T>(request: string, object: any): Promise<IAPIResult<T>> {
    this.loaderSpinner(div);
    try {
      let headers = {
        ...defaultHeader,
        method: RequestMethod.POST,
        body: JSON.stringify(object),
      };
      const response = await fetch(request, headers);
      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.error);
      }
      return {
        ok: response.ok,
        result: body,
      };
    } catch (error) {
      ErrorAlert.show(error.message);
      throw new Error(error);
    } finally {
      document.body.removeChild(div);
    }
  }

  async Put<T>(
    request: string,
    id: string,
    object: any
  ): Promise<IAPIResult<T>> {
    this.loaderSpinner(div);
    try {
      let headers = {
        ...defaultHeader,
        method: RequestMethod.PUT,
        body: JSON.stringify(object),
      };
      const response = await fetch(`${request}/${id}`, headers);
      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.error);
      }
      return {
        ok: response.ok,
        result: body,
      };
    } catch (error) {
      ErrorAlert.show(error.message);
      throw new Error(error);
    } finally {
      document.body.removeChild(div);
    }
  }

  async Delete<T>(request: string, id: string): Promise<IAPIResult<T>> {
    this.loaderSpinner(div);
    try {
      let headers = {
        ...defaultHeader,
        method: RequestMethod.DELETE,
      };
      const response = await fetch(`${request}/${id}`, headers);
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
      ErrorAlert.show(error.message);
      throw new Error(error);
    } finally {
      document.body.removeChild(div);
    }
  }

  async Upload<T>(request: string, data: FormData): Promise<IAPIResult<T>> {
    this.loaderSpinner(div);
    try {
      let headers = {
        method: RequestMethod.POST,
        body: data,
        headers: {
          "Contetnt-Type": "multipart/form-data",
        },
      };
      const response = await fetch(request, headers);
      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.error);
      }
      return {
        ok: response.ok,
        result: body,
      };
    } catch (error) {
      ErrorAlert.show(error.message);
      throw new Error(error);
    } finally {
      document.body.removeChild(div);
    }
  }

  loaderSpinner(div: HTMLDivElement) {
    div.innerHTML = `
    <div class="loadingio-spinner-pulse-chfnkt7e5mu"><div class="ldio-h9on2pk80j">
<div></div><div></div><div></div>
</div></div>
<style type="text/css">
@keyframes ldio-h9on2pk80j-1 {
  0% { top: 6.649999999999999px; height: 86.7px }
  50% { top: 24.5px; height: 51px }
  100% { top: 24.5px; height: 51px }
}
@keyframes ldio-h9on2pk80j-2 {
  0% { top: 11.112499999999997px; height: 77.775px }
  50% { top: 24.5px; height: 51px }
  100% { top: 24.5px; height: 51px }
}
@keyframes ldio-h9on2pk80j-3 {
  0% { top: 15.574999999999996px; height: 68.85000000000001px }
  50% { top: 24.5px; height: 51px }
  100% { top: 24.5px; height: 51px }
}
.ldio-h9on2pk80j div { position: absolute; width: 14px }.ldio-h9on2pk80j div:nth-child(1) {
  left: 18px;
  background: #ffe04a;
  animation: ldio-h9on2pk80j-1 1.7241379310344827s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.3448275862068965s
}
.ldio-h9on2pk80j div:nth-child(2) {
  left: 43px;
  background: #26262d;
  animation: ldio-h9on2pk80j-2 1.7241379310344827s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.17241379310344826s
}
.ldio-h9on2pk80j div:nth-child(3) {
  left: 68px;
  background: #ffe04a;
  animation: ldio-h9on2pk80j-3 1.7241379310344827s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: undefineds
}

.loadingio-spinner-pulse-chfnkt7e5mu {
  width: 91px;
  height: 91px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-h9on2pk80j {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.91);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-h9on2pk80j div { box-sizing: content-box; }
/* generated by https://loading.io/ */
</style>
    `;
    div.style.top = "0";
    div.style.position = "fixed";
    div.style.width = "100%";
    div.style.height = "100vh";
    div.style.backgroundColor = "rgba(0, 0, 0, 0.44)";
    div.style.zIndex = "100";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    document.body.appendChild(div);
  }
}
