import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Page } from '@syncfusion/ej2-react-grids';

import { connectionsData, connectionsGrid } from '../data/dummy';
import { Header } from '../components';

const Connections = () => {

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Connections" />
      <GridComponent
        dataSource={connectionsData}
        width="auto"
        allowPaging
        pageSettings={{ pageCount: 5 }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {connectionsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page]} />

      </GridComponent>
    </div>
  );
};
export default Connections;
