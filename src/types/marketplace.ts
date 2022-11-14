import type { Document } from "./document"
import type { MarketplaceType } from "./marketplaceType"

export interface Marketplace extends Document{
  type: MarketplaceType
  name: string,
  domain: string,
}