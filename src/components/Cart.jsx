import { useState } from "react";
import { useCart } from "../context/useCart";
import { business } from "../config/business";

export default function Cart({ cartOpen, setCartOpen }) {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    total,
  } = useCart();


  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderType, setOrderType] = useState("Order Now");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliverySlot, setDeliverySlot] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");



  const sendWhatsApp = () => {

    if (cart.length === 0) return;


    let message = "☕ *ONYX COFFEE ORDER*\n\n";


    message += `👤 Customer: ${customerName || "Not provided"}\n`;

    message += `📞 Phone: ${phoneNumber || "Not provided"}\n`;

    message += `📦 Order Type: ${orderType}\n`;



    if(orderType === "Pre-order"){

      if(deliveryDate){
        message += `📅 Delivery Date: ${deliveryDate}\n`;
      }


      if(deliverySlot){
        message += `⏰ Delivery Batch: ${deliverySlot}\n`;
      }

    }


    if(orderType === "Order Now"){
      message += "⚡ Delivery: ASAP (subject to availability)\n";
    }



    if(location){
      message += `📍 Location: ${location}\n`;
    }



    message += "\n*Items:*\n";



    cart.forEach((item,index)=>{

      message += `${index + 1}. ${item.name} x${item.qty} = ₵${item.price * item.qty}\n`;

    });



    message += `\n💰 *Total: ₵${total}*\n`;



    if(notes){
      message += `\n📝 Notes: ${notes}\n`;
    }



    message += "\n✅ Please confirm availability and delivery time.";



    const url =
    `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;


    window.open(url,"_blank");

  };




  return (

<div
className={`fixed top-0 right-0 h-full w-[360px]
bg-[#111] text-white shadow-2xl z-[200]
transform transition-transform duration-300
${cartOpen ? "translate-x-0" : "translate-x-full"}`}
>


<div className="flex justify-between items-center p-5 border-b border-white/10">


<h2 className="text-lg font-serif text-[#C69C6D]">
Your Order
</h2>


<button
onClick={()=>setCartOpen(false)}
className="text-xl"
>
✕
</button>


</div>





<div className="p-4 overflow-y-auto h-[65%] space-y-4">


{cart.length===0 ? (

<p className="text-gray-400 text-center mt-10">
Your cart is empty
</p>

):(


cart.map(item=>(

<div
key={item.name}
className="bg-[#1c1c1c] p-4 rounded-xl"
>


<div className="flex justify-between">

<p>
{item.name}
</p>

<span className="text-[#C69C6D]">
₵{item.price * item.qty}
</span>


</div>



<div className="flex gap-3 mt-3">


<button
onClick={()=>decreaseQty(item.name)}
className="bg-white/10 px-3 rounded"
>
-
</button>


<span>
{item.qty}
</span>


<button
onClick={()=>increaseQty(item.name)}
className="bg-white/10 px-3 rounded"
>
+
</button>


<button
onClick={()=>removeFromCart(item.name)}
className="ml-auto text-red-400 text-sm"
>
Remove
</button>


</div>


</div>

))


)}





{cart.length>0 && (

<div className="space-y-4 pt-4">


<h3 className="text-[#C69C6D] font-semibold">
Customer Details
</h3>



<input
placeholder="Your name"
value={customerName}
onChange={(e)=>setCustomerName(e.target.value)}
className="w-full bg-[#1c1c1c] p-3 rounded-lg"
/>



<input
placeholder="Phone number"
value={phoneNumber}
onChange={(e)=>setPhoneNumber(e.target.value)}
className="w-full bg-[#1c1c1c] p-3 rounded-lg"
/>




<select
value={orderType}
onChange={(e)=>{
setOrderType(e.target.value);
setDeliverySlot("");
}}
className="w-full bg-[#1c1c1c] p-3 rounded-lg"
>


<option>
Order Now
</option>


<option>
Pre-order
</option>


</select>




{orderType==="Pre-order" && (

<>


<input
type="date"
value={deliveryDate}
onChange={(e)=>setDeliveryDate(e.target.value)}
className="w-full bg-[#1c1c1c] p-3 rounded-lg"
/>



<select
value={deliverySlot}
onChange={(e)=>setDeliverySlot(e.target.value)}
className="w-full bg-[#1c1c1c] p-3 rounded-lg"
>


<option value="">
Choose delivery batch
</option>


<option>
Morning Batch (1PM - 3PM)
</option>


<option>
Afternoon Batch (5PM - 7PM)
</option>


</select>


</>

)}




<input
placeholder="Delivery location"
value={location}
onChange={(e)=>setLocation(e.target.value)}
className="w-full bg-[#1c1c1c] p-3 rounded-lg"
/>




<textarea
placeholder="Order notes (optional)"
value={notes}
onChange={(e)=>setNotes(e.target.value)}
className="w-full bg-[#1c1c1c] p-3 rounded-lg h-20"
/>



<div className="bg-[#1c1c1c] p-4 rounded-lg text-sm text-gray-400">

☕ Pre-orders are recommended for bottled brews to guarantee freshness.

</div>


</div>

)}


</div>





<div className="absolute bottom-0 w-full p-5 border-t border-white/10 bg-[#111]">


<div className="flex justify-between mb-4 font-bold">

<span>
Total
</span>

<span className="text-[#C69C6D]">
₵{total}
</span>


</div>




<button
onClick={sendWhatsApp}
className="w-full bg-green-500 py-3 rounded-full font-semibold"
>
📲 Send Order via WhatsApp
</button>



<button
onClick={clearCart}
className="w-full bg-white/10 py-2 rounded-full mt-3"
>
Clear Cart
</button>


</div>



</div>

  );
}