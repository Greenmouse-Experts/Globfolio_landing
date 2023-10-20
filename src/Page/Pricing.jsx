import React, {useState} from 'react'
import { AiOutlineCheck, AiOutlinePlus, AiOutlineMinus  } from "react-icons/ai";
import "../styles/footer.css"
import logo1 from '../image/our1.png'
import logo2 from "../image/our2.png"
import logo3 from "../image/our3.png"
import logo4 from "../image/our4.png"
import cont1 from "../image/Group 48097062.png"
import cont2 from "../image/Frame 3.png"
import cont3 from "../image/Frame 4.png" 

const Pricing = () => {
    const [openItemId, setOpenItemId] = useState(null)
  const faqData = [
    {
      id: 1,
      head: "Where can I subscribe to your newsletter?",
      body: "coming soon"
     
    },
    {
      id: 2,
      head: "How do I subscribe to analysit’s picks?",
      body: "coming soon"
     
    },
    {
      id: 3,
      head: "Is there a free lan for beginners?",
      body: "coming soon"
     
    },
    {
      id: 4,
      head: "Is the stock market a reliable source of income?",
      body: "coming soon"
    
    },
    {
      id: 5,
      head: "Can I receive advisories via my email?",
    body: "coming soon"
    },
  
  ];
    const sub = [
        {
          head: "Starter",
          price: 19,
          body: "Includes a free trial and features to match (with 12 mo. plan).",
          list: [
            "Standard Performance",
            "New Stocks",
            "Limited Chat Rooms",
            "Personal Chat Access",
            "Premium Support",
            "Latest Advisories",
          ]
        },
        {
            head: "Economy",
            price: 59,
            body: "Includes a free trial and features to match (with 12 mo. plan).",
            list: [
              "Standard Performance",
              "New Stocks",
              "Limited Chat Rooms",
              "Personal Chat Access",
              "Premium Support",
              "Latest Advisories",
            ]
          },
          {
            head: "Premium",
            price: 99,
            body: "Includes a free trial and features to match (with 12 mo. plan).",
            list: [
              "Standard Performance",
              "New Stocks",
              "Limited Chat Rooms",
              "Personal Chat Access",
              "Premium Support",
              "Latest Advisories",
            ]
          },
      ];

      const handleItemClick = (id) => {
        if (openItemId === id) {
          setOpenItemId(null);
        } else {
          setOpenItemId(id);
        }
      };
      
  return (
    <div className="price" id="price">
        <div className="price_main">
             <h2 className="h2">Plans and Pricing </h2>
        <p>Globfolio subscription prices and plans</p>
        <div className="price-list">
            {sub.map((item)=>(
                <div className="price_card">
                    <h4>{item.head}</h4>
                    <h3>$ <span>{item.price}</span>/mo</h3>
                    <p>{item.body}</p>
                    <a href="#d">Get Started</a>
                    <ul className="features-list">
              {item.list.map((feature, index) => (
                <li key={index}>
                  <AiOutlineCheck /> {feature}
                </li>
              ))}
            </ul>
                   
                </div>
            ))}
        </div>
        <div className="faq_link">
        <a href="#faq">Do you have a question? Go to FAQ <svg xmlns="http://www.w3.org/2000/svg" width="19" height="27" viewBox="0 0 19 27" fill="none">
  <path d="M16.0045 14.2365L10.942 19.299C10.7835 19.4576 10.5685 19.5466 10.3443 19.5466C10.1202 19.5466 9.90518 19.4576 9.74667 19.299C9.58816 19.1405 9.49912 18.9256 9.49912 18.7014C9.49912 18.4772 9.58816 18.2622 9.74667 18.1037L13.3685 14.4833H3.03253C2.80876 14.4833 2.59414 14.3944 2.43591 14.2362C2.27768 14.078 2.18878 13.8634 2.18878 13.6396C2.18878 13.4158 2.27768 13.2012 2.43591 13.043C2.59414 12.8847 2.80876 12.7958 3.03253 12.7958H13.3685L9.74808 9.17334C9.58957 9.01483 9.50052 8.79985 9.50052 8.57568C9.50052 8.35152 9.58957 8.13653 9.74808 7.97803C9.90659 7.81952 10.1216 7.73047 10.3457 7.73047C10.5699 7.73047 10.7849 7.81952 10.9434 7.97803L16.0059 13.0405C16.0846 13.119 16.147 13.2123 16.1895 13.315C16.232 13.4176 16.2538 13.5277 16.2537 13.6388C16.2536 13.75 16.2315 13.86 16.1887 13.9625C16.146 14.0651 16.0833 14.1582 16.0045 14.2365Z" fill="#1F2348"/>
</svg></a>
        </div>
        
        </div>

        <div className="our">
            <h2 className="h2">Our Trusted Partners</h2>
            <div className="logoo">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />

            </div>
        </div>

    <div className="faq" id="faq">
        <h2 className="h2">Frequently asked questions</h2>
        <p>We have put together some commonly asked questions</p>
        <div className="faq_main">
        {faqData.map((item) => (
          <div key={item.id} className="faq_content">
             
            <div  onClick={() => handleItemClick(item.id)} className="faq_head">
            <span onClick={() => handleItemClick(item.id)} className="faq_icon">
              {openItemId === item.id ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </span> 
               <p>{item.head}</p>
           
            </div>
            
            {openItemId === item.id && (
              <div className="faq_body">{item.body}</div>
            )}
          </div>
        ))}
        </div>

    </div>
       <div className="contact" id="contact">
                <h2 className="h2">Reach out to us</h2>
                <p>Fill the form below and submit to send us a message </p>
            <div className="contact_main">
            <div className="contact_right">
                <div><img src={cont1} alt="" /><p>info@globfolio.com</p></div>
                <div><img src={cont2} alt="" /><p>+234 701 2345 678</p></div>
                <div><img src={cont3} alt="" /><p>company address, Lagos, Nigeria.</p></div>
            </div>
            <div className="contact_left">
                <form action="submit">
                    <input type="text" placeholder='Name' />
                    <div className="double"> <input type="email" placeholder='Email' />
                    <input type="tel" pattern="[0-9]*" placeholder='Phone Number' /></div>
                   
                    <textarea name="mesage" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
            
       </div>
    </div>    
)
}

export default Pricing