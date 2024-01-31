"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const RightSideBar = () => {
  const hotQuestion = [
    {
      _id: 1,
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    { _id: 1, title: "Is it only me or the font is bolder than necessary?" },
    { _id: 1, title: "Can I get the course for free?" },
    { _id: 1, title: "Redux Toolkit Not Updating State as Expected" },
    { _id: 1, title: "Async/Await Function Not Handling Errors Properly" },
  ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      </div>
      {/* wrapper for mapping of questions */}
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {hotQuestion.map((question) => (
          <Link
            href={`questions/${question._id}`}
            key={question._id}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              {question.title}
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="chevron-right"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark500_light700">Popular Tags</h3>
      </div>
    </section>
  );
};

export default RightSideBar;
