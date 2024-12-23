import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createUrlFriendlyLinkId(text: string): string {
  return text
    ?.toLowerCase() // Convert to lowercase
    ?.trim() // Trim whitespace from both ends
    ?.replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    ?.replace(/\s+/g, "-") // Replace spaces with hyphens
    ?.replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}