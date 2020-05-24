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