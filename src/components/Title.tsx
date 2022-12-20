import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { BiNews } from "react-icons/bi";
import { HiOutlineQrcode } from "react-icons/hi"

function Title() {
    return (
        <div className='title'>
            <h1><HiOutlineQrcode /></h1>
            &nbsp;
            <h1>HackerNews List</h1>
        </div>)
}
export default Title;