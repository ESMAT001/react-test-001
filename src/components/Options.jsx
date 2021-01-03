import React from 'react';

const Options = (props) => {
    return (
        <ol className="p-0 my-3">
            {
                props.options.map((value) => {
                    return <li
                        className="shadow rounded bg-info text-white w-100 mb-3 p-1 pl-3 align-items-center d-flex justify-content-between"
                        key={value}>{value} <button className="btn text-white" onClick={(e)=>{
                            props.deleteOption(value);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className=" bi-x"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </li>
                })
            }
        </ol>
    )
}

export default Options;