import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Contact {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface ContactContextProps {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
}

const ContactContext = createContext<ContactContextProps | undefined>(undefined);

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContactContext must be used within a ContactProvider');
  }
  return context;
};

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
