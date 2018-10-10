import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

graficos: any={
  'grafico1':{
    'labels':['Con frijoles','Con natilla','Con tocino'],
    'data': [24,30,45],
    'type':'doughnut',
    'leyenda': 'El pan se come con'
  },
  'grafico2':{
    'labels':['Hombres','Mujeres'],
    'data': [4500,6000],
    'type':'doughnut',
    'leyenda': 'Entrevistados'
  },
  'grafico3':{
    'labels':['Si','No'],
    'data': [95,5],
    'type':'doughnut',
    'leyenda': '¿Le hacen daño los frijoles?'
  },
  'grafico4':{
    'labels':['No','Si'],
    'data': [85,15],
    'type':'doughnut',
    'leyenda': '¿Le importa eso?'
  },
}



  constructor() { }

  ngOnInit() {
  }

}
