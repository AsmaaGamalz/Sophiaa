import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var head= document.getElementsByClassName('according');
var i;
for( i=0; i<head.length;i++){
  head[i].addEventListener('click',function(){
    this.classList.toggle('active');
    var desc = this.nextElementSibling;
    if( desc.style.maxHeight){
      desc.style.maxHeight=null;
    }
    else{
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
}
  }

}
