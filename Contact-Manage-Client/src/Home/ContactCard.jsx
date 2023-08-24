import {HiOutlineUserCircle} from 'react-icons/hi'
import {LuSubtitles} from 'react-icons/lu'
import {GrArticle, GrStatusUnknown} from 'react-icons/gr'

import { useState } from 'react';
import EditContact from './EditContact';

const ContactCard = ({contact, handleDelete ,refetch}) => {
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
    return (
        <div className="border flex flex-col justify-between">
            <div className='bg-slate-300'>
                <HiOutlineUserCircle className='w-full mx-auto h-36 py-6' />
            </div>
            <div className='my-5 ps-3'>
            <div className='flex justify-between mb-4'>
                <div className='flex gap-2 me-2'><GrArticle className='inline text-2xl'/> <p className='inline'>First Name:</p> </div> <div className='px-2 bg-slate-200'>{contact?.firstName}</div>
                </div>
                <div className='flex justify-between mb-4'>
                <div className='flex gap-2 me-2'><GrArticle className='inline text-2xl'/> <p className='inline'>Last Name:</p> </div> <div className='px-2 bg-slate-200'>{contact?.lastName}</div>
                </div>
                <div className='flex justify-between mb-4'>
                <div className='flex gap-2 me-2'><GrArticle className='inline text-2xl'/> <p className='inline'>Email:</p> </div> <div className='px-2 bg-slate-200 overflow-x-scroll no-scrollbar'>{contact?.email}</div>
                </div>
                <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-2'><GrStatusUnknown className='inline text-2xl'/> Status: </div> <div className='px-10 bg-slate-200'>{contact?.status}</div>
                </div>
            </div>
                <div className='flex'>
                <div className='w-full flex items-end'>
                    <button onClick={openModal} className='bg-green-600 w-full py-3 text-white align-text-bottom font-bold'>Edit Contact</button>
                </div>
                <div className='w-full flex items-end'>
                    <button onClick={() => handleDelete(contact?._id)} className='bg-red-600 w-full py-3 text-white align-text-bottom font-bold'>Delete Contact</button>
                </div>
                </div>
                <EditContact
        isOpen={isOpen}
        closeModal={closeModal}
        onClose={() => setIsOpen(false)}
        refetch={refetch}
        contact={contact}
        id={contact._id}
        />
        </div>
    );
};

export default ContactCard;