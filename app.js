
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
            
            tooltip.textContent="32 بوصة"
            revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ32 بوصة "
            size_text.textContent="شاشة صغير 32 بوصة"
            tv_size_desc.textContent="الشاشات صاحبة الـ32 بوصة بتبقى مناسبة لمسافة 2 متر "
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
            
            tooltip.textContent="40-43 بوصة"
            revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ40/43 بوصة"
            size_text.textContent="شاشة متوسطة الحجم (40-43 بوصة)"
            tv_size_desc.textContent=" الشاشات صاحبة الـ40/43 بوصة بتبقى مناسبة لمسافة 2.5 متر "


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
            
            tooltip.textContent="48-50 بوصة"
            size_text.textContent="شاشة متوسطة/كبيرة الحجم (48-50 بوصة)"
            revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ48/50 بوصة"
            tv_size_desc.textContent=" الشاشات صاحبة الـ48/50 بوصة بتبقى مناسبة لمسافة 2.7 متر "
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
            
            tooltip.textContent="48-50 بوصة"
            tv_size_desc.textContent=" الشاشات صاحبة الـ48/50 بوصة بتبقى مناسبة لمسافة 3 متر "
            size_text.textContent="شاشة متوسطة/كبيرة الحجم (48-50 بوصة)"
            revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ48/50 بوصة"
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
            tooltip.textContent="55 بوصة" 
            size_text.textContent="شاشة كبيرة (55 بوصة)"
            tv_size_desc.textContent=" الشاشات صاحبة الـ55 بوصة بتبقى مناسبة لمسافة 3.4 متر"
            revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ55 بوصة"
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
            
            tooltip.textContent="55 بوصة"
            size_text.textContent="شاشة كبيرة (55 بوصة)"
            tv_size_desc.textContent=" الشاشات صاحبة الـ55 بوصة بتبقى مناسبة لمسافة 3.7 متر "
            revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ55 بوصة"
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
                
            tooltip.textContent="65 بوصة"
            tv_size_desc.textContent=" الشاشات صاحبة الـ65 بوصة بتبقى مناسبة لمسافة 4 متر"

            size_text.textContent="شاشة ضخمة (65 بوصة)"
            revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ65 بوصة"
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
                    
            tooltip.textContent="65+ بوصة"
            tooltip.style.fontWeight="600"
            size_text.textContent="شاشة ضخمة (65 بوصة أو أكثر)"
            tv_size_desc.textContent=" الشاشات صاحبة الـ+65 بوصة بتبقى مناسبة لمسافة اكبر من 4 متر "
            revbtn.textContent = "إضغط هنا عشان تشوف مراجعة شاشات الـ+65 بوصة";
            break;

            
    }
});

window.onload = ()=>{
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
    tooltip.textContent="55 بوصة" 
    size_text.textContent="شاشة كبيرة (55 بوصة)"
    tv_size_desc.textContent=" الشاشات صاحبة الـ55 بوصة بتبقى مناسبة لمسافة 3.4 متر"
    revbtn.textContent="إضغط هنا عشان تشوف مراجعة شاشات الـ55 بوصة"
}
