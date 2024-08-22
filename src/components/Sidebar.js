import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentUrl, setCurrentUrl] = useState('')
       const [hoverItem, setHoverItem] = useState()
    useEffect(() => {
        setCurrentUrl(location.pathname)
         console.log(location.pathname)
     }, []) 
    const changeActiveRoute = (route) => {
        console.log(route)
        setCurrentUrl(route.link)
        navigate(route.link)
    }

    const updateHoverItem = (item) => {
        setHoverItem(item)
    }

    const routes = [{
        name: 'threads',
        icon: 'bi-house-door-fill',
        link: '/threads'
    }, {
        name: 'search',
        icon: 'bi-search',
        link: '/search'
    }, {
        name: 'trending',
        icon: 'bi-heart',
        link: '/trending'
    }, {
        name: 'userName',
        icon: 'bi-person',
        link: '/userName/Threads'
    }]
    return <>
        <div className="d-flex flex-column justify-content-between p-3 px-4" style={{ height: '100%' }}>
            <div>
                <i class="bi bi-threads icon px-3" ></i>
            </div>
            <div className="all-icons d-flex flex-column" >
                {routes.map((route) => (
                        <i class={`my-2 ${currentUrl.includes(route.name) ? 'active-route' : 'route-icons'} ${hoverItem == route.name ? 'hover-route' : ''} bi ${route.icon}`} onClick={() => changeActiveRoute(route)} onMouseOver={() => updateHoverItem(route.name)} onMouseLeave={() => updateHoverItem('')}></i>
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