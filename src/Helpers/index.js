//uppercase first letter of a string
export const ucfirst = (text) => {
    return text[0].toUpperCase() + text.slice(1);
};

export const redirectTo = (path) => window.location.replace(path);

//change all underscores to spaces in a string
export const underscoreToSpace = (text) => {
    return text.replace('_', ' ');
};

export const getLoggedInUser = () => {
    const loggedInUser = window.localStorage.getItem('loggedInUser');
    return JSON.parse(loggedInUser);
};

export const getToken = () => {
    const data = getLoggedInUser();
    return data.user.token;
}

export const isAdmin = () => {
    const data = getLoggedInUser();
    if(data){
        return data.user.role === 'admin'
    }else {
        return false;
    }
};

export const isPremium = () => {
    const data = getLoggedInUser();
    if(data){
        return data.user.subscription === 'premium'
    }else {
        return false;
    }
};
//regex
export const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

    //simplified for demonstration purposes
    /*if(email){
        return String(email).includes("@");
    }else {
        return false;
    }*/
}