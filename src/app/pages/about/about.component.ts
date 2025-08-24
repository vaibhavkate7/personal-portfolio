import { Component } from '@angular/core';
import { HeaderComponent } from "../../compoents/header/header.component";
import { FooterComponent } from "../../compoents/footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
