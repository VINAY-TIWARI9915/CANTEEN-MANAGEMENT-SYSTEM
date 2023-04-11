
import Foodcard from "./Foodcard";
import { Button } from "flowbite-react";
import { useState } from "react";

 export default function OURMENU() {
   
const [category,setcategory]=useState(0)
const biryani=[
   {
      id: 1,
      name: 'Ambur Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 130,
      img: 'images/biryani/Ambur-Chicken-Biryani.jpg',
      quantity: 1
  },
  {
      id: 2,
      name: 'Hyderabadi Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 150,
      img: 'images/biryani/Chicken-Biryani-hyd.jpg',
      quantity: 1
  },
  {
      id: 3,
      name: 'Egg Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 180,
      img: 'images/biryani/egg-biryani.jpeg',
      quantity: 1
  },
  {
      id: 4,
      name: 'Goan Fish Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 150,
      img: 'images/biryani/goan-fish-biryani.jpg',
      quantity: 1
  },
  {
      id: 5,
      name: 'Mutton Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 100,
      img: 'images/biryani/hyd-Mutton-Biryani.jpg',
      quantity: 1
  },
  {
      id: 6,
      name: 'Kamrupi Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 120,
      img: 'images/biryani/kamrupi-biryani.jpg',
      quantity: 1
  },
  {
      id: 7,
      name: 'Kashmiri Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 103,
      img: 'images/biryani/kashmiri.pulao.jpg',
      quantity: 1
  },
  {
      id: 8,
      name: 'Memoni Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 200,
      img: 'images/biryani/memonibiryani.png',
      quantity: 1
  },
  {
      id: 9,
      name: 'Mughlai Biryani',
      category : 'biryani',
      rating : 4.3,
      price: 150,
      img: 'images/biryani/mughlai-biryani.jpg',
      quantity: 1
  }
]
const chicken=[
   {
      id: 10,
      name: 'Chicken Roast',
      category : 'chicken',
      rating : 4.3,
      price: 110,
      img: 'images/chicken/Chicken_roast.jpg',
      quantity: 1
  },
  {
      id: 11,
      name: 'Chicken Curry',
      category : 'chicken',
      rating : 4.3,
      price: 100,
      img: 'images/chicken/Chicken-Curry.jpg',
      quantity: 1
  },
  {
      id: 12,
      name: 'Chicken Do Pyaza',
      category : 'chicken',
      rating : 4.3,
      price: 140,
      img: 'images/chicken/Chicken-do-Pyaza.jpg',
      quantity: 1
  },
  {
      id: 13,
      name: 'Chicken Masala',
      category : 'chicken',
      rating : 4.3,
      price: 120,
      img: 'images/chicken/Chicken-Masala.jpeg',
      quantity: 1
  },
  {
      id: 14,
      name: 'Handi Chicken',
      category : 'chicken',
      rating : 4.3,
      price: 170,
      img: 'images/chicken/Handi-chicken.jpg',
      quantity: 1
  },
  {
      id: 15,
      name: 'Murgh Musallam',
      category : 'chicken',
      rating : 4.3,
      price: 200,
      img: 'images/chicken/Murgh-Musallam.jpg',
      quantity: 1
  }
]
const panner=[
   {
      id: 16,
      name: 'Matar Paneer',
      category : 'paneer',
      rating : 4.3,
      price: 150,
      img: 'images/paneer/Matar-Paneer.jpg',
      quantity: 1
  
  },
  {
      id: 17,
      name: 'Palak Paneer',
      category : 'paneer',
      rating : 4.3,
      price: 100,
      img: 'images/paneer/palak-paneer.jpg',
      quantity: 1
  },
  {
      id: 18,
      name: 'Paneer Butter Masala',
      category : 'paneer',
      rating : 4.3,
      price: 150,
      img: 'images/paneer/paneer-butter-masala.jpg',
      quantity: 1
  
  },
  {
      id: 19,
      name: 'Paneer Do Pyaza',
      category : 'paneer',
      rating : 4.3,
      price: 120,
      img: 'images/paneer/Paneer-Do-Pyaza.jpg',
      quantity: 1
  
  },
  {
      id: 20,
      name: 'Hyderabadi Paneer',
      category : 'paneer',
      rating : 4.3,
      price: 80,
      img: 'images/paneer/Paneer-Hyderabadi.jpg',
      quantity: 1
  },
  {
      id: 21,
      name: 'Paneer Lababdar',
      category : 'paneer',
      rating : 4.3,
      price: 70,
      img: 'images/paneer/paneer-lababdar.jpg',
      quantity: 1
  },
  {
      id: 22,
      name: 'Shahi Paneer',
      age: '32',
      category : 'paneer',
      rating : 4.3,
      price: 50,
      img: 'images/paneer/shahi-paneer.jpg',
      quantity: 1
  }
]
const vegetable = [
   {
      id: 23,
      name: 'Navratan Korma',
      category : 'vegetable',
      rating : 4.3,
      price: 80,
      img: 'images/vegetable/navratan-korma_-vegetable.png',
      quantity: 1
  },
  {
      id: 24,
      name: 'Veg Jalfrezi',
      category : 'vegetable',
      rating : 4.3,
      price: 70,
      img: 'images/vegetable/VEG-JALFREZI.jpg',
      quantity: 1
  },
  {
      id: 25,
      name: 'Veg Biryani',
      category : 'vegetable',
      rating : 4.3,
      price: 50,
      img: 'images/vegetable/vegetable-biryani.jpg',
      quantity: 1
  },
  {
      id: 26,
      name: 'Veg Curry',
      category : 'vegetable',
      rating : 4.3,
      price: 70,
      img: 'images/vegetable/vegetable-curry.jpeg',
      quantity: 1
  },
  {
      id: 27,
      name: 'Veg Kolhapur',
      category : 'vegetable',
      rating : 4.3,
      price: 100,
      img: 'images/vegetable/vegetable-kolhapuri.jpg',
      quantity: 1
  },
  {
      id: 28,
      name: 'Veg Masala',
      category : 'vegetable',
      rating : 4.3,
      price: 40,
      img: 'images/vegetable/vegetable-masala.jpg',
      quantity: 1
  },
  {
      id: 29,
      name: 'Veg Pakora',
      category : 'vegetable',
      rating : 4.3,
      price: 40,
      img: 'images/vegetable/vegetable-pakora.jpg',
      quantity: 1
  },
]
const chinese=[
   {
      id: 30,
      name: 'Momos',
      category : 'chinese',
      rating : 4.3,
      price: 80,
      img: 'images/chinese/cabbage-momos-.jpg',
      quantity: 1
  },
  {
      id: 31,
      name: 'Chicken Manchurian',
      category : 'chinese',
      rating : 4.3,
      price: 700,
      img: 'images/chinese/ChickenManchurian.jpg',
      quantity: 1
  },
  {
      id: 32,
      name: 'Chili Chicken',
      category : 'chinese',
      rating : 4.3,
      price: 500,
      img: 'images/chinese/Chili-Chicken.jpg',
      quantity: 1
  },
  {
      id: 33,
      name: 'Chowmein',
      category : 'chinese',
      rating : 4.3,
      price: 160,
      img: 'images/chinese/chowmin.jpg',
      quantity: 1
  },
  {
      id: 34,
      name: 'Spring Roll',
      category : 'chinese',
      rating : 4.3,
      price: 140,
      img: 'images/chinese/spring-rolls.jpg',
      quantity: 1
  },
  {
      id: 35,
      name: 'Szechuan Chicken',
      category : 'chinese',
      rating : 4.3,
      price: 100,
      img: 'images/chinese/szechuan-chicken.jpg',
      quantity: 1
  },
  {
      id: 36,
      name: 'Fried Rice',
      category : 'chinese',
      rating : 4.3,
      price: 80,
      img: 'images/chinese/veg-fried-rice.jpg',
      quantity: 1
  },
]
   const southindian= [
  {
      id: 37,
      name: 'Butter Masala Dosa',
      category : 'south indian',
      rating : 4.3,
      price: 180,
      img: 'images/south indian/Butter-Masala-Dosa.png',
      quantity: 1
  },
  {
      id: 38,
      name: 'Idli',
      category : 'south indian',
      rating : 4.3,
      price: 20,
      img: 'images/south indian/idli-with-rice-flour.jpg',
      quantity: 1
  },
  {
      id: 39,
      name: 'Masala Dosa',
      category : 'south indian',
      rating : 4.3,
      price: 120,
      img: 'images/south indian/masala-dosa.jpg',
      quantity: 1
  },
  {
      id: 40,
      name: 'Mysore Bonda',
      category : 'south indian',
      rating : 4.3,
      price: 110,
      img: 'images/south indian/mysore-bonda.jpg',
      quantity: 1
  },
  {
      id: 41,
      name: 'Onion Uttapam',
      category : 'south indian',
      rating : 4.3,
      price: 115,
      img: 'images/south indian/onion-uttapam.jpg',
      quantity: 1
  },
  {
      id: 42,
      name: 'Plain Dosa',
      category : 'south indian',
      rating : 4.3,
      price: 140,
      img: 'images/south indian/plain-dosa.jpeg',
      quantity: 1
  },
  {
      id: 43,
      name: 'Rava Uttapam',
      category : 'south indian',
      rating : 4.3,
      price: 260,
      img: 'images/south indian/Rava-Uttapam.jpg',
      quantity: 1
  },
  {
      id: 44,
      name: 'Sambhar Vada',
      category : 'south indian',
      rating : 4.3,
      price: 60,
      img: 'images/south indian/sambhar-vada.jpg',
      quantity: 1
  },
  
  ]
  const Beverages= [
    {
    id: 45,
    name: 'Water',
    category: 'Beverages',
    rating: 4.3,
    price:20 ,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhJL4PACyZ7DOTScuMfIlC7LXVI0EeiNhiQ&usqp=CAU' ,
    quantity: 1
    },
    {
    id: 46,
    name: 'TEA',
    category: 'Beverages',
    rating: 4.3,
    price: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YCtz3-OgN0XH87bgis2d2fmGT12zwcp5XA&usqp=CAU',
    quantity: 1
    },
    {
    id: 47,
    name: 'Cold Coffee ',
    category: 'Beverages',
    rating: 4.3,
    price: 25,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFK0m5KafBR_4sBcKyIMnSrLDEyBfhMhLBA&usqp=CAU',
    quantity: 1
    },
    {
    id: 48,
    name: 'Hot Coffee',
    category: 'Beverages',
    rating: 4.3,
    price:20 ,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1U4oTJW4-aTjSosnsRSBHfwQYSqyW2ysr2w&usqp=CAU',
    quantity: 1
    },{
    id: 49,
    name: 'Coca Cola 330ml',
    category: 'Beverages',
    rating: 4.3,
    price: 20,
    img: 'https://i.imgur.com/nJ6LeWv.png',
    quantity: 1
    },
    {
    id: 50,
    name: 'Fanta 330ml',
    category: 'Beverages',
    rating: 4.3,
    price: 20,
    img: 'https://i.imgur.com/1WDkfme.png',
    quantity: 1
    },
    {
    id: 51,
    name: 'Sprite 330ml',
    category: 'Beverages',
    rating: 4.3,
    price: 15,
    img: 'https://i.imgur.com/qP4Nx1x.jpg',
    quantity: 1
    },
    {
    id: 52,
    name: 'Frooti 1.8L',
    category: 'Beverages',
    rating: 4.3,
    price: 100,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLbvGQIgGQCC5ZFFOYxKIHWwfOK8s954wGQ&usqp=CAU',
    quantity: 1
    },
    {
    id: 53,
    name: 'Banana Milk Shake',
    category: 'Beverages',
    rating: 4.3,
    price: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8nBubIK5DJQ2k2RM-h_bR6FhwJndxIluqA&usqp=CAU',
    quantity: 1
    },
    {
    id: 54,
    name: 'Coca cola 1.25 L',
    category: 'Beverages',
    rating: 4.3,
    price: 68,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDI6FeM77WkB9qt9bOhTSHBeWHoxiOZyaaAoEMGu4UX7jPMB5wpJrg9I&s=10',
    quantity: 1
    },
    {
    id: 55,
    name: 'Coco cola 2 L',
    category: 'Beverages',
    rating: 4.3,
    price: 90,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfjL4TazSw0vABhbc3sAlHPi4hCVHRAN5dD15SpGdZSGMSMZpff-10Js&s=10',
    quantity: 1
    },
    {
    id: 56,
    name: 'Sprite 2 L',
    category: 'Beverages',
    rating: 4.3,
    price: 85,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT210uvWrPpRrywdZMjfcmZyd7c7OLNJYysQw&usqp=CAU',
    quantity: 1
    },
    {
    id: 57,
    name: 'Frooti Tetra pack 160ml',
    category: 'Beverages',
    rating: 4.3,
    price: 15,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5M7rJDsA0B_MSIIp30HgLcon-vOv27IyIRPy9LJqYHgoMMQjNjbPR65I&s=10',
    quantity: 1
    },
    ]
 
    return(
    <>
   
   <div className="flex flex-wrap items-center gap-5 h-20 text-2xl">
   
  <div>
    <Button
      outline={true}
      gradientDuoTone="purpleToBlue"
      onClick={()=>{setcategory(0)}}
     
    >
    South Indian
    </Button>
  </div>
  <div>
    <Button
      outline={true}
      gradientDuoTone="pinkToOrange"
      onClick={()=>{setcategory(6)}}
    >
   Bevarages
    </Button>
  </div>
  <div>
    <Button
      outline={true}
      gradientDuoTone="cyanToBlue"
      onClick={()=>{setcategory(1)}}
    >
 Chicken
    </Button>
  </div>
  <div>
    <Button
      outline={true}
      gradientDuoTone="greenToBlue"
      onClick={()=>{setcategory(2)}}
    >
      Biryani
    </Button>
  </div>

  <div>
    <Button
      outline={true}
      gradientDuoTone="purpleToPink"
      onClick={()=>{setcategory(3)}}
    >
 Paneer
    </Button>
  </div>
  <div>
    <Button
      outline={true}
      gradientDuoTone="pinkToOrange"
      onClick={()=>{setcategory(4)}}
    >
      Vegetable
    </Button>
  </div>
  <div>
    <Button
      outline={true}
      gradientDuoTone="tealToLime"
      onClick={()=>{setcategory(5)}}
    >
   Chinese
    </Button>
  </div>
 
</div>

   <div className="grid grid-cols-4 gap-2">

   { category==0&& southindian && southindian.map((element)=>{
 return  <div key={element.id} > <Foodcard  name={element.name} category={element.category} image={element.img} price={element.price} rating={element.rating}>
  </Foodcard></div>
   })}
   { category==1&& chicken && chicken.map((element)=>{
 return  <div key={element.id} > <Foodcard  name={element.name} category={element.category} image={element.img} price={element.price} rating={element.rating}></Foodcard></div>
   })}
  
    { category==2&& biryani && biryani.map((element)=>{
 return  <div key={element.id} > <Foodcard  name={element.name} category={element.category} image={element.img} price={element.price} rating={element.rating}></Foodcard></div>
   })}
    { category==3&& panner && panner.map((element)=>{
 return  <div key={element.id} > <Foodcard  name={element.name} category={element.category} image={element.img} price={element.price} rating={element.rating}></Foodcard></div>
   })}
    { category==4&& vegetable && vegetable.map((element)=>{
 return  <div key={element.id} > <Foodcard  name={element.name} category={element.category} image={element.img} price={element.price} rating={element.rating}></Foodcard></div>
   })}
    { category==5&& chinese && chinese.map((element)=>{
 return  <div key={element.id} > <Foodcard  name={element.name} category={element.category} image={element.img} price={element.price} rating={element.rating}></Foodcard></div>
   })}
    { category==6&& Beverages && Beverages.map((element)=>{
 return  <div key={element.id} > <Foodcard  name={element.name} category={element.category} image={element.img} price={element.price} rating={element.rating}></Foodcard></div>
   })}
  
  </div>
    
     </>
    )
    }