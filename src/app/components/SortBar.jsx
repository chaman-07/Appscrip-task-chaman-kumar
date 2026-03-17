"use client"
import { useState } from "react"
import "./sortbar.css"
import { FaChevronDown, FaChevronLeft } from "react-icons/fa"

export default function SortBar({ showFilter, setShowFilter }) {

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("")

    const options = [
        "RECOMMENDED",
        "NEWEST FIRST",
        "PRICE: LOW TO HIGH",
        "PRICE: HIGH TO LOW"
    ]
    return (

        <div className="sortBar">
            <div className="left">
                <span className="items">3425 ITEMS</span>
                <button className="hideFilter" onClick={() => setShowFilter(!showFilter)}>
                    <FaChevronLeft className="h-arrow" />
                    {showFilter ? "HIDE FILTER" : "SHOW FILTER"}


                </button>
            </div>
            <div className="right">
                <span className="recommended" onClick={() => setOpen(!open)}>
                    RECOMMENDED <FaChevronDown className="r-arrow" />

                    {open && (
                        <ul className="sortDropdown">
                            {options.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => {
                                        setSelected(item)
                                        setOpen(false)
                                    }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </span>
            </div>
        </div>

    )

}