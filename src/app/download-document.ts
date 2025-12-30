import { of } from 'rxjs';

export function downloadDocument(path: string) {
  return of(
    new Blob(['hello world'], {
      type: 'text/plain',
    })
  ).subscribe((blob) => {
    const blobUrl = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = 'blob.txt';
    downloadLink.click();

    URL.revokeObjectURL(blobUrl);
  });
}
