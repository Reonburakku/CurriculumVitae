import { Component, inject } from '@angular/core';
import {  MatDialog,  MAT_DIALOG_DATA,  MatDialogTitle,  MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [MatDialogTitle,  MatDialogContent],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.scss'
})
export class ImageDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
