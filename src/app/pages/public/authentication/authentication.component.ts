import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { CryptoService } from '../../../_services/crypto.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    public cryptoService: CryptoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.loginForm.value).subscribe(data => {
      const result: any = data;
      const encryptedResp = this.cryptoService.Encrypt(JSON.stringify(result.cookie));
      const encryptedUser = this.cryptoService.Encrypt(JSON.stringify(result));
      localStorage.setItem('currentUser', encryptedResp);
      localStorage.setItem('user', encryptedUser);
      this.authenticationService.currentUserSubject.next(JSON.parse(this.cryptoService.Decrypt(encryptedResp)));
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error);
    });
  }
}
