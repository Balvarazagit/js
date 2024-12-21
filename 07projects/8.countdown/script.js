const end_date = "01 january 2025 12:00 AM";
document.getElementById('end_date').innerHTML = end_date;
const inputs = document.querySelectorAll('input');

function clock(){
    const end = new Date(end_date);
    const now = new Date()
    // diffrence of end date and now date
   const diff = (end-now)/1000;
   if(diff<0) return;
   // convert to days
   inputs[0].value = Math.floor(diff/3600/24);
   // convert to hours
   inputs[1].value = Math.floor(diff/3600%24);
   // convert to minutes
   inputs[2].value = Math.floor(diff/60%60);
   // convert to seconds
   inputs[3].value = Math.floor(diff%60)  ;
}


setInterval(() => {
    clock()
}, 1);

// 1 days = 24 hours;
// 1 hours = 60 minutes = 3600 seconds;
// 1 minutes = 60 seconds;