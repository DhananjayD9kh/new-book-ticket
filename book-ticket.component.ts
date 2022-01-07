import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent  {
  
  
  
  bookedticketForm= new FormGroup({
    seats:new FormControl('',[Validators.required]),
  })

  getBookedTicketFormData(data:any)
  {
    console.warn(data.seats)
    console.log("hii")
    console.log(data.seats);
    
  
  }
  book_clicked(data:any){
    
  }

}
