import React from 'react'
import { Form, Outlet, useNavigate } from 'react-router-dom'
import './Searchbar.sass'
import { BiSearchAlt2 } from 'react-icons/bi'
import MeLiIcon from '../../MeLiIcon.png'
function Searchbar() {
    const navigate = useNavigate()
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate({ pathname: 'items', search: `search=${event.currentTarget.search.value}` })
    }
    return (
        <>
            <div className='Searchbar'>
                <div className='Container'>
                    <Form method='get' onSubmit={onSubmit} className="SearchForm">
                        <img src={MeLiIcon} className="MeLiIcon"/>
                        <input name="search" type="text" className='SearchInput' placeholder='Nunca dejes de buscar'/>
                        <button className='SearchButton' type="submit">
                            <BiSearchAlt2 className='SearchIcon' preserveAspectRatio="xMinYMin" />
                        </button>
                    </Form>
                </div>
            </div>
            <div className='Container OutletContainer'>
                <Outlet />
            </div>
        </>
    )
}

export default Searchbar
