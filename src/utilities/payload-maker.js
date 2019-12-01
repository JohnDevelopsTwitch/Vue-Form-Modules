export default function payloadMaker(fields = {}, key = 'inputValue') {
    let payload = {}
    Object.keys(fields).forEach((name) => {
        const value = fields[name][key]
        payload[name] = value
    })
    return payload
}