import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberWithSuffix(input: number | string): string {
  const num = typeof input === "string" ? parseFloat(input) : input;

  if (isNaN(num)) {
    throw new Error("Input must be a valid number");
  }

  if (Math.abs(num) >= 1e6) {
    return (num / 1e6).toFixed(num % 1e6 !== 0 ? 2 : 0) + "M";
  } else if (Math.abs(num) >= 1e3) {
    return (num / 1e3).toFixed(num % 1e3 !== 0 ? 2 : 0) + "K";
  } else {
    return num.toString();
  }
}

export const getTimeStamp = (createdAt: Date): string => {
  const seconds = Math.floor(
    (new Date().getTime() - createdAt.getTime()) / 1000
  );

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return `${interval} year${interval > 1 ? "s" : ""} ago`;
  }

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return `${interval} month${interval > 1 ? "s" : ""} ago`;
  }

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return `${interval} day${interval > 1 ? "s" : ""} ago`;
  }

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return `${interval} hour${interval > 1 ? "s" : ""} ago`;
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return `${interval} minute${interval > 1 ? "s" : ""} ago`;
  }

  return `${Math.floor(seconds)} second${seconds > 1 ? "s" : ""} ago`;
};
