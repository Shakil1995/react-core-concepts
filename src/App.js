import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks=['salman','rubel','jasim','Manna' ,'shakil'];

  const friendsDetails=[
    { id:'1', name:' Nurul Amin', gfName:'null',age:'14', Dept: 'CSE',job:'jobless' },
    {id:'2',name:' Jannatul Muna', gfName:'ace',age:'14', Dept: 'CSE',job:'jobless' },
    {id:'3',name:'Khalid', gfName :'ace',age:'14', Dept: 'CSE',job:'jobless' },
    {id:'4',name:'shapon', gfName:'null',age:'14', Dept: 'CSE',job:'jobless' },
    {id:'5',name:'Redwan Ripon', gfName:'null',age:'14', Dept: 'CSE',job:'jobless' },
    {id:'6',name:' Ripon', gfName:'null',age:'14', Dept: 'CSE',job:'jobless' }

  ]

  const products=[
    {name: 'photoShop', price:'$99.99'},
    {name: 'lllustrator', price:'$59.99'},
    {name: 'Adobe photoShop', price:'$89.99'},
    {name: 'PDF Reader', price:'$49.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        
<h1>React Bacis Work</h1>

<Counter></Counter>

{/* <Friends friend={friendsDetails[0]}  ></Friends>
<Friends friend={friendsDetails[1]}  ></Friends>
<Friends friend={friendsDetails[2]}  ></Friends>
<Friends friend={friendsDetails[3]}  ></Friends>
<Friends friend={friendsDetails[4]}  ></Friends> */}


{
friendsDetails.map(friend => <Friends friend={friend}></Friends>)
}






<ul>
  {
    nayoks.map(nayok=> <li>{nayok}</li> )
  }
</ul>

{
  products.map(pd => <Product product={pd}></Product> )
}
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}
 
 {/* full object pass kore data send kora holo  */}
{/* <Product product={products[0]}   ></Product>
<Product product={products[1]}   ></Product>
<Product product={products[2]}   ></Product> */}


      <Parson name="Rubel "nayka="Happy" hobby="cricket"> </Parson>
      <Parson name="shakib " nayka="Shishir" hobby="Football"> </Parson>
      <Parson name="masrafee " nayka="Sumi" hobby="Football"> </Parson>
      <Parson name="messi " nayka="antro" hobby="cricket"> </Parson>

      {/* array theke input  */}
      <Parson name={nayoks[0]} nayka="Happy" hobby="cricket"> </Parson>
      <Parson name={nayoks[1]} nayka="Shishir" hobby="Football"> </Parson>
      <Parson name={nayoks[2]} nayka="Sumi" hobby="Football"> </Parson>
      <Parson name={nayoks[3]} nayka="antro" hobby="cricket"> </Parson>
        
      </header>
    </div>
  );
}

function Counter() {
  const [count,setCount] = useState(5);
  const handleIncrease = () =>{setCount (count+1);
    

 
      
   
  }
  return(
    <div>
      <h1>Count : {count}</h1>  
      
      <button onClick={() =>setCount (count-1) } > Decrease Value </button>
         <button onClick={() =>setCount (count+1)} > Increase Value </button>

    </div>
  )
  
}

function Friends(props) {
  const friendStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'gray',
    height:'500px',
    width:'400px',
    float:'left',
    display:' inline',
    margin:'10px',
     }
  
     const {id,name,gfName,age,Dept,job}=props.friend;
  console.log('props : '+props);
  return(
    <div style={friendStyle}>
      <h3>{id}</h3>
<h4> name : {name} </h4>
<h6>gf : {gfName}</h6>
<p>age : {age} </p>
<p>Dept : {Dept} </p>
<p>Job : {job} </p>
<button>Details</button>
      
    </div>
  )
  
}


function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    float:'left'

  }
  // destructor  kore code ta choto kora holo
  const {name,price}=props.product;
  return (
    <div style={productStyle}>
  {/* <h2>{props.product.name}</h2>
  <h1>{props.product.price}</h1> */}
    {/* // destructor  kore code ta choto kora holo */}
    <h2>{name}</h2>
  <h1>{price}</h1>
  <button>buy now</button>
    </div>
  )
  
}



function Parson(props) {
  const personStyle={
    border:'2px solid red',
    margin:'10px',
    color:'green'
  }
  return ( 
      <div style={personStyle}  >
          <h1>Name : {props.name}</h1>
          <h4>GF :  {props.hobby}</h4>
          <h6>hobby : {props.hobby}</h6>
          <h3>name value</h3>
      </div>
     )
}

export default App;
