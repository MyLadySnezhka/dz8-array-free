const itemlink = document.querySelector('input[name="itemname"]');
const butlink = document.querySelector('button[name="enter"]');
const spisoklink = document.querySelector('.spisok');

let itemnazv;
const magaz = [];
let html = '';

    
    butlink.addEventListener('click', (ev) => {
        spisoklink.innerHTML = '';
        itemnazv = itemlink.value;
        magaz.push(itemnazv);
        //console.log(magaz);      
        itemlink.value = '';
        zapis();
        
    });


    const zapis = () => {
        
        magaz.forEach((itemnazv) => {
           html = html + '<li>' + itemnazv + '</li>';  
        })
        spisoklink.innerHTML = html;        
    }

    


    //ВОТ ТАК ШИКАРНО РАБОТАЕТ!!!!
    
    /*

const itemlink = document.querySelector('input[name="itemname"]');
const butlink = document.querySelector('button[name="enter"]');
const spisoklink = document.querySelector('.spisok');

let itemnazv = '';
//const magaz = [];
let html = '';
    
    butlink.addEventListener('click', (ev) => {
        
        itemnazv = itemlink.value;
        // magaz.push({itemnazv});
        // console.log(magaz);
        

        html = html + '<li>' + itemnazv + '</li>';
        spisoklink.innerHTML = html;
    
        itemlink.value = '';
    });

    */