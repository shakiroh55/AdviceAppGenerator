# Advice-App-Generator -   Frontend Mentor
This is used in generating random advice.

## Overview - The aim of this work is to build out this advice generator app using the Advice Slip API and get it looking as close to the design as possible.

### The challenge - It take a while before getting the concept of API fetching using the .then() and .catch() method.

### Screenshot
Link - ![uploadScreenshot](https://github.com/shakiroh55/AdviceAppGenerator/assets/105343342/785a8394-d6ab-48b6-8684-2a469bd47cb0)


### Links

- Solution URL: ([https://your-solution-url.com](https://advice-app-generator-iota.vercel.app/))
- Live Site URL: ([https://your-live-site-url.com](https://advice-app-generator-iota.vercel.app/))

## My process

### Built with
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

My major learnings while working through this project was that I was able to learn how to interact with 3rd-party APIs using the Advice Slip API to generate random quotes of advice.

Code snippets is shown below:

```adviceCard.jsx
import React, { useState, useEffect } from "react";
import patternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import patternDividerMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";

const AdviceCard = () => {
  const url = "https://api.adviceslip.com/advice";
  const [getAdvice, setGetAdvice] = useState([]);

  const advices = () => {
    fetch (url)
    .then(response => response.json())
    .then(data => {
      console.log(data.slip.advice)
      const getAdvice = data.slip;
      setGetAdvice(getAdvice)
    })
    .catch(error => console.log(error))
  }

useEffect(() => {
  advices()
},[])

  return (
    <div className="card">
    
      <p>ADVICE # {getAdvice.id}</p>
      <h2 className="advice">"{getAdvice.advice}"</h2>
      <img src={patternDividerDesktop} className="divider-desktop" alt="divider" />
      <img src={patternDividerMobile} className="divider-mobile" alt="divider" />
      <div className="dice" onClick={advices}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default AdviceCard;

```
```App.jsx
import AdviceCard from "./components/adviceCard"
import './App.css'

function App() {
  
  return (
    <>
      <AdviceCard/>
    </>
  )
}

export default App

```
```main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

```App.css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Manrope';
}

body{
  background: hsl(218, 23%, 16%);     /* Dark blue */
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.card {
  background: hsl(217, 19%, 24%);   /* Dark Grayish Blue */
  padding: 46px 30px 70px 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 535px;
  margin: 0px auto;
  border-radius: 15px;
  position: relative;
}

p{
  color: hsl(150, 100%, 66%);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 3.5px;
}

h2{
  color: hsl(193, 38%, 86%); /*  Light Cyan */
  font-size: 28px;
  margin-bottom: 40px;
}

.dice{
  background: hsl(150, 100%, 66%); /*  Neon Green */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 55%;
  position: absolute;
  bottom: -28px;
  cursor: pointer;
}

.dice:hover{
  box-shadow: 0 0 40px 0 rgba(82, 255, 169, 0.486);
}

.dividerMobile{
  display: none;
}

@media(max-width: 924px) {
  .dividerMobile{
    display: block;
  }
  .dividerDesktop{
    display: none;
  }
}

@media(max-width: 620px) {
  .card{
    width: 88%;
  }
}

@media(max-width: 375px) {
  h2{
    font-size: 23px;
  }
  p{
    font-size: 10px;
  }
}
```

### Continued development

I will continue building projects that involves the interaction with 3rd-party APIs so as to become more perfect.

### Useful resources

- [Resource 1] ([https://www.example.com](https://stackoverflow.com/questions/73023183/failed-to-load-config-from-project-vuejs-frontend-vite-config-js-vuejs)) - This is an amazing article which helped me fix the error of "Failed to load Config from a particular file path using vite". I'd recommend it to anyone that encounter same error to make use of this article.
- [Resource 2]([https://www.example.com](https://www.guvi.in/blog/how-to-fetch-data-using-api-in-react/)) -  This helped me to understand more concept on how to fetch and display data using APIs.
- 
## Author

- Name - [Fatunwase Sakirat]
- Twitter - [@fhatshakirat]
- LinkedIn - (https://www.linkedin.com/in/fhatshakirat/)

## Acknowledgments

This is to say a very big thanks to my boss who give out this project to work on.
