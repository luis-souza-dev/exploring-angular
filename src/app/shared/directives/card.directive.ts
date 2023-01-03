import { ComponentFactoryResolver, Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CardComponent } from 'src/app/layout/card/card.component';
import { DataType } from '../enums';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: 'appCard'})
export class CardDirective {

    templateView: EmbeddedViewRef<any>;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private resolver: ComponentFactoryResolver) {
    }
  
    ngOnInit() {
      this.templateView = this.viewContainer.createEmbeddedView(this.templateRef);
      const compFactory = this.resolver.resolveComponentFactory(CardComponent);
      this.viewContainer.createComponent(
        compFactory, null, this.viewContainer.injector, [this.templateView.rootNodes])
    }
  
    ngDoCheck(): void {
      if (this.templateView) {
          this.templateView.detectChanges();
      }
    }
}