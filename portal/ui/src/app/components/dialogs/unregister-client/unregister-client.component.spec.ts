/*
 * Copyright 2021 Scheer PAS Schweiz AG
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  imitations under the License.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterClientComponent } from './unregister-client.component';

describe('UnregisterClientComponent', () => {
  let component: UnregisterClientComponent;
  let fixture: ComponentFixture<UnregisterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnregisterClientComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});