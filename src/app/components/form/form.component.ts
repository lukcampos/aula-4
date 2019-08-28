import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
// importando o Angular HttpCLient
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mainForm:FormGroup;
  generos:Array<Object> = [];// array de generos
  cores:Array<Object> = []; // array de cores
  urlPaises:string = "https://restcountries.eu/rest/v2/all"
  paises:any = [];
  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient // inport HttpClient
    ) {
    //adicionar array de generos
    this.generos = [
    {nome:"Masculino", valor:"m"},
    {nome:"Feminino", valor:"f"},
    {nome:"Outros", valor:"o"},
    ]

    //adicionar array de cores
    this.cores = [
      {nome:"Vermelho", hex:"#ff2f2f"},
      {nome:"Amarelo", hex:"#ffd400"},
      {nome:"azul", hex:"#007eff"},
      {nome:'Rosa',hex:'#e400ff' },
      {nome:'Verde',hex:'#008246' }
    ]

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

  async ngOnInit() {

    var paises = await  this.http.get(this.urlPaises).toPromise()
    this.paises = paises

  }

}
