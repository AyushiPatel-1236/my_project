import Link from 'next/link'

import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";

import { GoBell } from "react-icons/go";

const LoginFrom = () => {
  return (
    
    <div >
   <aside className="side_bar">
    <div className="side_top" >
    <p className="ic1"><FaCalendarDay /></p>
        <span className="acm">Acme</span>
        <h2 className='bell'> <GoBell /></h2>
       
       
    </div>
   <ul>
        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
                <h2 className='icon'><MdOutlineDashboard /></h2>
            
            </span>
            
          <span className='side_name'>  Dashboard</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'>< SlBasket/></h2>
           
            </span>
            
          <span className='side_name'>  Orders</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'><FaProductHunt /></h2>
            
            </span>
            
          <span className='side_name'>  Product</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'> <MdOutlineManageAccounts /></h2>
           
            </span>
            
          <span className='side_name'> Customers</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'><IoAnalytics /></h2>
            
            </span>
            
          <span className='side_name'> Analytics</span>
            </Link>
        </li>

    </ul>
   </aside>




</div>





  )
}

export default LoginFrom