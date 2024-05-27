'use client'

import { usePathname } from 'next/navigation';


const Breadcrumbs = () => {

    const params = usePathname();


    return (
        <>
            <div className='breadcrumb flex text-xs text-gray-400'>
                <p className={`mr-3 ${params == '/' ? 'text-green-500' : ''}`}>Responsabilité Civile Pro+</p> &gt;
                <p className={`mx-3 ${params === '/notre-offre' ? 'text-green-500' : ''}`}> Notre Offre</p> &gt;
                <p className={`mx-3 ${params === '/validation' ? 'text-green-500' : ''}`}> Validation</p> &gt;
                <p className={`mx-3 ${params === '/infos' ? 'text-green-500' : ''}`}> Infos</p> &gt;
                <p className={`mx-3 ${params === '/signature' ? 'text-green-500' : ''}`}> Signature</p> &gt;
                <p className={`ml-3 ${params === '/paiements' ? 'text-green-500' : ''}`}> Paiements</p>
            </div>
        </>
    );
};

export default Breadcrumbs;