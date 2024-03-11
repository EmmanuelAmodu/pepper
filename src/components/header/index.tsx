import React, { FC, PropsWithChildren } from 'react'
import logo from '../../assets/svgs/logo.svg';
import xlogo from '../../assets/svgs/x_logo.svg';
import xDarklogo from '../../assets/svgs/x_dark_logo.svg';
import { classes } from '../../common/util';

type Props = {
    className?: string;
};

const Header: FC<PropsWithChildren<Props>> = ({children, className}) => {
  return (
    <header className={classes("flex items-center pt-[66px] max-w-full w-[1179px] lg:mx-auto justify-between px-6", className)}>
        <div className="flex items-center gap-x-[3.75px]">
            <img src={logo} alt="Pepper" className="w-[30px] h-[42px]"/>
            <div className="dark:text-foundation-grey-1 font-extrabold text-foundation-grey-13 text-3xl">Pepper</div>
        </div>
        {children}
        <a className={classes(
            "flex items-center gap-x-1 text-base dark:text-foundation-grey-1 text-foundation-grey-13",
            "dark:bg-foundation-grey-11 bg-foundation-grey-4 px-4 py-[9px] rounded-3xl"
            )} href='/'><span className="hidden md:inline">Follow us on</span>
            <img src={xlogo} className="h-6 w-[47.66px] dark:hidden" alt='x logo'/>
            <img src={xDarklogo} className="h-6 w-[47.66px] hidden dark:block" alt='x logo'/>
        </a>
    </header>
  )
}

export default Header