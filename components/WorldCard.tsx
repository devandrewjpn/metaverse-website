import React from 'react'

const WorldCard = ({backgroundUrl,title}) => {
  return (
    <div className="w-[217px] h-[167px] bg-[#5C497A]">
        <div style={{backgroundImage: backgroundUrl}}></div>
    </div>
  )
}

export default WorldCard