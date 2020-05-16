import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { Genre } from "../../";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1)
    }
  })
);

const Filters = ({
  filters,
  handleOnChangeFilter
}: {
  filters: Genre[];
  handleOnChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Pick a category</FormLabel>
      <FormGroup>
        {filters.map((genre: Genre) => (
          <FormControlLabel
            key={genre.id}
            control={
              <Checkbox
                name={genre.name}
                onChange={handleOnChangeFilter}
                checked={genre.isChecked || false}
              />
            }
            label={genre.name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default Filters;
