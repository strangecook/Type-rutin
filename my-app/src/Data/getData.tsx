import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../firebase";

// export function getData(DataBaseName:string, updateDate: React.Dispatch<React.SetStateAction<never[]>>){
//     const q = query(
//         collection(dbService, `${DataBaseName}`),
//         orderBy("createdAt", "desc")
//         );
//         onSnapshot(q, (snapshot) => {
//         const nweetArr = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         }));
//         updateDate(nweetArr);
//         });
// }