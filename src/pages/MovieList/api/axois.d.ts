import axios from "axios";

declare module "axios" {
  // eslint-disable-next-line
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
