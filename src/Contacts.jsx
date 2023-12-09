
const Contacts = () => {
    return (
        <div>
            <p className="text-3xl my-8 border-y-4 border-yellow-300 text-green-600 mx-auto text-center">Contact With Us</p>
            <div  className="grid grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                   <img className="w-24 mx-auto h-24 rounded-full hover:border-x-purple-700 border-4" src="https://i.ibb.co/gdm0RC0/download-5.png" alt="" />
                  <h1 className="font-bold my-4 text-2xl">Address</h1>
                  <p className="text-gray-600">Banani,Dhaka,Bnagladesh</p>
                </div>
                <div className="text-center">
                   <img className="w-24 mx-auto h-24 rounded-full hover:border-y-purple-700 border-4" src="https://i.ibb.co/qdw7X3r/download-6.png" alt="" />
                  <h1 className="font-bold my-4 text-2xl">Opening Hours</h1>
                  <p className="text-gray-600">Monday-Friday: 8:00AM – 9:00PM</p> <br />
                  <p className="text-gray-600">Saturday: 9:00 AM – 6:00 PM</p> <br />
                  <p className="text-gray-600">Sunday: Close</p> <br />

                </div>
                <div className="text-center">
                   <img className="w-24 mx-auto h-24 rounded-full hover:border-x-purple-700 border-4" src="https://i.ibb.co/tYqnrFn/images-2.png" alt="" />
                  <h1 className="font-bold my-4 text-2xl">Phone / Cell</h1>
                  <p className="text-green-600 ">1 34554 / 1 74545</p>
                </div>
                <div className="text-center">
                   <img className="w-24 mx-auto h-24 rounded-full hover:border-y-purple-700 border-4" src="https://i.ibb.co/3rTBC4v/images-3.png" alt="" />
                  <h1 className="font-bold my-4 text-2xl">Email</h1>
                  <p className="text-green-600">support@gmail.com</p>
                </div>
            </div>
            
        </div>
    );
};

export default Contacts;