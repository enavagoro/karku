import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestTouchPage } from './test-touch.page';

describe('TestTouchPage', () => {
  let component: TestTouchPage;
  let fixture: ComponentFixture<TestTouchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestTouchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
