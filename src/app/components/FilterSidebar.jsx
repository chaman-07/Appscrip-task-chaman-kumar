"use client"

import { useState } from "react"
import "./filtersidebar.css"
import { FaChevronDown } from "react-icons/fa"

export default function FilterSidebar() {

    const [idealOpen, setIdealOpen] = useState(false)
    const [occasionOpen, setOccasionOpen] = useState(false)
    const [workOpen, setWorkOpen] = useState(false)
    const [fabricOpen, setFabricOpen] = useState(false)
    const [segmentOpen, setSegmentOpen] = useState(false)
    const [suitableOpen, setSuitableOpen] = useState(false)
    const [rawOpen, setRawOpen] = useState(false)
    const [patternOpen, setPatternOpen] = useState(false)





    return (

        <div className="filters">

            <div className="customizable">
                <input type="checkbox" />
                <label>CUSTOMIZABLE</label>
            </div>
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setIdealOpen(!idealOpen)}>
                    <span>IDEAL FOR</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>
                
                    {idealOpen && (

                    <ul className="filterOptions">

                        <li>Men</li>
                        <li>Women</li>
                        <li>Baby & Kids</li>

                    </ul>

                )}

            </div>
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setOccasionOpen(!occasionOpen)}>

                    <span>OCCASION</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>

                {occasionOpen && (

                    <ul className="filterOptions">

                        <li>Casual</li>
                        <li>Party</li>
                        <li>Wedding</li>

                    </ul>

                )}

            </div>
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setWorkOpen(!workOpen)}>

                    <span>WORK</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>

                {workOpen && (

                    <ul className="filterOptions">

                        <li>Office</li>
                        <li>Daily Wear</li>
                        <li>Travel</li>

                    </ul>

                )}

            </div>
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setFabricOpen(!fabricOpen)}>

                    <span>FABRIC</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>

                {fabricOpen && (

                    <ul className="filterOptions">

                        <li>Cotton</li>
                        <li>Polyster</li>
                        <li>Silk</li>

                    </ul>

                )}

            </div> 
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setSegmentOpen(!segmentOpen)}>

                    <span>SEGMENT</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>

                {segmentOpen && (

                    <ul className="filterOptions">

                        <li>Cotton</li>
                        <li>Polyster</li>
                        <li>Silk</li>

                    </ul>

                )}

            </div>  
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setSuitableOpen(!suitableOpen)}>

                    <span>SUITABLE</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>

                {suitableOpen && (

                    <ul className="filterOptions">

                        <li>Formal</li>
                        <li>Traditional</li>
                        <li>Party Wear</li>

                    </ul>

                )}

            </div>  
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setRawOpen(!rawOpen)}>

                    <span>RAW MATERIAL</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>

                {rawOpen && (

                    <ul className="filterOptions">

                        <li>Cotton</li>
                        <li>Polyster</li>
                        <li>Silk</li>

                    </ul>

                )}

            </div> 
            <div className="filterItem">

                <div
                    className="filterHeader"
                    onClick={() => setPatternOpen(!patternOpen)}>

                    <span>PATTERN</span>
                    <FaChevronDown />

                </div>
                <p className="filter-selected">All</p>

                {patternOpen && (

                    <ul className="filterOptions">

                        <li>Floral</li>
                        <li>Printed</li>
                        <li>Printed</li>

                    </ul>

                )}

            </div>  
        </div>

    )

}