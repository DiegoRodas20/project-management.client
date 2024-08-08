import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CloseEvaluationCommand } from 'app/application/evaluations/close-evaluation/close-evaluation.command';
import { GetCurrentByPersonQuery } from 'app/application/evaluations/get-current-by-person/get-current-by-person.query';
import { SaveEvaluationCommand } from 'app/application/evaluations/save-evaluation/save-evaluation.command';
import { SaveEvaluationRequest } from 'app/domain/evaluations/save-evaluation.request';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-generate-evaluation',
  templateUrl: './generate-evaluation.component.html',
  styleUrl: './generate-evaluation.component.scss'
})
export class GenerateEvaluationComponent {
  url: string = "";
  formGroup!: FormGroup
  personId!: number;
  constructor(
    private _dialogConfig: DynamicDialogConfig,
    private _formBuilder: FormBuilder,
    private _getCurrentByPersonQuery: GetCurrentByPersonQuery,
    private _saveEvaluationCommand: SaveEvaluationCommand,
    private _closeEvaluationCommand: CloseEvaluationCommand,
  ) { }

  async ngOnInit() {
    this.setPersonId();
    this.createFormGroup();
    this.loadReport();
    await this.loadEvaluation();
  }
  setPersonId() {
    this.personId = this._dialogConfig.data.personId;
  }

  public createFormGroup() {
    this.formGroup = this._formBuilder.group({
      score: [1],
      skillsToImprove: [null],
      skillsReached: [null],
    })
  }

  private loadReport() {
    var params = {
      "ds0.personid": this.personId
    };
    var paramsAsString = JSON.stringify(params);
    var encodedParams = encodeURIComponent(paramsAsString);
    this.url = `https://lookerstudio.google.com/embed/reporting/c2ed55a1-a524-453c-93ae-2d9687422a53/page/iC47D?params=${encodedParams}`;
  }

  async loadEvaluation() {
    let result = await this._getCurrentByPersonQuery.execute(this._dialogConfig.data.personId);
    if (result.data != null) {
      let evaluation = result.data
      this.formGroup.controls['score'].setValue(evaluation.score)
      this.formGroup.controls['skillsToImprove'].setValue(evaluation.skillsToImprove)
      this.formGroup.controls['skillsReached'].setValue(evaluation.skillsReached)
    }
  }
  async saveEvaluation() {
    const form = this.formGroup.value
    const request: SaveEvaluationRequest = {
      score: form.score,
      personId: this.personId,
      skillsToImprove: form.skillsToImprove,
      skillsReached: form.skillsReached
    }

    const result = await this._saveEvaluationCommand.execute(request)
  }

  async closeEvaluation() {
    await this._closeEvaluationCommand.execute(this.personId);
  }
}
