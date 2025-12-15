import { ReactNode } from "react";
import CoursesClientWrapper from "./CoursesClientWrapper";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  
  return <CoursesClientWrapper cid={cid}>{children}</CoursesClientWrapper>;
}
