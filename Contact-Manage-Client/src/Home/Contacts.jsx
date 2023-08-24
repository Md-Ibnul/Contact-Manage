import { useState } from "react";
import FormModal from "./FormModal";
import { toast } from "react-hot-toast";
import ContactCard from "./ContactCard";
import useContact from "../hooks/useContact";

const Contacts = () => {
  const [contacts, refetch] = useContact();
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  

  const handleDelete = (_id) => {
    fetch(`https://contact-manage-server.vercel.app/allContact/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
            toast.success("Deleted Successfully");
        }
        })
};

  return (
    <div className="my-10 ms-5">
        <div className="grid md:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} handleDelete={handleDelete} refetch={refetch }/>
          ))}
          <div className="flex items-center justify-center text-white font-bold">
          <button type="button"
          onClick={openModal} className="px-6 py-3 bg-sky-400">Add New Contact</button>
          </div>
        </div>
        <FormModal 
        isOpen={isOpen}
        closeModal={closeModal}
        onClose={() => setIsOpen(false)}
        />
    </div>
  );
};

export default Contacts;
