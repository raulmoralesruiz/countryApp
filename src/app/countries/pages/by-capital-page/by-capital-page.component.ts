import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {

  searchByCapital(searchedText: string): void {

    console.log('desde by-capital-page (destino)');
    console.log({searchedText});
  }
}
