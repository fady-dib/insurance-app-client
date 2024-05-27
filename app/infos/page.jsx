'use client'
import React, { useEffect,useState } from 'react'
import MainLayout from '../components/MainLayout';
import { useForm } from '../components/FormContext';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import '../infos/infos.css's


const Infos = () => {

    const country_data = [
        { code: 'FR', name: 'France', dialCode: '(+33)', flag: '🇫🇷' },
        { code: 'DE', name: 'Germany', dialCode: '(+49)', flag: '🇩🇪' },
        { code: 'IT', name: 'Italy', dialCode: '(+39)', flag: '🇮🇹' },
        { code: 'ES', name: 'Spain', dialCode: '(+34)', flag: '🇪🇸' },
        { code: 'GB', name: 'United Kingdom', dialCode: '(+44)', flag: '🇬🇧' },
        { code: 'NL', name: 'Netherlands', dialCode: '(+31)', flag: '🇳🇱' },
        { code: 'BE', name: 'Belgium', dialCode: '(+32)', flag: '🇧🇪' },
        { code: 'PT', name: 'Portugal', dialCode: '(+351)', flag: '🇵🇹' },
        { code: 'GR', name: 'Greece', dialCode: '(+30)', flag: '🇬🇷' },
        { code: 'SE', name: 'Sweden', dialCode: '(+46)', flag: '🇸🇪' },
        { code: 'LB', name: 'Lebanon', dialCode: '(+961)', flag: '🇱🇧' },
    ];

    const { formData, setFormData } = useForm();
    const [ radio_siret, setRadio ] = useState(false);
    const [ selected_country, setSelectedCountry ] = useState(country_data[0]);
    const [ phone_number, setPhoneNumber] = useState('');

    const router = useRouter();

    const handleNext = () => {
        if (radio_siret) {
            setFormData({ ...formData, siret: 'false' });
        } 
        setFormData({ ...formData, telephone: selected_country.dialCode + phone_number });
        router.push('/');
    };

    const handleRadio = () => {
        setRadio(!radio_siret)
    }

    useEffect(() => {
        console.log(formData)
        console.log(radio_siret)
    }, [formData,radio_siret]);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };


  return (
    <div>
        <MainLayout step="4 de 6" title="Veuillez renseigner vos informations">
            <div className='grid-cols-4 grid'>
                <div className='col-span-3 font-medium'>
                    <p className='pt-20 text-[24px]'>Félicitations ! Il ne vous reste plus qu'à renseigner les informations ci-dessous pour accéder à vos contrats en ligne.</p>
                    <p className='w-[55%] mt-7'>Votre numéro siret personnel ou celui de votre structure (et non celui du réseau avec lequel vous travaillez)</p>
                </div>
                <div className='col-span-3 flex mt-4'>
                      <Input type="text" placeholder="Siret" value={formData.siret} onChange={(e) => setFormData({ ...formData, siret: e.target.value })} disabled={radio_siret} className="w-[65%] mr-6"/>
                      <div className="flex items-center">
                          <div className={`border w-[16px] h-[16px] rounded-full cursor-pointer mr-2  ${radio_siret ? 'bg-[#C3FFD0] border-[#004737] border-[3px]' : 'bg-[#F9FAFB]'}`} onClick={handleRadio}></div>
                          <label className='text-gray-500'>Je n'ais pas de siret</label>
                      </div>
                </div>
                <p className='col-span-3 text-[#111928] font-semibold border-b pb-2 mt-6'>Votre coordonnées</p>
                <div className='col-span-3 mt-4'>
                    <div className='grid-cols-2 grid gap-4'>
                          <Input type="text" placeholder="Nom" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
                          <Input type="text" placeholder="Prénom" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
                    </div>
                </div>
                <div className='col-span-3 mt-4'>
                    <div className='grid-cols-2 grid gap-4'>
                          <select className='border rounded-lg h-[56px] px-4 text-gray-500' value={formData.value}
                              onChange={(e) => setFormData({...formData, civilite : e.target.value })}>
                              <option>Civilité</option>
                              <option>Monsieur</option>
                              <option>Madame</option>
                              <option>Mademoiselle</option>
                        </select>
                        <DatePicker
                            selected={formData.start_date}
                            onChange={(date) => setFormData({ ...formData, start_date : date})}
                            placeholderText="Date de naissance"
                            className="w-full h-[56px] px-6 border rounded-lg"
                            popperPlacement="bottom-start"
                        />
                    </div>
                </div>
                <div className='col-span-3 mt-4'>
                      <div className='grid-cols-2 grid gap-4'>
                          <Input type="text" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                          <div className='flex items-center px-6 border rounded-lg h-[56px]'>
                              <div className="flex items-center">
                                  <span className="mr-2">{selected_country.flag}</span>
                                  <select
                                    value={selected_country.code}
                                    onChange={(e) => handleCountryChange( country_data.find((c) => c.code === e.target.value))}
                                    className="text-gray-500"
                                    >
                                      {country_data.map((country) => (
                                          <option key={country.code} value={country.code}>
                                              {country.code}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                              <p className="pr-2 text-gray-500 font-normal text-sm"><span className='px-2 text-gray-200'>|</span>{selected_country.dialCode}</p>
                              <input
                                  type="number"
                                  placeholder="Téléphone"
                                  className="flex-grow placeholder-gray-500 text-sm outline-none"
                                  value={phone_number}
                                  onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                          </div>
                      </div>
                </div>
                <div className='col-span-3 mt-4'>
                    <div className='grid-cols-2 grid gap-4'>
                          <Input type="text" placeholder="Adresse" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                        <Input type="text" placeholder="Complement D'adresse" value={formData.address_complement} onChange={(e) => setFormData({ ...formData, address_complement: e.target.value })} />
                    </div>
                </div>
                <div className='col-span-3 mt-4'>
                    <div className='grid-cols-2 grid gap-4'>
                          <Input type="number" placeholder="Code Postal" value={formData.postal_code} onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })} />
                          <Input type="text" placeholder="Ville" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                    </div>
                </div>
                <p className='col-span-3 text-[#111928] font-semibold border-b pb-2 mt-6'>Votre activité</p>

            </div>
        </MainLayout>
    </div>
  )
}

export default Infos
