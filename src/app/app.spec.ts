import { TestBed } from '@angular/core/testing';
import { App } from './app';

// All of these approaches are broken in vitest

// 1. Standard module mock (worked in jest)
import { downloadDocument } from './download-document';
vi.mock('./download-document.ts');

// 2. Typed module mock
// import { downloadDocument } from './download-document';
// vi.mock(import('./download-document'));

// 3. Module mock with function mock
// import { downloadDocument } from './download-document';
// vi.mock(import('./download-document'), () => ({
//   downloadDocument: vi.fn(),
// }));

// 4. SpyOn mock "cannot redefine property: downloadDocument"
// import * as downloadDocumentModule from './download-document';
// import { of } from 'rxjs';
// vi.spyOn(downloadDocumentModule, 'downloadDocument').mockImplementation((path: string) => {
//   console.log('downloadDocument');
//   return of(null).subscribe();
// });

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('module mocking seems to be broken in angular 21 with vitest', () => {
    const component = TestBed.createComponent(App).componentInstance;
    component.downloadClick();

    expect(downloadDocument).toHaveBeenCalled();
    // expect(downloadDocumentModule.downloadDocument).toHaveBeenCalled();
  });
});
