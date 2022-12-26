import { createContext, useContext, useState } from 'react'
import { useRouter, Router } from 'next/router';



interface UIContextProps {
  reload: () => void;
  /* setLoginOpen: (value: boolean) => void; */
}

const UIContext = createContext<UIContextProps>({
  reload: () => {}
});

export function UIProvider({ children }: any) {
  /* const [loginOpen, setLoginOpen] = useState(false); */
  
    const reload = () => {
        console.log("Reload from UIProvider");
    }

  return (
    <UIContext.Provider value={{
      reload
      
    }}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => useContext(UIContext);
