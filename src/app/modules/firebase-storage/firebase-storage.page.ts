import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import {
  FirebaseStorage,
  StorageReference,
  UploadFileState,
} from '@capacitor-firebase/storage';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-firebase-storage',
  templateUrl: './firebase-storage.page.html',
  styleUrls: ['./firebase-storage.page.scss'],
})
export class FirebaseStoragePage implements OnInit {
  public items: StorageReference[] = [];

  private readonly path = 'images';

  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  public ngOnInit(): void {
    void this.loadFiles();
  }

  ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseStoragePage',
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async pickAndUploadFile(): Promise<void> {
    const { files } = await FilePicker.pickImages({
      multiple: false,
    });
    const file = files[0];
    if (!file) {
      return;
    }
    console.log({ file });
    await FirebaseStorage.uploadFile(
      {
        path: [this.path, file.name].join('/'),
        uri: file.path,
        blob: file.blob,
      },
      (event, error) => {
        console.log('Progress: ', event?.progress + '%');
        if (event?.state === UploadFileState.Success) {
          void this.loadFiles();
        }
        if (error) {
          throw error;
        }
      }
    );
  }

  public async downloadAndOpenFile(item: StorageReference): Promise<void> {
    const { downloadUrl } = await FirebaseStorage.getDownloadUrl({
      path: item.path,
    });
    const { path, blob } = await Filesystem.downloadFile({
      url: downloadUrl,
      path: [this.path, item.name].join('/'),
      directory: Directory.Cache,
    });
    if (blob) {
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } else if (path) {
      await FileOpener.openFile({
        path,
      });
    }
  }

  public async deleteFile(item: StorageReference): Promise<void> {
    await FirebaseStorage.deleteFile({
      path: item.path,
    });
    await this.loadFiles();
  }

  private async loadFiles(): Promise<void> {
    const { items } = await FirebaseStorage.listFiles({
      path: this.path,
    });
    this.items = items;
  }
}
