import service from "./config.services";

const phoneListService = () => {
    return service.get("/phones")
}

const phoneDetailsService = (id) => {
    return service.get(`/phones/${id}`)
}

export{
    phoneListService,
    phoneDetailsService
}