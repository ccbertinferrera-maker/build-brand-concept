import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function pad2(n: number) {
  return n.toString().padStart(2, "0");
}
