import { FiPlusCircle } from 'react-icons/fi'
import { addProduct } from "../store/cartSlice"
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

const Item = ({ item }) => {
  const { name, price, id, desc } = item;
  const dispatch = useDispatch();
  // const optionRef = useRef();
  const [quantity, setQuantity] = useState(1);



  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200  w-9/12 shadow-md shadow-slate-200 rounded-lg border-slate-800 h-24 grid grid-cols-7 py-2 ">
      <div className="col-start-1 col-end-3 flex flex-col items-left justify-center pl-6 ">
        <h3 className='text-semibold'>{name}</h3>
        <p className="italic text-xs">{desc}</p>
        <h2 className="text-md md:text-lg text-red-400 text-bold ">Rs{price}</h2>

      </div>

      <div className="col-start-4 col-end-7 flex flex-row items-center justify-end  gap-x-4">
        <input type='number' className='w-12 text-center md:w-24 bg-slate-200 border-none rounded-md text-blue-500 font-bold'
          value={quantity}

          onChange={(e) => {
            setQuantity(e.target.value);


          }}

        >

        </input>
        <FiPlusCircle className="text-slate-800 scale-1.5 cursor-pointer"
          onClick={() => {
            dispatch(addProduct({ ...item, quantity: parseInt(quantity) }));
            setQuantity(1);`  `

          }}


        />

      </div>

    </div>
  )


}


export default Item;