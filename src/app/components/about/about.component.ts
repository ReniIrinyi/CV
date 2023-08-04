import { Component } from "@angular/core";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGlobe = faGlobe;
}
