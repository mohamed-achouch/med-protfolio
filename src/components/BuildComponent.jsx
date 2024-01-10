import React from 'react'

const BuildComponent = ({item}) => {
  return (
    <div className='how_build'>
        <span><p>{item.number}</p></span>
        <div className="desc">
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
  <path d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333" stroke="#C0B7E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h2>{item.desc}</h2>
        </div>
    </div>
  )
}

export default BuildComponent