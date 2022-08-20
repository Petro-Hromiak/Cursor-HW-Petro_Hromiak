const apple = 15.678;
const cherry = 123.965;
const lemon = 90.2345;
const maxPrice = Math.max(apple, cherry, lemon);
const minPrice = Math.min(apple, cherry, lemon);
const total = apple + cherry + lemon;
const totalRound = Math.floor(apple) + Math.floor(cherry) + Math.floor(lemon);
const roundToHundreds = Math.round(totalRound / 100) * 100;
const evenOdd = (Math.floor(total) % 2 == 0) ? true : false;
const value = 500;
const rest = value - total;
const arrProduct = [apple, cherry, lemon];
const average = (total / arrProduct.length).toFixed(2);
const discount = (Math.random() * 100).toFixed(0);
const valueWithDiscount = (total / 100 * (100 - discount)).toFixed(2);
const cost = total / 2;
const profit = (cost - (total / 100 * discount)).toFixed(2);
document.write(`<b>Максимальна ціна:</b> ${maxPrice} <br> 
<b>Мінімальна ціна:</b> ${minPrice} <br> 
<b>Вартість всіх товарів:</b> ${total} <br> 
<b>Вартість всіх товарів(округлення товарів окремо):</b> ${totalRound} <br> 
<b>Вартість всіх товарів округлена до сотень:</b> ${roundToHundreds} <br> 
<b>Булеве значення true(парне) чи false (непарне) число:</b> ${evenOdd} <br> 
<b>Сума решти:</b> ${rest} <br><b> Середнє значення цін:</b> ${average} <br> 
<b>Сума до оплати зі знижкою  ${discount}%: </b>${valueWithDiscount} <br> 
<b>Чистий прибуток:</b> ${profit}
</b>`);