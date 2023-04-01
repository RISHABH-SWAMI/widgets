import React from 'react';

const Link = ({className, href, children}) => {

const onClick = (event) => {
    //metaKey and ctrlKey are boolean properties which returns either true or false
    //based upon condition.
    //metaKey is used in macOS input system(command) and ctrlKey is used in windows input System(ctrl). 
    if(event.metaKey || event.ctrlKey) 
        return;
        
    event.preventDefault();
    window.history.pushState({}, '', href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
}
    return <a onClick={onClick} className={className} href={href}> {children} </a>
}

export default Link;

