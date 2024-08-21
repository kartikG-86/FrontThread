import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
     const navigate = useNavigate()
    const [active, setActive] = useState('home')
    const [hoverItem, setHoverItem] = useState()
    const changeActiveRoute = (route) => {
        console.log(route)
        setActive(route.name)
        navigate(route.link)

    }

    const updateHoverItem = (item) => {
        setHoverItem(item)
    }

    const routes = [{
        name: 'home',
        icon: 'bi-house-door-fill',
        link: '/threads'
    }, {
        name: 'search',
        icon: 'bi-search',
        link:''
    }, {
        name: 'trending',
        icon: 'bi-heart',
        link:''
    }, {
        name: 'profile',
        icon: 'bi-person',
        link: '/profile'
    }]
    return <>
        <div className="d-flex flex-column justify-content-between p-3 px-4" style={{ height: '100%' }}>
            <div>
                <i class="bi bi-threads icon px-3" ></i>
            </div>
            <div className="all-icons d-flex flex-column" >
                {routes.map((route) => (
                    <i class={`my-2 ${active == route.name ? 'active-route' : 'route-icons'} ${hoverItem == route.name ? 'hover-route' : ''} bi ${route.icon}`} onClick={() => changeActiveRoute(route)} onMouseOver={() => updateHoverItem(route.name)} onMouseLeave={() => updateHoverItem('')}></i>
                ))}

            </div>
            <div className="all-icons d-flex flex-column" >
                <i class={`bi my-2 bi-pin ${hoverItem == 'pin' ? 'hoverItem' : 'route-icons'}`} onMouseOver={() => updateHoverItem('pin')} onMouseLeave={() => updateHoverItem('')}></i>
                <i class={`bi my-2 bi-list-nested  ${hoverItem == 'sideMenu' ? 'hoverItem' : 'route-icons'}`} onMouseOver={() => updateHoverItem('sideMenu')} onMouseLeave={() => updateHoverItem('')}></i>
            </div>
        </div>
    </>
}

export default Sidebar