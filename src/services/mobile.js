import service from "./config.services";

const getAllMobile = ()=>{
    return service.get("/phones")
}

const getOneMobileId = (id)=>{
    return service.get(`/phones/${id}`)
}

export {
    getAllMobile,
    getOneMobileId
}