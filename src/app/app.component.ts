import { Component } from '@angular/core';
import { SupabaseAuthService } from './services/supabase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ehrs';
  session = this.supabase.session

  constructor(private readonly supabase: SupabaseAuthService) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }
}
