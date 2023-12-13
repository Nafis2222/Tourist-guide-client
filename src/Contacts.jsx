import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7o3j1oa', 'template_jye8hos', form.current, 'uj9grwXBmkcFVAqDX')
        .then((result) => {
            if(result?.status==200){
                toast.success("You have successfully messaged admin !", {
                    position: toast.POSITION.TOP_CENTER
                  });            }
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='bg-purple-300 mt-8  hover:shadow-blue-600 shadow-2xl px-8 py-6'>
                        <ToastContainer></ToastContainer>

                        <h1 className="text-3xl font-extrabold">Form for Contacking with me </h1>

                <form ref={form} onSubmit={sendEmail}>
                <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <label className="input-group">
              <input type="text" required placeholder="Enter your name" name="user_name" className="input input-bordered w-full" />
            
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <label className="input-group">
              <input required type="email" name="user_email" placeholder="Enter  your email here" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        <div className="flex gap-3">
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Message</span>
            </label>
            <label className="input-group">
              <input type="text" required name="message" placeholder="Enter  message " className="input input-bordered w-full" />
            </label>
            </div>
         
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
            <button className="w-full btn btn-accent mt-8">Send</button>

            </div>
         
        </div>
      {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /> */}
    </form>
        </div>
    );
};

export default Contacts;