import {useState} from "react";

export default function useFieldHook(initialValue=''){
    const [fieldValue, setFieldValue] = useState(initialValue);

    const onChange = (e, clear) => {
        //if the clear argument is true then clear the field
        setFieldValue(clear ? '': e.target.value) ;
    };

    return [fieldValue, onChange];
}