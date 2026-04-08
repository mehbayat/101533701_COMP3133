import { Component, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    SlicePipe,
    MissionfilterComponent,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  allMissions = signal<Mission[]>([]);
  filteredMissions = signal<Mission[]>([]);
  loading = signal(true);
  activeFilter = signal('All');

  missionCount = computed(() => this.filteredMissions().length);

  constructor(
    private spacexService: SpacexService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.allMissions.set(data);
        this.filteredMissions.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  onYearFilter(year: string): void {
    if (!year || year === 'All') {
      this.filteredMissions.set(this.allMissions());
      this.activeFilter.set('All');
      return;
    }
    this.activeFilter.set(year);
    this.loading.set(true);
    this.spacexService.getMissionsByYear(year).subscribe({
      next: (data) => {
        this.filteredMissions.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  viewDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }
}
