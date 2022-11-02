import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../shared/message-dialog/message-dialog.component';

export enum ToastType {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  LOGIN_SUCCESSFUL = 'login-successful'
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly messageBoxHeight = '80%';

  constructor(public dialog: MatDialog) {}

  public error(message: string, showStartpageButton: boolean = false, width: string = "100%", height: string = "100%") {
    this.showToast(message, ToastType.ERROR, showStartpageButton, width, height);
  }

  public success(message: string, showStartpageButton: boolean = false, width: string = "100%", height: string = "100%") {
    this.showToast(message, ToastType.SUCCESS, showStartpageButton, width, height);
  }

  public loginSuccess(message: string, showStartpageButton: boolean = false, width: string = "100%", height: string = "100%") {
    this.showToast(message, ToastType.LOGIN_SUCCESSFUL, showStartpageButton, width, height);
  }

  public info(message: string, showStartpageButton: boolean = false, width: string = "100%", height: string = "100%") {
    this.showToast(message, ToastType.INFO, showStartpageButton, width, height);
  }

  public warning(message: string, showStartpageButton: boolean = false, width: string = "100%", height: string = "100%") {
    this.showToast(message, ToastType.WARNING, showStartpageButton, width, height);
  }

  public showOutputSuccess(message: string, containerId: string) {
    this.dialog.open(MessageDialogComponent, {
      width: '100%',
      height: this.messageBoxHeight,
      data: {
        message: message,
        type: ToastType.SUCCESS,
        showStartpageButton: true,
        showNextProcessButton: true,
        containerIdForNextProcess: containerId
      }
    });
  }

  private showToast(message: string, type: ToastType, showStartpageButton: boolean = false, width: string, height: string) {
    this.dialog.open(MessageDialogComponent, {
      width: width,
      // minHeight: this.messageBoxHeight,
      panelClass: 'mat-dialog-container-custom',
      data: {
        message: message,
        type: type,
        showStartpageButton: showStartpageButton,
        width: width,
        height: height
      }
    });
  }
}
