import type { Document } from "@/types/document";

export interface Category extends Document {
  name: string;
  parent?: string;
  mercadolibre: string[];
  sellercenter: string[];
}
