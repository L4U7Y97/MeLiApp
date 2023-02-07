import React from 'react'
import SuspenseLoader from '../../Components/SuspensePageLoader/SuspensePageLoader';
import { makeDeferredLoader, useLoaderData } from '../../utils/routerUtils';
import getItem from './getItem';

export const loader = makeDeferredLoader(({ params }) => {
    const item = getItem(params.itemId || '');
    return { item };
  })

export default function ItemDetails() {
    const { item } = useLoaderData<typeof loader>();
    return (
        <SuspenseLoader resolve={item}>
            {item => <div>{item.item.title}</div>}
        </SuspenseLoader>
    )
}

