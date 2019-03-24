import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    country: [''],
    canSendEmails: ['']
  });


  constructor(public api: ApiService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {}

}
