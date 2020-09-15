import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

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




    const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

  }

}
