"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  return await signOut({ redirectTo: "/" });
};
