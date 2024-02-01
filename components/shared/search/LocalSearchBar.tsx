"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface props {
  route: string;
  imgSrc: string;
  otherClasses: string;
  placeHolder: string;
  iconPosition: string;
}

const LocalSearchBar = ({
  route,
  imgSrc,
  otherClasses,
  iconPosition,
  placeHolder,
}: props) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] grow gap-4 rounded-[10px] px-4 ${otherClasses} items-center`}
    >
      {iconPosition === "left" && (
        <Image
          src="/assets/icons/search.svg"
          alt="localSearch"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400_light700  border-none shadow-none outline-none"
        placeholder={placeHolder}
      />

      {iconPosition === "right" && (
        <Image
          src="/assets/icons/search.svg"
          alt="localSearch"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
