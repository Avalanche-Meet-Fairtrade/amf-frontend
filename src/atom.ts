import { User } from "@firebase/auth";
import { atom } from "recoil";

export const userState = atom<User | null>({
  key: "user",
  default: null,
});
