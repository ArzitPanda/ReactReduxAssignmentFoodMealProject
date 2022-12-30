import { FaShoppingCart } from 'react-icons/fa'
// import { BsMinecart } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
const Navbar = ({ setIsModalOpen }) => {

  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  return (<motion.div





    className="w-full
         
           
         
          pt-6
            h-16
            flex
            items-center
           justify-center
            px-2
            ">
    <div className="text-white w-8/12 md:w-3/12 h-11/12 text-md md:text-lg lg:text-3xl bg-slate-900 rounded-full p-2 flex items-center justify-between pl-6">
      <h1 >ReactMeals</h1>
      <div className="text-white  cursor-pointer  h-10/12 text-3xl bg-slate-200 rounded-full p-2 flex items-center justify-between px-2"

        onClick={() => {
          setIsModalOpen(true);
        }}


      >
        <div className='w-8 h-8 rounded-full text-lg text-red-800 text-bold flex items-center justify-center  bg-red-200 
        
        '>{cartQuantity}</div>

        <FaShoppingCart className='text-slate-800' />

      </div>





    </div>
  </motion.div>)


}

export default Navbar;