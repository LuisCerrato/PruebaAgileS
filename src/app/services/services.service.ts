import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  Categorias: []=[]
  Productos: any[] = [];
  Marcas: any[] = [];
  pruebass: any;
  comidas: any;
  vestimentas: any;
  bebidas: any;
  marcacomida: any;
  marcabebida: any;
  marcavestimenta: any;
  meses: any;
  constructor(private http: HttpClient) {
    this.getCategorias();
    this.getcomidas();
    this.getbebidas();
    this.getvestimentas();
    this.getmarcacomida();
    this.getmarcabebida();
    this.getmarcavestimenta();
    this.getmsemestral();
    /* this.getProductos();
    this.getMarcas(); */
  }

  public getCategorias() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/pruebas.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.pruebass = d      
      });
  }

  public getcomidas() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/Comidas.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.comidas = d      
      });
  }

  
  public getbebidas() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/Bebidas.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.bebidas = d      
      });
  }

  public getvestimentas() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/Vestimenta.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.vestimentas = d      
      });
  }

  public getmarcacomida() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/MarcaComida.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.marcacomida = d      
      });
  }

  public getmarcabebida() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/MarcaBebida.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.marcabebida = d      
      });
  }

  public getmarcavestimenta() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/MarcaVestimenta.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.marcavestimenta = d      
      });
  }

  public getmsemestral() {
    this.http
      .get("https://blogproject-563fc-default-rtdb.firebaseio.com/Meses.json")
      .subscribe((d) => {
     /*    this.Categorias = d; */
        
        this.meses = d      
      });
  }




 /*  public getProductos() {
    this.http
      .get("https://portafolio-11ed1.firebaseio.com/Educacion.json")
      .subscribe((response: any) => {
        this.Productos = response;
        console.log(Response);
      });
  }

  public getMarcas() {
    this.http
      .get("https://portafolio-11ed1.firebaseio.com/Experiencia.json")
      .subscribe((response: any) => {
        this.Marcas = response;
        console.log(Response);
      });
  } */

}

