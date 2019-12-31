import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fileUpload';
  images;
  constructor(private http: HttpClient){}
  id = 3;


  ngOnInit(){

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  onSubmit(eventName, eventDescription, eventDate, eventTime, eventLocation){
    this.id ++;
    this.http.post('http://localhost:3000/notes', ({id: this.id, eventName: eventName, eventDescription: eventDescription, eventDate: eventDate, eventTime:eventTime, eventLocation:eventLocation, eventImg:this.images.name})).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('eror');
      }
    );
    const formData = new FormData();
    formData.append('file', this.images);
    console.log(eventName);
    // console.log(img);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    location.reload();

  }

}
