// Вывод через alert:

// function calculateTotalPrice(quantity = 2, price = 20000) {
//   totalPrice = quantity * price;  
//   alert(`Стоимость покупки: ${totalPrice.toLocaleString('ru-RU')} рублей`);
// }


// Вывод на страницу:

const textPrice = document.getElementById('text_price'); 

function calculateTotalPrice(quantity = 2, price = 20000) {
  totalPrice = quantity * price; 
  document.getElementById('text_price').textContent = "Стоимость покупки: "  + totalPrice.toLocaleString('ru-RU') + " рублей";
};





