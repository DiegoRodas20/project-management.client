
import { useContext } from 'react';
import { ConfigContext } from '../contexts/config-context';


const useConfig = () => useContext(ConfigContext);

export default useConfig;
