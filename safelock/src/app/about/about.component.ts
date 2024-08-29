import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
    title = 'safelock';
}
