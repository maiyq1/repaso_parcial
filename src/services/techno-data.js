import axios from "axios";

export class TechnoApiService {
    getAllRecords() {
        return axios.get("http://localhost:3000/health-checks");
    }
}