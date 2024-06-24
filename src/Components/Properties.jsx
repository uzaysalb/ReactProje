import React from 'react';
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';

function Properties() {
  return (
    <div className='product'>
<div className='p-heading'>
<h3>Properties</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A porro blanditiis distinctio nihil commodi quas consequatur reprehenderit, quam sunt at quae, deleniti accusamus iure soluta inventore. Libero, voluptates. Amet, dolores.</p>
</div>
<div className='product-container'> 
<Bproperty image={pimage1} name='Istanbul' price='$332,321'></Bproperty>
<Bproperty image={pimage2} name='Kocaeli' price='$234,432'></Bproperty>
<Bproperty image={pimage3} name='Muğla' price='$322,123'></Bproperty>
</div>

    </div>
  );
};

export default Properties;