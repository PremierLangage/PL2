import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { DialogService } from '@platon/shared/ui/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username = '';
    password = '';

    user?: AuthUser;
    connecting = false;

    constructor(
        private readonly router: Router,
        private readonly dialog: DialogService,
        private readonly authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.authService.ready().then(user => {
            this.user = user;
        }).catch(console.error);
    }

    signIn(): void {
        if (this.user && this.user.username === this.username) {
            this.router.navigateByUrl('/dashboard', { replaceUrl: true });
            return;
        }

        this.connecting = true;
        this.authService.signIn(this.username, this.password).then(() => {
            this.connecting = false;
            this.router.navigateByUrl('/dashboard', { replaceUrl: true });
        }).catch(() => {
            this.dialog.snack('Une erreur est survenue lors de la connexion !');
            this.connecting = false;
        });
    }
}
