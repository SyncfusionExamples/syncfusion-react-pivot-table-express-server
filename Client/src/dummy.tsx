import * as React from 'react';
import { PivotViewComponent, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import type { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import './App.css';

function App(): React.ReactElement {
    // Configure DataManager with UrlAdaptor.
    const API_BASE_URL = 'http://localhost:5000/api/products';
    const data: DataManager = new DataManager({
        url: API_BASE_URL,
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

    const pivotObj = React.useRef<PivotViewComponent>(null);

    return (
        <div className='control-section' style={{ margin: 100 }}>
            <PivotViewComponent ref={pivotObj} id='PivotView' height={350} width={700} dataSourceSettings={dataSourceSettings} showFieldList={true}>
                <Inject services={[FieldList]} />
            </PivotViewComponent>
        </div>
    );
}

export default App;