const date = new Date();
document.getElementById('currentdate').textContent = new Date().toLocaleString('en-US');

const year = date.getFullYear();
document.getElementById('year').textContent = year;


