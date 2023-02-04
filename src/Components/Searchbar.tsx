import React from 'react'
import { ActionFunctionArgs, Form, Outlet, useNavigate } from 'react-router-dom'
import '../Styles/Searchbar.scss'

function Searchbar() {
    const navigate = useNavigate()
    const onSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate({pathname: 'items', search: `search=${event.currentTarget.search.value}` })
    }
    return (
        <>
            <div className='Searchbar'>
                <Form method='get' onSubmit={onSubmit}>
                    <input name="search" type="text" />
                </Form>
            </div>
            <Outlet />
        </>
    )
}

export default Searchbar
