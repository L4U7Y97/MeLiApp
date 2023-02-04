import React from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Item } from '../../domain/Item';
import { makeDeferredLoader } from '../../utils/routerUtils';

export const loader = makeDeferredLoader(({ request }) => {
    const url = new URL(request.url);
    const searchArg =  url.searchParams.get("search");
    const items: Item[] = //await getItems(searchArg);
    []
    return { items };
  }
)
export default function ItemsList() {
    //const { items } = useLoaderData();
    return (
        <div>ItemsList</div>
    )
}

