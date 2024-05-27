'use client'
import React from 'react'
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
    const [formData, setFormData] = useState({
        siret: '',
        first_name : '',
        last_name: '',
        email: '',
        civilite: '',
        birthdate: '',
        phone: '',
        address: '',
        address_complement: '',
        postal_code: '',
        city: '',
        vente_domicile : false,
        manager : false,
        moyen_de_paiment : '',
        network: '',
        legal_status: '',
        price: null,
        start_date: null,
        options: [],
        payment_amount: null,
        payment_status: '',
        contract: null,
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export function useForm() {
    return useContext(FormContext);
}
