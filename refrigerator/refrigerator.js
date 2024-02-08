'Use strict'

class Refrigerator{

    constructor(color,meal, brand,capacity){

        this.color = color;
        this.meal = meal;
        this.brand = brand;
        this.capacity = capacity;
    }

    showInfo(){

         alert(`Marca: ${this.brand}`);
         alert(`Capacidad: ${this.capacity}`);
         alert(`Calor: ${this.color}`);
         alert(`Productos: ${this.meal}`);
      

    }

        showProducts(){

            alert(`Productos: ${this.meal}`);  
        }


    toBuy(producto){

        this.meal.push(producto); 

   }

}

let refrigerator = new Refrigerator('White',['Soda','Pollo','Carne','Queso','Huevos','Yogurt'],'Challenger','500lb');
refrigerator.showInfo();

refrigerator.toBuy('Queso de huntar, Jamon');

refrigerator.showProducts();

refrigerator.comida('Jamon de Pavo');

refrigerator.showProducts();