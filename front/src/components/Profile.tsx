import React from "react";
import { Container, Typography, Button } from "@material-ui/core";

import Basic from "./Basic";
import Address from "./Address";
import Career from "./Career";
import College from "./College";
import useStyles from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../domain/entity/rootState";
import { calculateValidation } from "../domain/services/validation";
import validationActions from "../store/validation/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  const handleSave = () => {
    const message = calculateValidation(profile);

    dispatch(validationActions.setValidation(message));
    dispatch(validationActions.setIsStartValidation(true));
  };

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        基本情報
      </Typography>
      <Basic />
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        住所
      </Typography>
      <Address />
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        所属大学
      </Typography>
      <College />
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        職歴
      </Typography>
      <Career />
      <Button
        fullWidth
        className={classes.button}
        onClick={handleSave}
        variant="outlined"
        color="primary"
      >
        保存
      </Button>
    </Container>
  );
};

export default Profile;
