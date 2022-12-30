import CartItem from './components/CartItem'
import Navbar from './components/Navbar'
import Item from "./components/Item"
import { MdCancel } from "react-icons/md"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { products } from "./product";
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useSelector(state => state.cart.cartTotal);
  // console.log(data);
  const data2 = useSelector(state => state.cart);

  console.log(data2);



  return (
    <main className="bg-gradient-to-br from-zinc-50 to-slate-300 w-screen overflow-x-hidden h-screen">
      <Navbar setIsModalOpen={setIsModalOpen} />
      <div className='w-full h-full flex items-center flex-col md:flex-row'>
        <img src="5_SCENE.png" className='w-full md:w-2/5 mt-32 md:mt-0 object-cover' />
        <div className='w-full md:w-3/5 flex items-center justify-center'>

          <div className='w-full md:w-10/12 md:h-[500px] mt-24 h-full  bg-white mb-16 overflow-y-scroll rounded-lg flex items-center flex-col pt-6 gap-2'>
            {
              products.map((item) => <Item item={item} />)
            }

          </div>


        </div>

      </div>

      {isModalOpen && (

        <div className='fixed w-screen z-5 top-0 left-0 h-screen overflow-hidden bg-black/75
        flex 
        items-center
        justify-center
        
        
        '>
          <AnimatePresence>
            {isModalOpen && (
              <motion.div

                key="modal"
                initial={{ y: 100 }}

                animate={{
                  y: 0,

                }}
                exit={{
                  y: 100
                }}


                // transition={{ delay: 1 }}

                className='w-2/3 h-2/3 bg-white rounded-lg flex flex-col
          
          
          '>

                <div className='flex justify-between items-center h-16 bg-blue-500/50 rounded-t-lg px-6'>
                  <h1 className='px-2 text-bold text-xl md:text-3xl'>your cart</h1>
                  <MdCancel size={24} className='text-red-500 '
                    onClick={() => {
                      setIsModalOpen(false);
                    }}



                  />
                </div>
                <div className="overflow-y-scroll  w-full h-full">
                  {data2.cart.map((item) => {
                    return (<CartItem cart={item} />)

                  })}
                </div>



                <hr className="border-2 border-blue-600/75 mt-2"></hr>
                <div className='w-full flex flex-col'>
                  <div className="flex flex-row items-center justify-between h-16 w-full px-6">
                    <h1>total amount</h1>
                    <p>{data}</p>
                  </div>
                  <div></div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      )}


    </main>
  )
}
