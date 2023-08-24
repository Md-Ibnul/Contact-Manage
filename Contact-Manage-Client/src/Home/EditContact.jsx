import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import AXIOS from "../hooks/AXIOS";

const EditContact = ({ closeModal, isOpen, refetch, contact, id}) => {
  const { _id, firstName, lastName, email, status} = contact || [];
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    AXIOS.put(`/allContact/${id}`, data).then((data) => {
      console.log(data.data);
        if (data.data.modifiedCount > 0) {
          refetch();
          reset();
          toast.success('Successfully Edited!');
        }
      });
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Contact
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                    defaultValue={firstName}
                      className="w-full border h-10 px-4 mb-3"
                      {...register("firstName", { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                    defaultValue={lastName}
                      className="w-full border h-10 px-4 mb-3"
                      {...register("lastName", { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                    defaultValue={email}
                      type="email"
                      className="w-full border h-10 px-4 mb-3"
                      {...register("email", { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                    <select
                    defaultValue={status}
                     className="w-full border h-10 px-4 mb-3" {...register("status", { required: true })}>
                        <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <div className="mt-4 flex justify-between">
                    <input  type="submit" value="Rewrite" onClick={closeModal} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" />
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditContact;
