import {useContext} from 'react';

import {GlobalContext} from '../store/context/GlobalProvider';

const useGlobalStore = () => useContext(GlobalContext);
export default useGlobalStore;
