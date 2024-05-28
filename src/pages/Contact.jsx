import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import Data from "../data.json";


function Contact() {
    const [selectedItem, setSelectedItem] = useState(null);

    const openPopup = (item) => {
      setSelectedItem(item);
    };
    return (
        <>
                  {/* <Navbar /> */}
            <div className="flex">
                <Navbar />
                <main className="m-0 w-[100%] p-4 flex flex-col">
                    <h1 className="my-8">Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam nostrum pariatur? Autem minus, eligendi voluptatem, eveniet ratione facere perspiciatis doloribus eius, laudantium consectetur ipsa dicta eum. Nesciunt assumenda culpa reiciendis. Perspiciatis, perferendis, nam placeat voluptate ipsa deleniti odio fuga fugiat eos, repellendus quam iste illum optio recusandae consequatur cum voluptatibus. Numquam blanditiis, veritatis doloribus laudantium accusamus, voluptas obcaecati quae hic sit adipisci odio animi quia aliquid libero illum provident ea repudiandae natus non? Explicabo numquam natus, atque mollitia error sequi voluptatum, cumque quia magnam tempore consequatur. Aperiam numquam blanditiis incidunt vero magni quod sunt vitae repudiandae tempore voluptate cupiditate odit earum deserunt ab quasi sequi, perferendis dicta, labore obcaecati provident explicabo, sit tempora. Illo quaerat laudantium quae porro earum nam id optio, architecto voluptatem hic amet ab culpa quia et odit ipsum repellendus quisquam exercitationem vero! Labore excepturi optio molestias sint voluptatum odio! Vitae est exercitationem accusamus assumenda nihil.</p>
             
                </main>

            </div>
           
 <Footer />
           
        </>
    );
}
export default Contact;