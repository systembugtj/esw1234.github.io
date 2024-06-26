var initESW = function(gslbBaseURL) {
    embedded_svc.settings.displayHelpButton = true; //Or false
    embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

    embedded_svc.settings.defaultMinimizedText = 'STMFC Chatbot'; //(Defaults to Chat with an Expert)
    //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

    //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
    //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

    // Settings for Chat
    //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
        // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
        // Returns a valid button ID.
    //};
    embedded_svc.settings.prepopulatedPrechatFields = {FirstName:"Justin", LastName:"Mac"}; //Sets the auto-population of pre-chat form fields
    //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
    //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';

    embedded_svc.init(
        'https://justinmacmillin.my.stmfc.stm.salesforce.com',
        'https://snapins-1629cc5b71b.stmfc.stm.force.com/theme082918',
        gslbBaseURL,
        '00DRM0000005lEo',
        'justinChatbot',
        {
            baseLiveAgentContentURL: 'https://c.la2-stmfc1-0-prd.stmfc.stm.salesforceliveagent.com/content',
            deploymentId: '572RM0000004CgP',
            buttonId: '573RM0000004Clp',
            baseLiveAgentURL: 'https://d.la2-stmfc1-0-prd.stmfc.stm.salesforceliveagent.com/chat',
            eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04IRM000000001i2AA_1666a905458',
            isOfflineSupportEnabled: false
        }
    );
};

if (!window.embedded_svc) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://justinmacmillin.my.stmfc.stm.salesforce.com/embeddedservice/5.0/esw.min.js');
    s.onload = function() {
        initESW(null);
    };
    document.body.appendChild(s);
} else {
    initESW('https://service.force.com');
}
