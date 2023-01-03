import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { PostTags } from '../interfaces';

@Directive({
    selector: '[postTags]',
})
export class PostTagsDirective implements OnInit{

    @Input() postTags: PostTags;

    constructor(private el: ElementRef){
        
    }

    ngOnInit() {
        console.log('tshis', this.postTags);
        this.setTagColor();
    }

    private getTagColor() {
        console.log('OI', this.postTags);
        switch(this.postTags){
            case 'american':
                return '#0952E3';
            case 'classic':
                return '#918179'
            case 'crime':
                return '#D94545'
            case 'english':
                return '#B1C3F2'
            case 'fiction':
                return '#652D73'
            case 'french':
                return '#B30724'
            case 'history':
                return '#6E8A81'
            case 'love':
                return '#Ed51E5'
            case 'magical':
                return '#ADF7F2'
            case 'mystery':
                return '#414545'
        }
    }

    private setTagColor() {
        this.el.nativeElement.style.backgroundColor = this.getTagColor();
    }
}