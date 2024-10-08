import { type ClassValue, clsx } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function generateUniqueId(length: number = 10) {
  const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", length);
  return nanoid();
}

const getExpirationDate = (time = 600) => new Date(Date.now() + time * 1000);

export { cn, generateUniqueId, getExpirationDate };
