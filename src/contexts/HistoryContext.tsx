// HistoryContext.tsx
import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import { localStorageService } from '../services/storageService';

type HistoryState = string[];

type Action = { type: 'SET_HISTORY'; payload: string[] } | { type: 'ADD_HISTORY'; payload: string };

const HistoryContext = createContext<{ state: HistoryState; dispatch: Dispatch<Action> } | undefined>(undefined);

const historyReducer = (state: HistoryState, action: Action): HistoryState => {
  switch (action.type) {
    case 'SET_HISTORY':
      return action.payload;
    case 'ADD_HISTORY':
      const updatedHistory = [action.payload, ...state.filter(item => item !== action.payload)];
      localStorageService.set('history', action.payload);
      return updatedHistory;
    default:
      throw new Error(``);
  }
};

const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(historyReducer, localStorageService.get('history'));

  return (
    <HistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};

export { HistoryProvider, useHistory };
