const orderButton = document.getElementById('orderButton');
const orderStatus = document.getElementById('orderStatus');
const foodImage = document.getElementById('foodImage');
const orderId = document.getElementById('orderId');

orderButton.addEventListener('click', placeOrder);

function placeOrder() {
  const selectedItems = [];
  document.querySelectorAll('input[name="food"]:checked').forEach(item => {
    selectedItems.push(item.value);
  });

  if (selectedItems.length === 0) {
    alert("Please select at least one food item.");
    return;
  }

  orderStatus.textContent = 'Preparing your order...';
  foodImage.innerHTML = '';
  orderId.textContent = '';

  // Simulate order preparation with a promise
  const preparationTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 to 5 seconds
  const orderPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, preparationTime * 1000);
  });

  orderPromise.then(() => {
    orderStatus.textContent = 'Order ready!';
    displayOrder(selectedItems);
  });
}

function displayOrder(items) {
  // Show food image and order ID
  foodImage.innerHTML = '<img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80" alt="Burger">';
  
  const uniqueOrderId = Math.floor(100 + Math.random() * 900); // Random order ID between 100 and 999
  orderId.textContent = `Order ID: ${uniqueOrderId}`;
}
