import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent} from './customer/customer.component';
import { BookingComponent} from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';


const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  {path:'booking', component: BookingComponent},
  {path: 'cancelbooking', component: CancelbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
