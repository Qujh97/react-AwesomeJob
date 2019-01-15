import { combineReducers } from 'redux';
/* import boyReducer from './boy-reducer';
import girlReducer from './girl-reducer'; */
import userReducer from './user-reducer'
import workexpReducer from './workexp-reducer'
import projectexpReducer from './projectexp-reducer'

const allReducers = {
  /* boys: boyReducer,
  girls: girlReducer,  */
  user: userReducer,
  workExp: workexpReducer,
  projectExp: projectexpReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;