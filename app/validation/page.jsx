'use client'
import React, { useEffect, useState } from 'react'
import MainLayout from '../components/MainLayout';
import ProductCard from '../components/ProductCard';

const Validation = () => {

    const [payment, setSelectedPayment] = useState('monthly');
    const [selected_cards, setSelectedCards] = useState([]);

    const handlePayment = (option) => {
        setSelectedPayment(option);
    };

    const handleCards = (title) => {
        setSelectedCards((prevSelectedCards) => {
            if (prevSelectedCards.includes(title)) {
                return prevSelectedCards.filter((t) => t !== title);
            } else {
                return [...prevSelectedCards, title];
            }
        });
    };

    useEffect(() => {
        console.log(selected_cards)
    },[selected_cards]);

    const products = [
        { title: 'Marchandises', image: 'images/Produit_illustration.svg' },
        { title: 'Santé', image: 'images/Group168.png' },
        { title: 'Auto Pro', image: 'images/auto_pro.svg' },
        { title: 'Prevoyance', image: 'images/prevoyance.svg' }
    ];


  return (
    <>
        <MainLayout step="3 de 6" title="Valider mon Panier">
            <p className='pt-20 mb-4 font-medium text-[24px]'>Mon panier</p>
            <div className='grid-cols-5 grid'>
                <div className="rounded-lg border col-span-4 p-4">
                    <div className='flex justify-between'>
                        <p className='font-medium text-2xl'>Responsabilité Civile Pro+</p>
                        <div className='flex flex-col'>
                              <p className='font-extrabold text-2xl text-right'>{payment === 'monthly' ? '€15,00 ' : '€60,00 '}<span className='text-base text-gray-500 font-medium'>{payment === 'monthly' ? 'le 1er trimestre' : '/ année'}</span></p>
                              <p className='font-medium text-sm text-gray-500 text-right'>{payment === 'monthly' ? 'Puis prélèvement de ' : 'Soit '}<span className='text-base text-[#2A2A2A] font-bold'>€5,00</span> /mois</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                          <div className='flex text-[#BBBBBB] text-sm font-medium'>
                            <p className='mr-5'>Modifier</p>
                            <p>x Suprimer</p>
                        </div>
                        <div className='rounded-lg  bg-[#F8F8F8] flex p-2 font-medium'>
                            <p className={`mr-6 py-1 px-4 cursor-pointer ${payment === 'annually' ? 'rounded-[4px] text-white bg-[#004737]' : 'text-[#424965]'}`} onClick={() => handlePayment('annually') }>Annuel</p>
                            <p className={`cursor-pointer py-1 px-4 ${payment === 'monthly' ? 'rounded-[4px] text-white bg-[#004737]' : 'text-[#424965]'}`} onClick={() => handlePayment('monthly') }>Mensuel</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='pt-8 mb-4 font-medium text-base'>Souhaitez-vous obtenir vos tarifs pour nos autres options ? Il est encore temps !</p>
            <div className='grid-cols-2 grid gap-5'>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        onSelect={() => handleCards(product.title)}
                        is_selected={selected_cards.includes(product.title)}
                        image = {product.image}
                    />
                ))}
            </div>

        </MainLayout>
    </>
  )
}

export default Validation
