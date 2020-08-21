import request from "superagent"

export function saveFile(file) {
    // console.log('from addHostApi')
    // console.log(host)
    return request
        .put("api/files")
        .send(file)
        .then(res => {
            return res.body
        })
}



export function saveFileV2(file) {
    // console.log('from addHostApi')
    // console.log(host)
    axios.post("api/files", data, { // receive two parameter endpoint url ,form data 
    })
        .then(res => { // then print response status
            console.log(res.statusText)
        })
}