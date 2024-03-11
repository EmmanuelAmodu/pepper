import React, { ComponentProps, FC, forwardRef, useState } from 'react'
import 'react-phone-number-input/style.css'
import BasePhoneInput, { DefaultInputComponentProps } from 'react-phone-number-input'
import { classes } from '../../common/util'
// import BasePhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

type Props = {
    bordered?: boolean;
    className?: string;
} & ComponentProps<'input'> & DefaultInputComponentProps;

const PhoneInput:FC<Props> = ({bordered, className, ...props}) => {
    const [value, setValue] = useState<string>()
    return (
        <BasePhoneInput
            defaultCountry="US"
            value={value}
            onChange={setValue}
            className={classes("p-2 py-4 dark:bg-white bg-foundation-grey-4 rounded-xl", 
            bordered ? "border border-foundation-grey-2 focus-within:border-foundation-red hover:border-foundation-red" : "",
            className)}
            inputComponent={Input}
            numberInputProps={{
                ...props,
            }}
        />
    );
}

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {
    return (
        <input 
            {...props} 
            className={classes(
                props.className, 
                'outline-none focus:outline-none', 
                'placeholder:text-foundation-grey-7 dark:placeholder:text-foundation-grey-[#888888]',
                'text-foundation-grey-13',
            )} 
            ref={ref}
        />
    );
});
export default PhoneInput ;