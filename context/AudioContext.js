// contexts/AudioContext.js
import { createContext, useContext, useReducer } from 'react';

// Action Types
const TOGGLE_MUTE = 'TOGGLE_MUTE';

// Reducer
const audioReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MUTE:
      return { ...state, isMuted: !state.isMuted };
    default:
      return state;
  }
};

// Initial State
const initialAudioState = {
  isMuted: false,
};

// Context
const AudioContext = createContext();

// Provider
const AudioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(audioReducer, initialAudioState);

  const toggleMute = () => {
    dispatch({ type: TOGGLE_MUTE });
  };

  return (
    <AudioContext.Provider value={{ ...state, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};

// Custom Hook
const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export { AudioProvider, useAudio };
