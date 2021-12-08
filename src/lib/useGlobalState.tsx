// import { User } from "@/types";
// import {
//   createContext,
//   useState,
//   useContext,
//   Dispatch,
//   SetStateAction,
//   ReactNode,
// } from "react";

// const GlobalState = createContext({});

// interface ProviderProps {
//   children: ReactNode;
// }

// export const Provider = ({ children }: ProviderProps) => {
//   const [user, setUser] = useState<User | {}>({});
//   return (
//     <GlobalState.Provider value={{ user, setUser }}>
//       {children}
//     </GlobalState.Provider>
//   );
// };

// interface UseGLobalState {
//   user: User | {};
//   setUser: Dispatch<SetStateAction<{} | User>>;
// }

// const useGLobalState = () => {
//   console.log(useContext(GlobalState));
//   return useContext(GlobalState);
// };

// export default useGLobalState;
