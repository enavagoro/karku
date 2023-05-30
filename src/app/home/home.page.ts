import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../_services/elements.service';

interface ElementWithZoom {
  zoomLevel: number;
  name: string,
  image: string,
  species: string,
  originalIndex: number,
  // otros campos opcionales aquí
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  /* initialDistance */
  initialDistance: any = null;
  toggle: Boolean = false;
  /* test */

  elements: Array<ElementWithZoom> = []

  globalValue: any = 0;
  action = true;

  visibleElements: Array<ElementWithZoom> = [];

  constructor(private elementServices: ElementService) { }

  async ngOnInit() {
    this.elementServices.list().subscribe((data: any | undefined)=>{
      if(data.results){
        this.elements = data.results;
        const firstElement = data.results[0];
        firstElement['originalIndex'] = 0;
        this.visibleElements.push(firstElement);

        for(const [index, element] of this.elements.entries()){
          element.zoomLevel = 0;
          element['originalIndex'] = index;
        }
      }
    });
  }

  addZoom(num: number = 1){
    this.increaseZoomLevel(num);
  }

  subtractZoom(num: number = 1){
    this.decreaseZoomLevel(num);
  }

  increaseZoomLevel(num: number){
    for(const [index, element] of this.visibleElements.entries()){
      element.zoomLevel += num;
      if(element.zoomLevel >= 7 && this.visibleElements.length == 1){
        this.visibleElements.push(this.elements[element.originalIndex + 1])
      }
      if(element.zoomLevel >= 15){
        this.visibleElements.splice(index, 1);
      }
    }
  }

  decreaseZoomLevel(num: number){
    for(const [index, element] of this.visibleElements.entries()){
      element.zoomLevel -= num;
      if(element.zoomLevel <= 7 && this.visibleElements.length == 1){
        const prevElement = this.elements[element.originalIndex - 1]
        prevElement.zoomLevel = 14;
        this.visibleElements.unshift(prevElement)
        
      }
    
      if(element.zoomLevel <= 0){
        this.visibleElements.splice(index, 1);
      }
    }
  }

  setScala(num: number){
    return (num / 10) * 2
  }


  onTouchStart(event: TouchEvent) {
    this.toggle = true;
  }

}