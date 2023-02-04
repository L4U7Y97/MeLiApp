import React from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const searchArg =  url.searchParams.get("search");
    const items:any[] = //await getItems(searchArg);
    []
    return { items };
  }

export default function ItemsList() {
    //const { items } = useLoaderData();
    return (
        <div>ItemsList</div>
    )
}

