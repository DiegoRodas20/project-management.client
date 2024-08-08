import { Component, OnInit } from '@angular/core';
import { GetPersonsQuery } from 'app/application/persons/get-persons/get-persons.query';
import { Person } from 'app/domain/persons/person';
import { IPersonRepository } from 'app/domain/persons/person.repository';
import { DialogService } from 'primeng/dynamicdialog';
import { GenerateEvaluationComponent } from './components/generate-evaluation/generate-evaluation.component';
import { ListEvaluationComponent } from './components/list-evaluation/list-evaluation.component';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent implements OnInit {
  persons!: Person[];
  constructor(
    private _dialogService: DialogService,
    private _getPersonsQuery: GetPersonsQuery,
  ) {

  }
  ngOnInit(): void {
    this.getPersons()
  }

  public async getPersons() {
    this.persons = (await this._getPersonsQuery.execute()).data

  }
  public createEvaluation(person: Person) {

    this._dialogService.open(GenerateEvaluationComponent, {
      header: `Realizar evaluación: ${this.toTitleCase(person.firstName)}`,
      width: '80vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      data: { personId: person.id }
    })
  }
  public listEvaluation(person: Person) {

    this._dialogService.open(ListEvaluationComponent, {
      header: `Evaluaciones de: ${this.toTitleCase(person.firstName)}`,
      width: '80vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      data: { personId: person.id }
    })
  }
  toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }
}
