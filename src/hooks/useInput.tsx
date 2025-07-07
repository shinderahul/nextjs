'use client'
import { useState } from "react";

export function useInput({ initialValue = "" } = {}) {
    const [value, setValue] = useState(initialValue);
    function getInputProps(props = {}) {
        return {
            value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
            ...props,
        };
    }
    return { value, setValue, getInputProps };
}