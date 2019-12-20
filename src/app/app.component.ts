import { Component, OnInit } from '@angular/core';

// import { ToastService } from './core/toast.service';

@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'miapp';

  // constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    // this.toastService.showSuccess('clave', 'Texto a mostrar');
  }
}
