import CartItem from './components/CartItem'
import Navbar from './components/Navbar'
import Item from "./components/Item"
import { MdCancel } from "react-icons/md"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, getProduct } from './store/productSlice'
// import { products } from "./product";
import { AnimatePresence, motion } from 'framer-motion'
import uniqid from 'uniqid';
import axios from 'axios';

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addModal, setAddmodal] = useState(false);
  const data = useSelector(state => state.cart.cartTotal);
  // console.log(data);
  const products = useSelector(state => state.products)
  const data2 = useSelector(state => state.cart);
  // console.log(products)

  const [foodName, setFoodName] = useState("");
  const [foodDesc, setFoodDesc] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);


  const dispatch = useDispatch();

  const [data4, setData] = useState([]);

  useEffect(() => {



    axios.get("https://assignment-d3de6-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json").then(
      res => setData(Object.values(res.data)))
      .catch(err => console.log(err))






  }, [])









  const submitFood = () => {
    const id = uniqid();
    axios.post("https://assignment-d3de6-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      {
        id: uniqid(),
        name: foodName,
        price: foodPrice,
        desc: foodDesc
      }

    ).then(res => {



      dispatch(addProduct({
        id, name: foodName,
        price: foodPrice,
        desc: foodDesc
      }));
      setData([...data4, {

        id, name: foodName,
        price: foodPrice,
        desc: foodDesc
      }])



      setFoodDesc("")
      setFoodName("")
      setFoodPrice(0);
      setAddmodal(false)




    }



    ).catch(err => console.log(err))



  }





  // console.log(data2);



  return (
    <main className="bg-gradient-to-br from-zinc-50 to-slate-300 w-screen overflow-x-hidden h-screen">
      <Navbar setIsModalOpen={setIsModalOpen} setAddmodal={setAddmodal} />
      <div className='w-full h-full flex items-center flex-col md:flex-row'>
        <img src="5_SCENE.png" className='w-full md:w-2/5 mt-32 md:mt-0 object-cover' />
        <div className='w-full md:w-3/5 flex items-center justify-center'>

          <div className='w-full md:w-10/12 md:h-[500px] mt-24 h-full  bg-white mb-16 overflow-y-scroll rounded-lg flex items-center flex-col pt-6 gap-2'>
            {
              data4.map((item) => <Item item={item} />)
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



      {addModal && (

        <div className='fixed w-screen z-5 top-0 left-0 h-screen overflow-hidden bg-black/75
        flex 
        items-center
        justify-center
        
        
        '>
          <AnimatePresence>
            {addModal && (
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

                className='w-10/12 md:w-3/5 h-2/3 bg-white rounded-lg flex flex-col
          
          
          '>

                <div className='flex justify-between items-center h-16 bg-blue-500/50 rounded-t-lg px-6'>
                  <h1 className='px-2 text-bold text-xl md:text-3xl'>add meal</h1>
                  <MdCancel size={24} className='text-red-500 '
                    onClick={() => {
                      setAddmodal(false);
                    }}



                  />
                </div>
                <div className="overflow-y-scroll  w-full h-full">
                  <div className='flex flex-col h-3/5 mt-16 items-center gap-2 justify-between'>
                    <div className='flex w-3/5 flex-row items-left flex-start gap-2 p-2 rounded-lg border-2 border-blue-600'><label className='text-blue-500'>food name</label>
                      <input type="text" placeholder='enter your food title' className='border-none outline-none'
                        value={foodName} onChange={(e) => {

                          setFoodName(e.target.value)


                        }}


                      /></div>


                    <div className='flex w-3/5 flex-row items-left flex-start gap-2 p-2 rounded-lg border-2 border-blue-600'><label className='text-blue-500'>food desc</label>
                      <input type="text" placeholder='enter your food desc...' className='border-none outline-none'


                        value={foodDesc} onChange={(e) => {

                          setFoodDesc(e.target.value)


                        }}


                      /></div>


                    <div className='flex w-3/5 flex-row items-left flex-start gap-2 p-2 rounded-lg border-2 border-blue-600'><label className='text-blue-500'>price</label>
                      <input type="number" placeholder='enter your food price' className='border-none outline-none'


                        value={foodPrice} onChange={(e) => {

                          setFoodPrice(e.target.value)


                        }}




                      /></div>




                  </div>
                </div>



                <hr className="border-2 border-blue-600/75 mt-2"></hr>
                <div className='w-full flex flex-row '>
                  <div className="flex flex-row items-center justify-center h-16 w-full ">
                    <button className='bg-yellow-200 text-black w-80 h-12' onClick={submitFood}>submit</button>
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
