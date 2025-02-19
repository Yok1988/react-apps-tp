import axios from "axios";
// ตรวจสอบหน้า Postman
export async function getSalesService(){
 return await axios.get('http://192.168.3.7:4000/sales-erp');
}
//Detail
export async function getSalesDetailService(id :number){ 
    return await axios.get('http://192.168.3.7:4000/sales-erp/' + id.toString());
}