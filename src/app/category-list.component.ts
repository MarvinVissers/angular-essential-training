import { Component, Input } from "@angular/core";

@Component({
  selector: "mw-category-list",
  template: `
    <span class="label" *ngFor="let category of categories">
      {{ category }}
    </span>
  `,
  styles: [
    `
      span {
        display: inline-block;
        margin: 0 4px 4px 0;
      }

      .label {
        font-style: italic;
        background-color: #999;
        color: #fff;
        padding: 2px 6px;
        border-radius: 4px;
        width: max-content;
      }
    `
  ]
})
export class CategoryListComponent {
  @Input() categories: string[];
}