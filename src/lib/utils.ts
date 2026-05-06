import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amount);
}

export function isStoreOpen() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const timeInMinutes = hour * 60 + minutes;
  
  // 7:30 AM to 10:00 PM
  const openTime = 7 * 60 + 30;
  const closeTime = 22 * 60;
  
  return timeInMinutes >= openTime && timeInMinutes < closeTime;
}
