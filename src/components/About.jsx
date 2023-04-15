import React from "react";

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 font-serif">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-lg leading-6 text-gray-600 ">We are the pioneers of fusion & Luxury fast food segment serving variety of yummy dishes ranging in different cuisines giving all or beloved foodies amazing experience in range of Pannini Sandwiches, Grilled Sandwiches, Baked Sandwiches, Pastas, Freshly made Pizzas, Fusion in French Fries, Potato Wedges, Garlic Breads, Amazing Burgers, Authentic Chinese dishes, Mumbai Spl. Pav Bhaji & Pulav, Desserts, Waffles, Pancakes, Varieties in Chay Specially Kullad Chay, Refreshing Mocktails, Thick Milkshakes and much more all under one roof.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-lg leading-6 text-gray-600 ">Our Founder | CEO Hardik Savla started of this journey from a roadside stall in 2016 in Borivali West Mumbai with a mere investment of 50000/- Rs
                    . During the time we were the first ones to serve such quality of Sandwiches, Pizzas and Pastas that too on road with the help of Co-founder | MD | Chef Parth Mehta who bought is valuable experience of working in India and world’s most reknowned 5 Star hotels to the streets of Mumbai. For all the foodies it was love at first sight with our dishes.</p>
               
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 mt-20">Vision</h1>
                    <p className=" font-normal text-lg leading-6 text-gray-600 ">
“ To Revolutionise Fast Food Industry with Fusion, Continious Innovation & Efficiency with 100% Vegetarian  and non Vegetarian options across the Globe’’</p>
               
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4"> RIYA</p>
                        </div>
                        <div className="p-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">ADITI</p>
                        </div>
                        <div className="p-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">SOURAV LAL</p>
                        
                        </div>
                        <div className=" pt-2 p-4 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-md" src="images/images.jpg" alt="Liam featued Img" />
                            <img className="md:hidden block" src="images/images.jpg" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">GAURAV</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;
