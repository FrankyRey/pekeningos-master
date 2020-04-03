import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

import Swal from "sweetalert2";

@Component({
  selector: "app-auth-layout",
  templateUrl: "./auth-layout.component.html",
  styleUrls: ["./auth-layout.component.scss"]
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;
  public tokenStatus = false;

  constructor(public router: Router, private _spinner: NgxSpinnerService) {}

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }
  logout() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Cerrarás tu sesión.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión"
    }).then(result => {
      if (result.value) {
        this._spinner.show();

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          localStorage.clear();
          this.router.navigate(["/login"]);
          this._spinner.hide();
        }, 3000);
      }
    });

    
  }
}
