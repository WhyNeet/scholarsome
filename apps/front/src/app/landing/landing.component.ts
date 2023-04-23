import { Component, OnInit } from "@angular/core";
import { ModalService } from "../shared/modal.service";
import { CookieService } from "ngx-cookie";
import { Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Location } from "@angular/common";

@Component({
  selector: "scholarsome-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(
    public modalService: ModalService,
    private cookieService: CookieService,
    private router: Router,
    private location: Location,
    private deviceService: DeviceDetectorService
  ) {}

  isDesktop: boolean;
  faGithub = faGithub;

  async ngOnInit(): Promise<void> {
    this.isDesktop = this.deviceService.isDesktop();

    if (this.cookieService.get("authenticated") === "true") {
      this.location.go("view");
      await this.router.navigate(["view"]);
    }
  }
}
