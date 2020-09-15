import { Component, OnInit } from '@angular/core';
import{SophiaserivesService}from'../sophiaserives.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

   
  constructor(private _SophiaserivesService:SophiaserivesService) { 
    _SophiaserivesService.getTest().subscribe(response =>{
      console.log(response)
    })
  }


  ngOnInit(): void {
    
  


  var mybutton = document.getElementById('group');
  window.onscroll = function(){
    'use strict';
    if(window.pageYOffset >=400){
      mybutton.style.display='block';
    }
    else{
      mybutton.style.display='none';
    }
  };
  mybutton.onclick = function(){
    'use strict';
    window.scrollTo(0,0);
  }
  




  }

}
