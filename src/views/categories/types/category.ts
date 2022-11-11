import type { Document } from "@/src/types/document";

export interface Category extends Document{
  name: string,
  parent?: string,
}