import React from 'react'
import Card from '../../Components/Card/Card';
import SuspenseLoader from '../../Components/SuspensePageLoader/SuspensePageLoader';
import { makeDeferredLoader, useLoaderData } from '../../utils/routerUtils';
import getItem from './getItem';
import './ItemDetails.sass'

export const loader = makeDeferredLoader(({ params }) => {
    const item = getItem(params.itemId || '');
    return { item };
  })

export default function ItemDetails() {
    const { item } = useLoaderData<typeof loader>();
    return (
        <SuspenseLoader resolve={item}>
            {({item}) => <Card>
                <img src={item.picture} className='ItemImage' />
        <div className='ItemContainer'>
            <span className='ItemPrice'>
                {`${item.price.currency} ${item.price.amount}`}
            </span>
            <span>{item.title}</span>
        </div>
        <span className='ItemDescriptionTitle'>{item.condition}</span>
        </Card>}
        </SuspenseLoader>
    )
}

