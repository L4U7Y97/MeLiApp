import { Author } from "../../domain/Author";
import { ItemWithDetails } from "../../domain/Item"
import { fetchJson } from "../../utils/fetchUtils"

interface ItemResponse {
  author: Author;
  item: ItemWithDetails;
}

function getItem(itemId: string) {
  return fetchJson<ItemResponse>(`http://localhost:5000/api/items/${itemId}`)
}

export default getItem