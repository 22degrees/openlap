import {Component} from '@angular/core';

import {NavParams, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/qualifying/qualifying.html'
})
export class QualifyingPage {

  private options: any;

  constructor(private view: ViewController, params: NavParams) {
    this.options = params.data;
  }

  onSubmit(options) {
    this.view.dismiss(options);
  }

  onClose() {
    this.view.dismiss();
  }
}
