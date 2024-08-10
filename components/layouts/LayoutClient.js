"use client";
import { RecoilRoot } from "recoil";

export default function LayoutClient({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
