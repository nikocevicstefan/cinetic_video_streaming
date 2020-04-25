//uppercase first letter of a string
export const ucfirst = (text) => {
    return text[0].toUpperCase() + text.slice(1);
};

//change all underscores to spaces in a string
export const underscoreToSpace = (text) => {
    return text.replace('_',' ');
};