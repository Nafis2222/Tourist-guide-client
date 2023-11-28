
const Banner = () => {
    return (
        <div>
            <div className="carousel  bg-fixed  w-full h-96">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/mcScmfJ/images-2.jpg" className="w-full" />
    <div className="absolute opacity-70 top-1/4 right-1/4">
        <h3 className=" md:text-6xl text-black  font-bold">Spirit Of Exploration  !!</h3>
        <p className="text-2xl mt-5 text-emerald-700 font-medium">Find Adventure That Suits <br /> <span className="text-white">Your Needs</span></p>
        <button className="btn  my-4 opacity-100  btn-primary items-center">Get Roam</button>

    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/YcfKYkb/Banner2.jpg " className="w-full" />
 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hWyDq8D/images-3.jpg" className="w-full" />
    <div className="absolute opacity-70 top-1/4 right-1/4">
        <h3 className=" md:text-6xl text-black  font-bold">The Mountaintops  !!</h3>
        <p className="text-2xl mt-5 text-emerald-700 font-medium">Find Adventure That Suits <br /> <span className="text-pink-800">Your Needs</span></p>
        <button className="btn  my-4 opacity-100  btn-primary items-center">Get Roam</button>

    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/FBJyzWF/b4.jpg" className="w-full" />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default Banner;