import React from 'react'
import { ItemWithDetails } from '../../domain/Item';
import { makeDeferredLoader, useLoaderData } from '../../utils/routerUtils';

export const loader = makeDeferredLoader(({ params }) => {
    const item: ItemWithDetails = //await getItem(params.itemId);
    {} as ItemWithDetails
    return { item };
  })

export default function ItemDetails() {
    //const { item } = useLoaderData();
    return (
        <div>ItemsDetails</div>
    )
}

