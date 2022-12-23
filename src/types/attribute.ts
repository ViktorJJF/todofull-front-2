import type { AttributeType } from "./attributeType";
import type { AttributeTerm } from "./attributeTerm";
import type { Document } from "@/types/document";

export interface Attribute extends Document {
  name: string;
  type: AttributeType;
  terms: AttributeTerm[];
  category: string;
  categories: string[];
  mercadolibre?: string,
  sellercenter?: string,
}
