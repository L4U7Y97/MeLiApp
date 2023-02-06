import React from 'react'
import Card from '../../Components/Card/Card';
import SuspenseLoader from '../../Components/SuspensePageLoader/SuspensePageLoader';
import { Await, makeDeferredLoader, useLoaderData } from '../../utils/routerUtils';
import getItems from './getItems';
import './ItemsList.scss';

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
        <SuspenseLoader>
            <Await resolve={data.items}>
                {items => <table className='Table'>
                    {items.items.map((item) => <tr><Card>{item.title}</Card></tr>)}
                </table>}
            </Await>
        </SuspenseLoader>
    )
}

