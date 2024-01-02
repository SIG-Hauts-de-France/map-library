import { Component, Input, ViewEncapsulation } from '@angular/core'
import { marked } from 'marked'

@Component({
  selector: 'gn-ui-markdown-parser',
  templateUrl: './markdown-parser.component.html',
  styleUrls: ['./markdown-parser.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownParserComponent {
  @Input() textContent: string

  get parsedMarkdown() {
    return marked.parse(this.textContent)
  }
}
