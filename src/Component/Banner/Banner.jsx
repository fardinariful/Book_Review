const Banner = () => {
    return (
        <div className="h-[80vh]  mt-5 bg-slate-200 rounded-xl">
            <div className="flex flex-row justify-between items-center text-center p-8 ">
            <div className=" w-1/2 space-y-8">
                <p className="text-3xl font-semibold">Explore Stories, Share Insights, and Build Your Connection with the World of Books</p>
                <button className="btn btn-primary font-bold text-xl text-white">View of list</button>
            </div>

            <div className="w-1/3">
                <img className="w-96" src="/public/image/pngwing 1.png" alt="" />
            </div>
            </div>
            
            
        </div>
    );
};

export default Banner;