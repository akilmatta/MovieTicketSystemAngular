import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingserviceService,Book } from '../bookingservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  book: Book=new Book();
  message: string;
  

  constructor(private bookingservice: BookingserviceService,private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(addbooking:Book):any{
   console.log(addbooking);
    this.bookingservice.addBooking(addbooking).subscribe(data => {
      alert("Booking done successfully");});
  }

}
