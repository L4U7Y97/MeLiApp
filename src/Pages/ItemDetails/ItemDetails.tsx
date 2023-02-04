import React from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

export async function loader({ params }: LoaderFunctionArgs) {
    const item:any = //await getItem(params.itemId);
    {}
    return { item };
  }

export default function ItemDetails() {
    //const { item } = useLoaderData();
    return (
        <div>ItemsDetails</div>
    )
}

