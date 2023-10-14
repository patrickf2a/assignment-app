import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'green';
    el.nativeElement.style.border = '1px dashed green';
    el.nativeElement.style.backgroundColor= 'yellow';

    // Ici on pourrait modif le contenue de l'element
    // par ex : el.nativeElement.innerHTML = 'Hello World';
    // ou encore : el.nativeElement.querySelector('h1').style.backgroundColor = 'red';
    // mettre des ecouteurs d'evenements : el.nativeElement.addEventListener('click', () => { ... });
    //appeller des methodes de services : el.nativeElement.querySelector('h1').style.backgroundColor = 'red';

  }

}
