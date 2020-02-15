import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

export default class PDF {

  render() {

    exportPDF = () => {
      this.resume.save();
    }

    return (
      <div>
        <button onClick={this.exportPDF}>download</button>
      <PDFExport paperSize={'Letter'}
        fileName="_____.pdf"
        title=""
        subject=""
        keywords=""
        ref={(r) => this.resume = r}>
          <div style={{
            height: 792,
            width: 612,
            padding: 'none',
            backgroundColor: 'white',
            boxShadow: '5px 5px 5px black',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'}}>
              content
          </div>
        </PDFExport>
      </div>
    )
  }
}