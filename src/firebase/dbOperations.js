import { projectFirestore, timeStamp } from './firebaseConfig'

const addHospital = (data) => {
    console.log(data)
    const collectionRef = projectFirestore.collection("hospitalData");
    var newData = {
        ...data,
        vacOxygenBed: 0,
        vacWithoutOxygenBed: 0,
        vacIcubeds: 0,
        vacIcuVentilatorBeds: 0,
        updatedAt: timeStamp()
    }
    collectionRef.add(newData).then((ack) => {
        console.log("data added", ack);
    }).catch((e) => {
        console.log("error while adding data", e);
    })
}

// const getAllHospitals = () => {

//     return new Promise((resolve, reject) => {
//         const collectionRef = projectFirestore.collection("hospitalData");
//         collectionRef.onSnapshot((snapshot) => {
//             if (snapshot.docs.length > 0) {
//                 var data = snapshot.docs.map((doc) => (
//                     {
//                         id: doc.id,
//                         data: doc.data()
//                     }
//                 ))
//                 // console.log("data in ", data);
//                 resolve(data);

//             }
//             else
//                 reject("no data found")

//         })
//     })
// }


const updateById = (id, data) => {
    return new Promise((resolve, reject) => {
        const collectionRef = projectFirestore.collection("hospitalData");
        collectionRef.doc(id).update(data).then(
            resolve("updated")
        ).catch((e) => reject("failed to update"))
    })
}

const deleteHospitalById = (id) => {
    return new Promise((resolve, reject) => {
        console.log("id in delete", id);
        const collectionRef = projectFirestore.collection("hospitalData");
        collectionRef.doc(id).delete().then(() => {
            console.log("deleted the hospital");
            resolve("deleted")
        }).catch((e) => reject("failed to delete"))
    })
}

export { addHospital, updateById, deleteHospitalById }