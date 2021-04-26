import { ShortnerService } from './shortner.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shortner',
  templateUrl: './shortner.component.html',
  styleUrls: ['./shortner.component.css']
})
export class ShortnerComponent implements OnInit {


  form: FormGroup;
  submitted: true;


  constructor(private fb:FormBuilder, private service: ShortnerService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      url: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(250)]]
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid)
    console.log('ENVIOU')
    this.service.create(this.form.value).subscribe(
      success => console.log('sucesso'),
      error => console.error(error),
      () => console.log('request Completo')
    );
  }

}
