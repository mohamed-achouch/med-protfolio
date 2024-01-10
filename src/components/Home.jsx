import React, { useState } from "react";
import "../assets/styles/home.css";
import bgImg from "../assets/images/front.png";
import { Zoom, Fade } from "react-awesome-reveal";
import About from "./About";
import Button from "./Button";
import Services from "./Services";
import Build from "./Build";
import Skills from "./Skills";
import Contact from "./Contact";
import send from "../assets/images/send.png";
import Projects from "./Projects";
import { Switch } from "./Switch";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [number,setNumber] = useState(0)
  const handelSend = () => {
    setOpen(!open);
  };
  const IncrementNumber = ()=> {
    if(number < list_box.length -1 ){
      setNumber(number+1)
    }
  }
  const DecrementNumber = ()=>{
    if(number > 0 || number === list_box.length -1 ){
      setNumber(number -1)
    }
  }
  const list_box = [<Box1 />, <Box2 />, <Box3 />];

  return (
    <section className="home">
      <div className="visit_socials">
        <img src={send} alt="" onClick={handelSend} />
        <div className={`logo_socials ${open ? "open" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z"
              fill="#C0B7E8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z"
              fill="#C0B7E8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
              fill="#C0B7E8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="#C0B7E8" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z"
              fill="#C0B7E8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
              fill="#C0B7E8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
              fill="#C0B7E8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
              fill="#C0B7E8"
            />
          </svg>
        </div>
      </div>
      <div className="line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="820"
          viewBox="0 0 1440 820"
          fill="none"
        >
          <path
            d="M-3 231.214C96.569 254.827 300.21 358.641 318.223 584.988C336.235 811.336 680.641 830.311 850.592 811.505C959 791.003 1139.69 689.084 995.192 445.43C850.692 201.775 1230.86 48.9539 1439 3"
            stroke="url(#paint0_linear_11_14)"
            stroke-opacity="0.13"
            stroke-width="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_11_14"
              x1="718"
              y1="3"
              x2="718"
              y2="817"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0260417" stop-color="#C0B7E8" />
              <stop offset="0.265625" stop-color="#C0B7E8" />
              <stop offset="0.71875" stop-color="#8176AF" />
              <stop offset="1" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container">
        {" "}
        <Zoom cascade>
         <div className="landing">
         <div className="container">
            <div className="details">
              <Fade>
                {" "}
                <h1>
                  <span>I'm a </span>Frontend Developer
                </h1>
              </Fade>
              <p>
                I'm a Frontend Developer, I focus on delivering value to the
                business and the end-users, I don't get excited about my
                personal programming interests. I leave those for afterhours !
              </p>
              <Button contnet="Download My Cv" />
            </div>
            <div className="image">
              <div className="svgs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="383"
                  height="846"
                  viewBox="0 0 383 846"
                  fill="none"
                >
                  <path
                    d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
                    stroke="url(#paint0_linear_1_24)"
                    stroke-width="6"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_24"
                      x1="16.5"
                      y1="39.5"
                      x2="363"
                      y2="814"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0104167" stop-color="#343045" />
                      <stop offset="0.229167" stop-color="#C0B7E8" />
                      <stop offset="0.776042" stop-color="#8176AF" />
                      <stop offset="1" stop-color="#343045" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="416"
                  height="675"
                  viewBox="0 0 416 675"
                  fill="none"
                >
                  <path
                    d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
                    stroke="url(#paint0_linear_1_23)"
                    stroke-width="6"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_23"
                      x1="365.5"
                      y1="28"
                      x2="110"
                      y2="594"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#343045" />
                      <stop offset="0.276042" stop-color="#8176AF" />
                      <stop offset="0.739583" stop-color="#C0B7E8" />
                      <stop offset="1" stop-color="#343045" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="736"
                  height="423"
                  viewBox="0 0 736 423"
                  fill="none"
                >
                  <path
                    d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5"
                    stroke="url(#paint0_linear_2_33)"
                    stroke-width="6"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_33"
                      x1="700.5"
                      y1="-3.99998"
                      x2="14.5"
                      y2="361"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#343045" />
                      <stop offset="0.213542" stop-color="#C0B7E8" />
                      <stop offset="0.71875" stop-color="#8176AF" />
                      <stop offset="1" stop-color="#343045" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <img src={bgImg} alt="/#" />
            </div>
          </div>
         </div>
        </Zoom>
        <div className="info">
        <div className="switch">
        <svg onClick={DecrementNumber} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M17.5 21.25L11.25 15L17.5 8.75M3.75 15C3.75 21.2132 8.7868 26.25 15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <svg onClick={IncrementNumber} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.5 21.25L18.75 15L12.5 8.75M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
          <div className="larg">
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35 5.83334C46.2758 5.83334 55.4166 14.9742 55.4166 26.25C55.4166 29.6593 54.5834 32.8717 53.1039 35.6983L35 67.0833L17.3154 36.4595C15.575 33.4542 14.5833 29.9693 14.5833 26.25C14.5833 14.9742 23.7242 5.83334 35 5.83334ZM35 11.6667C26.9458 11.6667 20.4166 18.1959 20.4166 26.25C20.4166 28.566 20.9509 30.7882 21.962 32.7943L22.452 33.6893L35 55.4167L47.6366 33.5362C48.9071 31.3423 49.5833 28.8555 49.5833 26.25C49.5833 18.1959 43.0541 11.6667 35 11.6667ZM35 17.5C39.8325 17.5 43.75 21.4175 43.75 26.25C43.75 31.0825 39.8325 35 35 35C30.1675 35 26.25 31.0825 26.25 26.25C26.25 21.4175 30.1675 17.5 35 17.5ZM35 23.3333C33.3891 23.3333 32.0833 24.6392 32.0833 26.25C32.0833 27.8608 33.3891 29.1667 35 29.1667C36.6108 29.1667 37.9166 27.8608 37.9166 26.25C37.9166 24.6392 36.6108 23.3333 35 23.3333Z"
                  fill="#C0B7E8"
                />
              </svg>
              <div>
                <h2>Morocco in Rabat</h2>
                <p>Bouitate, Cym, Rabat, Morocco</p>
              </div>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none"
              >
                <path
                  d="M35.6458 15.9792C37.458 16.3327 39.2569 17.1319 40.5625 18.4375C41.8681 19.7431 42.6673 21.542 43.0208 23.3542M36.875 7.375C40.64 7.79326 44.028 9.61471 46.7083 12.2917C49.3887 14.9686 51.202 18.3605 51.625 22.125M51.6237 40.5051V47.1666C51.634 49.7131 49.3443 51.8395 46.7734 51.6077C24.5835 51.625 7.37515 34.2568 7.39252 12.2159C7.16097 9.65866 9.27686 7.37761 11.8201 7.37522H18.4948C19.5746 7.36461 20.6214 7.74621 21.4401 8.4489C23.7676 10.4467 25.2648 17.2274 24.6887 19.923C24.239 22.0276 22.1175 23.4999 20.6752 24.9394C23.8425 30.4985 28.4545 35.1014 34.0247 38.2624C35.467 36.823 36.9423 34.7057 39.051 34.2568C41.7561 33.6811 48.5805 35.1803 50.5702 37.5241C51.2758 38.3552 51.6507 39.4161 51.6237 40.5051Z"
                  stroke="#C0B7E8"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h2>Give Me a Call</h2>
                <p>+212682147043</p>
              </div>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <path
                  d="M8.91825 14.3349C9.40836 13.8448 10.0854 13.5417 10.8333 13.5417H54.1667C54.9146 13.5417 55.5916 13.8448 56.0817 14.3349M8.91825 14.3349C8.42814 14.825 8.125 15.5021 8.125 16.25V48.75C8.125 50.2458 9.33756 51.4583 10.8333 51.4583H54.1667C55.6624 51.4583 56.875 50.2458 56.875 48.75V16.25C56.875 15.5021 56.5719 14.825 56.0817 14.3349M8.91825 14.3349L28.6698 34.0864C30.7852 36.2017 34.2148 36.2017 36.3302 34.0864L56.0817 14.3349"
                  stroke="#C0B7E8"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h2>Send Me a Message</h2>
                <p>mohamedachouch123@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="small">{list_box[number]}</div>
        </div>
        <About />
      </div>
      <Services />
      <a href="#footer" className="go_to">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M17.5 25L30 37.5L42.5 25"
            stroke="#433D60"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <Build />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
};

export default Home;
