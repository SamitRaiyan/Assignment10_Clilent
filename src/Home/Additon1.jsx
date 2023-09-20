import React from 'react';
import dishert from '../../public/adition2.jpg'
import dishes from '../../public/adition1.png'
import drinks from '../../public/adtion3.jpg'
import vege from '../../public/adition4.jpg'
const Additon1 = () => {
    return (
        <div>
            <div className='md:my-10'>
          <h1 className='text-3xl font-bold text-center'>Some Recipe Items</h1>
          <section className='grid w-3/4 grid-cols-1 mx-auto my-5 space-y-3 md:grid-cols-4'>
           
           <div className=''>
             <img className='h-40 rounded-md' src={drinks} alt="" />
             <h1 className='my-5 ml-10'>HOT DISHES</h1>
             <p className='my-5 ml-10 text-5xl text-zinc-500'>98</p>
           </div>
           <div>
           <img className='h-40 rounded-md' src={dishert} alt="" />
           <h1  className='my-5 ml-10'>DESSERT</h1>
           <p className='my-5 ml-10 text-5xl text-zinc-500'>78</p>
           </div>
           <div>
           <img className='h-40 rounded-md' src={vege} alt="" />
           <h1  className='my-5 ml-10'>VEGETARIAN</h1>
           <p className='my-5 ml-10 text-5xl text-zinc-500'>80</p>
           </div>
           <div>
           <img className='h-40 rounded-md' src={dishes} alt="" />
           <h1  className='my-5 ml-10'>DRINKS</h1>
           <p className='my-5 ml-10 text-5xl text-zinc-500'>68</p>
           </div>
          </section>
          </div>
        </div>
    );
};

export default Additon1;