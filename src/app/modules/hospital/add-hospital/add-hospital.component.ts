import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { SnackbarComponent } from 'src/app/common-components/snackbar/snackbar.component';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss'],
})
export class AddHospitalComponent implements OnInit, OnDestroy{
  private destroy$ = new Subject<void>();
  title = 'Create Hospital';
  actions:any[];
  hospitalForm: FormGroup;
  flag = {
    submitted: false,
  };
  constructor(public dialogRef: MatDialogRef<AddHospitalComponent>,
      private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private hospitalService: HospitalService
  ) {
    this.hospitalForm = this.fb.group({
      name: [null],
      nickname: [''],
      address: [null],
      city: [''],
      state: [''],
      zip: [''],
      facilityType: [''],
      dispositionCode: [''],
      cityCode: [''],
      mainPhone: [''],
      erPhone: [''],
      erFax: [''],
      pedsErFax: [''],
      altFax: [''],
      ld: [''],
      latitude: [null],
      longitude: [null],
      rowNumber:[null],
   // id: ['0'],
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
  ngOnInit(): void {}
  action(e:any) {
    if (e == 'Create') {
      if (this.hospitalForm.valid) {
        const payload = {
          ...this.hospitalForm.value,
        };
        this.hospitalService
          .CreateUpdateHospital(payload)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res: any) => {
              if (res?.errors[0] == 'Name already exist') {
                this.snackBar.openFromComponent(SnackbarComponent, {
                  duration: 2000,
                  horizontalPosition: 'center',
                  data: {
                    title: res?.errors[0],
                    action: 'Dismiss',
                    type: 'snackbar-warning',
                  },
                });
              } else {
                this.dialogRef.close(res);
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
  close(){
    this.dialogRef.close();
  }
}
