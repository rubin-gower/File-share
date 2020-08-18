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
