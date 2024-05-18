import React, { useState } from 'react';
import { useContactContext } from './ContactContext';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addContact } = useContactContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addContact({ name, email, address, phone });
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-200"
      >
        Add New Contact
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">Add Contact</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="Street"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 mr-2 font-medium text-gray-700 bg-gray-300 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition ease-in-out duration-200 dark:bg-gray-600 dark:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-200"
              >
                Add Contact
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
