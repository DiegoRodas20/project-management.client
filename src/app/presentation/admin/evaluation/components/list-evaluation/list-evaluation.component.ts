import { Component, OnInit } from '@angular/core';
import { GetByPersonQuery } from 'app/application/evaluations/get-by-person/get-by-person.query';
import { Evaluation } from 'app/domain/evaluations/evaluation';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-list-evaluation',
  templateUrl: './list-evaluation.component.html',
  styleUrl: './list-evaluation.component.scss'
})
export class ListEvaluationComponent implements OnInit{
  evaluations!: Evaluation[];
  personId!: number;

  constructor(
    private _getByPersonQuery: GetByPersonQuery,
    private _dialogConfig: DynamicDialogConfig,
  ){}
  async ngOnInit(): Promise<void> {
    this.setPersonId();
    await this.ListEvaluations();
  }
  private async ListEvaluations() {
    this.evaluations = (await this._getByPersonQuery.execute(this.personId)).data;
  }

  setPersonId() {
    this.personId = this._dialogConfig.data.personId;
  }
}
