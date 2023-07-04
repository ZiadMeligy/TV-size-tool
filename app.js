
let rangeSlider = document.getElementById('range-input');
let rangenumber = document.getElementById('range-number');
let tv = document.getElementById('tv');
let kanaba = document.getElementById('kanaba');
let revbtn = document.getElementById('btn-review');
let tooltip= document.getElementById('tooltipmove')
let kosomelwidth = document.getElementById('range-line')
let smallerwindow = window.matchMedia("(min-width: 1400px)")
let evensmallerwindow = window.matchMedia("(min-width: 1200px)")
let size_text = document.getElementById("TV-size")
let tv_size_desc = document.getElementById("TV-descriptions")


rangeSlider.addEventListener('input', function(event) {

  const value = rangeSlider.value;
  let style_width = 0;
  // Handle the range slider value change
    switch(value){ 
        case "0":
            rangenumber.textContent="2.0m"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(0.9)'
            tv.style.left="-80px"
            style_width= 0;
            kosomelwidth.style.width = style_width+'%'
            if (smallerwindow.matches){
                tooltip.style.left="43%"
            }else if(evensmallerwindow.matches){
                tooltip.style.left="50%"
            }else{
                tooltip.style.left="59.5%"
            }
            
            tooltip.textContent="32 inch TV"
            revbtn.textContent="Click here for 32 inch TV reviews"
            size_text.textContent="Small TVs (32 inch)"
            tv_size_desc.textContent="If you're after a slightly larger second TV for a bedroom or kitchen, the optimum distance for a 32-inch TV is about 2 meters (7 feet)"
            break;
        case "10":
            rangenumber.textContent="2.5m"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(0.95)'
            tv.style.left="-60px"
            style_width= 1*(100/7);
            kosomelwidth.style.width = style_width +'%'
            if (smallerwindow.matches){
                tooltip.style.left="45.5%"
            }else if(evensmallerwindow.matches){
                tooltip.style.left="52%"
            }else{
                tooltip.style.left="62.5%"
            }
            
            tooltip.textContent="40-43 inch TV"
            revbtn.textContent="Click here for 40-43 inch TV reviews"
            size_text.textContent="Medium TVs (40-43 inch)"
            tv_size_desc.textContent="Moving into the realms of medium-sized TVs, a 40-inch set could be a good main TV if you don't want it to dominate, or an extravagant second TV. Best viewed at 9 feet (2.45 meters) away."


            break;
        case "20":
            rangenumber.textContent="2.7m"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(1)'
            tv.style.left="-40px"
            style_width= 2*(100/7);
            kosomelwidth.style.width = style_width+'%'
            if (smallerwindow.matches){
                tooltip.style.left="47.5%"
            }else if(evensmallerwindow.matches){
                
                tooltip.style.left="54.5%"
            }else{
                tooltip.style.left="65.3%"
            }
            
            tooltip.textContent="48-50 inch TV"
            size_text.textContent="Medium/Large TVs (48-50 inch)"
            revbtn.textContent="Click here for 48-50 inch TV reviews"
            tv_size_desc.textContent="At the upper end of the 'medium' scale, modern 48-50-inch TVs are slimline enough not to appear overbearing, and could be a good choice if you typically sit around 9 feet (2.6 meters) away."
            break;
        case "30":
            rangenumber.textContent="3.0m"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(1.05)'
            tv.style.left="-20px"
            style_width= 3*(100/7);
            kosomelwidth.style.width = style_width+'%'
            if (smallerwindow.matches){
                tooltip.style.left="49.5%"
            }else if(evensmallerwindow.matches){
                tooltip.style.left="56.5%"
            }else{
                tooltip.style.left="68.7%"
            }
            
            tooltip.textContent="48-50 inch TV"
            tv_size_desc.textContent="At the upper end of the 'medium' scale, modern 48-50-inch TVs are slimline enough not to appear overbearing, and could be a good choice if you typically sit around 9 feet (2.6 meters) away."
            size_text.textContent="Medium/Large TVs (48-50 inch)"
            revbtn.textContent="Click here for 48-50 inch TV reviews"
            break;
        case "40":
            rangenumber.textContent="3.4m"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(1.1)'
            tv.style.left="0px"
            tooltip.style.left="60%"
            style_width= 4*(100/7);
            kosomelwidth.style.width = style_width+'%'
            if (smallerwindow.matches){
                tooltip.style.left="52%"
            }else if(evensmallerwindow.matches){
                tooltip.style.left="59%"
            }else{
                tooltip.style.left="72%"
            }
            tooltip.textContent="55 inch TV" 
            size_text.textContent="Large TVs (55 inch)"
            tv_size_desc.textContent="Thanks to modern, slimline designs with small bezels, 55-inch TVs are more popular than ever. Ideal if you've got your feet up around 11 feet (3.3 meters) away from the screen."
            revbtn.textContent="Click here for 55 inch TV reviews"
            break;
        case "50":
            rangenumber.textContent="3.7m"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(1.15)'
            tv.style.left="20px"
            style_width= 5*(100/7);
            kosomelwidth.style.width = style_width+'%'
            if (smallerwindow.matches){
                tooltip.style.left="54.5%"
            }else if(evensmallerwindow.matches){
                tooltip.style.left="61.5%"
            }else{
                tooltip.style.left="75%"
            }
            
            tooltip.textContent="55 inch TV"
            size_text.textContent="Large TVs (55 inch)"
            tv_size_desc.textContent="Thanks to modern, slimline designs with small bezels, 55-inch TVs are more popular than ever. Ideal if you've got your feet up around 11 feet (3.3 meters) away from the screen."
            revbtn.textContent="Click here for 55 inch TV reviews"
            break;
        case "60":
            rangenumber.textContent="4m"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(1.20)'
            tv.style.left="40px"
            style_width= 6*(100/7);
            kosomelwidth.style.width = style_width+'%'
            if (smallerwindow.matches){
                tooltip.style.left="57.5%"
            }else if(evensmallerwindow.matches){
                tooltip.style.left="64%"
            }else{
                tooltip.style.left="78%"
            }
                
            tooltip.textContent="65 inch TV"
            tv_size_desc.textContent="If you're really pushing the boat out, or you have a large room and sit about 13 feet (3.7 meters) away from the screen, these extra-large sets have really come down in price."

            size_text.textContent="Extra-large TVs (65 inch)"
            revbtn.textContent="Click here for 65 inch TV reviews"
            break;
        case "70":
            rangenumber.textContent="4m+"
            tv.style.position="relative"
            tv.style.transition='0.5s'
            tv.style.transform='scale(1.25)'
            tv.style.left="60px"
            style_width= 7*(100/7);
            kosomelwidth.style.width = style_width+'%'
            if (smallerwindow.matches){
                tooltip.style.left="59%"
            }else if(evensmallerwindow.matches){
                tooltip.style.left="67%"
            }else{
                tooltip.style.left="81%"
                }
                    
            tooltip.textContent="65+ inch TV"
            size_text.textContent="Extra-large TVs (65+ inch)"
            tv_size_desc.textContent="Looking to take things to the extreme? There are a handful of TVs around larger than 65-inches in size, though you'll need to be at least 14 feet (4.2 meters) away for the best experience."
            revbtn.textContent="Click here for 65+ inch TV reviews"
            break;

            
    }
});