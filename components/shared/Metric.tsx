import React from "react";
import Image from "next/image";
import Link from "next/link";

interface props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  href,
  isAuthor,
}: props) => {
  const MetricContent = (
    <>
      <Image
        src={imgUrl}
        alt={title}
        width={20}
        height={20}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className="flex flex-wrap justify-between gap-1 text-xs">
        {value}

        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    <Link href={href}>{MetricContent}</Link>;
  }

  return (
    <div className="flex flex-wrap justify-between gap-1">{MetricContent}</div>
  );
};

export default Metric;
