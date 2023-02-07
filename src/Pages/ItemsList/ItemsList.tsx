import React, { FC, useCallback } from 'react'
import Card from '../../Components/Card/Card';
import SuspenseLoader from '../../Components/SuspensePageLoader/SuspensePageLoader';
import { Item } from '../../domain/Item';
import { makeDeferredLoader, useLoaderData } from '../../utils/routerUtils';
import getItems from './getItems';
import './ItemsList.sass';
import { TbTruckDelivery } from 'react-icons/tb'
import Tooltip from '../../Components/Tooltip/Tooltip';
import { useNavigate } from 'react-router-dom';

export const loader = makeDeferredLoader(({ request }) => {
    const url = new URL(request.url);
    const searchArg = url.searchParams.get("search") || '';
    const items = getItems(searchArg);
    return { items };
}
)
export default function ItemsList() {
    const data = useLoaderData<typeof loader>();
    return (
        <SuspenseLoader resolve={data.items}>
            {items => <table className='Table'>
                {items.items.map((item) => <tr><ItemCard item={item} /></tr>)}
            </table>}
        </SuspenseLoader>
    )
}

const ItemCard: FC<{ item: Item }> = ({ item }) => {
    const navigate = useNavigate();
    const onClick = useCallback(() => navigate(`/items/${item.id}`), [navigate, item.id])

    return <Card onClick={onClick} className="ItemCard">
        <img src={item.picture} className='ItemImage' />
        <div className='ItemTitleContainer'>
            <span className='PriceText ItemPrice'>
                {`${item.price.currency} ${item.price.amount}`}
                {item.free_shipping && <Tooltip text='Free Shipping'><TbTruckDelivery className='ShippingIcon' /></Tooltip>}
            </span>
            <span>{item.title}</span>
        </div>
        <span className='ItemCondition'>{item.condition}</span>
    </Card>
}

