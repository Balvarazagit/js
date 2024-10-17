const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = 'gray';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
        
            default:
                break;
        }
    })
});