import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { SnackbarComponent } from 'src/app/common-components/snackbar/snackbar.component';
import { ImportantNumberService } from 'src/app/services/important-number.service';

@Component({
  selector: 'app-add-impotant-number',
  templateUrl: './add-impotant-number.component.html',
  styleUrls: ['./add-impotant-number.component.scss']
})
export class AddImpotantNumberComponent implements OnInit {

  private destroy$ = new Subject<void>();
  importantNumberForm: FormGroup;
  title = 'Create Important Number';
  flag = {
    submitted: false,
  };
  public columnDefs :any;
  constructor(
    public dialogRef: MatDialogRef<AddImpotantNumberComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private importantNumberService:ImportantNumberService
  ) {
  }

  ngOnInit(): void {
this.CreateImportantNumberForm();
  }

  private CreateImportantNumberForm() {
    this.importantNumberForm = this.fb.group({
      name: [''],
      phoneNumber: [''],
      categoryName: [''],
    });
  }

  action(e:any) {
    if (e === 'Create') {
      if (this.importantNumberForm.valid) {
        const payload = {
          ...this.importantNumberForm.value,
        };
        this.importantNumberService
          .CreateUpdateImportantNumber(payload)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res: any) => {
              if (res?.errors[0] == 'Name already exist') {
                // this.snackBar.openFromComponent(SnackbarComponent, {
                //   duration: 2000,
                //   horizontalPosition: 'center',
                //   data: {
                //     title: res?.errors[0],
                //     action: 'Dismiss',
                //     type: 'snackbar-warning',
                //   },
                // });
              } else {
                this.dialogRef.close('Saved');
              }
            },
          });
      } else {
        this.flag.submitted = true;
      }
    } else {
      this.dialogRef.close();
    }
  }
  close(){}
}
