import {FC, ComponentProps } from 'react'
import { classes } from '../../common/util';

type ButtonProps = ({variant: 'link'} & ComponentProps<'a'>) | ({variant?: 'button'} & ComponentProps<'button'>);

const  Button: FC<ButtonProps> = ({className, variant = 'button', children, ...props}) => {
    if(variant === 'link') {
        return (
            <a 
                {...props as ComponentProps<'a'>} className={classes(
                className, 
                'py-[11.5px] px-1 bg-foundation-red hover:opacity-80',
                'text-white text-[23px] rounded-[12px]',
                'text-center',
                )}
            >{children}</a>
        )
    }
  return (
    <button {...props as ComponentProps<'button'>} className={classes(
        className, 
        'py-[11.5px] px-1 bg-foundation-red hover:opacity-80',
        'text-white text-[23px] rounded-[12px]'
    )}>{children}</button>
  )
}

export default Button;