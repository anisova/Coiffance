function scrollTo() {
   const anchors = document.querySelectorAll("a.scrollto");
    console.log (anchors);
      anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {        
          const blockID = anchor.getAttribute("href");   
          console.log(blockID);     
          let gotoBlock = document.querySelector(blockID);
          console.log (gotoBlock);
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.sticky-back').offsetHeight;
          console.log (gotoBlockValue);
          window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });   
        e.preventDefault(); 
        });
      });
    }

    scrollTo();