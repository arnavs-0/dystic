import React, { Component } from 'react';

class ChatApp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = {"appId":"278d80fb77eeb895808c1dff2439be9df","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
    render() {
        return (
            <div></div>
        )
    }
}
export default ChatApp;
