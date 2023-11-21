import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ContactImageUrl : string = "/assets/Images/CONTACTpic.jpg";
  CallPhone() {
    window.open('tel:015906177083', '_blank');
  }
  sendEmail() {
    window.open('mailto:FewoClean4U@gmail.com', '_blank');
  }
  redirectToFacebook() {
    window.open('https://www.facebook.com/profile.php?id=61553101005335', '_blank');
  }
}
