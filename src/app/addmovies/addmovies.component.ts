import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApicallserviceService } from '../services/apicallservice.service';
@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css']
})
export class AddmoviesComponent implements OnInit {
  preview: string;
  form: FormGroup;
  percentDone: any = 0;


  constructor(private apiCall: ApicallserviceService,
    public fb: FormBuilder,
    public router: Router, private route: ActivatedRoute) {

    this.form = this.fb.group({
      category_name: ['', Validators.required],
      avatar: [null, Validators.required],
      title: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }



  submitForm() {
    this.apiCall.addnewmovie(
      this.form.value.category_name,
      this.form.value.title,
      this.form.value.avatar,

    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          this.percentDone = false;
          alert( event.body.message);
          this.router.navigate(['/'])

      }
    }, err => {
      alert(err.error.message);
    });
  }

}
