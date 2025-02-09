import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  return (
    <div className="accordion">
      <h1 style={{textAlign:'center'}}> Accordian Page</h1>
  
      {faqs.map((faq ,index) => <AccordionItem title={faq.title} text={faq.text} num ={index+1} /> ) }   
      
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [toggle , setToggle] = useState(false)
return  (
  <div onClick={() => { setToggle((toggle) => !toggle )}} className={`item ${toggle ? 'open' : ''}`}>

       

        <p className="number">0{num} </p> 
         <p className="title">{title}</p>
         <p className="icon"> {toggle ? '-' : '+'}</p> 
         {toggle&& <div className="content-box">{text}</div> }


  

    <br />
    
      
  
      
    </div>
    )
   
}
