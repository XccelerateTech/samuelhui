# My First Site


This site is built by basic HTML, CSS & JS. A basic HTML DOM model is used:

1. Header
2. Section
3. Aside
4. Footer


### Header
*Features:*
  - Placed on the top
  - A title and a welcoming massage is included
  
### Section
*Features:*
  - Placed at the leftside of the web
  - Brief introduction of myself 
  - Using Div to separate each blocks

### Aside
*Features:*
  - A container for my gallery
  - JS is used to built the gallery:
 ```
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < Tslides.length; i++) {
        Tslides[i].className = Tslides[i].className.replace(" active", "");
    }
    slides[slidesIndex - 1].style.display = "block";
    Tslides[slidesIndex - 1].className += " active";
   ```

  -  The tricky part is how to switch between the active photo and hide the inactive photo when clicking. 
  -  The ideas of the function is come from lightbox

### Footer
*Features*
  - My Contact, just a few lines :)


### Upcoming Features
  - NO 
    