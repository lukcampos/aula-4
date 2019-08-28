import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mainForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {

    // adicionar os atributos ao formulário
    this.mainForm = this.formBuilder.group({
      nome:'',
      sobrenome:'',
      email:'',
      genero:'',
      corFavorita:'',
      cpf:'',
      pais:''
    })
  }

  ngOnInit() {
  }

}
