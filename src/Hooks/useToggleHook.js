import React, {useState} from 'react';

export default function useToggleHook(initialState = false) {
    const [value, setValue] = useState(initialState);

    const onClick = () => setValue(!value);

    return [value, onClick];
};

