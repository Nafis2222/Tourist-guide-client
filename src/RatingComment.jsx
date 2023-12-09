
const RatingComment = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const rating = form.get('rating')
        const comment = form.get('comment')
        console.log(rating,comment)
    }
    return (
        <div>
            <div className="bg-orange-400 p-8">
                <h1 className="text-3xl  mb-3 font-bold">Give Rating and Comment</h1>
                <form onSubmit={handleSubmit} action="">
                <div className="md:flex gap-3">
        <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-semibold">Give Rating Out of 10</span>
            </label>
            <label className="input-group">
              <input type="number" placeholder="Type your Rating" name="rating" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-semibold">Give your Comment</span>
            </label>
            <label className="input-group">
              <input type="text" name="comment" placeholder="Type your comment" className="input input-bordered w-full" />
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
    );
};

export default RatingComment;