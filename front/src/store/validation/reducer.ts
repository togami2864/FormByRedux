import { ValidationState } from "../../domain/entity/validation";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import validationActions from "./actions";

const init: ValidationState = {
  isStartValidation: false,
  message: {
    name: "",
    description: "",
    birthday: "",
    gender: "",
    phone: {
      phoneNumber: "",
    },
    address: {
      postalcode: "",
      prefecture: "",
      city: "",
      restAddress: "",
    },
    college: {
      faculty: "",
    },
    careers: [],
  },
};

const validationReducer = reducerWithInitialState(init)
  .case(validationActions.setIsStartValidation, (state, payload) => ({
    ...state,
    isStartValidation: payload,
  }))
  .case(validationActions.setValidation, (state, payload) => ({
    ...state,
    message: payload,
  }));

export default validationReducer;
