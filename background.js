
const colorone = document.getElementById('colorone');
const colortwo = document.getElementById('colortwo');
const colortree = document.getElementById('colortree');
const showdata = document.getElementById('showvalue');
const bodybg = document.getElementById('bodybg');

function setbgcolour(){
bodybg.style.backgroundImage = `linear-gradient(to right top, ${colorone.value},
 ${colortwo.value},${colortree.value} )`;

showdata.innerHTML = `<div class="code">Copy Your Code:</div>
<div class="contenueCode">
<p> background: linear-gradient(to right top,${colorone.value}, ${colortwo.value},${colortree.value}); </p>
</div>`;
}
console.log(colorone);

colorone.addEventListener('input', setbgcolour);
colortwo.addEventListener('input', setbgcolour); 
colortree.addEventListener('input', setbgcolour);

