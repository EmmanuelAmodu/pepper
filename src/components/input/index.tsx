import React, { ComponentProps, FC, ReactNode } from 'react';
import { classes } from '../../common/util';
type Props = {
    inputClassName?: string;
    rightItem?: ReactNode;
    leftItem?: ReactNode;
    bordered?: boolean;
} & ComponentProps<'input'>;

export const Input: FC<Props> = ({className, inputClassName, rightItem, leftItem, bordered, ...props}) => {
  return (
    <div className={classes(
        className,
        'flex items-center p-2 py-4 dark:bg-white bg-foundation-grey-4 rounded-xl',
        bordered ? "border border-foundation-grey-2 hover:border-foundation-red" : "",
        )}>
        {leftItem}
        <input className={classes(
            inputClassName, 
            'flex-1 outline-none bg-transparent pl-[16px] text-base items-center',
            'placeholder:text-foundation-grey-7 dark:placeholder:text-foundation-grey-[#888888]',
            'text-foundation-grey-13',
            rightItem ? 'mr-2' : ''
        )} {...props}/>
        {rightItem}
    </div>
  )
}


export default Input