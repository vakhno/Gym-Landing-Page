import { SelectedPage } from '@/shared/types';
import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import { motion } from 'framer-motion';
import Title from '@/scenes/Title';
import Button from '@/scenes/Button';
type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const {
		register,
		formState: { errors },
		trigger,
	} = useForm();

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.CONTACTUS)}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
					<Title>
						<span className="text-primary-500">JOIN NOW</span>
						TO GET IN SHAPE
					</Title>
					<p className="my-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati optio iste
						consequatur, voluptatem non doloribus possimus alias cumque quasi qui delectus facilis
						ipsum? Harum, tempore sapiente! Facilis error unde eveniet.
					</p>
				</motion.div>
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
						className="mt-10 basis-3/5 md:mt-0">
						<form target="_blank" onSubmit={onSubmit} method="POST" action="https://formsubmit.co/">
							<input
								type="text"
								placeholder="Name"
								{...register('name', { required: true, maxLength: 30 })}
								className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
							/>
							{errors.name && (
								<p className="mt-1 text-primary-500">
									{errors.name.type === 'required' && 'This field is required!'}
									{errors.name.type === 'maxLength' && 'Max length is 30 chars!'}
								</p>
							)}
							<input
								type="text"
								placeholder="Email"
								{...register('email', {
									required: true,
									maxLength: 100,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
								className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
							/>
							{errors.email && (
								<p className="mt-1 text-primary-500">
									{errors.email.type === 'required' && 'This field is required!'}
									{errors.email.type === 'maxLength' && 'Max length is 100 chars!'}
									{errors.email.type === 'pattern' && 'Invalid email adress!'}
								</p>
							)}
							<textarea
								className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
								placeholder="Message"
								{...register('message', { required: true, maxLength: 1000 })}
								cols={30}
								rows={10}></textarea>
							{errors.message && (
								<p className="mt-1 text-primary-500">
									{errors.message.type === 'required' && 'This field is required!'}
									{errors.message.type === 'maxLength' && 'Max length is 1000 chars!'}
								</p>
							)}
							<Button
								styles="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
								type="submit">
								Submit
							</Button>
						</form>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
						className="relative mt-16 basis-2/5 md:mt-0">
						<div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
							<img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className="w-full" />
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactUs;
