import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datadisp',
  templateUrl: './datadisp.component.html',
  styleUrls: ['./datadisp.component.css']
})
export class DatadispComponent implements OnInit {
  students = [];
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('../assets/student.json').subscribe(
      (data :any[]) => {
      this.students = data
      console.log(data);
    });
  }
}
