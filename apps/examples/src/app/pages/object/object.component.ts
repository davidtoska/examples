import { Component, OnInit } from '@angular/core';

const publicSym = Symbol('public-symbol-accessor');
const privateSym = Symbol('private-symbol-accessor');
class HiddenField {
  #reallyPrivate = 'really-private-field';
  private [privateSym] = 'metasym';
  public [publicSym] = 'public-symbol-accessor';
  constructor(private metadata: string) {}

  builder1() {
    return this;
  }
}

@Component({
  selector: 'examples-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
})
export class ObjectComponent implements OnInit {
  field1 = new HiddenField('test-metadata');
  metadata = '';
  constructor() {}

  ngOnInit(): void {
    const metaEntires = Object.entries(this.field1);
    const metaData = metaEntires.reduce((acc, curr) => {
      console.log('ACC', acc);
      console.log('CURR', curr);
      return 'hello';
    }, '');
    const castedField = this.field1 as any;
    castedField['metadata'] = 'Altered Metadata..';

    this.field1 = castedField as HiddenField;
    this.field1['metadata'] = 'asdfasd';
    console.log(metaData);
    console.log(metaEntires);
    console.log(this.field1[privateSym]);
    console.log(this.field1[publicSym]);
    console.log(this.field1['metadata']);
  }
}
