import React from 'react'

const ProductCard = ({ is_selected , title ,image , onSelect}) => {
  return (
    <div>
          <div className={`rounded-lg border relative p-4 h-[174px] ${is_selected ? 'border-[#07d482]' : ''}`}>
        <div className='flex flex-col h-full'>
            <p className='text-[#111928] font-semibold text-lg '>{title}</p>
                  <p className='text-[#6B7280] font-medium text-xs flex-1'>À partir de €6/mois</p>
            <div className='flex gap-5 items-center'>
                      <div className={`border w-[38px] h-[38px] rounded-[8px] cursor-pointer ${is_selected ? 'bg-[#C3FFD0] border-[#07d482]' : ''}`} onClick={onSelect}></div>
                <p className='text-[#7F879D] underline text-xs font-semibold'>En savoir plus</p>
            </div>
        </div>
        <img className='absolute right-0 top-0 h-[172px] rounded-r-[8px]' src={image}></img>
     </div>
    </div>
  )
}

export default ProductCard
