document.getElementById("create_btn").addEventListener("click", function (event) {
     event.preventDefault();
 
     const productName = document.getElementById("product_name").value;
     const productDescription = document.getElementById("product_description").value;
     const productPrice = document.getElementById("product_price").value;
 
     const productData = {
         name: productName,
         description: productDescription,
         price: productPrice
     };
 
     fetch("http://127.0.0.1:8000/api/products/", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "X-CSRFToken": getCookie('csrftoken')
         },
         body: JSON.stringify(productData)
     })
     .then(response => {
          if (!response.ok) {
               return response.json().then(errData => {
                    if (errData.non_field_errors) {
                         throw new Error(errData.non_field_errors[0]);
                    }
                    throw new Error(errData.detail || "Ошибка при создании продукта");
               });
          }
         return response.json();
     })
     .then(data => {
         alert("Продукт успешно создан");
     })
     .catch(error => {
         console.error("Ошибка:", error);
         alert("Ошибка при создании продукта: " + error.message);
     });
 });
 
 function getCookie(name) {
     let cookieValue = null;
     if (document.cookie && document.cookie !== '') {
         const cookies = document.cookie.split(';');
         for (let i = 0; i < cookies.length; i++) {
             const cookie = cookies[i].trim();
             if (cookie.substring(0, name.length + 1) === (name + '=')) {
                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                 break;
             }
         }
     }
     return cookieValue;
 }