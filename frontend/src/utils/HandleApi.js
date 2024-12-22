import axios from 'axios'

const baseUrl= "http://localhost:5000"

const getAllNames= (setName)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data--->',data);
        setName(data)
    })
}

const addName = (text,setText,setName)=>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log('data--->',data);
        setText("")
        getAllNames(setName)
    })
    .catch((err)=>console.log(err))
}

const updateName = (NameId,text,setName,setText,setIsUpdating)=>{
    axios
    .post(`${baseUrl}/update`,{_id:NameId,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllNames(setName)
    })
    .catch((err)=>console.log(err))
}

const deleteName = (_id,setName)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        getAllNames(setName)
    })
    .catch((err)=>console.log(err))
}

export {getAllNames,addName,updateName,deleteName}