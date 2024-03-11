import React, { ComponentProps, FC, FormEvent } from 'react'
import Button from '../components/button'
import { classes } from '../common/util'
import {ReactComponent as ArrowIcon} from '../assets/svgs/arrow-right.svg';
import Input from '../components/input';
import features from '../assets/images/features.png';
import heroLeft from '../assets/images/hero_left_bg.png';
import heroRight from '../assets/images/hero_right_bg.png';
import { useNavigate } from 'react-router-dom';

const JoinWaitListButton: FC<ComponentProps<'button'>> = ({className, ...props}) => {
    return (
      <Button {...props} className={classes('flex items-center gap-2 md:w-[253px] justify-center max-md:py-2', className)}>
        <span className='hidden md:inline'>Join our waitlist</span>
        <ArrowIcon/>
      </Button>
    )
}

const Home: FC = () => {

    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent) => {
        const form = new FormData(e.target as HTMLFormElement);
        e.preventDefault();
        const search = new URLSearchParams();
        search.set('email', form.get('email')?.toString() ?? '')
        navigate({pathname: '/complete-waitlist', search: search.toString()})

    };
  return (
    <section className='pt-[69px]'>
        <div className='px-6'>
        <h1 className="font-bold dark:text-foundation-grey-1 text-foundation-grey-13 text-[30px] md:text-[46px] lg:text-[64px] text-center lg:mb-6 mb-3">Treasury Management,<br/>Liquidity Infrastructure</h1>
        <p className="lg:text-[33px] md:text-[25px] text-[16px] text-center dark:text-foundation-grey-6 text-foundation-grey-7">An international financial connectivity.</p>
        <form onSubmit={handleSubmit}>
            <Input type="email" required name="email" placeholder="Enter your email" rightItem={<JoinWaitListButton/>} className="w-full max-w-[820px] py-2 mx-auto mt-[57px] mb-[66px]"/>
        </form>
        </div>
        <div className=' items-center justify-center relative z-10 px-6 hidden md:flex'>
        <img className="hidden dark:block absolute left-0 -z-10" src={heroLeft} alt="bg"/>
        <img src={features} alt='Features' />
        <img className="hidden dark:block absolute right-0 -z-10" src={heroRight} alt="bg"/>
        </div>
    </section>
  )
}

export default Home;