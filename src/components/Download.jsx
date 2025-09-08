import React from 'react'

const Download = (props) => {
  const redirect = () => {
  if (props.enhanced) {
    window.open(props.enhanced, "_blank"); // open in new tab
  } else {
    alert("Wait till loding or retry again");
  }
};

  return (
    <div>
        {props.uploaded ?
            <button type="button" onClick={redirect} className="text-white bg-gray-700 hover:bg-gray-800 p-3 rounded-lg mt-8 shadow-lg">
                {props.tag}
            </button> :
            null
        }
    </div>
  )
}


export default Download
