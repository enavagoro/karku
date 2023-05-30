import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestTouchPageRoutingModule } from './test-touch-routing.module';

import { TestTouchPage } from './test-touch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestTouchPageRoutingModule
  ],
  declarations: [TestTouchPage]
})
export class TestTouchPageModule {}
