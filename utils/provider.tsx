import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  ReactElement,
} from "react";

interface ContextType {
  activeDropdown: string;
  setActiveDropdown: Dispatch<SetStateAction<string>>;
}

const initialStates = {
  activeDropdown: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveDropdown: () => {},
};

const Context = createContext<ContextType>(initialStates);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): ReactElement {
  const [activeDropdown, setActiveDropdown] = useState(
    initialStates.activeDropdown
  );

  return (
    <Context.Provider value={{ activeDropdown, setActiveDropdown }}>
      {children}
    </Context.Provider>
  );
}

export function UseMyContext(): ContextType {
  const { activeDropdown, setActiveDropdown } = useContext(Context);
  return {
    activeDropdown,
    setActiveDropdown,
  };
}
