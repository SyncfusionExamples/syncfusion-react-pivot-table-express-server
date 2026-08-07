import * as React from 'react';
import { PivotViewComponent, CellEditSettings, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import type { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import type { BeginDrillThroughEventArgs } from '@syncfusion/ej2-pivotview';
import './App.css';

function App(): React.ReactElement {
    // Configure DataManager with UrlAdaptor.
    const API_BASE_URL = 'http://localhost:5000/api/products';
    const data: DataManager = new DataManager({
        url: API_BASE_URL,
        insertUrl: API_BASE_URL + '/create',
        updateUrl: API_BASE_URL + '/update',
        removeUrl: API_BASE_URL + '/remove',
        adaptor: new UrlAdaptor()
    });

    const dataSourceSettings: DataSourceSettingsModel = {
        dataSource: data,
        expandAll: true,
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Category' }],
        values: [{ name: 'MRP' }],
        filters: [],
    };

    // Enable editing functionality
    const editSettings: CellEditSettings = {
        allowEditing: true,    // Enables the Edit button and allows users to modify existing records.
        allowAdding: true,     // Enables the Add button and allows users to create new records.
        allowDeleting: true,   // Enables the Delete button and allows users to remove records.
        mode: 'Normal'         // Uses Normal mode (popup dialog) for editing; other options: 'Dialog', 'Batch', 'CommandColumn'.
    };


    const pivotObj = React.useRef<PivotViewComponent>(null);

    // Configure beginDrillThrough event to set the primary key for CRUD operations
    function beginDrillThrough(args: BeginDrillThroughEventArgs) {
        // Iterate through all columns in the drill-through grid
        for (var i = 0; i < args.gridObj.columns.length; i++) {
            // Check if the current column is the primary key column
            if (args.gridObj.columns[i].field === "ProductID") {
                // Mark this column as the primary key
                // This tells DataManager to use this column's value to uniquely identify records
                args.gridObj.columns[i].isPrimaryKey = true;
            }
        }
    }

    return (
        <div className='control-section' style={{ margin: 100 }}>
            <PivotViewComponent ref={pivotObj} id='PivotView' height={350} width={700} dataSourceSettings={dataSourceSettings} showFieldList={true} editSettings={editSettings} beginDrillThrough={beginDrillThrough}>
                <Inject services={[FieldList]} />
            </PivotViewComponent>
        </div>
    );
}

export default App;