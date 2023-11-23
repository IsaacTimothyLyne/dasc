import { Component } from '@angular/core';
import { CertificationService } from '../../services/certification.service';

@Component({
  selector: 'app-cert-form',
  templateUrl: './cert-form.component.html',
  styleUrl: './cert-form.component.scss',
})
export class CertFormComponent {
  searchText: any;

  constructor(private cert: CertificationService){}

  onSearch() {
    this.cert.fetchCertification(this.searchText).subscribe(res => {
      console.log(res);
    });
  }
}
