import React from 'react';
import { useRouter } from 'next/router';
import ContactForm from './ContactForm';
import { useContactContext, ContactProvider } from './ContactContext';

const Home: React.FC = () => {
  const router = useRouter();
  const { contacts } = useContactContext();

  const handleLogout = () => {
    router.push('/');
  };

  function setIsModalOpen(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section
      
      style={{ backgroundImage: `url("bg2.jpg")` }}
    >
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-4 right-4 px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-200"
      >
        Add New Contact
      </button>
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white mb-10">
        Welcome User!
      </h1>
      <ContactForm />
      <div className="w-full max-w-md mt-6 space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p className="text-gray-900 dark:text-white"><strong>Name:</strong> {contact.name}</p>
            <p className="text-gray-900 dark:text-white"><strong>Email:</strong> {contact.email}</p>
            <p className="text-gray-900 dark:text-white"><strong>Address:</strong> {contact.address}</p>
            <p className="text-gray-900 dark:text-white"><strong>Phone:</strong> {contact.phone}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
      >
        Logout
      </button>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <ContactProvider>
      <Home />
    </ContactProvider>
  );
};

export default App;
