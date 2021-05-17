import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  isLoginMode: boolean = true;
  isLoading:boolean =false;
  error:string=null;
  @ViewChild(PlaceholderDirective,{static:false}) alertHost:PlaceholderDirective
  private subscription : Subscription


  constructor(private authService: AuthService,
    private router : Router,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onFormSubmit(form: NgForm) {
    //this if loop isn't triggered coz button is disabled, but if user hacks it then we can manage it with this if condition
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObservable:Observable<AuthResponseData>;

    this.isLoading = true
    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password)
    }
    else {
     authObservable= this.authService.signUp(email, password)
    }

    authObservable.subscribe(
      responseData => {
        console.log(responseData)
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage)
        this.error = errorMessage;
        this.showErrorAlert(errorMessage)
        this.isLoading = false
      }
    )

    form.reset()
  }

  onHandelError(){
    this.error=null
  }

  private showErrorAlert(msg: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory)

    componentRef.instance.message = msg;
    this.subscription = componentRef.instance.close.subscribe(() => {
      this.subscription.unsubscribe()
      hostViewContainerRef.clear()
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
