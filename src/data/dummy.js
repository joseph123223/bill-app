import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BsFillWalletFill } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';


/*export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);*/

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <p>{props.Name}</p>
  </div>
);

export const connectionsGrid = [
  { headerText: "Friend's Name",
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Left' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Email',
    headerText: 'Email',
    width: '170',
    textAlign: 'Center',
  },
  { field: 'UserID',
    headerText: 'User ID',
    width: '125',
    textAlign: 'Right' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'balance',
        icon: <BsFillWalletFill />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'activity',
        icon: <AiFillBank />,
      },
      {
        name: 'connections',
        icon: <IoMdContacts />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const activitiesGrid = [
  { field: 'BillInformation',
    headerText: 'Bill Information',
    width: '150',
    textAlign: 'Left',
  },
  {
    field: 'Requester',
    headerText: 'Request from',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Right',
    editType: 'numericedit',
    width: '150',
  },
  /*
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },*/
];

export const connectionsData = [
  {
    UserID: 1,
    Name: 'Joseph',
    Email: '1234@sjsu.edu',
  },
  {
    UserID: 2,
    Name: 'Bing',
    Email: 'mim@sjsu.edu',
  },
];

export const activitiesData = [
  {
    Requester: "Bing",
    BillInformation: 'Boba tea',
    TotalAmount: 16.88,
  },
  {
    Requester: "Joseph",
    BillInformation: 'Water Bill',
    TotalAmount: 56.34,
  },
  {
    Requester: "Bing",
    BillInformation: 'Thanks giving dinner',
    TotalAmount: 73.31,
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];
