"use client";
import { redirect } from "next/navigation";
import { RootState } from "../store";
import { useSelector } from "react-redux";
export default function AccountPage() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  if (currentUser.username !== "") {
    redirect("/Account/Profile");
  }
  redirect("/Account/Signin");
}
