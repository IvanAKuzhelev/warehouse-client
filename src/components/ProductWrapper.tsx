import IProduct from "./utils/ProductInterface";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

interface ProductWrapperProps extends IProduct {
  imageUrl: string;
  key?: string;
}
const ProductWrapper = ({
  _id,
  count,
  name,
  price,
  imageUrl,
}: ProductWrapperProps) => {
  return (
    <ListItem divider key={_id}>
      <Avatar>
        {imageUrl ? <img src={imageUrl} alt={name} /> : <FolderIcon />}
      </Avatar>
      <p>{name}</p>
      <p>Available: {count}</p>
      <p>Price: {price}</p>
      <Fab title="Edit product">
        <EditIcon />
      </Fab>
      <Button>Change image</Button>
    </ListItem>
  );
};
export default ProductWrapper;
