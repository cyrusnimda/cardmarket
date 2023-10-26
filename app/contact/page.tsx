import React from 'react'


const ContactPage = () => {
    return (
        <div>
            <h1>Contact us</h1>
            <div className="flex">
                <div className="flex-1">
                    <em>Please, fill this form to send us a query, we will reply as soon as posible.</em>
                    <form className='mt-4' action="">
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email">Email</label>
                            <input className='rounded-lg border border-black w-96' id="email" type="text" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="subject">Subject</label>
                            <input className='rounded-lg border border-black w-96' id="subject" type="text" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="message">Message</label>
                            <textarea className='rounded-lg border border-black w-96' name="" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button className='my-2 border border-black rounded-lg bg-cuaternary text-black px-4 py-1 font-bold'>Send</button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 self-center">
                    <iframe
                        width="600"
                        height="450"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.618453906069!2d-0.1272802158499121!3d51.52021556636067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sThe%20British%20Museum!5e0!3m2!1sen!2suk!4v1698348693390!5m2!1sen!2suk"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactPage