import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
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
            {({ item }) => <>
                <Breadcrumb paths={[item.category]} />
                <Card className='ItemDetailsCard'>
                    <div className='ItemDetailsImageContainer'>
                        <img src={item.picture} className='ItemDetailsImage' />
                        <span className='ItemDetailsDescriptionTitle BigText'>Descripción del producto</span>
                        <span className='GreyText'>{item.description}</span>
                    </div>
                    <div className='ItemDetailsPriceContainer'>
                        <span className='GreyText'>{item.condition} - {item.sold_quantity} vendidos</span>
                        <span>{item.title}</span>
                        <span className='BiggerText PriceText'>
                            {`${item.price.currency} ${item.price.amount}`}<span className='SmallText DecimalText'>{String(item.price.decimals).padStart(2, '0')}</span>
                        </span>
                        <button className='BuyButton'>Comprar</button>
                    </div>
                </Card>
            </>
            }
        </SuspenseLoader>
    )
}

