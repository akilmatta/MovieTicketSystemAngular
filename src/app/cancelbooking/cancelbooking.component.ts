import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingserviceService,Book } from '../bookingservice.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
  book: Book=new Book();
  bookedDetails:Book[];
  message: string;

  constructor( private bookingservice: BookingserviceService,private router: Router ) { 
    this.bookingservice.getAllBookedDetails().subscribe(
      response => this.handleSuccessfulResponse(response),
      );
      }
      handleSuccessfulResponse(response) {
        console.log(response);
        this.bookedDetails = response;
      }

  ngOnInit(): void {
  }

  deleteBooking(id:number):void{
    console.log("component"+id);
    this.bookingservice.deleteBooking(id).subscribe(data =>{
      alert(data);
    })
  }

}
