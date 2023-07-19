sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cds6ui',
            componentId: 'TravelObjectPage',
            entitySet: 'Travel'
        },
        CustomPageDefinitions
    );
});