import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@material-ui/core";
import useStyles from "./styles";
import { RootState } from "../domain/entity/rootState";

import { Profile } from "../domain/entity/profile";
import { Gender } from "../domain/entity/gender";
import { PROFILE } from "../domain/services/profile";
import profileActions from "../store/profile/actions";

import { calculateValidation } from "../domain/services/validation";
import validationActions from "../store/validation/actions";
import { isPhoneNumber } from "../domain/services/phone";

const Phone = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);
  const validation = useSelector((state: RootState) => state.validation);

  const classes = useStyles();

  const handlePhoneNumber = (code: string) => {
    if (!isPhoneNumber(code)) return;
    dispatch(profileActions.setPhone(code));

    recalculateValidation(code);
  };

  const recalculateValidation = (member: string) => {
    if (!validation.isStartValidation) return;
    const newPhoneNumber = {
      ...profile,
      member,
    };
    const message = calculateValidation(newPhoneNumber);
    dispatch(validationActions.setValidation(message));
  };

  return (
    <TextField
      fullWidth
      className={classes.formField}
      label={PROFILE.PHONE}
      placeholder="08012340000"
      required
      error={!!validation.message.phone.phoneNumber}
      helperText={validation.message.phone.phoneNumber}
      value={profile.phone.phoneNumber}
      onChange={(e) => handlePhoneNumber(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default Phone;
