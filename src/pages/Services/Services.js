import React from 'react'
import './Services.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import { serviceData } from '../../utils/common'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

const Services = () => {
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />
        <div className="paddings flexCenter properties">
          {
            serviceData.map((data, i)=>(<ServiceCard data={data} i={i} key={i}/>))
          }
        </div>
      </div>
    </div>
  )
}

export default Services