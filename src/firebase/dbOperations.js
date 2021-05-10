import { projectFirestore, timeStamp } from './firebaseConfig'

const addHospital = (data) => {
    console.log(data)
    const collectionRef = projectFirestore.collection("hospitalData");
    var newData = {
        ...data,
        vacOxygenBed:0,
        vacWithoutOxygenBed:0,
        vacIcubeds:0,
        vacIcuVentilatorBeds:0,
        updatedAt: timeStamp()
    }
    collectionRef.add(newData).then((ack) => {
        console.log("data added", ack);
    }).catch((e) => {
        console.log("error while adding data", e);
    })
}




export { addHospital }