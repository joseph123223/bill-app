import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, ContextMenu, Filter, Page, Inject } from '@syncfusion/ej2-react-grids';

import { activitiesData, contextMenuItems, activitiesGrid } from '../data/dummy';
import { Header } from '../components';

const Activity = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Activity" />
      <GridComponent
        id="gridcomp"
        dataSource={activitiesData}
        allowPaging
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {activitiesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, ContextMenu, Filter, Page ]} />
      </GridComponent>
    </div>
  );
};
export default Activity;
