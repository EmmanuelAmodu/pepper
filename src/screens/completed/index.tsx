import React, { FC } from 'react'
import Button from '../../components/button';
import {ReactComponent as SentIllustrator} from '../../assets/svgs/sent_illustration.svg';

const Completed: FC = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center px-6'>
        <SentIllustrator className="max-md:w-[120px] max-md:h-[120px]"/>
        <h3 className="dark:text-foundation-grey-1 text-foundation-grey-13 mb-[3px] font-bold text-[34px] md:text-[40px] text-center">Information Received</h3>
        <p className='dark:text-foundation-grey-6 text-foundation-grey-7 md:text-[19px] text-[14px] text-center'>Thank you for taking time to fill the form.<br/>Stay tuned for our update and newsletters </p>
        <Button variant="link" href="/" className="mt-[41px] w-[412px] max-w-full">Go Home</Button>
    </div>
  )
};

export default Completed;