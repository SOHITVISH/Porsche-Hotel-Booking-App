"use client";

import React, { FC } from "react";
import { PathName } from "@/routers/types";
import Link from "next/link";

interface Props {
  className?: string;
  href: PathName;
}

const ButtonSubmit: FC<Props> = ({
  className = "",
  href = "/listing-stay-map",
}) => {
  return (
    <Link
      href={href}
      type="button"
      className={`h-14 w-14 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none ${className}`}
      onClick={() => {
        (document.querySelector(".nc-Footer") as HTMLElement | null)?.click();
      }}
    >
      <span className="mr-3 md:hidden">Search</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </Link>
  );
};

export default ButtonSubmit;
