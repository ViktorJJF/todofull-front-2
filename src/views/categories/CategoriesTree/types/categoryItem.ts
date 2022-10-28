import type { Category } from "../../types/category"

export interface CategoryItem extends Category {
  children: CategoryItem[],
  isNew?: boolean,
}