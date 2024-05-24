import { Fragment, useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import myContext from '../../Context/data/MyContext.jsx';

const SearchDialog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;
    return (
        <Fragment>
            {/* Search Icon  */}
            <div id="search" className="icon" onClick={handleOpen}>
                <svg
                  id="search-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
                </svg>
            </div>
            {/* Dialog  */}
            <Dialog className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen} style={{ background: mode === 'light' ? '#2f35429a' : '#2f35429a', color: mode === 'dark' ? 'white' : 'black' }}>
                {/* Dialog Body  */}
                <DialogBody >
                    <div className="flex w-full   justify-center">
                        {/* Input  */}
                        <Input
                            color="white"
                            type="search"
                            label="Type here..."
                            className=" bg-[#2C3A47]"
                            name="searchkey"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                    </div>

                    {/* Blog Card  */}
                    <div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2">
                        <div className="p-2 sm:w-1/4 w-full " >
                            <div className=" container mx-auto px-4 bg-gray-200 p-2 rounded-lg" style={{background: mode === 'light' ? '#f0f8ff9a': '#2f3542a9'}}>
                                {/* Blog Thumbnail  */}
                                <img className="w-20 mb-2 rounded-lg" src={'https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76'} alt="" />

                                {/* Blog Date  */}
                                <p className="w-40 text-sm">{'date'}</p>
                                
                                {/* Blog Title  */}
                                <h1>{'title'}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Heading  */}
                    <div className=" text-center">
                        <h1 className=" text-gray-600">Powered By nvmPratyush</h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}

export default SearchDialog