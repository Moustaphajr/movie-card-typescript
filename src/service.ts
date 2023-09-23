import { StringDecoder } from "string_decoder";

export interface Movie {
  id: number;
  title: string;
  description: string;
  year: string;
  img: string;
  trailer: string;
}
