let input = document.querySelector('.inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        if(e.target.innerHTML === '='){
            let res = eval(string);
            if(Number.isInteger(res)){
                res = parseInt(res);
            }
            else{
                res = res.toFixed(3);
            }
            string = res.toString();
            input.value = string;
        }

        else if(e.target.innerHTML === 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === 'DE'){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})