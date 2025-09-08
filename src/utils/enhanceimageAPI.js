import axios from "axios";

const API_KEY= import.meta.env.VITE_APP__KEY;
const BASE_URL= import.meta.env.VITE_BASE__URL;


export const enhancedImageAPI = async (file) => {
    
    try{
        const taskId = await uploadImage(file);
        console.log("image uploaoded successfully, task Id:",taskId);

        
        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log("enhanced image data:",enhancedImageData)

        console.log(enhancedImageData)
        return enhancedImageData;

    }catch(error){
        console.log("error in enhancing image:", error.message)
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file",file);
    
    const {data} = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale` ,
        formData, 
        {
            headers: {
                "X-API-KEY": API_KEY ,
                "Content-Type": 'multipart/form-data',
            },
        }
    );
    
    if(!data?.data?.task_id){
        throw new Error("fail to upload image! Task id not found")
    }
    return data.data.task_id;
};
const fetchEnhancedImage = async (taskId) => {
    const {data} = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}` ,
        {
            headers: {
                "X-API-KEY": API_KEY ,
                "Content-Type": 'multipart/form-data',
            },
        }
    );
    if(!data?.data){
        throw new Error("fail to upload image! Task id not found")
    }
    return data.data;
    // "/api/tasks/visual/scale/{task_id}"
};
const PollForEnhancedImage = async (taskId, retries=0) => {
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4){
        console.log("processing");

        if(retries >=20){
            throw new Error("max retries reached. please try agaain later");
        }

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return PollForEnhancedImage(taskId, retries+1)
    }
    console.log(result)
    return result;
}


