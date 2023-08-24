import { useQuery } from "@tanstack/react-query";

const useContact = () => {
    const {data: contacts = [], refetch} = useQuery({
        queryKey:['contacts'],
        queryFn: async() => {
          const res = await fetch("https://contact-manage-server.vercel.app/allContact");
          return res.json();
        }
      })
      return [contacts, refetch]
};

export default useContact;