'use client'
import MainLayout from "./components/MainLayout";
import './globals.css';
import { useState } from "react";


export default function Home() {

  const [dropdowns, setDropdowns] = useState([{ id: 0, value: '' }]);
  const options = ['Choisir Réseau', 'Réseau 1', 'Réseau 2'];

  const addDropdown = (e) => {
    e.preventDefault();
    if (dropdowns.length < options.length - 1) {
      setDropdowns([...dropdowns, { id: dropdowns.length, value: '' }]);
    }
  };

  const handleSelectChange = (e, index) => {
    const newDropdowns = dropdowns.map((dropdown, i) =>
      i === index ? { ...dropdown, value: e.target.value } : dropdown
    );
    setDropdowns(newDropdowns);
  };

  const getFilteredOptions = (index) => {
    const selectedValues = dropdowns.map((dropdown) => dropdown.value);
    return options.filter((option) => option === 'Choisir Réseau' || !selectedValues.includes(option) || dropdowns[index].value === option);
  };

  const allOptionsSelected = dropdowns.length >= options.length - 1;

  return (
    <main >
      <MainLayout title="Responsabilité Civile Pro +" sub_title="Veuillez remplir les informations pour établir votre devis" step="Faire un devis">
        <div className="grid grid-cols-2 pt-14">
          <h2 className='text-xl font-bold mb-5'>Sécurisez votre activité et vos clients avec des garanties RC Pro indispensables !</h2>
        </div>
        <form className="max-w-[800px]">
          <div className='mb-4 overflow-auto scroll-auto'>
            <label className='block mb-2'>Pour quel(s) réseau(x) souhaitez-vous vous assurer ?</label>
            {dropdowns.map((dropdown, index) => (
              <select
                key={dropdown.id}
                value={dropdown.value}
                className='w-full border rounded-[8px] px-3 py-4 mb-2'
                onChange={(e) => handleSelectChange(e, index)}
              >
                {getFilteredOptions(index).map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ))}
            <button
              className={`text-gray-500 flex items-center pt-2 text-sm ${allOptionsSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={addDropdown}
              disabled={allOptionsSelected}
            >
              <img src={'/images/Icon.svg'} alt="Plus icon" className='h-8.5 w-8.5 mr-4' />
              Ajouter une autre réseau
            </button>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Sous quel statut juridique exercez-vous ?</label>
            <select className='w-full border rounded-[8px] px-3 py-4'>
              <option>Choisir Statut Juridique</option>
            </select>
          </div>
          <div className='bg-[#F0FAF8] pt-10 pb-20 pl-10 rounded-[8px] flex flex-col justify-center mt-10 relative'>
            <div className="max-w-[700px]">
              <p className='font-bold mb-2'>Bon à savoir:</p>
              <ul className='list-disc pl-5'>
                <li>Une prise en charge allant jusqu'à 8 millions d'euros de dommages corporels et matériels</li>
                <li>Une couverture pour l'ensemble de vos événements : réunion, démonstration, location de salle, séminaire, congrès...</li>
                <li>Des documents annuels disponibles en 5 minutes : ATTESTATION, contrat, facture.</li>
              </ul>
            </div>
            <div className=" absolute right-0 top-40">
              <img src={'/images/Group_1.svg'}></img>
            </div>
          </div>
        </form>
      </MainLayout>
    </main>
  );
}
