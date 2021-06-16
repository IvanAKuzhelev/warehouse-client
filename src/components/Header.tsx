import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

const Header = () => {
  return (
    <header>
      <form>
        <TextField id="outlined-basic" label="Max Price" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Search products"
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={} onChange={}
              name="checkedA"
            />
          }
          label="Secondary"
        />
      </form>
    </header>
  );
};
export default Header;
