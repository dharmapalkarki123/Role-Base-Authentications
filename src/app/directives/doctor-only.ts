import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDoctorOnly]',
})
export class DoctorOnly {
  constructor(private eleRef:ElementRef) {

    const local=localStorage.getItem("doctorApp")
    if(local!=null){
      const user=JSON.parse(local);

      if(user.role!=="Doctor"){
        this.eleRef.nativeElement.style.display="none"
      }

    }


  }
}
