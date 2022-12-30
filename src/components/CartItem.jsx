
import { IoAddCircleSharp } from 'react-icons/io5'
import { HiMinusCircle } from 'react-icons/hi'
import { removeProduct, addProduct } from '../store/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
const CartItem = ({ cart }) => {
  const { id, name, price, quantity } = cart;


  const dispatch = useDispatch();


  return (
    <>
      <div className="flex mb-2 h-32 bg-blue-400 flex flex-row items-center
        
        justify-between
        ">
        <div className="flex flex-col  items-left pl-6 justify-between">
          <h1 className="text-white italic text-bold text-xl md:text-3xl">{name}</h1>
          <p className="text-blue-200 italics text-semibold text-lg md:text-3xl">Rs{price} <span className='text-black mr-2'>x</span>{quantity}</p>


        </div>
        <div className="h-full w-4/12 md:w-3/12 
          flex items-center  justify-center md:flex-end flex-row gap-2
          
          ">
          <IoAddCircleSharp size={24} onClick={() => {

            dispatch(addProduct({ ...cart, quantity: 1 }))


          }} />
          <div>{quantity}</div>
          <HiMinusCircle size={24}
            onClick={() => {

              dispatch(removeProduct({ ...cart, quantity: 1 }))


            }}
          />

        </div>




      </div>



    </>
  )




}
export default CartItem