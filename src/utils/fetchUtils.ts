export async function fetchJson<T>(input: RequestInfo | URL, init?: RequestInit) {
    const response = await fetch(input, init);
    const json = await response.json();
    return json as T;
}