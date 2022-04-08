import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { addCartItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.style.scss";

const CollectionItem = ({ items }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = items;
  const addItems = cartItems => dispatch(addCartItem(cartItems));
  const[inputValue, setInputValue] = useState('');
  const info = "Name : "+name+"\nPrice: "+price+"$\nImage: "+imageUrl;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name" value={inputValue} onLoad={e => setInputValue(e.target.value)}>{name}</span>
        <span className="price">{price} $</span>
      </div>
      <div className="flex">
      <CustomButton  inverted onClick={() => addItems(items)}>
        Add to cart
      </CustomButton>
      <CopyToClipboard text = {info} >
      <CustomButton  inverted>Copy</CustomButton>
      </CopyToClipboard>
      </div>
    </div>
  );
};

export default CollectionItem;
