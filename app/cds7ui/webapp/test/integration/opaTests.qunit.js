sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cds7ui/test/integration/FirstJourney',
		'cds7ui/test/integration/pages/TravelList',
		'cds7ui/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cds7ui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);