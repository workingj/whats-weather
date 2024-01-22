export function getTime_HM_FromTimestamp(ts) {
    const date = new Date(ts * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    return hours + ":" + minutes.substr(-2);
}

export function getTime_HMS_FromTimestamp(ts) {
    const date = new Date(ts * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
}