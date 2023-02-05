import { Item } from "../../domain/Item"
import { MeLiResponse } from "../../domain/MeLiResponse"
import { fetchJson } from "../../utils/fetchUtils"

function getItems(query: string) {
  return fetchJson<MeLiResponse<Item[]>>(`https://api.mercadolibre.com/sites/MLA/search?${new URLSearchParams({
    q: query,
  })}`)
}

export default getItems