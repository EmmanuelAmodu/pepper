import React, { FC, FormEvent } from 'react'
import Input from '../../components/input';
import PhoneInput from '../../components/phoneInput';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';

const CompleteWaitList: FC = () => {
    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent) => {
        const form = new FormData(e.target as HTMLFormElement);
        e.preventDefault();
        console.log(form);
        navigate({pathname: '/completed',})

    };

  return (
    <section className="px-6 pb-6">
        <div className="mt-[92px] w-[460px] max-w-full mx-auto rounded-3xl px-6 pt-[41px] pb-[47px] bg-foundation-grey-1 dark:bg-foundation-grey-11">
            <h3 className="text-[#000000] dark:text-white font-bold text-base mb-8">Fill this form to complete process&nbsp;&nbsp;🤝</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <Input bordered name="name" placeholder="Your Name" required/>
                <Input bordered name="company" placeholder="Company Name" required/>
                <Input bordered  name="website" placeholder="Company Website" required/>
                <Input bordered name="country" placeholder="Company Country" required/>
                <Input bordered name="volume" type="number" min="0" placeholder="Expected volume in USD" required/>
                <PhoneInput bordered placeholder="Phone Number" name='phone' required/>
                <div>
                    <Button className='mt-[11px] w-full'>Submit</Button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default CompleteWaitList;