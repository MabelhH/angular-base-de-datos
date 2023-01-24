import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FarmaciaService } from 'src/app/servicio/farmacia.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{

  formRegister!:FormGroup;

constructor(private farmaciaService:FarmaciaService){
  this.formRegister = new FormGroup({
    producto: new FormControl(),
    costo: new FormControl(),
    foto: new FormControl()
  })
}

  ngOnInit(): void {
    
  }
  registrar(){
    console.log(this.formRegister.value)
  }
}
