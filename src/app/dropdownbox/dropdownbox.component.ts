import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-dropdownbox',
  templateUrl: './dropdownbox.component.html',
  styleUrls: ['./dropdownbox.component.css']
})
export class DropdownboxComponent implements OnInit {

  toppings = new FormControl();
  selectedValue: any;
  selectedValue2: any;
  selectedValue3: any;
  comidas: any
  vestimentas: any;
  marcas: any;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 

  constructor(
   private GetCategorias : ServicesService,
  ) { }

  ngOnInit(): void {


  
 
  }
  get pruebass() {
    
    
    return this.GetCategorias.pruebass;
   
  }


  onComidaChange() {
    console.log('Writer changed...',this.selectedValue);
    
    if(this.selectedValue == "comidas")
    {
      this.comidas = this.GetCategorias.comidas;
      
    }
    else
    if(this.selectedValue == "bebidas")
    {
      this.comidas = this.GetCategorias.bebidas;
      
    }
    else 
    if(this.selectedValue == "vestimenta")
    {
      this.comidas = this.GetCategorias.vestimentas;
      
    }
    
  
  }

  onProductoChange()
  {
    if(this.selectedValue2 == "Pizza" ||this.selectedValue2 == "Hamburguesa"||this.selectedValue2 == "Ensalada")
    {
      console.log('1')
      this.marcas = this.GetCategorias.marcacomida;
      
    }
    else
    if(this.selectedValue2 == "coca" || this.selectedValue2 == "pepsi")
    {
      console.log('2')
      this.marcas = this.GetCategorias.marcabebida;
      
    }
    else 
    if(this.selectedValue2 == "camisa" || this.selectedValue2 == "calzoneta" || this.selectedValue2 == "calcetas")
    {
      console.log('3')
      this.marcas = this.GetCategorias.marcavestimenta;
      
    }
  }
  

  



}
