import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BreadcrumbService } from "../shared/services/breadcrumb.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
    departments = ["Web Development", "System Development", "HR", "Sales"];
    profileForm: FormGroup = new FormGroup({
        general: new FormGroup({
            firstName: new FormControl("Eric", [
                Validators.required,
                Validators.minLength(1),
            ]),
            lastName: new FormControl("Miller", [
                Validators.required,
                Validators.minLength(1),
            ]),
            department: new FormControl(this.departments[0], [
                Validators.required,
            ]),
            occupation: new FormControl(""),
        }),
        password: new FormGroup({
            newPassword: new FormControl("12345678", [
                Validators.required,
                Validators.minLength(8),
            ]),
            confirmedPassword: new FormControl("", [
                Validators.required,
                Validators.minLength(8),
            ]),
        }),
        contactInfo: new FormGroup({
            email: new FormControl("yarko12@gmail.com", [
                Validators.required,
                Validators.email,
            ]),
            phone: new FormControl("1488-228", [Validators.required]),
            location: new FormControl("Ukraine", [Validators.required]),
            address: new FormControl("", [Validators.required]),
        }),
    });

    constructor(private breadCrumb: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadCrumb.setTitle("Profile");
    }

    updateProfile() {
        console.log(this.profileForm.value);
        console.log(this.profileForm);
    }
}
