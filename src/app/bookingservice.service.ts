import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
  getAllBookedDetails() {
    console.log("in service");
      return this.httpService.get("http://localhost:1006/customer/getDetails");
    }

  
  constructor(private httpService: HttpClient) { }

    /**
     * addBooking
     */
    public addBooking(addbooking: Book) {

      console.log("add booking");
      console.log(addbooking);
      const headers =new HttpHeaders().set('Content_Type', 'text/plain;charset=utf-8');
      return this.httpService.post("http://localhost:1006/customer/booking/doBooking", addbooking, { headers, responseType: 'text' } );
      
    }
    
    public deleteBooking(bookingId){
      console.log(bookingId);
      const headers =new HttpHeaders().set('Content_Type', 'text/plain;charset=utf-8');
      return this.httpService.delete("http://localhost:1006/customer/delete/bookingId/"+bookingId,{ headers, responseType: 'text' });
    }
    

 
  }


  

  export class Book{
    bookingId: number;
    city: string;
    theatreId: number;
    movieId: number;
    showId: number;
    numOfSeat: number;
    dateandtime: Date;

  }



