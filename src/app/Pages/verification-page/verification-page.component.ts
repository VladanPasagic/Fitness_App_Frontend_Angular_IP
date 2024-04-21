import { Component, OnInit } from '@angular/core';
import { VerificationService } from '../../Services/verification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification-page',
  standalone: true,
  imports: [],
  templateUrl: './verification-page.component.html',
  styleUrl: './verification-page.component.css',
})
export class VerificationPageComponent implements OnInit {
  private id: string = '';
  verifyDone: boolean = false;
  constructor(
    private verificationService: VerificationService,
    private route: ActivatedRoute
  ) {}
  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    var result = await this.verificationService.verify(this.id);
    if (result.ok) {
      this.verifyDone = true;
    }
  }
}
