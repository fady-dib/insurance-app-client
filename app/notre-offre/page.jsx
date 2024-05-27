'use client'
import React from 'react'
import MainLayout from '../components/MainLayout';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../notre-offre/notre-offre.css';


const NotreOffre = () => {

  const [showPro, setShowPro] = useState(false);
  const [showCyber, setShowCyber] = useState(false);
  const [showCash, setShowCash] = useState(false);
  const [showClub, setShowClub] = useState(false);
  const [startDate, setStartDate] = useState(null);

  const [selected_option, setSelectedOption] = useState('monthly');

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <MainLayout step="2 de 6" title="Notre Offre pour votre assurance">
        <p className='pt-20 mb-4 text-[24px]'>Notre offre pour votre Produit</p>
        <div className='grid-cols-5 grid'>
          <div className="rounded-lg border col-span-4 pb-4">
            <p className="text-center py-6 text-5xl leading-[48px] font-extrabold text-[#004737] bg-[#C3FFD0] mb-4">
              {selected_option === 'monthly' ? '€5' : '€60'}
              <span className='text-2xl font-extrabold'>,00 </span>
              <span className="text-base font-medium">{selected_option === 'monthly' ? '/mois' : '/année'}</span>
            </p>
            <div className="flex flex-col sm:flex-row px-8 mb-6">
              <div
                className={`p-4 border-2 rounded-lg cursor-pointer w-[60%] mr-6 h-[114px] flex flex-col justify-center ${selected_option === 'monthly' ? 'border-[#00D37F] bg-[#f1faf8] text-[#004737]' : ''}`}
                onClick={() => handleSelection('monthly')}
              >
                <p className="font-medium text-sm">Payer mensuellement</p>
                <p className="text-2xl font-extrabold">€5,00 <span className="text-base font-medium text-gray-500">/mois</span></p>
                <p className={`text-sm font-medium ${selected_option === 'monthly' ? '' : 'text-gray-500'}`}>Un <span className='font-bold'>minimum de 3 mois</span> est obligatoire pour le premier paiement</p>
              </div>
              <div
                className={`p-4 border-2 rounded-lg cursor-pointer w-[40%] h-[114px] ${selected_option === 'annually' ? 'border-[#00D37F] bg-[#f1faf8] text-[#004737] ' : ''}`}
                onClick={() => handleSelection('annually')}
              >
                <p className="font-medium text-sm">Payer annuellement</p>
                <p className="text-2xl font-extrabold">€60,00 <span className="text-base font-medium text-gray-500">/année</span></p>
              </div>
            </div>
            <div className='px-8 '>
              <div className="py-2">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowPro(!showPro)}>
                  <div>Responsabilité Civile Pro+</div>
                  <img src="/images/chevron-down.svg"></img>
                </div>
                {/* {showPro && <div className="mt-2 text-gray-600">Details about Responsabilité Civile Pro+</div>} */}
              </div>
              <div className="border-t py-2">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowCyber(!showCyber)}>
                  <div>Cyber Assistance</div>
                  <img src="/images/chevron-down.svg"></img>

                </div>
                {/* {showCyber && <div className="mt-2 text-gray-600">Details about Cyber Assistance</div>} */}
              </div>
              <div className="border-t py-2">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowCash(!showCash)}>
                  <div>« Pretty Cash » - l'Assistance Comptable</div>
                  <img src="/images/chevron-down.svg"></img>

                </div>
                {/* {showCash && <div className="mt-2 text-gray-600">Details about Pretty Cash - l'Assistance Comptable</div>} */}
              </div>
              <div className="border-t py-2">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowClub(!showClub)}>
                  <div>« Le Club By »</div>
                  <img src="/images/chevron-down.svg"></img>
                </div>
                {/* {showClub && <div className="mt-2 text-gray-600">Details about Le Club By</div>} */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid-cols-5 grid">
          <div className='col-span-4'>
            <p className="text-sm font-medium mb-3">Date de début souhaitée de votre Responsabilité Civile Professionnelle</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Date"
              className="w-full h-[56px] px-6 border rounded-lg"
              popperPlacement="bottom-start"
            />
          </div>
        </div>

      </MainLayout>
    </div>
  )
}

export default NotreOffre
