import { useContext } from "react";
import Bonus from "./Bonus";
import DashBoard from "./DashBoard";
import { AuthContext } from "./AuthProvider";
const AdminProfile = () => {
    const {userFinal} = useContext(AuthContext)
    console.log(userFinal?.photoURL)
    const handleSbmit = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const story = form.get('story')
        console.log(story)
    }
    return (
        <div>
            <DashBoard></DashBoard>
            <div className="card mx-auto w-96 glass">
                {
                    userFinal?.photoURL==null ?
                    <>
                      <figure> <img className='w-12 h-12 mr-1 rounded-full' src="https://i.ibb.co/j3x2YgT/download-7.png" alt="https://i.ibb.co/j3x2YgT/download-7.png" /></figure>

                    </>
                    :
                    <>
                      <figure> <img className='w-12 h-12 mr-1 rounded-full' src={userFinal?.photoURL} alt="https://i.ibb.co/j3x2YgT/download-7.png" /></figure>

                    </>
                }
  <div className="card-body">
    <h2 className="card-title">{userFinal?.email}</h2>
    <p>{userFinal?.displayName}</p>
    <form onSubmit={handleSbmit} action="">
    <div className="md:flex gap-3 ">
            <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-semibold">Add a story</span>
            </label>
            <label className="input-group">
              <input type="text" name="story" placeholder="Type your comment" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
            <button className="w-full btn btn-accent mt-8">Submit</button>
            </div>
         
        </div>
    </form>
  </div>
</div>
            
        </div>
    );
};

export default AdminProfile;