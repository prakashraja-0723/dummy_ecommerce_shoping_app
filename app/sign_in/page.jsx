"use client";
import React, {useState} from 'react'
import Image from "next/image";
import BOOTIQ_black_logo from "@/app/assets/svg/BOOTIQ_black.svg";
import X_icon from "@/app/assets/svg/x-icon.svg"
import Link from "next/link";

export default function SignIn() {
	const [input, setInput] = useState({
		email: "",
		password: ""
	});
	
	
	const handleChangeInput = (e) => {
		setInput({...input, [e.target.name]: e.target.value})
		console.log(input)
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const email_regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		
		if ( input.email.match(email_regEx)) {
			//Password range is 8-16
			if (input.password.length >= 8 && input.password.length <= 16) {
				console.log("Valid email and password")
				window.location.href = "/home"
			}
			else{
				alert("Password must be between 8-16 characters")
			}
		}
		else{
			alert("Please enter a valid email address");
		}
	};
	return (
		<>
			<main className={`py-4 px-10`}>
				<Image
					src={BOOTIQ_black_logo}
					alt={`BooTiq logo`}
					className={`relative left-1/2 -translate-x-1/2 top-2`}
				/>
					<div className={`w-fit mx-auto h-10 rounded-md flex items-center justify-around  relative mt-16 `}>
						<span className={`relative z-10 capitalize text-2xl font-semibold`}>Sign in</span>
						{/*<span className={`relative z-10 uppercase font-semibold text-gray-600`}>sign up</span>*/}
						{/*<div className={`w-1/2 h-full absolute bg-primary left-0 rounded-md text-black `}></div>*/}
					</div>
				<form className={`mt-8 flex flex-col gap-3`} onSubmit={handleSubmit}>
					{/*<h1 className={`uppercase font-semibold text-center mb-5 text-2xl`}>Sign in</h1>*/}
					<div className={`flex flex-col gap-1`}>
					<label htmlFor="email" className={`font-semibold text-sm`}>Email</label>
					<input type="email" className={`border border-slate-400 outline-none h-[40px] px-2.5 rounded-[4px] text-sm  focus:border-amber-500 transition-all`} onChange={handleChangeInput} name={"email"} value={input.email}/>
					</div>
					<div className={`flex flex-col gap-1`}>
						<label htmlFor="email" className={`font-semibold text-sm`}>Password</label>
						<input type="password" id={"password"} className={`border border-slate-400 outline-none h-[40px] px-2.5 rounded-[4px] text-sm  focus:border-amber-500 transition-all`} onChange={handleChangeInput} name={"password"} value={input.password}/>
						{/*<div className={`flex text-xs font-semibold`}>*/}
						{/*<input type="checkbox" id={'forgot-password'}/> <label htmlFor="{'forgot-password'}">Forgot Password?</label>*/}
						{/*</div>*/}
					</div>
					<div className={`flex items-center justify-center`}>
					<button type={"submit"} className={`capitalize font-semibold bg-primary w-7/12 h-10 rounded-full mt-10 `} >Sign in</button>
					</div>
				</form>
				<Link href={'/'} className={`absolute bottom-4 left-1/2 -translate-x-1/2`}><Image src={X_icon} alt={`x-icon`}/></Link>
			</main>
		</>
	)
}
