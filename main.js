/*
      ----- ASHISH CHOUDHARY ----- main.js

      Designed by Ashish Kumar
      Senior Computer Science student at ASU
      Full-Stack Developer

*/


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };