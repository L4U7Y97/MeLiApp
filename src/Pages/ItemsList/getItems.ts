import { Author } from "../../domain/Author";
import { Item } from "../../domain/Item"
import { fetchJson } from "../../utils/fetchUtils"

interface ItemsResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

function getItems(query: string) {
  return fetchJson<ItemsResponse>(`http://localhost:5000/api/items?${new URLSearchParams({
    q: query,
  })}`)
}

export default getItems